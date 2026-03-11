export default function Field({ label, type, name, options = [], value, onChange }) {

  if (type === "radio") {
    return (
      <div>
        <p>{label}</p>

        {options.map(opt => (
          <label key={opt}>
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={(e)=>onChange(name,e.target.value)}
            />
            {opt}
          </label>
        ))}

      </div>
    )
  }

  if (type === "select") {
    return (
      <div>
        <label>{label}</label>

        <select
          value={value}
          onChange={(e)=>onChange(name,e.target.value)}
        >

          <option value="">Select</option>

          {options.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}

        </select>
      </div>
    )
  }

  return (
    <div>
      <label>{label}</label>

      <input
        type={type}
        value={value}
        onChange={(e)=>onChange(name,e.target.value)}
      />
    </div>
  )
}