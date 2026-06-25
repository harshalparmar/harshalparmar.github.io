const CAPABILITIES = [
  { title: "Robotics", items: ["ROS 2 / micro-ROS","Motion planning & SLAM","Manipulator & mobile platforms","Sensor fusion (IMU/LiDAR)"] },
  { title: "Aviation & Avionics", items: ["UAV/UAS flight stacks","PX4 / ArduPilot","Guidance, Navigation & Control","DO-178C awareness"] },
  { title: "Embedded Systems", items: ["STM32 / ESP32 / Zephyr","RTOS & bare-metal C/C++","CAN, SPI, I2C, UART","PCB bring-up & debug"] },
  { title: "Software & Tooling", items: ["C++17, Python, Rust","Linux, Docker, CI/CD","Computer vision (OpenCV)","Simulation: Gazebo, Isaac"] },
];

const PROJECTS = [
  { title:"Autonomous Inspection UAV", summary:"Fixed-wing/VTOL hybrid platform performing autonomous infrastructure inspection with onboard perception and waypoint replanning.", stack:["PX4","ROS 2","C++","OpenCV"], metrics:[["Endurance","48 min"],["Payload","1.2 kg"],["Range","12 km"]] },
  { title:"6-DoF Manipulator Control Stack", summary:"Real-time controller for a custom 6-axis arm with torque sensing, collision-aware trajectory generation, and teleop fallback.", stack:["ROS 2","MoveIt","STM32","EtherCAT"], metrics:[["Loop rate","1 kHz"],["Repeatability","±0.05 mm"],["Axes","6"]] },
  { title:"Avionics Flight Computer", summary:"Triple-redundant flight computer with sensor voting, fault injection harness, and HIL test bench for a small UAS program.", stack:["Zephyr RTOS","C","CAN-FD","HIL"], metrics:[["MTBF",">10⁵ h"],["Sensors","9 ch"],["Cores","3×"]] },
  { title:"Visual-Inertial SLAM Pipeline", summary:"Tightly-coupled VIO pipeline for GPS-denied operation, optimized for ARM SoCs and integrated into a ground robot.", stack:["C++","Eigen","CUDA","Ceres"], metrics:[["Drift","<0.3% / m"],["FPS","60"],["Latency","12 ms"]] },
];

const EXPERIENCE = [
  { year:"2024 — 2024", role:"Apprenticeship", org:"Confidential / Hardware", note:"UAS flight software & avionics integration." },
];

const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

document.getElementById("capabilities-grid").innerHTML = CAPABILITIES.map(c => `
  <div class="card cap">
    <h3>${esc(c.title)}</h3>
    <ul>${c.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
  </div>`).join("");

document.getElementById("projects-grid").innerHTML = PROJECTS.map(p => `
  <article class="card project">
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.summary)}</p>
    <div class="metrics">
      ${p.metrics.map(([k,v]) => `<div class="metric"><div class="k">${esc(k)}</div><div class="v">${esc(v)}</div></div>`).join("")}
    </div>
    <div class="chips">${p.stack.map(s => `<span class="chip">${esc(s)}</span>`).join("")}</div>
  </article>`).join("");

document.getElementById("experience-list").innerHTML = EXPERIENCE.map(e => `
  <div class="exp">
    <div class="year">${esc(e.year)}</div>
    <div>
      <h3>${esc(e.role)}</h3>
      <div class="org">${esc(e.org)}</div>
      <div class="note">${esc(e.note)}</div>
    </div>
  </div>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();
