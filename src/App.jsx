import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined
      };
    });
  }

  let content;
  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  }
  else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar projects={projectsState.projects} onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
