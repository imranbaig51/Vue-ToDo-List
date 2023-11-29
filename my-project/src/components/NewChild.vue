<template>
  <button @click="sendMessage">Send Message to Parent</button>
</template>

<script setup>
const sendMessage = () => {
  // Emit an event with the message
  emit('messageToParent', 'Hello from Child!');
};
</script>
