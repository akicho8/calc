export default (props) => {
  // ↓と書いても動かない
  // <button classList={{CalcNumButton: true, is_2x: props.is_wide}} {...props}>
  return (
    <button className={["CalcNumButton", props.is_wide ? "is_2x" : null].join(' ')} {...props}>
      {props.label}
    </button>
  )
}
