import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalInformationPage from "./Pages/PersonalInformationPage";
import JobDetailsPage from "./Pages/JobDetailsPage";
import EducationPage from "./Pages/EducationPage";
import ExperiencePage from "./Pages/ExperiencePage";

function App() {
  return (
    <div className="bg-blue-950">
      <BrowserRouter >
        <Routes>
          <Route element={<PersonalInformationPage/>} path="/"></Route>
          <Route element={<JobDetailsPage/>} path="/jdetails" ></Route>
          <Route element={<EducationPage/>} path="/education"></Route>
          <Route element={<ExperiencePage/>} path="/experience"></Route>
      </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
