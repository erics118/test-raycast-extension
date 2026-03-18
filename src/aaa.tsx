import { Action, ActionPanel, List } from "@raycast/api";
import { useState } from "react";

export default function Command() {
  const [showDetail, setShowDetail] = useState(true);
  return (
    <List
      navigationTitle="a"
      isShowingDetail={showDetail}
      actions={
        <ActionPanel>
          <Action
            title="Toggle Show Detail"
            onAction={() => {
              setShowDetail(!showDetail);
            }}
          />
        </ActionPanel>
      }
    >
      {Array.from({ length: 20 }, (_, i) => 5 * (i + 1)).map((num) => (
        <List.Item key={num} title={String(num)} subtitle={"a".repeat(num)} />
      ))}
    </List>
  );
}
