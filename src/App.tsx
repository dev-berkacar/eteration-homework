import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { ProductDetailScreen } from "./pages/product-detail-screen";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadCartFromLocalStorage } from "./containers/slice";

function App() {
  const dispatch = useDispatch();

  // Dispatch loadCartFromLocalStorage action on component mount
  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);

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
