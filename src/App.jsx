import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //undefined: nessun progetto selezionato - null: creazione progetto - idprogetto: mostra progetto
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  return (
    <main className="flex gap-8 my-8 h-screen">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onStartAddProject={handleStartAddProject} />
      )}
      {projectsState.selectedProjectId === null && <NewProject />}
    </main>
  );
}

export default App;
