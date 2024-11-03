export default function Options({onOptionClick, onReset , total}) {

  
    
  return (
    <div className="buttons">
      <button onClick={() => onOptionClick('good')}>Good</button>
      <button onClick={() => onOptionClick('neutral')}>Neutral</button>
      <button onClick={() => onOptionClick('bad')}>Bad</button>
      {
        total >= 1 ? <button onClick={onReset}>Reset</button> : null
      }
    </div>
  );
}
