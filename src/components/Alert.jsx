import BAlert from "react-bootstrap/Alert";
function Alert({color, msg}) {
	return (
		<>
      <BAlert variant={color}>
        <p>{msg}</p>
      </BAlert>
    </>
  )
}
export default Alert