export default function FormRow({ value, type, name, labelText, onChange }) {
  return (
    <div className='form-row'>
      <label htmlFor='name' className='form-label'>
        {labelText || name}
      </label>
      <input value={value} type={type} name={name} className='form-input' onChange={onChange} />
    </div>
  )
}
