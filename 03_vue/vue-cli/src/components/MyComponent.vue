<template>
    <div class="border">
        <h1>싸피 이거는 내가 만든 새로운 컴포넌트다!</h1>
        <MyComponentItem 
            static-props="MyComponent에서 보낸 데이터"
            :dynamic-props="dynamicProps"
            @give-me-ma-money="parentGetEvent"
            @child-input="getDynamicData"
            />
    </div>
</template>

<script>
import MyComponentItem from '@/components/MyComponentItem';

export default {
    name: "MyComponent",
    components: {
        MyComponentItem,
    },
    data : function () {
        return {
            dynamicProps : "It's in data"
        }
    },
    methods: {
        parentGetEvent: function (inputData) {
            console.log("자식 컴포넌트에서 발생한 이벤트!")
            console.log(`자식 컴포넌트로부터 ${inputData}를 받음!`)
        },
        getDynamicData: function (inputData) {
            console.log(`자식 컴포넌트로부터 ${inputData}를 입력받음!`)
        }
    }
}
</script>

<style>
    .border {
        border: solid 1px black;
    }
</style>