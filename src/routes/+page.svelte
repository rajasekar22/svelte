<script>
    let count = $state(0);
    let triple = $derived(count * 3);

</script>

<h1>count {count}, triple {triple}</h1>
<button onclick={()=> count++}> increment </button>
<button onclick={()=> count--}> decrement </button>

