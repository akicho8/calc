export default (props) => {
  return (
    <button className="CalcOpButton" {...props}>
      {props.label}
    </button>
  )
}
