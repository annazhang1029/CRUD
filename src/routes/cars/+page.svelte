<script lang="ts">
  export let data;
  const cars = data.cars
  //const users = data.users
</script>

<h1>Airbnb listings and reviews</h1>

<ul>
  {#each cars as car}
    <li>
      <h3>{car.brand}</h3>
      <p>{car.mileage}</p>
    </li>
  {/each}
</ul>

<h1>Submit a new car</h1>
<form class="container" method="post" action="/">
  <div class="form-group">
    <label for="fname">Brand:</label>
    <input class="form-control" type="text" name="brand" placeholder="tesla"><br><br>
  </div>
  <div class="form-group">
    <label for="fname">Mileage:</label>
    <input class="form-control" type="text" name="mileage" placeholder="enter mileage"><br><br>
  </div>
  <!-- <div class="form-group">
    <label for="fname">Review:&nbsp&nbsp&nbsp&nbsp&nbsp</label>
    <textarea class="form-control"></textarea>
  </div> -->
  <button>submit</button>
</form>

<!-- <ul>
  {#each users as user}
    <li>
      <h3>{user.name}</h3>
      <p>{user.review}</p>
    </li>
  {/each}
</ul> -->