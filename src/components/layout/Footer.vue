<template>
    <footer class="footer">
      <p class="legal">
        <span>Developed</span>  by <a href="https://github.com/corpasdev"  target="_blank">Brandon Corpas</a>  and <a href="https://cooweb.co" target="_blank">Cooweb SAS</a>
      </p>
    </footer>
</template>
<style scoped>
   .footer {
    padding: 0;
    width: 100%;
    color: white;
    background-color: #1A76D1;
    display: flex;
    justify-content: center;
    padding: 20px;
   }
  
   a {
    text-decoration:underline;
    color: white;
    transition: .3s text-decoration ease-out;
    transition: .3s color ease-in;
   }
  
   a:hover {
    text-decoration:none;
    color: rgba(255, 255, 255, 0.696);
   }
  
   .legal {
    margin-bottom: 0;
    color: white;
    text-align: center;
   }
</style>
  