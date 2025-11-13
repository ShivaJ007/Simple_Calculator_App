import { Calculator } from "../Calculator";
import { ThemeProvider } from "../ThemeProvider";

export default function CalculatorExample() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <Calculator />
      </div>
    </ThemeProvider>
  );
}
