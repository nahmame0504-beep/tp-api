import { useApi } from './hooks/useApi';

// Tableau de titres en français pour remplacer le latin de l'API
const meillleursTitres = [
  "L'innovation technologique transforme nos vues au quotidien",
  "Le développement durable est essentiel",
  "Comprendre les besoins des utilisateurs pour concevoir des produits efficaces",
  "L'intelligence artificielle ouvre de nouveaux horizons",
  "Une gestion rigoureuse des projets garantit le succès"
];

export default function FetchPosts() {
  const { data: posts, loading, error, reload } = useApi('https://jsonplaceholder.typicode.com/posts', 'fetch');

  if (loading) return <p>Chargement des articles…</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <button onClick={reload} disabled={loading}>
        Recharger les articles
      </button>
      <ul>
        {posts && posts.slice(0, 5).map((p, index) => (
          <li key={p.id}>
            {/* On affiche le titre en français à la place de p.title */}
            {meillleursTitres[index] || p.title}
          </li>
        ))}
      </ul>
    </div>
  );
}