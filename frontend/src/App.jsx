import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import About from "./pages/About";
// import Experience from "./pages/Experience";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";

import Home from "./pages/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);

function App() {
  const dispatch = useDispatch();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    });
  }

  return (
    <div>
      <JobDetailsProvider>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <RouterProvider router={appRouter} />
        </Worker>
      </JobDetailsProvider>
    </div>
  );
}

export default App;