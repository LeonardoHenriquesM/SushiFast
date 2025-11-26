import { useParams } from 'react-router-dom'

export default function DetailsMenu() {
  const { id } = useParams()

  return (
    <div>
      <h1>Détails du menu {id}</h1>
      {/* Affichage du menu choisi */}
    </div>
  )
}
