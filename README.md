## Prerequis
- Node.js v12 (`node -v`)
- MongoDB Community Server (`mongo -v`) i used MongoCompass

## Install
1. Fork Backend and use README to run API on localhost:3001
https://github.com/GrimonprezAlexis/P13-Argent-Bank-API

2. Create database `argentBankDB` with GUI Mongo Compass and collection `users`
3. Populate `argentBankDB`
> npm run populate-db

3. Install dependencies in `frontend` folder `npm install`
4. Run the app `npm run start`

## Backend Endpoint
- http://localhost:3001/api-docs/#/
- http://localhost:3001/api/v1/user

## Credentials
- Email: `tony@stark.com`
- Password: `password123`

- Email: `steve@rogers.com`
- Password: `password456`

# A propos
Projet 13 - Utilisez une API pour un compte utilisateur bancaire avec React
✅ ❌

Mise en place d'une application web React pour Argent Bank (Une nouvelle banque), qui essaie de percer dans le secteur.
- Phase 1 : Authentification et gestions des utilisateurs (connection, profil, comptes) via une application web
- Phase 2 : Transactions / Spécifications de endpoints d'API pour une deuxime mission

### Objectif
> Phase 1
- L'utilisateur peut visiter la page d'accueil ✅
- L'utilisateur peut se connecter / déconnecter au sytème ✅
- L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès ✅
- L'utilisateur peut modifier le profil et conserver les données dans la base de données ✅

> Phase 2
- L'utilisateur peut visualiser toutes leurs transactions pour le mois en cours
- L'utilisateur peut visualiser les détails d'une transaction d'une autre vue
- L'utilisateur peut ajouter, modifier, supprimer des informations sur une transaction

> Spécification décrivant les API pour les transactions selon directives de swagger YAML
- La metode HTTP (ex: GET, POST, etc..)
- La route (ex: /store/inventory)
- La description de ce à quoi correspond l'endpoint (ex: Retour de l'inventaire des animaux de compagnie)
- Les paramètres possibles pour tenir compte des différents scénarios
- Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex: 404 : réponse d'erreur d'article inconnu)


### Ressource
- [HTML statisque et le CSS : Page d'accueil / connexion et page de profil](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs)
- [Modèles de GitHub issues](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE)
- [Forker du Repo](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)
- [Documentation Swagger](https://editor.swagger.io/)
- [Cours Redux](https://openclassrooms.com/fr/courses/5511091-organisez-votre-application-avec-la-logique-redux)

### Contraintes techniques
- Créer une application web responsive avec React
- Utiliser Redux pour gérer le state de l'ensemble de l'app
- Code Robuste / Lisible
- Version moderne (ES6 ou supérieure) de JavaScript
- Validation W3C sans erreur