import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function DonationModal() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const currencies = [
    { code: "USD", symbol: "$", color: "bg-blue-500" },
    { code: "EUR", symbol: "€", color: "bg-yellow-500" },
    { code: "GBP", symbol: "£", color: "bg-purple-500" },
    { code: "NGN", symbol: "₦", color: "bg-green-500" },
  ];

  const getCurrencySymbol = (code: string) =>
    currencies.find((c) => c.code === code)?.symbol ?? "$";

  const amounts =
    selectedCurrency === "NGN"
      ? [10000, 20000, 50000, 100000, 200000, 500000]
      : [10, 20, 50, 100, 200, 500];

  return (
    <>
      {/* Mobile trigger button */}
      <div className="block md:hidden text-center mt-8">
        <button
          onClick={() => setShowModal(true)}
          className="font-secondary font-semibold bg-white text-[#101213] px-8 py-3 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_15px_#ff4d4d]"
        >
          Donate Now
        </button>
      </div>

      {/* Modal — always visible on md+, modal on mobile */}
      <div
        className={`${
          showModal ? "flex" : "hidden md:flex"
        } fixed inset-0 md:static items-center justify-center bg-black/50 md:bg-transparent z-100`}
      >
        <AnimatePresence>
          {(showModal || window.innerWidth >= 768) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl w-96 p-6 relative"
            >
              {/* Mobile close */}
              {showModal && (
                <button
                  onClick={() => setShowModal(false)}
                  aria-label="Close donation modal"
                  className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
                >
                  <X size={20} />
                </button>
              )}

              <h3 className="text-lg text-black font-semibold text-center">
                Select Amount To Donate
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4">A little love goes a long way.</p>

              {/* Give once / monthly tabs */}
              <div className="flex bg-gray-100 rounded-lg p-1 mb-5">
                {(["once", "monthly"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 rounded-md text-sm font-medium capitalize transition-all ${
                      activeTab === tab ? "bg-white shadow text-black" : "text-gray-500"
                    }`}
                  >
                    Give {tab === "once" ? "Once" : "Monthly"}
                  </button>
                ))}
              </div>

              {/* Amount grid */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-2 rounded-lg border text-sm font-medium transition-all ${
                      selectedAmount === amount
                        ? "border-black bg-black text-white"
                        : "border-gray-300 text-gray-700 hover:border-black"
                    }`}
                  >
                    {getCurrencySymbol(selectedCurrency)}
                    {amount.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Currency selector */}
              <div className="flex items-center justify-between mb-4 border rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-black font-semibold">
                    {getCurrencySymbol(selectedCurrency)}
                    {selectedAmount ? selectedAmount.toLocaleString() : "0"}
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                      className="flex items-center gap-2 border rounded-md px-3 py-1"
                    >
                      <div
                        className={`w-4 h-4 rounded-full ${
                          currencies.find((c) => c.code === selectedCurrency)?.color
                        }`}
                      />
                      <span className="text-sm text-black font-medium">{selectedCurrency}</span>
                    </button>

                    {showCurrencyDropdown && (
                      <div className="absolute mt-2 bg-white shadow-md rounded-md border w-24 right-0 z-10">
                        {currencies.map((curr) => (
                          <button
                            key={curr.code}
                            onClick={() => {
                              setSelectedCurrency(curr.code);
                              setSelectedAmount(null);
                              setShowCurrencyDropdown(false);
                            }}
                            className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 text-black text-sm"
                          >
                            <div className={`w-4 h-4 rounded-full ${curr.color}`} />
                            {curr.code}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Comment */}
              <textarea
                placeholder="Add your comment/note here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full text-gray-700 border border-gray-300 rounded-lg p-3 text-sm mb-5 resize-none h-24"
              />

              {/* Continue — links to donation platform (placeholder) */}
              <button
                disabled={!selectedAmount}
                className="w-full bg-black text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_15px_#ff4d4d] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
