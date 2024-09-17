import { useMemo, useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amonut, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [covertedAmount, setCovertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from); // conversion happens

  // Remove the '$' sign from the keys
  // const options = Object.keys(currencyInfo).map(key => key.replace(/^\$/, ""));
  const options = useMemo(() => Object.keys(currencyInfo), [currencyInfo])
  const swap = () => {
    setFrom(prev => to);
    setTo(prev => from);
    setCovertedAmount(amonut);
    setAmount(prev => covertedAmount);
  };

  // Conversion calculated here
  const convert = () => {
    if (!currencyInfo[to]) {
      return;
    }
    setCovertedAmount(amonut * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              {/* From InputBox */}
              <InputBox
                label="From"
                amount={amonut}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // Fix this part
                selectCurrency={from} // Keep this to reflect the "from" currency
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              {/* To InputBox */}
              <InputBox
                label="To"
                amount={covertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} // Fix this part
                selectCurrency={to} // Fix this to reflect the "to" currency
                amountDisable
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

