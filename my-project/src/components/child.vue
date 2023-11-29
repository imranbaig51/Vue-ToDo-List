
<!-- <template>
  <div>
    <p>{{ messageFromParent }}</p>
    <p>{{ messageFromParentTwo }}</p>
  </div>
</template>

<script setup>
// Define the prop that will receive data from the parent
const props = defineProps(["messageFromParent", "messageFromParentTwo"]);

// Access the data passed from the parent through props

</script> -->

<template>
  <button @click="sendMessage">Send Message to Parent</button>
</template>

<script setup>
const sendMessage = () => {
  // Emit an event with the message
  emit('messageToParent', 'Hello from Child!');
};
</script>