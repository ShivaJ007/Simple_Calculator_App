import { CalculatorDisplay } from "../CalculatorDisplay";

export default function CalculatorDisplayExample() {
  return (
    <div className="p-4 max-w-md">
      <CalculatorDisplay
        expression="12 + 34 × 5"
        result="182"
        error={false}
      />
    </div>
  );
}
