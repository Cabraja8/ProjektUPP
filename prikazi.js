import { Client, logger, Variables } from "camunda-external-task-client-js";

const config = {
  baseUrl: "http://localhost:8080/engine-rest",
  use: logger,
  asybcResoibseTuneizt: 10000,
};

const client = new Client(config);

client.subscribe("PrikaziNarudzbe", async function ({ task, taskService }) {
  const processVariables = new Variables();

  let Narudzba = task.variables.get("narudzbe");
  let Gost = task.variables.get("Gost");

  console.log("Narudzba: ", Narudzba);
  console.log("za goste:", Gost);

  await taskService.complete(task);
});
