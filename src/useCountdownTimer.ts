import { onMounted, ref } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import moment from "moment";
//sample 00:30 -  1:50 - 00:59
export default function useCountdownTimer(
  _time = "00:00:30",
  format = "HH:mm:ss"
) {
  let interval: number;
  let startTime = moment(_time, "HH:mm:ss");
  //const temp=
  const endTime = moment("00:00:00", "HH:mm:ss");
  const time = ref("");
  let tempHook: () => void;

  function decrement() {
    if (startTime > endTime) {
      startTime.subtract("1", "second");
      time.value = startTime.format(format);
    } else {
      clearInterval(interval);
      if (tempHook) {
        tempHook();
      }
    }
  }

  function start() {
    interval = setInterval(decrement, 1000);
  }

  function stop() {
    clearInterval(interval);
  }

  function onFinish(hook: () => any) {
    tempHook = hook;
  }

  function reset() {
    //debugger
    startTime = moment(_time, "HH:mm:ss");
    stop();
    //start()
  }

  /* function setTime(_time: string) {
    startTime = moment(_time, 'HH:mm:ss')
    stop()
    start()
  }*/

  onMounted(() => {
    time.value = startTime.format(format);
  });

  return { time, stop, start, onFinish, reset };
}
