<template>
  <div>
    this is count down timer {{ time }}
  </div>
</template>

<script setup lang="ts">
import useCountdownTimer from "@/useCountdownTimer";
const {reset,time,start,stop,onFinish} = useCountdownTimer('00:01:00',"HH:mm:ss")
start()
</script>

<style>
</style>
