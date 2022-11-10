<template>
    <div>
        <div class="todo" @click="openUpdateForm">
            <div class="todo-left">
                <input type="checkbox" :id="todo.id" :checked="todo.isCompleted" @click="checkCompleted">
                <label :for="todo.id"><span>{{ todo.content }}</span></label>
            </div>
            <div class="todo-right">
                <input type="checkbox" :checked="todo.isImportant" @click="checkImportant">
            </div>
        </div>
        <TodoUpdateForm :todo="todo" :hidden="isHidden"/>
    </div>
</template>

<script>
import TodoUpdateForm from '@/components/TodoUpdateForm'

export default {
    name: "AllTodo",
    components: {
        TodoUpdateForm
    },
    props: {
        todo: Object
    },
    data() {
        return {
            isHidden: true
        }
    },
    methods: {
        checkCompleted(event) {
            event.stopPropagation()
            this.$store.commit("todo/CHECK_COMPLETED", this.todo)
        },
        checkImportant(event) {
            event.stopPropagation()
            this.$store.commit("todo/CHECK_IMPORTANT", this.todo)
        },
        openUpdateForm() {
            this.isHidden = !this.isHidden
        }
    }
}
</script>

<style>
.todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 2px whitesmoke;
    border-radius: 5px;
    height: 60px;
    margin: 10px 0;
}
</style>
  