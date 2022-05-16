<script>
export let features
console.log(features[0])
</script>
{#if features[0]}
{#each features as foods}
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
{:else}
<div>Loading....</div>
{/if}
<style>
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
        width:200px;
        height:350px;
        }
    .image{
        width: 200px;
    }
</style>