import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="wrap">
      <div className="buttons">
        <button type="button" onClick={() => setIsVisible(true)}>
          Show
        </button>
        <button type="button" onClick={() => setIsVisible(false)}>
          Hide
        </button>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            d=(´▽｀)=b
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isVisible && (
          <>
            <div
            >
              Hello
            </div>
            <h1>asdf</h1>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
