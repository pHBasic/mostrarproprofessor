<template>
    <div :class="isSelected ? 'checkboxSelected': 'checkbox'" @click="isSelected = !isSelected; selection();">
        <h1 class="title">Matemática</h1>
        <h1 class="select"> {{ select }}</h1>
    </div>
</template>

<style scoped>
    .checkbox{
        padding: 0px 10px;
        border-style: solid;
        border-color: #ec1464;
        border-radius: 10px;
        color:#ec1464;
        background-color: white;
        transition-duration: 0.5s;
        max-width: 250px;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .checkboxSelected{
        padding: 0px 10px;
        border-style: solid;
        border-color: #ec1464;
        border-radius: 10px;
        color:white;
        background-color: #ec1464;
        transition-duration: 0.5s;
        max-width: 250px;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .title{
        font-size: 12pt;
        font-family: 'Questrial', sans-serif;
    }

    .select{
        font-size: 15pt;
        align-self: flex-start;
        font-family: 'Questrial', sans-serif;
    }
</style>

<script>
export default{
    data: () => ({
        select: "+",
        isSelected: false,
        subjectName: ['Matemática','Geografia','História', 'Video Game', 'Português', 'Inglês', 'Japonês', 'Programação']
    }),
    methods:{
        selection(){
            if(this.isSelected)
                this.select = "-"
            else
                this.select = "+"
        },
        chooseName(list){
            let name = Math.floor(Math.random() * this.subjectName.length);
            return this.subjectName[name]
        }
    },
}

</script>