<template>
  <div class="header_top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <div class="language_currency">
            <AppOptions />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="header_social text-right">
            <AppSocial />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppOptions from '../ui/AppOptions'
import AppSocial from '../ui/AppSocial'
export default {
  name: 'TopHeader',
  components: {
    AppSocial,
    AppOptions
  }
}
</script>
