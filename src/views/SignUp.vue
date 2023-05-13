<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import Input from '../components/common/Input.vue'
import Picture from '../components/common/Picture.vue'

export default {
  setup (){
    const register_form = ref({})
    const store = useStore();

    const register = async () => {
      store.dispatch('register', register_form.value);
    }

    return {
      register_form,
      register
    }
  }
}


</script>

<template>
  <Picture class="hero">
    <h1>Register</h1>
    <nav class="nav"><a href="http://"><router-link :to="{ name: 'home' }">Home</router-link></a><span>></span><a href="http://"><router-link :to="{ name: 'sign-up' }">Register</router-link></a></nav>
  </Picture>
  <!-- Formulario de Inicio de Sesión -->
  <main class="container-login">
    <article class="login">
      <Picture class="picture" />
      <div class="wrappaper">
        <form action="" class="form-login" @submit.prevent="register">
            <h3>Register Here</h3>
            <p>Already have an account ? <a href="#" class="lost-pass">Login Here</a></p>
            <div class="inpust-primary">
              <Input type="text" v-model="register_form.firstname" class="input-form" placeholder="First Name"/>
              <Input type="text" v-model="register_form.lastname" class="input-form" placeholder="Last Name"/>
            </div>
            <div class="inpust-secondary">
              <Input type="phome" v-model="register_form.phome"  class="input-form"  placeholder="Phome"/>
              <input type="email" class="input-form" placeholder="Your Email"  v-model="register_form.email">
            </div>
            <div class="inpust-tree">
              <input type="password" v-model="register_form.password" class="input-form" placeholder="Password">
              <Input type="password" v-model="register_form.confirpass" class="input-form" placeholder="Confirm Password"/>
            </div>
          <button class="button" type="submit">Register</button>
          <p class="other">
            <label class="form-check-label" for="flexCheckDefault"
              ><input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />Remember me</label
            >
            <a href="#" class="lost-pass">Lost your password ?</a>
          </p>
        </form>
      </div>
    </article>
  </main>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 330px;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/img/bread-bg.jpg);
  background-size: cover;
  background-position: center center;
  z-index: 0;
}

nav a:hover{
  color: rgba(255, 255, 255, 0.676);
  transition: .3s text-decoration ease-out;
  transition: .3s color ease-in;
}
.hero h1 {
  color: white;
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 1.3rem;
}

.hero a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}



.hero::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1a76d1aa;
  z-index: 1;
}


.nav,
h1 {
  z-index: 2;
}
.nav span {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 1rem;
}

.picture {
  flex: 1;
  width: 540px;
  height: 100%;
  background-image: url(../assets/img/signup-bg.jpg);
  background-size: cover;
  background-position: center center;
  border-radius: 10px 0 0 10px;
}

.container-login {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 6rem 0;
}

.login {
  display: flex;
  box-shadow: 0 0 3px silver;
  width: 90%;
  
}

.login {
  border-radius: 10px;
} 


h3 {
  font-family: 'Poppins' sans-serif;
  font-weight: bold;
  font-size: 2rem;
}

h3::after {
  content: '';
  width: 54px;
  border: 1.2px solid blue;
  display: block;
  margin-top: 8px;
}

p {
  margin-bottom: 4rem;
}

.wrappaper {
  flex: 1;
  display: flex;
  justify-content: end;
}
.form-login {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 0 0 10px 10px;
}

.inpust-primary,
.inpust-secondary {
  display: flex;
  gap: 1.8rem;
  justify-content: space-between;
  margin-top: 2rem;
}

.inpust-secondary {
  margin: 1.5rem 0;
}

.inpust-tree {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.inpust-tree input{
    flex-grow: 1;
}
.other {
  display: flex;
  margin-top: 1rem;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.form-check-input {
  margin-right: 0.5rem;
}

.form-check-label {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 991px) {
  .hero {
    height: 30vh;
    transition: 0.2s height ease-in;
  }

  .hero h1 {
    font-size: 1.5rem;
  }

  .hero a {
    font-size: 1rem;
  }

  .login {
    flex-direction: column;

    width: 690px;
  }

  .picture,
  .form-login {
    flex: none;
    width: 100%;
  }

  .picture {
    height: 340px;
    border-radius: 10px 10px 0 0;
  }

  .inpust-primary,
  .inpust-secondary {
    flex-direction: column;
  }
}

@media screen and (max-width: 767px) {
  .login {
    flex-direction: column;
    width: 95%;
  }

}
</style>