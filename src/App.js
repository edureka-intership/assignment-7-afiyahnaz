import Mainhomepage from "./components/home/Mainhomepage";
import { Routes, Route } from "react-router-dom";
import RestaurantPage from "./components/restaurant/RestaurantPage";

function App() {
  return (
    <>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Mainhomepage />} />
          <Route path="/restaurantPage" element={<RestaurantPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
