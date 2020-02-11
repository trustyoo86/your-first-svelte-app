<script lang="typescript">
  export let test = 'mistery';
  const action: string = 'Click!';
  
  function handleClick(): void {
    alert('click!!');
  }
</script>

<div>
  <button on:click={handleClick}>{test} {action}</button>
</div>

<style>
</style>