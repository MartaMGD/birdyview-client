export default function NewsletterInput() {
    return (
        <>
            <form className="formContainer">
                <div>
                    <h4>¡Suscríbete y recibe noticias exclusivas!</h4>
                </div>

                <div>
                    <input className="emailInputStyle"
                        type="email"
                        id="email"
                        placeholder="Introduce tu correo electrónico">
                    </input>
                </div>

                <div>
                    <input className="loginButtonStyle" 
                    type="submit" 
                    value="Suscríbete" />
                </div>

            </form>
        </>
    )
}
