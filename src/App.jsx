
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Templates from './components/Templates';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/" element={<Home />} />
      <Route path="/templates" element={<Templates />} />
          {/* This route will catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
    </Routes>
    <>
    </>
    </BrowserRouter>
  );
}

export default App;
