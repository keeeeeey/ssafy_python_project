const state = () => {
    return {
            // todo 리스트 Array
        list: [
                // 개별 todo Object
            {
                id: 1638771553377,                // nowDateObj.getTime()
                content: 'Vue',                   // Todo 내용
                dueDateTime: '2021-12-09T00:00',  // 마감일
                isCompleted: false,               // 완료된 할 일
                isImportant: true,				        // 중요 할 일
            },
            {
                id: 1638771553378,
                content: 'Vue Router',
                dueDateTime: '2021-12-10T00:00',
                isCompleted: false,
                isImportant: true,
            },
            {
                id: 16387715533779,
                content: 'Vuex',
                dueDateTime: '2021-12-11T00:00',
                isCompleted: true,
                isImportant: false,
            },
        ],
    }
}

const getters = {}
const mutations = {
    CHECK_COMPLETED(state, todo) {
        state.list.filter((l) => {
            if (l === todo) {
                l.isCompleted = !l.isCompleted
            }
            return l
        })
    },
    CHECK_IMPORTANT(state, todo) {
        state.list.filter((l) => {
            if (l === todo) {
                l.isImportant = !l.isImportant
                console.log(l.isImportant)
            }
            return l
        })
    },
    CREATE_TODO(state, todo) {
        state.list.push(todo)
    },
    UPDATE_TODO(state, updateData) {
        state.list.filter((l) => {
            if (l.id === updateData.todoId) {
                l.content = updateData.newContent
                l.dueDateTime = updateData.newDate
            }
            return l
        })
        console.log(state.list)
    }
}
const actions = {
    createTodo(context, inputData) {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate() + 1;
        const todo = {
            id: new Date().getTime(),                
            content: inputData,                   
            dueDateTime: `${year}-${month}-${date}T00:00`,  
            isCompleted: false,               
            isImportant: false,
        }
        context.commit("CREATE_TODO", todo)
    },
    updateTodo(context, updateData) {
        const year = updateData.newDate.substring(0, 4);
        const month = Number(updateData.newDate.substring(5, 7)) + 1;
        const date = Number(updateData.newDate.substring(8)) + 1;
        const newDueDateTime = `${year}-${month}-${date}T00:00`
        updateData.newDate = newDueDateTime
        context.commit("UPDATE_TODO", updateData)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
