<template>
  <div>
    <Navbar />
    <section class="projects">
      <h1 class="heading"><span>my</span> project</h1>
      <h3>{{ namepro }}</h3>
      <p>{{ detail }}</p>
      <div class="box-container">
        <iframe
          width="720"
          height="405"
          src="https://www.youtube.com/embed/603Hc7ycIS0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      namepro: "Capseer",
      detail:
        "การออกแบบและสร้างอุปกรณ์เครื่องมือทางการแพทย์ Capsule endoscopy เพืิ่อส่องลำไส้เล็ก โดยสามารถระบุตำแหน่ง Gi Bldeeing ได้",
    };
  },
};
</script>

<style>
</style>