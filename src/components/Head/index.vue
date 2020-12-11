<template>
  <div>
    <ul>
      <li>
        <router-link :to="{ name: 'service' }">Service</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    }
  }
}
</script>
