import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/jarryingnut/dex-mvp" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🎈 Uniballoon DEX"
        subTitle="A single pool dex mvp to trade balloons and eth"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
