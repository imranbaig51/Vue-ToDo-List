<template>
 <button @click="OnClickCounter">
    <img src="../assets/images/icons8-add-64.png" width="50">
 </button>
</template>

<script setup>
const props = defineProps(['OnClickCounter'])

// console.log(props.count)

</script>