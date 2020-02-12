
# mice

```
Vous achetez un couple de souris.Une souris produit une moyenne de 8 souriceaux par portée.
La gestation dure 3 semaines. Elle est capable de se reproduire à l’âge de 6 semaines. 
Vous voulez maintenir votre population à 550 individus. 
a) Au bout de combien de temps, vous alarmez-vous ? 
b) Vous ne pouvez pas tuer les souris, quel processus mettez-vous en place ? 
Justifiez vos réponses aux deux questions
```
## comment executer le programme

Installez deno sur votre machine, avec l'aide du liens ci-dessous

https://github.com/denoland/deno_install

Par la suite lancez la commande :
```
$ deno https://raw.githubusercontent.com/MorganZ/mice/master/souris_function.ts
```
## resultats 

### mouse one pregnancy :

| date   | total    |  pregnancy | comments |
|:-------|---------:|:------|:---------|
|week  1 |   2 mice | (8)   |
|week  2 |   2 mice | (8)   |
|week  3 |   2 mice | (8)   |
|week  4 |  10 mice | (0)   |
|week  5 |  10 mice | (0)   |
|week  6 |  10 mice | (0)   |
|week  7 |  10 mice | (0)   |
|week  8 |  10 mice | (0)   |
|week  9 |  10 mice | (0)   |
|week 10 |  10 mice | (32)  |
|week 11 |  10 mice | (32)  |
|week 12 |  10 mice | (32)  |
|week 13 |  42 mice | (0)   |
|week 14 |  42 mice | (0)   |
|week 15 |  42 mice | (0)   |
|week 16 |  42 mice | (0)   |
|week 17 |  42 mice | (0)   |
|week 18 |  42 mice | (0)   |
|week 19 |  42 mice | (128) |
|week 20 |  42 mice | (128) |
|week 21 |  42 mice | (128) |
|week 22 | 170 mice | (0)   | ici nous isoleront toutes femelles à l'exception de 47 femelles non fécondé <br> 17O + 8x <= 550 :: x = 47,5 -> population final sera de 546 
|week 23 | 170 mice | (0)   |
|week 24 | 170 mice | (0)   |
|week 25 | 170 mice | (0)   |
|week 26 | 170 mice | (0)   |
|week 27 | 170 mice | (0)   |
|week 28 | 170 mice | (512) | <- alert dépassement|

### mouse multiple pregnancy :

| date   | total    |  pregnancy | comments |
|:-------|---------:|:------|:---------|
|week  1 |   2 mice | (8)   |
|week  2 |   2 mice | (8)   |
|week  3 |   2 mice | (8)   |
|week  4 |  10 mice | (8)   |
|week  5 |  10 mice | (8)   |
|week  6 |  10 mice | (8)   |
|week  7 |  18 mice | (8)   |
|week  8 |  18 mice | (8)   |
|week  9 |  18 mice | (8)   |
|week 10 |  26 mice | (40)  |
|week 11 |  26 mice | (40)  |
|week 12 |  26 mice | (40)  |
|week 13 |  66 mice | (72)  |
|week 14 |  66 mice | (72)  |
|week 15 |  66 mice | (72)  |
|week 16 | 138 mice | (104) |
|week 17 | 138 mice | (104) |
|week 18 | 138 mice | (104) |
|week 19 | 242 mice | (264) |
|week 20 | 242 mice | (264) | 
|week 21 | 242 mice | (264) | ici nous isoleront toutes femelles à l'exception de 5 femelles non fécondé<br> 506 + 8x <= 550 :: x = 5,5 -> population final sera de 54
|week 22 | 506 mice | (552) | <- alert dépassement




