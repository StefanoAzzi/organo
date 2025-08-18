import "./CampoTexto.css";

const CampoTexto = ({ placeholder, aoAlterado, label, valor, obrigatorio }) => {
  const placeholderModificado = `${placeholder}...`;

  const aoDigitado = (e) => {
    aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificado}
      />
    </div>
  );
};

export default CampoTexto;
