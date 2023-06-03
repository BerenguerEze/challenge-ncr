import "../styles/footer.css";
function Footer({onClick}) {
    return (
        <>
          <hr/>
          <button onClick={onClick}>Salir</button>
        </>
      );
}

export default Footer ;