import { Client, logger, Variables } from "camunda-external-task-client-js";

const config = {
  baseUrl: "http://localhost:8080/engine-rest",
  use: logger,
  asybcResoibseTuneizt: 10000,
};

const client = new Client(config);

client.subscribe("PrikaziRacun", async function ({ task, taskService }) {
  const Racun = task.variables.get("racun");
  const Gost = task.variables.get("Gost");
  console.log("Racun je:", Racun);
  console.log("za goste:", Gost);
  await taskService.complete(task);
});
