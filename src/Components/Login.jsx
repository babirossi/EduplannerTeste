import  './Login.css'
function Login() {
    return(
        <div className="tudo">
            <div className="logo">
                <img src={"./Logo.png"}/>
            </div>
            <div className="form">
                <div>
                    <input placeholder={'Nome'}/>
                </div>
                <div>
                    <input placeholder={'Senha'}/>
                </div>
                <div>
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Login;