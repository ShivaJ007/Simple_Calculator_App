import { useState, useEffect, useCallback } from "react";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { CalculatorGrid } from "./CalculatorGrid";
import { HistoryPanel, type HistoryEntry } from "./HistoryPanel";

export function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [error, setError] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const autoCorrectExpression = (expr: string): string => {
    return expr.replace(/([+\-×÷]){2,}/g, (match) => match.slice(-1));
  };

  const calculateResult = useCallback((expr: string): string => {
    if (!expr) return "0";
    
    try {
      const sanitized = expr
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-");
      
      const result = Function(`"use strict"; return (${sanitized})`)();
      
      if (!isFinite(result)) {
        throw new Error("Division by zero");
      }
      
      return Number.isInteger(result) ? result.toString() : result.toFixed(8).replace(/\.?0+$/, "");
    } catch {
      return "Error";
    }
  }, []);

  const addToHistory = useCallback((expr: string, res: string) => {
    const entry: HistoryEntry = {
      id: Date.now().toString(),
      expression: expr,
      result: res,
      timestamp: new Date(),
    };
    
    setHistory((prev) => [entry, ...prev].slice(0, 10));
  }, []);

  const handleButtonClick = useCallback((value: string) => {
    setError(false);

    if (value === "AC") {
      setExpression("");
      setResult("0");
    } else if (value === "C") {
      setExpression("");
      setResult("0");
    } else if (value === "DEL") {
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      const correctedExpr = autoCorrectExpression(expression);
      const calcResult = calculateResult(correctedExpr);
      
      if (calcResult === "Error") {
        setError(true);
        setResult(calcResult);
        setTimeout(() => setError(false), 2000);
      } else {
        setResult(calcResult);
        addToHistory(correctedExpr, calcResult);
        setExpression("");
      }
    } else {
      setExpression((prev) => {
        const newExpr = prev + value;
        return autoCorrectExpression(newExpr);
      });
    }
  }, [expression, calculateResult, addToHistory]);

  useEffect(() => {
    if (expression) {
      const corrected = autoCorrectExpression(expression);
      const liveResult = calculateResult(corrected);
      setResult(liveResult);
    } else {
      setResult("0");
    }
  }, [expression, calculateResult]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();
      
      const keyMap: Record<string, string> = {
        "0": "0", "1": "1", "2": "2", "3": "3", "4": "4",
        "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
        "+": "+", "-": "−", "*": "×", "/": "÷",
        ".": ".", ",": ".",
        "Enter": "=", "=": "=",
        "Backspace": "DEL",
        "Delete": "DEL",
        "Escape": "AC",
        "c": "C",
        "C": "C",
      };

      const value = keyMap[e.key];
      if (value) {
        handleButtonClick(value);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleButtonClick]);

  const handleClearHistory = () => {
    setHistory([]);
  };

  const handleSelectEntry = (entry: HistoryEntry) => {
    setExpression(entry.expression);
    setResult(entry.result);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
      <div>
        <CalculatorDisplay expression={expression} result={result} error={error} />
        <CalculatorGrid onButtonClick={handleButtonClick} />
      </div>
      
      <div className="lg:order-last">
        <HistoryPanel
          history={history}
          onClearHistory={handleClearHistory}
          onSelectEntry={handleSelectEntry}
        />
      </div>
    </div>
  );
}
