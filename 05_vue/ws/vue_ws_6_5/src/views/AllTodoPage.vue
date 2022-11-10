<template>
    <div id="all-todos-box">
        <h1>모든 할 일</h1>
        <div class="create-form">
            <span class="create-btn" @click="createTodo">+</span>
            <input 
                class="create-input" 
                type="text" 
                placeholder="할 일을 작성해주세요!" 
                v-model="createInputData" 
                @keyup.enter="createTodo"
            >
        </div>
        <hr>
        <AllTodo 
            v-for="todo in todoList" 
            :key="todo.id"
            :todo=todo
        />
    </div>
</template>

<script>
import AllTodo from "@/components/AllTodo"

export default {
    name: "AllTodoPage",
    components: {
        AllTodo
    },
    data() {
        return {
            createInputData: null
        }
    },
    computed: {
        todoList() {
            return this.$store.state.todo.list
        }
    },
    methods: {
        createTodo() {
            const inputData = this.createInputData
            if (!inputData) {
                alert("할 일을 입력해주세요!")
            } else {
                this.$store.dispatch("todo/createTodo", inputData)
                this.createInputData = null
            }
        }
    }
}
</script>

<style>
.create-form {
    display: flex;
    align-items: center;
}

.create-btn {
    font-size: 20px;
    margin: 10px;
}

.create-input {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    padding: 10px;
}
</style>
  