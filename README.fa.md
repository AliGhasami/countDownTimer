## Count Down Timer

A `Count Down Timer` component for Vue.js 3.

[![Multilingual Markdown Generator](https://img.shields.io/badge/markdown-multilingual%20🌐-ff69b4.svg)](https://github.com/ryul1206/multilingual-markdown)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ryul1206/multilingual-markdown.svg)
![GitHub](https://img.shields.io/github/license/ryul1206/multilingual-markdown.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/ryul1206/multilingual-markdown/badge/master)](https://www.codefactor.io/repository/github/ryul1206/multilingual-markdown/overview/master)

🚀 **version 1.0.0** 🌏
[**Persian**](https://github.com/ryul1206/multilingual-markdown/blob/master/README.md),

## Installation

```sh
yarn add  agh-countdowntimer

npm install agh-countdowntimer
```

## Usage

`<VSwitch>` is modeled after the `switch` statement we all know and love.

```vue
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
import useCountdownTimer from "agh-countdowntimer";
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

```

## License

MIT
