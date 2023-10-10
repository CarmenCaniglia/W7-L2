const localStorageKey = "input-memory";

const textAreaReference = document.getElementById("input-text");

const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");

const save = () => {
  const content = textAreaReference.value;
  if (content) {
    localStorage.setItem(localStorageKey, content);
    alert("Utente registrato");
  } else {
    alert("Inserisci un nome prima di salvare");
  }
};

const clear = () => {
  if (window.confirm("ATTENZIONE: Sei sicuro di voler cancellare?")) {
    textAreaReference.value = "";
    localStorage.removeItem(localStorageKey);
  }
};

const savedName = localStorage.getItem(textAreaReference);
if (savedName) {
  document.getElementById("savedName").textContent = savedName;
}

saveButton.addEventListener("click", save);
deleteButton.addEventListener("click", clear);

// esercizio 2
const updateTimer = () => {
  let time = sessionStorage.getItem("passedTime");
  if (!time) {
    time = 0;
  } else {
    time = parseInt(time);
  }
  time++;
  sessionStorage.setItem("passedTime", time);
  document.getElementById("time-passed").textContent = time;
};
setInterval(updateTimer, 1000);

if (!sessionStorage.getItem("passedTime")) {
  sessionStorage.setItem("passedTime", 0);
}
