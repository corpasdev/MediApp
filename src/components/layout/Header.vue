<script setup>
import { ref } from 'vue'
import 'boxicons'
import logo from '../../assets/img/logo.png'

const showMenu = ref(false)
</script>

<template>
    <header class="header">
    <section class="topbar">
      <div class="container">
        <ul class="top-link">
          <li><a href="#">About</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <ul class="top-contact">
          <li><i class="fa fa-phone"></i>+880 1234 56789</li>
          <li>
            <i class="fa fa-envelope"></i
            ><a href="mailto:support@yourmail.com">support@yourmail.com</a>
          </li>
        </ul>
      </div>
    </section>
    <nav class="nav">
      <div class="logo">
        <img :src="logo"/>
        <p><span class="slogan">Medi</span>App</p>
      </div>
      <ul class="menu">
        <li>
          <a href=""><router-link :to="{ name: 'home' }">Home</router-link></a>
        </li>

        <li>
          <a class="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn bg-light dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </button>
            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link :to="{ name: 'ordenenes-medicas' }">Órdenes Médicas</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link :to="{ name: 'medicamentos' }">Medicamentos</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link :to="{ name: 'paciente' }">Pacientes</router-link></a
                >
              </li>
            </ul>
          </a>
        </li>
        <li>
          <a href=""><router-link :to="{ name: 'sign-up' }">Sign Up</router-link></a>
        </li>
        <li>
          <a href="#" class="button"><router-link style="color: white" :to="{ name: 'login' }">Login</router-link></a>
        </li>
      </ul>
      <box-icon
        @click="showMenu = !showMenu"
        class="icon-menu"
        name="menu"
        color="#1a76d1"
      ></box-icon>
    </nav>
    <ul v-show="showMenu" class="menu-mobile">
      <div class="menu-mobil-wrap">
        <li>
          <a href=""><router-link :to="{ name: 'home' }">Home</router-link></a>
        </li>

        <li>
          <a class="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn bg-light dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </button>
            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link :to="{ name: 'ordenenes-medicas' }">Órdenes Médicas</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link :to="{ name: 'medicamentos' }">Medicamentos</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link :to="{ name: 'paciente' }">Pacientes</router-link></a
                >
              </li>
            </ul>
          </a>
        </li>
        <li>
          <a href=""><router-link :to="{ name: 'sign-up' }">Sign Up</router-link></a>
        </li>
        <li>
          <a href="#" class="button"><router-link style="color: white" :to="{ name: 'login' }">Login</router-link></a>
        </li>
      </div>
    </ul>
  </header>
</template>

<style scoped>
/* General */
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
}



.dropdown-item {
  padding: 0 !important;
}

a {
  text-decoration: none;
  color: #392d3f;
}

.fa {
  color: #1a76d1;
  margin-right: 10px;
}

.topbar {
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  padding: 15px 0;
}

.topbar .container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 15px;
}

.top-link a,
.top-contact a {
  transition: 0.2s color ease-in;
}

.top-link a:hover,
.top-contact a:hover {
  color: #1a76d1;
  transition: .3s text-decoration ease-out;
  transition: .3s color ease-in;
}
.top-link,
.top-contact {
  display: flex;
  gap: 20px;
  font-size: 14px;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

/* Menu del header */
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
}

.icon-menu {
  display: none;
  width: 2rem;
  cursor: pointer;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 40px;
  height: 40px;
}

.logo p {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

.logo p .slogan {
  color: #1a76d1;
  font-weight: bold;
}

/* links de navegación */
.menu {
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  align-items: center;
}

.menu-mobile {
  border-top: 1px solid rgba(192, 192, 192, 0.632);
  width: 100%;
  display: none;
  transition: 0.2s display ease-out;
  justify-content: end;
  padding: 0;
  margin: 0;
  visibility: none;
}

.menu-mobil-wrap{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.5rem;
  padding-bottom: 2rem;
  background-color: rgba(192, 192, 192, 0.237);
}

.menu a {
  display: flex;
  font-weight: 400;
}

/*Media queries para el diseño Responsibe */
@media screen and (max-width: 991px) {
  .topbar .container {
    justify-content: space-around;
  }
}

@media screen and (max-width: 767px) {
  .topbar .container {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .icon-menu {
    display: block;
  }

  .nav {
    justify-content: space-between;
    padding: 10px 1.2rem;
  }

  .menu {
    display: none;
  }

  .menu-mobile {
    display: flex;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s ease-in-out, visibility 0.2s ease-in-out;
  }
}

@media screen and (max-width: 405px) {
  .top-contact {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}
</style>