<template>
    <div class="home">
        <Welcome />
    </div>
</template>

<script>
import Welcome from '../components/WelcomeComponent.vue'

export default {
    components: {
        Welcome,
    }
}
</script>

<style scoped>
  .home{
    min-height:100%;
  }
</style>