import React from 'react'
import background from '../../assets/img/background-iku-login.png';
import people from '../../assets/img/iku-image-people.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/font.sass';
import logo from '../../assets/img/iku-logo.png';

export default function login() {
  return (
    <div style={{ backgroundImage: `url(${background})`}} className='iku-login'>
        <img src={people} alt="" className='iku-login__people'/>
        <div className='iku-login__content'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="iku-login__file-1">
                        <h1>Ingrese a su cuenta</h1>
                        <p>Acceda a su cuenta con usuario y contraseña</p>
                        <form action="" className='iku-login__form'>
                            <div className="form-group">
                                <label for="userIku">Usuario</label>
                                <input type="text" className="form-control" id="userIku" />
                            </div>
                            <div className="form-group">
                                <label for="userIku">Contraseña</label>
                                <input type="password" className="form-control" id="userIku" />
                            </div>
                            <div className="form-footer">
                                <div className="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Mantener abierta mi sesion</label>
                                </div>
                                <a href="/#">Olvide mi contraseña</a>
                            </div>
                            <button type='submit'>Acceder</button>
                        </form>
                        <div className="iku-login__create-account">
                            <p>¿No tiene cuenta aun? <a href='/#'>Crear mi cuenta</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="iku-login__file-2">
                        <img src={logo} alt="" />
                        <h3>IKU SIMPLIFICA EL PROCESO KYC PARA SU EMPRESA CON UNA HERRAMIENTA B2B</h3>
                        <div className="iku-login__tags">
                            <span>Acceso gratuito</span>
                            <span>Dashboard y estadisticas</span>
                            <span>Rapido y eficaz</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="iku-login__footer">
            <div className="iku-login__footer-content">
                <span>© IKU I Know You</span>
                <div className="iku-login__footer-links">
                    <a href="#">Términos de servicio</a> - 
                    <a href="#"> Privacidad y datos personales</a>
                </div>
            </div>
        </div>
    </div>
  )
}
