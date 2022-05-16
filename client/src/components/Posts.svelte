<script>
export let posts
console.log(posts[0])
</script>

<div id="blogs">
    <div id="main-post">
      {#if posts[0]}
        <div id="title">{posts[0].title}</div>
        <img id="main-image" alt={posts[0].title} src={posts[0].image} />
        <div id="entry">{posts[0].entry}</div>
      {:else}
        <div>Loading...</div>
      {/if}
    </div>
  </div>
  <div id="recent-posts">
    {#each posts as post}
      <div class="title">{post.title}</div>
    {:else}
      <div>Loading...</div>
    {/each}
  </div>

<style>
  #blogs {
    display: flex;
    flex-direction: column;
    width: 80vh;
    background-color: #f5f5f5;
    color: black;
  }
  #title {
    background-color: #495f87;
    font-size: 2.5em;
    font-weight: bold;
  }
  #main-post {
    height: 60vh;
    box-shadow: thin solid black;
    width: 80vw;
    border: thin solid black;
  }
  #main-image {
    width: 20%;
  }
  #recent-posts {
    height: 30vh;
    width: 80vw;
  }
</style>