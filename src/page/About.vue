<template>
  <div>
    <Navbar />
    <section class="about">
      <h1 class="heading">about <span>me</span></h1>

      <div class="row">
        <div class="info-container">
          <h1>personal info</h1>

          <div class="box-container">
            <div class="box">
              <h3><span>name : </span> {{ name }}</h3>
              <h3><span>age : </span> {{ age }}</h3>
              <h3><span>email : </span> {{ email }}</h3>
              <h3><span>address : </span> {{ address }}</h3>
            </div>

            <div class="box">
              <h3><span>freelance : </span> unavailable</h3>
              <h3><span>skill : </span>Financail Engineer</h3>
              <h3><span>experience : </span> 1 years</h3>
              <h3><span>language : </span> Thai / Portugues / Spainsh</h3>
            </div>
          </div>

          <a href="/profilewithcss/files/resume.pdf" class="btn">
            download CV <i class="fas fa-download"></i>
          </a>
        </div>

        <div class="count-container">
          <div class="box">
            <h3>1</h3>
            <p>years of experience</p>
          </div>

          <div class="box">
            <h3>1</h3>
            <p>happy clients</p>
          </div>

          <div class="box">
            <h3>2</h3>
            <p>project completed</p>
          </div>

          <div class="box">
            <h3>6</h3>
            <p>Certificates</p>
          </div>
        </div>
      </div>
    </section>

    <!-- about section ends -->

    <!-- skills section starts  -->

    <section class="skills">
      <h1 class="heading"><span>my</span> skills</h1>

      <div class="box-container">
        <div class="box">
          <img src="images/icon-1.png" />
          <h3>html</h3>
        </div>
        <div class="box">
          <img src="images/icon-2.png" />
          <h3>css</h3>
        </div>
        <div class="box">
          <img src="images/icon-3.png" />
          <h3>javascript</h3>
        </div>
        <div class="box">
          <img src="images/icon-4.png" />
          <h3>sass</h3>
        </div>
        <div class="box">
          <img src="images/icon-5.png" />
          <h3>angular</h3>
        </div>
        <div class="box">
          <img src="images/icon-6.png" />
          <h3>react.js</h3>
        </div>
      </div>
    </section>

    <!-- skills section ends -->

    <!-- education section starts  -->

    <section class="education">
      <h1 class="heading"><span>my</span> experience</h1>

      <div class="box-container" >
        <div class="box" v-for="e in experaince" :key="e.years">
          <i class="fas fa-briefcase"></i>
          <span>{{ e.years }}</span>
          <h3>{{ e.company }}</h3>
          <p>{{ e.work }}</p>
        </div>
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
      name: "Krittin Hiangrat",
      age: "24",
      email: "kaokong.spk@hotmail.com",
      address: " Mahasarakham, Thailand 44000",
      experaince: [
        {
          years: "2017- 2018",
          company: "XV Seminario Paranaense De Educacao",
          work: "O XV SPM é um evento de caráter técnico-científico destinado a meliponicultores, acadêmicos e profissionais que tem relação com a área. Nesta edição, o seminário está sendo organizado pela Federação dos Trabalhadores Rurais Agricultores Familiares do Estado do Paraná (FETAEP), devido ao crescente interesse pela meliponicultura entre os agricultores familiares, que buscam a diversificação na propriedade, além da comunidade científica e o próprio mercado de alimentos. tO principal objetivo do evento é compartilhar o conhecimento técnico e científico na criação de abelhas-sem-ferrão. Por meio de palestras e atividades do evento, realizadas on-line, espera-se proporcionar troca de experiências e informações atuais no âmbito da meliponicultura, além de estimular a geração de renda para a agricultura familiar. ",
        },
        {
          years: "2017 - 2018",
          company: "PTT Digital Solutions Company Limited",
          work: "Front-end coding to develop web applications follows by mock-up screen design. And back-end codingand test to configuration workflows and business processes.",
        },
        {
          years: "2018 - 2018",
          compny: "Thai Beverage PLC",
          work: "Develop new features to facilitate related procedures and tools if necessary, Troubleshoot, test, andmaintain the core product software and databases to ensure strong optimization and functionality.",
        },
        {
          years: "2019 - 2020",
          compny: "Cigna",
          work: "Assist the system analyst in conduct analysis, architecture, design database model for the new application.",
        },
        {
          years: "2019 - 2020",
          compny: "EMETWORKS",
          work: "Develop new features to facilitate related procedures and tools if necessary.",
        },
        {
          years: "2020 - 2021",
          compny: "uTech Solutions",
          work: "Assist the system analyst in conduct analysis, architecture, design database model for the new application.",
        },
      ],
    };
  },
};
</script>

<style>
</style>