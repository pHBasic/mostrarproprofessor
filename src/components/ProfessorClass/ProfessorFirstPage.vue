<template>
    <div class="title">
        <h1>Você dá aula de</h1>
        <h1 v-if="isSelected" style="margin-left: 9px; color: #ec1464">{{ subject }}</h1>
	<h1 v-else style="margin-left: 9px; color: #ec1464">_________</h1>
    </div>
    
    <div class="wrapper-subjects">
        <CheckboxComponent @click="isSelected = !isSelected"/>
        <CheckboxComponent @click="isSelected = !isSelected"/>
        <CheckboxComponent @click="isSelected = !isSelected"/>
        <CheckboxComponent @click="isSelected = !isSelected"/>
        <CheckboxComponent @click="isSelected = !isSelected"/>
        <CheckboxComponent @click="isSelected = !isSelected"/>
        <CheckboxComponent @click="isSelected = !isSelected"/>
    </div>
</template>

<script>
import CheckboxComponent from '../Schedule/CheckboxComponent.vue'

export default {
    data: () => ({
        subject: "Matemática",
	isSelected: false,
    }),
    components:{
        CheckboxComponent,
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
.wrapper-subjects{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.checkbox{
    width: 100%;
    margin-bottom: 10px
}
.checkboxSelected{
    width: 100%;
    margin-bottom: 10px
}
</style>