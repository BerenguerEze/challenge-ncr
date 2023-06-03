import "../styles/account_card.css"
function AccountCard({tipoCuenta,Nro}) {
    return (
        <div className="Card">
          <p>{tipoCuenta}</p>
          <p>Nro:{Nro}</p>
        </div>
      );
}
export default AccountCard;