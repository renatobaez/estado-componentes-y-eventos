import { Button, Form, FloatingLabel } from "react-bootstrap"
import { useState } from "react"

function Formulario({setAlert}) {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [repassword, setRePassword] = useState("")
	const EMAIL_REGEXP = new RegExp(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

	const validateForm = (e) => {
		e.preventDefault()
		if (password !== repassword) {
			setAlert({
				error: true,
				msg: "Las contraseñas no coinciden !",
				color: "danger",
			})
			return
		}
		if (name === '' || email === '' || password === '' || repassword === '') {
			setAlert({
				error: true,
				msg: "completa todos los campos !",
				color: "danger",
			})
			return
		}
		if (!EMAIL_REGEXP.test(email)) {
			setAlert({
				error: true,
				msg: "El email debe tener un formato válido !",
				color: "danger",
			})
			return
		}
		setAlert({
			error: false,
			msg: "Cuenta creada existosamente !",
			color: "success"
		})
		setName('')
		setEmail('')
		setPassword('')
		setRePassword('')
		return
	}
	return (
		<>
		<Form className="d-flex flex-column gap-3" onSubmit={validateForm} noValidate>
			<FloatingLabel label="Nombre">
      		<Form.Control
						type="text"
						id="name"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
    	</FloatingLabel>
			<FloatingLabel label="tuemail@ejemplo.com">
      	<Form.Control
					type="email"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
    	</FloatingLabel>
			<FloatingLabel label="Contraseña">
      	<Form.Control
					type="password"
					id="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
    	</FloatingLabel>
			<FloatingLabel label="Confirma tu contraseña">
      	<Form.Control
					type="password"
					id="repassword"
					onChange={(e) => setRePassword(e.target.value)}
					value={repassword}
				/>
    	</FloatingLabel>
      <Button type="submit" variant="success">Registrarse</Button>
    </Form>
		</>
  )
}
export default Formulario