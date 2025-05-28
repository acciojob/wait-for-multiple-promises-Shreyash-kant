const table = document.getElementById("output");

function createPromise(promiseName) {
  return new Promise((resolve) => {
    const startTime = performance.now();
    const delay = Math.floor(Math.random() * 3000 + 1000);
    setTimeout(
      () =>
        resolve({
          promiseName,
          timeTaken: ((performance.now() - startTime) / 1000).toFixed(3),
        }),
      delay
    );
  });
}
function totalTime(data) {
  const times = data.map(({ timeTaken }) => {
    return parseFloat(timeTaken).toFixed(3);
  });

  const maxTime = Math.max(...times);

  table.innerHTML += `<tr><td>Total</td><td>${maxTime}</td></tr>`;
}
const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];
Promise.all([...promises]).then((data) => {
  table.innerHTML = "";
  const tableRows = [...data].map(
    ({ promiseName, timeTaken }) =>
      `<tr><td>${promiseName}</td><td>${timeTaken}</td></tr>`
  );
  tableRows.forEach((item) => (table.innerHTML += item));
  totalTime([...data]);
});
