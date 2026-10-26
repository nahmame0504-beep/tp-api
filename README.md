# TP – Consommer une API avec Fetch et Axios dans React

Ce projet est une application React développée dans le cadre du TP 8. Il illustre la consommation d'API REST en utilisant deux approches différentes : l'API Web native `fetch` et la bibliothèque `axios`, ainsi que la factorisation du code via un Hook personnalisé (`useApi`).

##  Objectifs

- Comparer l'utilisation de `fetch` et `axios`.
- Gérer les états `loading`, `error` et les données reçues.
- Structurer le code avec un Hook personnalisé réutilisable (`useApi`).
- Afficher et rafraîchir dynamiquement les données d'une API.

##  Structure du projet

```text
tp-api/
├── src/
│   ├── hooks/
│   │   └── useApi.js        # Hook personnalisé pour centraliser les appels API
│   ├── App.js               # Composant principal
│   ├── AxiosUsers.js        # Composant gérant les utilisateurs via Axios
│   ├── FetchPosts.js        # Composant gérant les articles via Fetch
│   └── index.js             # Point d'entrée de l'application
├── package.json
└── README.md
```

<img width="1917" height="966" alt="image" src="https://github.com/user-attachments/assets/3c7ac9c9-bf04-46c6-ae06-d770e914f1a7" />
