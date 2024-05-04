<!-- App.svelte -->
<script>
    const knapOpslag = async () => {
        window.location = '/opslag';
	};
    const knapLogbog = async () => {
        window.location = '/logbog';
	};
	const logUd = async () => {
        window.location = '/login';
    };
 
</script>

<style>
	.centered {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
    }

    .centertext {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
    }
    
    .button {
        padding: 40px 60px;
        margin: 0 10px; 
        background-color: #3498db;
        color: white;
        border: none; 
        cursor: pointer;
		border-radius: 20px;
		font-size: 40px;
    }
    
    /* Tilføjer styling til logud-knappen */
    .logud {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 10px 20px;
        background-color: #fff;
        color: white;
        border-radius: 8px;
        cursor: pointer;
		color: #3498db;
    }
	.header {
		font-size:100px;
		font-family: 'Courier New', Courier, monospace;

	}
</style>

<div class="centertext">
    <h1 class="header">Velkommen</h1>
</div>

<div class="centered">
    <button class="button" on:click={knapOpslag}>Opslag</button>
    <button class="button" on:click={knapLogbog}>Logbog</button>
</div>

<button class="logud" on:click={logUd}>Log ud</button>