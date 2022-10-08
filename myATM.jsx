
const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
    const choice = ["Deposit", "Cash Back"];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
       <h3>You choose {choice[Number(!isDeposit)]}</h3>
        <input type="number" width="200" onChange={onChange}></input>
        <input type="submit" width="200" value="Submit" disabled={!isValid} className="submit"></input>
      </label>
    );
  };
  

  const Account = () => {
    let deposit = 0; // state of this transaction
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [validTransaction, setValidTransaction] = React.useState(false);
   
    let status = totalState;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = event => {
      console.log(`handleChange ${event.target.value}`);
      if((totalState - Number(event.target.value) < 0) && (!isDeposit)){
        setValidTransaction(false);
        return;
      }
      else{ 
        setValidTransaction(true);
        deposit = Number(event.target.value);}
    };
     const handleSubmit = () => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      if (newTotal >=0 ) {setTotalState(newTotal)} else alert(`you don't have enought money, maximum withdraw ${totalState}`);
      setValidTransaction(false);
      event.preventDefault();
  };


    return (
      <>
      <form onSubmit={handleSubmit}>
        <div className="balance">
        <p>Your Account Balance is:</p>
        <h2 id="total">{status}</h2>
        </div>
        <div className="button-container">
        <button className="deposit" onClick={() => setIsDeposit(true)}>Deposit</button>
        <button className="withdraw" onClick={() => setIsDeposit(false)}>Cash Back</button>
        </div>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction}> Deposit</ATMDeposit>
      </form>
    </>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById("root"));
  