<script>
import { onMount } from 'svelte';
import axios from "axios"
import Nav from './components/Nav.svelte';
import {posts} from './stores/postsstore.js'

	onMount(async () => {
		fetch("http://localhost:5000/api/blogposts")
		.then(response => response.json())
		.then(data =>{
			console.log(data)
			$posts.set(data)
		}).catch(error =>{
			console.log(error)
		})
	})
</script>

<main>
	<header id='header'>
		<img id='logo' alt="logo" src="assets/logo.jpg">
			<div id='nav'>
				<Nav/>
			</div>		
	</header>
	<div id='body'>
		<div id='blogs'>
			<div id='main-post'>
				<div id='title'>title</div>
				<p>img</p>
				<h2>Entry</h2>
				{#each $posts as post}
				<div class='title'>{post.title}</div>
				{/each}
			</div>
			<div id='recent-posts'>This is going to be other recent blog posts</div>
		</div>
		<div id=sample-menu>
			This is going to be a sample menu with featured items
		</div>
	</div>
</main>

<style>
	*{
		/* border: thin red solid; */
		overflow: none;
	}
	main{
		background-color: #f5f5f5;
	}
	#body{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		height: 90vh;
	}
	#blogs{
		width: 80vw;
		background-color: #F5F5F5;
		color:black;
	}
	#title{
		background-color: #495F87;
		font-size: 2.5em;
		font-weight: bold;
	}
	#sample-menu{
		background-color: #A0D0FF;
		box-shadow: thin solid black;
		height: 90vh;
	}
	#main-post{
		height: 60vh;
		box-shadow: thin solid black;
	}
	#recent-posts{
		height: 30vh;
		box-shadow: thin solid black;
	}
	#nav{
		font-size: 1.5em;
		width: 100vw;
		background-color: #23314E;
		color: white;
	}
	#header{
		display:flex;
		height: 10vh;
	}
	#logo{
		width: 15vw;
		justify-content: flex-start;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>