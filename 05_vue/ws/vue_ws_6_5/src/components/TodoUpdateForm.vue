<template>
    <div class="update-form">
        <button class="update-button" @click="updateTodo">수정하기</button><br>
        <input class="update-input" type="text" v-model="newContent"><br>
        <input class="update-date" type="date" v-model="newDate">
    </div>
</template>

<script>
export default {
    name: "TodoUpdateForm",
    props: {
        todo: Object
    },
    computed: {

    },
    data() {
        return {
            newContent: this.todo.content,
            newDate: this.todo.dueDateTime.substring(0, 10),
        }
    },
    methods: {
        updateTodo() {
            const updateData = {
                todoId: this.todo.id,
                newContent: this.newContent,
                newDate: this.newDate
            }
            this.$store.dispatch("todo/updateTodo", updateData)
        }
    }
}
</script>

<style>
.update-form {
    width: 100%;
    height: 140px;
    background-color: lightblue;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
}

.update-button {
    width: 75px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: green;
    color: white;
    margin-bottom: 10px;
    margin-right: 100%;
}

.update-input {
    width: 100%;
    height: 35px;
    margin-bottom: 10px;
    border: solid 1px whitesmoke;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
}

.update-input:focus {
    outline: none;
}

.update-date {
    width: 100%;
    height: 35px;
    border: solid 1px whitesmoke;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
}

.update-date:focus {
    outline: none;
}
</style>
  