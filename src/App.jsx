import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="flex gap-8 my-8 h-screen">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
