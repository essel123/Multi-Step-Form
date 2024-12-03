
export default function EsselForm() {
 
 

 
    
  return (
    <div>
      <section className="form-section">
        <label htmlFor="name">
          Your name
          <input
            onChange={(e) => {
             console.log(e.target.value);
            }}
            type="text"
            name="name"
            
            id=""
            placeholder="e.g essel"
          />
        </label>
        <button
          onClick={() => {
            
          }}
        >
          Submit
        </button>
      </section>
      <p>
       
      </p>
      
    </div>
  );
}
