<script>
    import { onMount } from 'svelte';

    let user = { sundhedsData: [] };

    onMount(async () => {
        const res = await fetch('api/logbog/self');
        user = await res.json();
    });

    function cirkel() {
        const randomIndex = Math.floor(Math.random() * 3);
        const colors = ['rød', 'gul', 'grøn'];
        const color = colors[randomIndex];
        return color;
    }
    const Tilbage = async () => {
        window.location = '/startside';
	};
    const tillogbog = async () => {
        window.location = '/logbog';
	};
	const logUd = async () => {
        window.location = '/';
    };
</script>

<div style="margin-top: 50px; text-align: center;">
    <!-- Tilbageknap -->
    <button style="position: absolute; top: 10px; left: 10px;" on:click={Tilbage}>Tilbage</button>

    <!-- Gå til din logbog knap -->
    <button style="position: absolute; top: 10px; left: 100px;" on:click={tillogbog}>Gå til din logbog</button>

    <!-- Overskrift -->
		<h1 style="margin-top: 70px;">Opslag</h1>

    <!-- Log ud knap -->
    <button style="position: absolute; top: 10px; right: 10px;" on:click={logUd}>Log ud</button>

    <!-- Tabel med sundhedsdata -->
    <table style="margin: auto; width: 100%;">
        <thead>
            <tr>
                <th>Dato</th>
                <th>Afføring</th>
                <th>Tilstand</th>
                <th>Føde</th>
                <th>Vurdering</th>
            </tr>
        </thead>
        <tbody>
            {#each user.sundhedsData as row}
                <tr>
                    <td>{row.createdAt}</td>
                    <td>{row.type}</td>
                    <td>{row.condition}</td>
                    <td>{row.food}</td>
                    <td>{cirkel()}</td>
                </tr>
            {/each}
        </tbody>
    </table>

    <!-- Analyse sektion -->
    <div style="margin-top: 50px; text-align: center;">
        <h2>Analyse</h2>
        <div style="display: flex; justify-content: center;">
            <!-- Felt med ikke-redigerbar tekst til råd og vejledning -->
            <div style="flex: 1; border: 1px solid #ccc; padding: 8px; margin-right: 10px;">
                Råd og vejledning...
            </div>
            <!-- Felt til højre for råd og vejledningsfeltet -->
            <div style="flex: 1; border: 1px solid #ccc; padding: 8px;">
                Graf her
            </div>
        </div>
    </div>
</div>

<style>
    /* Styling efter behov */
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: center;
    }
    th {
        background-color: #3498db;
        color: white;
    }
    h1, h2 {
        text-align: center;
    }
    button {
        margin: 10px;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        background-color: #3498db;
        color: white;
        cursor: pointer;
    }
    button:hover {
        background-color: #3498db;
    }
    /* For at forhindre brugeren i at redigere teksten i analysen */
    div[contenteditable="true"] {
        background-color: #f2f2f2;
    }
</style>

