import "../styles/account_card.css"
function AccountCard({tipoCuenta,Nro,onClick}) {
    return (
        <div className="Card" onClick={onClick}>
          <p>{tipoCuenta}</p>
          <p>Nro:{Nro}</p>
        </div>
      );
}
export default AccountCard;