<template>
<div class="my-5 mx-5">
  <b-card
    title="Profile"
    img-src="https://picsum.photos/458/354?image=0&blur"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
        <pre>
     My Name Irsan Ramadhan
     Im 26 Years Old
     Bachelor Degree of Informatics
     Frontend Developers
        </pre>
        <b-link href="https://www.linkedin.com/in/irsanramadhan">
                <b-icon-linkedin></b-icon-linkedin>

        </b-link>
               <b-link href="https://twitter.com/ramadhanirsan" class="mx-2">
                <b-icon-twitter></b-icon-twitter>

        </b-link>
    </b-card-text>


  </b-card>
</div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    paidOrder:Number,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
