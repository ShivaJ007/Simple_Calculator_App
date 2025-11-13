import { CalculatorGrid } from "../CalculatorGrid";

export default function CalculatorGridExample() {
  return (
    <div className="p-4 max-w-md">
      <CalculatorGrid onButtonClick={(value) => console.log("Button clicked:", value)} />
    </div>
  );
}
