# ProjektUPP

Projekt iz predmeta Upravljanje Poslovnim Procesima

Tema: Restoran

# Kako pokrenuti PDA?

1. pokrenuti docker

2. utipkati u cmd-u -> docker pull camunda/camunda-bpm-platform:latest

3. utipkati u cmd-u -> docker run -d --name camunda -p 8080:8080 camunda/camunda-bpm-platform:latest

4. utipkati u cmd-u docker start camunda

5. treba na internetu utipkati url -> http://localhost:8080/engine-rest/process-definition/key/Restoran/start

6. za pokrenut proces treba utipkati u cmd-u -> curl -X POST "http://localhost:8080/engine-rest/process-definition/key/Restoran/start" -H "accept: application/json" -H "content-type:application/json" -d ""

7.u VSCode-u treba utipkati node spremanje.js

8.u VSCode-u treba utipkati node prikazi.js

9.u VSCode-u treba utipkati node racun.js.js
