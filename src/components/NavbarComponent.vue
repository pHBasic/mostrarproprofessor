<template>
   <nav class="nav">
    <div class="wrapper-routes">
      <RouterLink class="routes" to="/">Início</RouterLink>
      <RouterLink class="routes" to="/about">Sobre</RouterLink>
    </div>
      <img src="../assets/educationbranco1.png" class="logo" width="100">
    <div class="perfil-wrapper">
      <RouterLink class="user" to="/agendar/professor">Dar Aulas</RouterLink>
      <RouterLink class="routes" to="/agendar/estudante">Cadastrar</RouterLink>
    </div>
   </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ec1464;
    }
	.wrapper-routes {
    display: flex;
		justify-content: flex-start;
		margin-left: 10px;
		width: 25%;
	}
	.routes {
		margin-right: 10px;
		padding: 0 5px;
		font-size: 20px;
		font-weight: 500;
    margin-top: 5px;
	}

    .perfil-wrapper {
      display: flex;
		  align-items: center;
		  justify-content: flex-end;
		  width: 25%;
		  margin-right: 20px;
    }
    .user {
		  margin-left: 10px;
		  font-size: 20px;
		  font-weight: 500;
		  padding: 0 5px;
      margin-top: 5px;
    }
    .logo{
      padding: 15px;
      /* background-color: white;
      border: #ec1464 solid;
      border-radius: 5px; */

    }
</style>