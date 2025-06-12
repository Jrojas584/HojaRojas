import foto from '../assets/FPTP.png';


const Encabezado = () => {
  return (
    <header className="header">
      <img
        src={foto}
        alt="Foto del aspirante"
        className="foto-perfil"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '20px',
        }}
      />
      <h1>Juan José Rojas Ramírez</h1>
      <h2>aprendiz sena</h2>
      <div className="contact-info">
        <p>Ibagué, Colombia</p>
        <p>Teléfono: 3172523443</p>
        <p>Email: juanjoserojasramirez11.3@gmail.com</p>
      </div>
    </header>
  );
};

export default Encabezado;