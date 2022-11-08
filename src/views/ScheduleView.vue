<template>
    <div class="buttons">
        <!-- <ButtonComponent :pathRoute="route" :pathName="name" /> -->
        <!-- <ButtonComponent pathRoute="/agendar/student" pathName="Estudante" /> -->
        <RouterLink class="path-button" to="/agendar/professor">Professor</RouterLink>
        <RouterLink class="path-button" to="/agendar/estudante">Aluno</RouterLink>
        <Checkbox />
    </div>

</template>

<script>
// import ButtonComponent from '../components/PathButtonComponent.vue'
import Checkbox from '../components/Schedule/CheckboxComponent.vue'

// export default {
//     data: () => ({
//         route: '/agendar/professor',
//         name: 'Professor'
//     }),

//     components: {
//         ButtonComponent,
//     }
// }
</script>

<style>
    .buttons{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .path-button{
        background-color: #ec1464;
        color: white;
        border-radius: 10px;
        padding: 5px;
        width: 120px;
        font-size: 20pt;
        text-align: center;
        transition: 0.3s;
        margin: 250px 10px;
    }

    @media (hover:hover) {
        .path-button:hover {
            border-radius: 5px;
        }
    }
</style>