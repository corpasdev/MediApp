
<script setup>
import img1 from '../assets/img/slider.jpg'
import img2 from '../assets/img/slider1.jpg'
import img3 from '../assets/img/slider2.jpg'
import img4 from '../assets/img/blog2.jpg'
import img5 from '../assets/img/blog3.jpg'
import {useStore} from 'vuex';
import 'boxicons'
import { ref } from 'vue'
const showMenu = ref(false)


  
    const store = useStore();


</script>
<template>
  <main>
    <div class="container-bar">
      <button class="btn-light" @click="$store.dispatch('logout')">Logout</button>
    </div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active bg-dark"
          aria-label="Diapositiva 1"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Diapositiva 2"
          class="bg-dark"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Diapositiva 3"
          class="bg-dark"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="img1" class="d-block w-100" alt="">

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>
                <font style="vertical-align: inherit"
                  ><font class="text-primary fw-bold" style="vertical-align: inherit">Bienvenido Doctor.</font></font
                >
              </h1>
              <p>
                <font style="vertical-align: inherit"
                  ><font class="text-muted" style="vertical-align: inherit"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas corporis doloremque esse perferendis, ex quam maxime sapiente, commodi laboriosam iure, animi perspiciatis illum nulla quae. Quod praesentium tempore error
                    </font
                  ></font
                >
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">Regístrese hoy</font></font
                  ></a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="img2" class="d-block w-100" alt="">

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>
                <font style="vertical-align: inherit"
                  ><font class="text-primary fw-bold" style="vertical-align: inherit">Bienvenido Doctor.</font></font
                >
              </h1>
              <p>
                <font style="vertical-align: inherit"
                  ><font class="text-muted" style="vertical-align: inherit"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas corporis Lorem, ipsum dolor.</font
                  ></font
                >
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">Regístrese hoy</font></font
                  ></a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="img3" class="d-block w-100" alt="">

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>
                <font style="vertical-align: inherit"
                  ><font class="text-primary fw-bold" style="vertical-align: inherit">Bienvenido Doctor.</font></font
                >
              </h1>
              <p>
                <font style="vertical-align: inherit"
                  ><font class="text-muted" style="vertical-align: inherit"
                    >Lorem ipsum dolor sit amet cons Lorem ipsum dolor sit amet.</font
                  ></font
                >
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">Regístrese hoy</font></font
                  ></a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
        <span class="visually-hidden"
          ><font style="vertical-align: inherit"
            ><font style="vertical-align: inherit">el anterior</font></font
          ></span
        >
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
        <span class="visually-hidden"
          ><font style="vertical-align: inherit"
            ><font style="vertical-align: inherit">el siguiente</font></font
          ></span
        >
      </button>
    </div>

    <!-- Marketing messaging and featurettes
================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing mb-5">
      <!-- Three columns of text below the carousel -->
      <!-- /.row -->

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            <font style="vertical-align: inherit"
              ><font style="vertical-align: inherit">Primer título destacado. </font></font
            ><span class="text-muted"
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">¡Va a sorprenderte por completo!</font></font
              ></span
            >
          </h2>
          <p class="lead">
            <font style="vertical-align: inherit"
              ><font style="vertical-align: inherit"
                >Lorem ipsum dolor sit amet.</font
              ><font style="vertical-align: inherit"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates facere vero quidem!
                 </font
              ><font style="vertical-align: inherit"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio rerum reprehenderit iure, dicta quos aliquid delectus earum a unde dolore?</font
              ><font style="vertical-align: inherit"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</font
              ></font
            >
          </p>
        </div>
        <div class="col-md-5">
          <img :src="img4" alt="">
          <title>Placeholder</title>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette ">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            <font style="vertical-align: inherit"
              ><font style="vertical-align: inherit">Oh sí, eso es bueno. </font></font
            ><span class="text-muted"
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Ver por ti mismo.</font></font
              ></span
            >
          </h2>
          <p class="lead">
            <font style="vertical-align: inherit"
              ><font style="vertical-align: inherit"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vel sequi perferendis, reprehenderit nihil recusandae deleniti eius fugiat, veritatis ipsa exercitationem ipsum! Quo id ea accusantium, totam dignissimos explicabo vel!</font
              ></font
            >
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img :src="img5" alt="">
            <title>Placeholder</title>
           
        </div>
      </div>

      <!-- /END THE FEATURETTES -->
    </div>
    <!-- /.container -->

    <!-- FOOTER -->
  </main>
</template>

<style scoped>
.marketing p {
  font-size: 1rem;
}

.container-bar {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}
</style>
