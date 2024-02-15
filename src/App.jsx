import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonMessage from "./components/ButtonMessage";
import ProposalMessage from "./components/ProposalMessage";

export default function App() {
  return (
    <Routes>
      <Route index element={<ProposalMessage />} />
      <Route path="/button" element={<ButtonMessage />} />
    </Routes>
  );
}
