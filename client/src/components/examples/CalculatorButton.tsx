import { CalculatorButton } from "../CalculatorButton";

export default function CalculatorButtonExample() {
  return (
    <div className="p-4 grid grid-cols-4 gap-2 max-w-md">
      <CalculatorButton value="7" onClick={() => console.log("7 clicked")} />
      <CalculatorButton value="8" onClick={() => console.log("8 clicked")} />
      <CalculatorButton value="9" onClick={() => console.log("9 clicked")} />
      <CalculatorButton value="÷" onClick={() => console.log("÷ clicked")} variant="default" />
    </div>
  );
}
