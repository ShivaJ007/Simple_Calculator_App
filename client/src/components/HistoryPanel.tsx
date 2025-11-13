import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface HistoryEntry {
  id: string;
  expression: string;
  result: string;
  timestamp: Date;
}

interface HistoryPanelProps {
  history: HistoryEntry[];
  onClearHistory: () => void;
  onSelectEntry: (entry: HistoryEntry) => void;
}

export function HistoryPanel({ history, onClearHistory, onSelectEntry }: HistoryPanelProps) {
  if (history.length === 0) {
    return (
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">History</h3>
        <p className="text-sm text-muted-foreground text-center py-8">
          No calculations yet
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">History</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClearHistory}
          data-testid="button-clear-history"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="h-[400px] md:h-[500px]">
        <div className="space-y-2">
          {history.map((entry) => (
            <button
              key={entry.id}
              onClick={() => onSelectEntry(entry)}
              className="w-full p-3 rounded-lg bg-muted hover-elevate active-elevate-2 text-left transition-all"
              data-testid={`history-entry-${entry.id}`}
            >
              <div className="text-sm text-muted-foreground mb-1">
                {entry.expression}
              </div>
              <div className="text-lg font-semibold font-mono">
                = {entry.result}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {entry.timestamp.toLocaleTimeString()}
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
