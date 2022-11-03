<!-- 1. 파일 생성 -->
<template>
    <!-- 3. 최상위 태그 추가 -->
    <div>
        <h3>나는 MyComponent의 하위 컴포넌트</h3>
        <p>{{ staticProps }}</p>
        <p>{{ dynamicProps }}</p>
        <button @click="childToParent">클릭!</button>
        <input type="text" v-model="childInputData" @keyup.enter="childInput">
    </div>
</template>

<script>
export default {
    // 2. 이름 설정
    name: "MyComponentItem",
    props: {
        staticProps: String,
        dynamicProps: String,
    },
    data: function () {
        return {
            childInputData: "",
        }
    },
    methods: {
        childToParent: function () {
            this.$emit("give-me-ma-money", "child data")
        },
        childInput: function () {
            this.$emit('child-input', this.childInputData)
            this.childInputData = ""
        }
    }
}
</script>

<style>
    
</style>