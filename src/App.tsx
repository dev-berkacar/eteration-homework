import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { ProductDetailScreen } from "./pages/product-detail-screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-detail" element={<ProductDetailScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
