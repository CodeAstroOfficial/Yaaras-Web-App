
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Clients from "./pages/Clients";
import Documents from "./pages/Documents";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Clients />} />
          <Route path="/documents" element={<Documents />} >
          </Route>
        </Route>
      </Routes>
    </main>
  );
}


{/* <Route path="/documents" element={<div>Documents
  <Outlet />
</div>} >
  <Route path=":documentId" element={<Document />} />
</Route>
*/}

export default App;
