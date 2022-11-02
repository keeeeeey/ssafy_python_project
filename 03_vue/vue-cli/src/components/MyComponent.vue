<template>
    <div class="border">
        <h1>싸피 이거는 내가 만든 새로운 컴포넌트다!</h1>
        <MyComponentItem/>
    </div>
</template>

<script>
import MyComponentItem from '@/components/MyComponentItem';

export default {
    name: "MyComponent",
    components: {
        MyComponentItem,
    }
}
</script>

<style>
    .border {
        border: solid 1px black;
    }
</style>