import { Client, logger, Variables } from "camunda-external-task-client-js";

const config = {
  baseUrl: "http://localhost:8080/engine-rest",
  use: logger,
  asybcResoibseTuneizt: 10000,
};

const client = new Client(config);

client.subscribe("spremanjeOdabira", async function ({ task, taskService }) {
  const processVariables = new Variables();

  let narudzbe = "Pizza Margerita, Pizza Al Tonno, Coca Cola, Fanta";
  let Gost = "gost1:Marko gost2:Ivan";

  processVariables.set("narudzbe", narudzbe);
  processVariables.set("Gost", Gost);

  console.log("Željeni odabir spremljen");
  await taskService.complete(task);
});
