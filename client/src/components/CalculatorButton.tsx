import { Button } from "@/components/ui/button";

interface CalculatorButtonProps {
  value: string;
  onClick: (value: string) => void;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
  span?: number;
}

export function CalculatorButton({
  value,
  onClick,
  variant = "secondary",
  className = "",
  span = 1,
}: CalculatorButtonProps) {
  const colSpan = span === 2 ? "col-span-2" : "";
  
  return (
    <Button
      variant={variant}
      onClick={() => onClick(value)}
      className={`min-h-16 text-lg font-medium rounded-2xl transition-all duration-100 active:scale-95 ${colSpan} ${className}`}
      data-testid={`button-${value.toLowerCase().replace(/\s/g, '-')}`}
    >
      {value}
    </Button>
  );
}
