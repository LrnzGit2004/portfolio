import React from 'react'
const Footer = () => {
  return (
    <div className='footer'>
      <p> Copyright © {new Date().getFullYear()} Réalisé par Eric Lorry SOBZE. Tous droits réservés.</p> {/* Alt+0169 */}
        <ul>
            <li>Termes et conditions</li>{}
            <li>Politique de confidentialité</li>
        </ul>
    </div>
  )
}

export default Footer
