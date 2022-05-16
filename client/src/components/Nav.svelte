<script>
	import Menu from './../pages/menu.svelte';
	import { Router, Link, Route } from "svelte-navigator";
</script>

<nav> 
		<ul class='list'>
			<li><Link to="/">Home</Link></li>
			<li><Link to="menu">Menu</Link></li>
			<li><Link to="about">About Us</Link></li>
		</ul>
</nav>


<style>
.list {
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
    color: white !important;
    text-decoration: none;
}

li {
    display:inline-block
}
</style>