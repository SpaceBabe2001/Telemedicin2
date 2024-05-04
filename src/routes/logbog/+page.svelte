<script>
  import { onMount } from 'svelte';
  
  let user = { sundhedsData: [] };
  let type = '';
  let food = '';
  let condition = '';
  let showImages = false;

  const handleYesClick = () => {
      showImages = true;
  };

  const handleNoClick = () => {
      showImages = false;
  };

  onMount(async () => {
      const res = await fetch('api/logbog/self');
      user = await res.json();
  });

  const saveDiary = async () => {
      await fetch('api/logbog', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              type: type,
              food: food,
              condition: condition
          })
      });
      const res = await fetch('api/logbog/self');
      user = await res.json();
      window.location = '/startside';
  };

  const logOut = () => {
      // Implement log out functionality here
  };

  const goToPosts = () => {
      // Implement go to posts functionality here
  };
</script>

<style>
  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
  }

  .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0;
  }

  .top-header {
      font-size: 24px;
      margin-bottom: 20px;
  }

  .input-field {
      margin-bottom: 10px;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 200px;
  }

  .save-button {
      padding: 10px 20px;
      background-color: lightblue;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
  }

  .image-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
  }

  .image {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
      cursor: pointer;
  }

  .image-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
  }

  .image-wrapper {
      flex-direction: column;
      align-items: center;
  }

  .image {
      border-color: black;
      border-radius: 9px;
      width: 80px;
      height: 80px;
  }

  .buttons-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 20px;
  }

  .logout-button {
      background-color: #ff6347;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 16px;
      cursor: pointer;
  }

  .go-to-posts-button {
      background-color: #4682b4;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 8px;
      cursor: pointer;
  }

  .save-and-submit-button {
      background-color: #32cd32;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 16px;
      cursor: pointer;
      bottom: 20px;
      left: 20px;
  }
</style>

<div class="container">

  <div class="buttons-container">
      <button class="go-to-posts-button">← Tilbage</button>
      <button class="go-to-posts-button" on:click={goToPosts}>Gå til dine opslag</button>
      <div style="margin-top: 20px;">
        <button class="logout-button" on:click={logOut}>Log ud</button>
      </div>
  </div>

  <div class="content kost">
      <h3>Kost</h3>
      <div style="display: flex; align-items: center;">
          <div style="margin-right: 10px;">1. Indtast dine fødevarer</div>
          <input bind:value={food} type="text" placeholder="Skriv dit svar her" />
      </div>
  </div>

  <div class="content sundhedstilstand">
      <h3>Sundhedstilstand</h3>
      <div style="display: flex; align-items: center;">
          <div style="margin-right: 10px;">2. Hvordan har du det?</div>
          <input bind:value={condition} type="text" placeholder="Skriv dit svar her" />
      </div>
  </div>

  <div class="content afførring">
      <h3>Afførring</h3>
      <div style="display: flex; align-items: center;">
          <div style="margin-right: 10px;">3. Har du haft afføring efter dit seneste måltid?</div>
          <input bind:value={type} type="text" placeholder="Skriv afføringstype her" />
      </div>
      <div class="image-container" style="grid-template-columns: repeat(4, 1fr);">
          <div class="image-wrapper">
              <div style="color: black;">Type 1</div>
              <img src="./static/type1.png" alt="Billede 1" class="image" />
          </div>
          <div class="image-wrapper">
              <div style="color: black;">Type 2</div>
              <img src="./static/type2.png" alt="Billede 2" class="image" />
          </div>
          <div class="image-wrapper">
              <div style="color: black;">Type 3</div>
              <img src="./static/type3.png" alt="Billede 4" class="image" />
          </div>
          <div class="image-wrapper">
              <div style="color: black;">Type 4</div>
              <img src="./static/type4.png" alt="Billede 4" class="image" />
          </div>
          <div class="image-wrapper">
              <div style="color: black;">Type 5</div>
              <img src="./static/type5.png" alt="Billede 5" class="image" />
          </div>
          <div class="image-wrapper">
              <div style="color: black;">Type 6</div>
              <img src="./static/type6.png" alt="Billede 6" class="image" />
          </div>
          <div class="image-wrapper">
              <div style="color: black;">Type 7</div>
              <img src="./static/type7.png" alt="Billede 7" class="image" />
          </div>
      </div>
      <br>
      <button on:click={saveDiary} class="save-and-submit-button">Gem og indsend dine svar</button>

  </div>
</div>

