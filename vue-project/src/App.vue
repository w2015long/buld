<template>
	<h1 @click="show">app组件</h1>
</template>
<script>
	import { Toast } from 'mint-ui';
	export default {
		name:"App",
		methods:{
			show(){
				Toast({
				  message: '操作成功',
				});				
			}	
		}
	}
</script>
<style scoped>
	
</style>