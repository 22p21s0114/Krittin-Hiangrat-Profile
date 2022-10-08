<template>
    <div>
  <Navbar />
  <section class="home">

<div class="image">
    <img src="images/profile.png" alt="">
</div>

<div class="content">
    <h3>hi, i am {{name}}</h3>
    <span>{{job}}</span>
    <p>{{content}}</p>
    <a href="" class="btn"> about me <i class="fas fa-user"></i> </a>
</div>

</section>
</div>
</template>

<script>
import Navbar from '../components/navbar.vue';
export default {
    components: { Navbar },
    data() {
        return {
             name : 'Krittin Hiangrat',
             job : 'Engineer Student',
             content:'Organized profressional bringing diverse experience in customer service , business management and project coordination.'
        }
    }
}
</script>

<style>

</style>