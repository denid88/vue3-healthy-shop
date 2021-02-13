<template>
  <header>
    <div class="main_header">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </div>
  </header>
</template>

<script>
import TopHeader from './TopHeader'
import MiddleHeader from './MiddleHeader'
import BottomHeader from './BottomHeader'
export default {
  name: 'MainHeader',
  components: {
    BottomHeader,
    MiddleHeader,
    TopHeader,
  }
}
</script>
