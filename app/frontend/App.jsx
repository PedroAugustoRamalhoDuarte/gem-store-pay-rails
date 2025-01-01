import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Checkout } from "./pages/Gems/Checkout";
import { GemDetail } from "./pages/Gems/Show.jsx";
import { GemList } from "./pages/Gems/Index.jsx";

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
