<template>
  <footer class="footer_widgets footer_border">
    <div class="container">
      <TopFooter />
    </div>
    <BottomFooter />
  </footer>
</template>

<script>
import TopFooter from './TopFooter'
import BottomFooter from './BottomFooter'
export default {
  name: 'MainFooter',
  components: {
    TopFooter,
    BottomFooter
  }
}
</script>
