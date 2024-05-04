<script>
	import { Container, Row, Col, Input, Button } from '@sveltestrap/sveltestrap';

	const md = { size: 4, offset: 4 };
	const sm = { size: 6, offset: 3 };

	let username = '';
	let password = '';

	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});
		const result = await response.text();
		if (response.status === 200) {
			window.location = '/startside';
		} else {
			alert('Forkert brugernavn eller password');
		}
	};
	const signup = async () => {
		window.location = '/admin';

	};
</script>

<style>
    body {
        font-family: 'Roboto', sans-serif;
        background: #f0f0f0;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .box {
        background: #ffffff;
        width: 300px;
        border-radius: 10px;
        padding: 40px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
			  text-align: center; /* Centrer teksten */

    }

    h1 {
        font-size: 1.8em;
        color: #333333;
        margin-bottom: 30px;
    }

    .email{
        background: #f7f7f7;
        border: none;
        border-radius: 25px;
        padding: 15px;
        width: 100%;
        margin-bottom: 20px;
        font-size: 1em;
        color: #555555;
        transition: background 0.3s ease;
    }

    .email:focus {
        background: #e1e1e1;
    }
    
	.btn {
        background: #3498db;
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 25px;
        font-weight: bold;
        font-size: 1.2em;
        color: #ffffff;
        cursor: pointer;
        transition: background 0.3s ease;
    }

	  .btn2 {
        color: #3498db;
        text-decoration: none;
        transition: color 0.3s ease;
    }
</style>

<body>
<div class ="box">
	<h1>Velkommen</h1>
    <input bind:value={username} placeholder="Indtast Email" class="email"/>
    <input bind:value={password} placeholder="Indtast Password" class="email"/>
	<br>
	<button class="btn" on:click={login} >Login</button>
	<a href="/admin">Har du ikke en bruger? <span class="btn2">Opret bruger</span></a>

</div>
</body>


