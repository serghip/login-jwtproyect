import React from 'react';
import Username from '@components/Username';
import Password from '@components/Password';
import ButtonLogin from '@components/ButtonLogin';
import '@styles/LoginBox.scss'
const LoginBox = () => {
	return (
		<div className="LoginBox">
			<h1>Inicio de sesión</h1>
			<Username/>
            <Password/>
			<ButtonLogin></ButtonLogin>
		</div>
	);
}

export default LoginBox;
