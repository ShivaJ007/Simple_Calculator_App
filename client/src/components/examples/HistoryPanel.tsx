import { HistoryPanel, type HistoryEntry } from "../HistoryPanel";

export default function HistoryPanelExample() {
  const mockHistory: HistoryEntry[] = [
    {
      id: "1",
      expression: "12 + 34",
      result: "46",
      timestamp: new Date(),
    },
    {
      id: "2",
      expression: "100 ÷ 5",
      result: "20",
      timestamp: new Date(Date.now() - 60000),
    },
    {
      id: "3",
      expression: "7 × 8",
      result: "56",
      timestamp: new Date(Date.now() - 120000),
    },
  ];

  return (
    <div className="p-4 max-w-sm">
      <HistoryPanel
        history={mockHistory}
        onClearHistory={() => console.log("Clear history")}
        onSelectEntry={(entry) => console.log("Selected:", entry)}
      />
    </div>
  );
}
