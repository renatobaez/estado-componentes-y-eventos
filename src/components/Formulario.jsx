import { Button, Form, FloatingLabel } from "react-bootstrap"

function Formulario() {
	return (
		<>
		<Form className="d-flex flex-column gap-3" >
			<FloatingLabel controlId="name" label="Nombre">
      	<Form.Control type="text" id="name"/>
    	</FloatingLabel>
			<FloatingLabel controlId="email" label="tuemail@ejemplo.com">
      	<Form.Control type="text" id="email"/>
    	</FloatingLabel>
			<FloatingLabel controlId="password" label="Contraseña">
      	<Form.Control type="password" id="password"/>
    	</FloatingLabel>
			<FloatingLabel controlId="repassword" label="Confirma tu contraseña">
      	<Form.Control type="password" id="repassword"/>
    	</FloatingLabel>
      <Button type="submit" variant="success">
        Registrarse
      </Button>
    </Form>
		</>
  )
}
export default Formulario