const malla = {
  "I": [
    "Fundamentos de Economía Positiva",
    "Álgebra",
    "Contabilidad I",
    "Fundamentos de Administración",
    "Electivo Teológico"
  ],
  "II": [
    "Microeconomía I",
    "Cálculo I",
    "Contabilidad II",
    "Estadística I",
    "Electivo Antropológico Cristiano"
  ],
  "III": [
    "Macroeconomía I",
    "Álgebra Lineal",
    "Contabilidad de Costos",
    "Estadística II",
    "Administración y Control Administrativo"
  ],
  "IV": [
    "Microeconomía II",
    "Cálculo II",
    "Fundamentos de Administración Financiera",
    "Comportamiento Organizacional",
    "Marketing I"
  ]
};

const container = document.getElementById("semesters");

for (const [semestre, ramos] of Object.entries(malla)) {
  const box = document.createElement("div");
  box.className = "semester";
  box.innerHTML = `<h2>Semestre ${semestre}</h2>`;
  ramos.forEach(ramo => {
    const curso = document.createElement("div");
    curso.className = "course";
    curso.textContent = ramo;
    box.appendChild(curso);
  });
  container.appendChild(box);
}
