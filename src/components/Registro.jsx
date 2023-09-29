import { Container } from "react-bootstrap"
import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"

function Registro({message, setAlert}) {
	return (
		<>
  		<Container fluid style={{ maxWidth: "25rem" }} className="d-flex flex-column gap-3 text-center p-5 rounded-5 border border-2 border-light-subtle bg-light">
    		<h1 className="mb-0">Usa una cuenta</h1>
      	<div className="d-flex m-0 p-0 w-100 justify-content-center gap-3">
      		<SocialButton icon={faFacebook} />
        	<SocialButton icon={faGithub}  />
        	<SocialButton icon={faLinkedinIn} />
      	</div>
      	<p className="mb-0">O usa tu email para registrarte</p>
      	<Formulario setAlert={setAlert} />
				<Alert color={message.color} msg={message.msg} />
			</Container>  
		</>
	)
}
export default Registro