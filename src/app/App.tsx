import { Weather } from "@/pages/weather";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "@/pages/news";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Weather />} />
              <Route path={'/weather'} element={<Weather />} />
              <Route path={'/news'} element={<News />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
