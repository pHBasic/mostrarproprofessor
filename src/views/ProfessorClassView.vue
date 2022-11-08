<template>
    <ProfessorFirstPageVue v-if="page == 1"/>
    <ProfessorSecondPageVue v-if="page == 2"/>
    <div class="wrapper-buttons">
        <PreviousButtonComponent v-if="page > 1" @click="page--"/>
        <NextButtonComponent @click="page++"/>
    </div>
</template>

<script>
import ProfessorFirstPageVue from '../components/ProfessorClass/ProfessorFirstPage.vue';
import ProfessorSecondPageVue from '../components/ProfessorClass/ProfessorSecondPage.vue'
import NextButtonComponent from '../components/NextButtonComponent.vue'
import PreviousButtonComponent from '../components/PreviousButtonComponent.vue'

export default {
    data: () => ({
        page: 1
    }),
    components: {
        ProfessorFirstPageVue,
        ProfessorSecondPageVue,
        NextButtonComponent,
        PreviousButtonComponent,
    }
}
</script>

<style scoped>
.wrapper-buttons{
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}
</style>