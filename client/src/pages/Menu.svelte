<script>
    import { onMount } from 'svelte';
    import Nav from '../components/Nav.svelte';
    let food = []
    
    const getFood = async () =>{
        const response = await fetch("http://localhost:5000/api/food")
        const data = await response.json()
        food = data.food
        console.log(food)
    }
    
    onMount(()=>{
        getFood()
    })
    </script>
        <div id='menu-body'>
            {#each food as foods}
                    <div class='food-card'>
                        <img class='image' src={foods.image} alt='Food'/>
                        <div class='name'>
                            {foods.name}
                        </div>
                        <div class='description'>
                            {foods.description}
                        </div>
                        <div class='price'>
                            ${foods.price}
                        </div>
                    </div>
             {:else}
                <div>Loading...</div>
            {/each}
                </div>
    
    <style>
        #menu-body{
            display: flex;
            flex-direction: row;
            height: 90vh;
        }
        .name{
            font-size: large;
            font-weight: bold;
        }        
        .description{
            font-size: medium;
            font-weight: bold;
        }
        .food-card{
            display: flex;
            flex-direction: column;
            text-align: center;
            border: thin solid black;
            box-shadow: thin solid black;
            width:200px;
            height:350px;
        }
        .image{
            width: 200px;
        }
        
    </style>