const About = () => {
  const teamMembers = [
    {
      name: 'Stalin Roche',
      role: 'Desarrollador Frontend',
      email: 'seroche@espe.edu.ec',
    },
    {
      name: 'Mateo Chanataxi',
      role: 'Diseñador UI/UX',
      email: 'mschanataxi@espe.edu.ec',
    },
  ]

  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="eyebrow">Acerca de</p>
        <h1>Nuestro Equipo</h1>
        <p className="subtitle">
          Proyecto desarrollado como parte del curso de Programación de Interfaces de Cliente
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Sobre el Proyecto</h2>
          <p>
            Este álbum digital de cromos del Mundial 2026 fue desarrollado como proyecto académico.
            Permite a los usuarios coleccionar cromos de selecciones nacionales, abrir sobres aleatorios
            y completar su álbum virtual.
          </p>
          <p>
            <strong>Tecnologías utilizadas:</strong> React, JavaScript, CSS3, Vite
          </p>
        </div>

        <div className="team-section">
          <h2>Integrantes del Grupo</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-email">{member.email}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card">
          <h2>Características</h2>
          <ul className="features-list">
            <li>✅ Colección de cromos de 2 selecciones nacionales</li>
            <li>✅ Apertura de sobres con 5 cromos aleatorios</li>
            <li>✅ Sistema de cromos repetidos</li>
            <li>✅ Progreso guardado en el navegador</li>
            <li>✅ Diseño responsivo</li>
            <li>✅ Interfaz de usuario moderna</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default About