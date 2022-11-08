<template>
    <div style="display:flex; flex-direction:column; justify-content: space-around; align-items: center">
        <div class="title">
            <h1 style="margin-right: 9px; color: #ec1464">Título</h1>
            <h1>do seu anúncio</h1>
        </div>
        <h4>(12 palavras no mínimo)</h4>
        <textarea v-model="text" class="textbox" placeholder="ex: Formado no conservatório e artista plástico dá aulas de cantos violão para todos os níveis. Metodologia personalizada e descontraída!"></textarea>
</div>
</template>

<script>
import TextboxComponent from '../TextboxComponent.vue';

export default{
    components:{
        TextboxComponent
    }
}   
</script>

<style scoped>
.title{
    display:flex;
    flex-direction: row;
    justify-content: center;
}
h1{
    text-align: center;
}
h4{
    text-align: center;
    margin: -40px 270px 0 0;
}

::placeholder{
    color: #455a64b7;
    opacity: 0.5;
}

.textbox{
    border: hidden;
    border-radius: 10px;
    background-color: #dbd2d5;
    color: #455A64;
    font-family: 'Questrial', sans-serif;
    font-size: 12pt;
    width: 600px;
    height: 200px;
    margin-top: 50px;
    resize: none;
    padding: 10px;
    text-align: justify;
}
</style>