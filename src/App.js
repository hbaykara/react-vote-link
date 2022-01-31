import Header from 'layouts/Header';
import LinkList from 'pages/LinkList';
import AddLink from 'pages/AddLink';
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="container">
      <Toaster/>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LinkList />} />
            <Route path="/addlink" element={<AddLink />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
