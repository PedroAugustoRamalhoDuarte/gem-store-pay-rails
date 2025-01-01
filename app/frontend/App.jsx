import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Checkout } from "./pages/Checkout";
import { GemDetail } from "./pages/GemDetail.jsx";
import { GemList } from "./pages/GemList.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GemList />} />
        <Route path="/gems/:id" element={<GemDetail />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
