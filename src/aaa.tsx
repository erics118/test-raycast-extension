import { Action, ActionPanel, List } from "@raycast/api";
import { useState } from "react";

export default function Command() {
  const [showDetail, setShowDetail] = useState(true);
  return (
    <List navigationTitle="a" isShowingDetail={showDetail}>
      {[
        ["5-----------------------------", "aaaaa"],
        ["10----------------------------", "aaaaaaaaaa"],
        ["15----------------------------", "aaaaaaaaaaaaaaa"],
        ["20----------------------------", "aaaaaaaaaaaaaaaaaaaa"],
        ["25----------------------------", "aaaaaaaaaaaaaaaaaaaaaaaaa"],
        ["30----------------------------", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
        ["35----------------------------", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
        ["80----------------------------", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
      ].map(([title, subtitle]) => (
        <List.Item
          key={title}
          title={title}
          subtitle={subtitle}
          actions={
            <ActionPanel>
              <Action
                title="Toggle Show Detail"
                onAction={() => setShowDetail(!showDetail)}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
