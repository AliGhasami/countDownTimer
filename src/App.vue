<template>
  <div>
    <div style="margin-bottom:10px">
      this is count down timer {{ time }}
    </div>
    <div class="flex">
        <button @click="start" >start</button>
        <button @click="stop">stop</button>
        <button @click="reset();start()">reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCountdownTimer from "@/useCountdownTimer";
const {reset,time,start,stop,onFinish} = useCountdownTimer('00:01:00',"HH:mm:ss")

onFinish(()=>{
  alert('the time is finished')
})


</script>

<style>
.flex{
  display: flex;
  gap: 2rem;
}
</style>
