import { CalculatorButton } from "./CalculatorButton";

interface CalculatorGridProps {
  onButtonClick: (value: string) => void;
}

export function CalculatorGrid({ onButtonClick }: CalculatorGridProps) {
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4">
      <CalculatorButton value="AC" onClick={onButtonClick} variant="outline" />
      <CalculatorButton value="C" onClick={onButtonClick} variant="outline" />
      <CalculatorButton value="DEL" onClick={onButtonClick} variant="outline" />
      <CalculatorButton value="÷" onClick={onButtonClick} variant="default" />
      
      <CalculatorButton value="7" onClick={onButtonClick} />
      <CalculatorButton value="8" onClick={onButtonClick} />
      <CalculatorButton value="9" onClick={onButtonClick} />
      <CalculatorButton value="×" onClick={onButtonClick} variant="default" />
      
      <CalculatorButton value="4" onClick={onButtonClick} />
      <CalculatorButton value="5" onClick={onButtonClick} />
      <CalculatorButton value="6" onClick={onButtonClick} />
      <CalculatorButton value="−" onClick={onButtonClick} variant="default" />
      
      <CalculatorButton value="1" onClick={onButtonClick} />
      <CalculatorButton value="2" onClick={onButtonClick} />
      <CalculatorButton value="3" onClick={onButtonClick} />
      <CalculatorButton value="+" onClick={onButtonClick} variant="default" />
      
      <CalculatorButton value="0" onClick={onButtonClick} span={2} />
      <CalculatorButton value="." onClick={onButtonClick} />
      <CalculatorButton value="=" onClick={onButtonClick} variant="default" className="bg-primary" />
    </div>
  );
}
