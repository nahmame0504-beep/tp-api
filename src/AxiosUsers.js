import { useApi } from './hooks/useApi';

// Liste des utilisateurs personnalisés avec leurs e-mails mis à jour
const utilisateursPerso = [
  { name: "Noufal Ahmame", email: "noufal.ahmame@email.com" },
  { name: "Bourhim Patron", email: "bourhim.patron@email.com" },
  { name: "Chrifi Lhachacha", email: "chrifi.lhachacha@email.com" },
  { name: "Saidi Familiyanyno", email: "saidi.familiyanyno@email.com" },
  { name: "Zaki Nssib", email: "zaki.nssib@email.com" },
  { name: "Ahmed Asrar", email: "ahmed.asrar@email.com" },
  { name: "Merwan Tbib", email: "merwan.tbib@email.com" },
  { name: "Abbas Bounif", email: "abbas.bounif@email.com" },
  { name: "Saad Lbanka", email: "saad.lbanka@email.com" },
  { name: "Hicham Polyvalent", email: "hicham.polyvalent@email.com" },
];

export default function AxiosUsers() {
  const { data: users, loading, error, reload } = useApi('https://jsonplaceholder.typicode.com/users', 'axios');

  if (loading) return <p>Chargement des utilisateurs…</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <button onClick={reload} disabled={loading}>
        Recharger les utilisateurs
      </button>
      <ul>
        {users && users.map((u, index) => {
          const replacement = utilisateursPerso[index];
          
          const finalName = replacement ? replacement.name : u.name;
          const finalEmail = replacement ? replacement.email : u.email;

          return (
            <li key={u.id}>
              {finalName} – {finalEmail}
            </li>
          );
        })}
      </ul>
    </div>
  );
}