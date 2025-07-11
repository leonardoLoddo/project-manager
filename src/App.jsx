import ProjectsContextProvider from "./store/projects-context";
import MainLayout from "./components/MainLayout";

export default function App() {
  return (
    <ProjectsContextProvider>
      <MainLayout />
    </ProjectsContextProvider>
  );
}
