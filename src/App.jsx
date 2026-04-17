import { useState } from "react";

function App() {
  const [broken, setBroken] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [selectedGift, setSelectedGift] = useState("");

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center gap-8 p-6">

      <p className="text-white text-4xl font-bold">
        Devendra Bhosale
      </p>

      {/* Heart */}
      <div
        onClick={() => setBroken(true)}
        className="flex items-center justify-center cursor-pointer select-none"
      >
        {!broken ? (
          <div className="text-9xl animate-bounce">❤️</div>
        ) : (
          <div className="flex items-center gap-6">
            <span className="text-8xl -rotate-12">❤️</span>

            <p className="text-white text-2xl font-bold animate-pulse">
              Happy Birthday Devu
            </p>

            <span className="text-8xl rotate-12">❤️</span>
          </div>
        )}
      </div>

      {/* Gift Button */}
      {broken && !showGift && (
        <button
          onClick={() => setShowGift(true)}
          className="bg-blue-300 px-5 py-2 rounded text-xl shadow"
        >
          Your Gift 🎁
        </button>
      )}

      {/* Show 2 Gifts */}
      {showGift && selectedGift === "" && (
        <div className="text-center">
          <p className="text-white text-2xl mb-4">Choose One Gift 🎁</p>

          <div className="flex gap-6 flex-wrap justify-center">
            <img
              src="https://m.media-amazon.com/images/I/81vLYHVwqjL.jpg"
              alt="gift1"
              onClick={() => setSelectedGift("gift1")}
              className="w-40 h-40 object-cover rounded-xl cursor-pointer hover:scale-105 duration-300"
            />

            <img
              src="https://i.pinimg.com/originals/d7/9a/54/d79a548cb2754d9d6fbe9332013e3ae5.jpg"
              alt="gift2"
              onClick={() => setSelectedGift("gift2")}
              className="w-40 h-40 object-cover rounded-xl cursor-pointer hover:scale-105 duration-300"
            />
          </div>
        </div>
      )}

      {/* Gift 1 Result */}
      {selectedGift === "gift1" && (
        <div className="text-center">
          <img
            src="https://m.media-amazon.com/images/I/81vLYHVwqjL.jpg"
            className="w-72 rounded-2xl mx-auto"
          />
          <p className="text-red-400 text-2xl mt-4 font-bold">
            I am jobless 😅 I can't give you this gift
          </p>
        </div>
      )}

      {/* Gift 2 Result */}
      {selectedGift === "gift2" && (
        <div className="text-center">
          <img
            src="https://i.pinimg.com/originals/d7/9a/54/d79a548cb2754d9d6fbe9332013e3ae5.jpg"
            className="w-72 rounded-2xl mx-auto"
          />
          <p className="text-yellow-400 text-2xl mt-4 font-bold">
            Not in my budget 😅
          </p>
        </div>
      )}

    </div>
  );
}

export default App;