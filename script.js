//your JS code here. If required.
//your JS code here. If required.
const table = document.getElementById("output");
const startTime = performance.now();
function createPromise(label) {
  return new Promise((res) => {
    const delay = Math.random() * 2000 + 1000;
    setTimeout(() => {
      const timeTaken = (performance.now() - startTime) / 1000;
      res({ label, timeTaken: parseFloat(timeTaken) });
    }, delay);
  });
}

Promise.all([
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
]).then((data) => {
  table.innerHTML = "";
  data.forEach(({ label, timeTaken }) => {
    table.innerHTML += `<tr><td>${label}</td><td>${timeTaken.toFixed(
      3
    )}</td></tr>`;
  });
  const totalTime = Math.max(...data.map((t) => t.timeTaken));
  table.innerHTML += `<tr><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>`;
});
