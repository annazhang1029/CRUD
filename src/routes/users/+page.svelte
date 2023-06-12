<script lang="ts">
    export let data;
    const users = data.users
  </script>
  
  <h1>restaurants in Durham</h1>
  
  
  <ul>
    {#each users as user}
      <li>
        <h3>{user.name}</h3>
        <p>{user.review}</p>
      </li>
    {/each}
  </ul>

  <h1>Here I'm trying something new</h1>
<form class="container" method="post" action="/">
  <div class="form-group">
    <label for="fname">Restaurant:</label>
    <input class="form-control" type="text" name="restaurant" placeholder="enter restaurant name"><br><br>
  </div>
  <div class="form-group">
    <label for="fname">Review:</label>
    <input class="form-control" type="text" name="review" placeholder="enter review"><br><br>
  </div>
  <!-- <div class="form-group">
    <label for="fname">Review:&nbsp&nbsp&nbsp&nbsp&nbsp</label>
    <textarea class="form-control"></textarea>
  </div> -->
  <button>submit</button>
</form>