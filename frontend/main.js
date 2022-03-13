import Dashboard from './js/dashboard';
import Camera from './js/camera';

const App = function _App() {
  return `
    <nav class="bg-gray-two flex w-full justify-between items-center py-3 px-20" role="navigation">
      <div class="flex flex-row items-center">
        <p class="font-semibold text-md ml-3 text-white">
          RigShowAR
        </p>
      </div>
      <div class="flex flex-row">
        <i 
          id="dashboard-icon"
          class="fa-solid fa-house-chimney text-xl px-6" 
          style="color: ${_App.state.activeTab === 0 ? "#FC7636" : "#FFFFFF"}; cursor:pointer;"
        ></i>
        <i 
          id="camera-icon"
          class="fa-solid fa-camera text-xl px-6"
          style="color: ${_App.state.activeTab === 1 ? "#FC7636" : "#FFFFFF"}; cursor:pointer;"
        ></i>
      </div>
    </nav>
  `;
};

App.state = {
  activeTab: 0,
  changeToDashboard: () => {
    App.state.activeTab = 0;
    navigate();
  },
  changeToCamera: () => {
    App.state.activeTab = 1;
    navigate();
  },
}

const navigate = () => {
  document.getElementById("app").innerHTML = App();
  const dashboardIcon = document.getElementById("dashboard-icon");
  const cameraIcon = document.getElementById("camera-icon");
  dashboardIcon.addEventListener("click", App.state.changeToDashboard);
  cameraIcon.addEventListener("click", App.state.changeToCamera);

  if (App.state.activeTab === 0) {
    document.getElementById("page-content").innerHTML = Dashboard();
  } else if (App.state.activeTab === 1) {
    document.getElementById("page-content").innerHTML = Camera();
  };
};

navigate();