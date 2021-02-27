<template>
  <div class="col-lg-4 col-md-4 col-sm-6 col-12 ">
    <div class="single_product">
      <div class="product_thumb">
        <a class="primary_img" href="product-details.html"><img :src="image" alt=""></a>
        <a class="secondary_img" href="product-details.html"><img :src="imageBig" alt=""></a>
        <div class="label_product">
          <span class="label_sale">Sale</span>
          <span class="label_new">New</span>
        </div>
        <div class="action_links">
          <ul>
            <li class="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span class="lnr lnr-cart"></span></a></li>
            <li class="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span class="lnr lnr-magnifier"></span></a></li>
            <li class="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span class="lnr lnr-heart"></span></a></li>
            <li class="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span class="lnr lnr-sync"></span></a></li>
          </ul>
        </div>
      </div>
      <div class="product_content grid_content">
        <h4 class="product_name"><a href="product-details.html">{{ title }}</a></h4>
        <p><a href="#">{{ category }}</a></p>
        <div class="price_box">
          <span class="current_price">$26.00</span>
          <span class="old_price">$362.00</span>
        </div>
      </div>
      <div class="product_content list_content">
        <h4 class="product_name"><a href="product-details.html">{{ title }}</a></h4>
        <p><a href="#">{{ category }}</a></p>
        <div class="price_box">
          <span class="current_price">$26.00</span>
          <span class="old_price">$362.00</span>
        </div>
        <div class="product_desc">
          <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
        </div>
        <div class="action_links list_action_right">
          <ul>
            <li class="add_to_cart"><a href="cart.html" title="Add to cart">Add to Cart</a></li>
            <li class="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span class="lnr lnr-magnifier"></span></a></li>
            <li class="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span class="lnr lnr-heart"></span></a></li>
            <li class="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span class="lnr lnr-sync"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    image: {
      type: String,
      required: true
    },
    imageBig: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
