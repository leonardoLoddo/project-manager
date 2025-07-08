import { useState, useRef, useEffect, useReducer, createContext } from "react";

export const ProjectContext = createContext({
  projects: {},
  addTask: () => {},
  deleteTask: () => {},
  selectProject: () => {},
  startAddProject: () => {},
  cancelAddProject: () => {},
  addProject: () => {},
  deleteProject: () => {},
});

function projectsReducer(state, action) {
  if (action.type === "ADD_TASK") {
    const taskId = action.payload.id;
    const newTask = {
      text: action.payload.text,
      projectId: state.selectedProjectId,
      id: taskId,
    };
    return {
      ...state,
      tasks: [newTask, ...state.tasks],
    };
  }

  if (action.type === "DELETE_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  if (action.type === "SELECT_PROJECT") {
    return {
      ...state,
      selectedProjectId: action.payload.id,
    };
  }

  if (action.type === "START_ADD_PROJECT") {
    return {
      ...state,
      selectedProjectId: null,
    };
  }

  if (action.type === "CANCEL_ADD_PROJECT") {
    return {
      ...state,
      selectedProjectId: undefined,
    };
  }

  if (action.type === "ADD_PROJECT") {
    const projectId = action.payload.id; //assegno l'id basandomi su projectIdCurrent e lo incremento
    const newProject = {
      ...action.payload.projectData,
      id: projectId,
    };

    return {
      ...state,
      selectedProjectId: projectId,
      projects: [...state.projects, newProject],
    };
  }

  if (action.type === "DELETE_PROJECT") {
    return {
      ...state,
      selectedProjectId: undefined,
      projects: state.projects.filter(
        (project) => project.id !== state.selectedProjectId //elimino l'elemento che ha come id quello selezionato al momento
      ),
    };
  }

  return state;
}

export default function ProjectsContextProvider({ children }) {
  const storedProjects = JSON.parse(localStorage.getItem("userProjects"));
  const [projectsState, projectsDispatch] = useReducer(
    projectsReducer,
    storedProjects || {
      selectedProjectId: undefined, //undefined: nessun progetto selezionato - null: creazione progetto - {idprogetto}: mostra progetto
      projects: [],
      tasks: [],
    }
  );

  //contatori per generare id univoci
  const projectIdCounter = useRef(0);
  const taskIdCounter = useRef(0);

  // dopo aver caricato dal localStorage
  useEffect(() => {
    if (storedProjects) {
      const maxProjectId = Math.max(
        0,
        ...storedProjects.projects.map((p) => p.id)
      );
      const maxTaskId = Math.max(0, ...storedProjects.tasks.map((t) => t.id));
      projectIdCounter.current = maxProjectId + 1;
      taskIdCounter.current = maxTaskId + 1;
    }
  }, []);
  // salva sempre nel localStorage quando cambia projectsState
  useEffect(() => {
    localStorage.setItem("userProjects", JSON.stringify(projectsState));
  }, [projectsState]);

  function handleAddTask(text) {
    const id = taskIdCounter.current++;
    projectsDispatch({
      type: "ADD_TASK",
      payload: { text, id },
    });
  }
  function handleDeleteTask(id) {
    projectsDispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
  }
  function handleSelectProject(id) {
    projectsDispatch({
      type: "SELECT_PROJECT",
      payload: { id },
    });
  }
  function handleStartAddProject() {
    projectsDispatch({
      type: "START_ADD_PROJECT",
      payload: {},
    });
  }
  function handleCancelAddProject() {
    projectsDispatch({
      type: "CANCEL_ADD_PROJECT",
      payload: {},
    });
  }
  function handleAddProject(projectData) {
    const id = projectIdCounter.current++;
    projectsDispatch({
      type: "ADD_PROJECT",
      payload: { projectData, id },
    });
  }
  function handleDeleteProject() {
    projectsDispatch({
      type: "DELETE_PROJECT",
      payload: {},
    });
  }

  const ctxValue = {
    projects: projectsState,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
    selectProject: handleSelectProject,
    startAddProject: handleStartAddProject,
    cancelAddProject: handleCancelAddProject,
    addProject: handleAddProject,
    deleteProject: handleDeleteProject,
  };

  return <ProjectContext value={ctxValue}>{children}</ProjectContext>;
}
