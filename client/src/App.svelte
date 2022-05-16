<script>
  import Menu from "./pages/Menu.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import { onMount } from "svelte";
  import Nav from "./components/Nav.svelte";
  import Features from "./components/Features.svelte";
  import Posts from './components/Posts.svelte';
  let blogPosts = [];
  let food = [];
  let featuredFood = [];

  const getPosts = async () => {
    const response = await fetch("http://localhost:5000/api/blogposts");
    const data = await response.json();
    blogPosts = data.blogPosts;
  };
  const getFood = async () => {
    const response = await fetch("http://localhost:5000/api/food");
    const data = await response.json();
    food = data.food;
    featuredFood = food.slice(0, 3);
  };

  onMount(() => {
    getPosts();
    getFood();
  });
</script>

<Router>
  <main>
    <header id="header">
      <img id="logo" alt="logo" src="assets/logo.jpg" />
      <div id="nav">
        <Nav />
      </div>
    </header>
    <Route path="/">
      <div id="body">
        <div id="blogs">
          <Posts posts={blogPosts}/>
        </div>
        <div id="sample-menu">
          Features Items!
          <Features features={featuredFood}/>
        </div>
      </div>
      </Route>
    <Route path="menu">
      <Menu />
    </Route>
  </main>
</Router>

<style>
  /* *{
		overflow: none;
	} */
  main {
    background-color: #f5f5f5;
  }
  #body {
    display: flex;
    flex-direction: row;
    height: 90vh;
  }

  #nav {
    font-size: 1.5em;
    width: 100vw;
    background-color: #23314e;
    color: white;
  }
  #header {
    display: flex;
    height: 10vh;
  }
  #logo {
    width: 15vw;
    justify-content: flex-start;
  }
  #sample-menu {
    background-color: #a0d0ff;
    border: thin solid black;
    height: 90vh;
    width: 20vw;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
