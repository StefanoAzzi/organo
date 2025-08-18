import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, valor, itens, aoAlterado }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select onChange={(e) => aoAlterado(e.target.value)} value={valor}>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
