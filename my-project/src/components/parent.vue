<!-- <template>
  <div>
    <child
      :messageFromParent="parentMessage"
      :messageFromParentTwo="parentMessageTwo"
    />
  </div>
</template>

<script setup>
import child from "./child.vue";

// Define data to be passed to the child component
const parentMessage = "Hello from Parent!";
const parentMessageTwo = "hi";
</script> -->

<template>
  <div>
    <p>{{ messageFromChild }}</p>
    <ChildComponent @messageToParent="handleMessageFromChild" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch} from "vue";
import ChildComponent from './child.vue';


// Define a variable to store the message from the child
const messageFromChild = ref('');

// Define a function to handle the message from the child
const handleMessageFromChild = (message) => {
  messageFromChild.value = message;
};
</script>
