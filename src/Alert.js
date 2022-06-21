const Alert = ({ alert }) => {
  return (
    <div className={`alert-container ${alert.type}`}>
      <p>{alert.msg}</p>
    </div>
  );
};

export default Alert;
