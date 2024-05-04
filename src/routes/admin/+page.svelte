<script>
	let user = '';
	let email = '';
	let pass = '';
	const addUser = async () => {
		fetch('api/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: user,
				email: email,
				pass: pass
			})
		});
		window.location="/"
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

    input {
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

    input:focus {
        background: #e1e1e1;
    }

    button {
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

    button:hover {
        background: #45a049;
    }
</style>

<body>

	<div class="box">
		<h1>Opret ny bruger</h1>
		<input bind:value={user} placeholder="user" />
		<input bind:value={email} placeholder="email" />
		<input bind:value={pass} placeholder="pass" />
		<button on:click={addUser}>Opret bruger</button>
	</div>
</body>

