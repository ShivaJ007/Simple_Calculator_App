import { Card } from "@/components/ui/card";

interface CalculatorDisplayProps {
  expression: string;
  result: string;
  error: boolean;
}

export function CalculatorDisplay({ expression, result, error }: CalculatorDisplayProps) {
  return (
    <Card className="p-6 mb-4">
      <div className="min-h-32 flex flex-col justify-end">
        <div 
          className="text-2xl font-medium text-muted-foreground text-left mb-2 overflow-x-auto whitespace-nowrap"
          data-testid="text-expression"
        >
          {expression || "0"}
        </div>
        <div 
          className={`text-4xl md:text-5xl font-semibold text-right font-mono transition-all duration-200 ${
            error ? "text-destructive animate-shake" : ""
          }`}
          data-testid="text-result"
        >
          {result || "0"}
        </div>
      </div>
    </Card>
  );
}
