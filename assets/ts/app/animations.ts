function easeOut(x: number) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export function animate(obj: Element, initVal: number, lastVal: number, duration: number) {
  let startTime = null;

  //get the current timestamp and assign it to the currentTime variable
  let currentTime = Date.now();

  //pass the current timestamp to the step function
  const step = (currentTime: number) => {
      //if the start time is null, assign the current time to startTime
      if (startTime === null) {
            startTime = currentTime ;
      }

      //calculate the value to be used in calculating the number to be displayed
      const progress = Math.min((currentTime  - startTime) / duration, 1);

      //calculate what to be displayed using the value gotten above
      obj.innerHTML = (easeOut(progress) * (lastVal - initVal) + initVal).toFixed(0) + "%";

      //checking to make sure the counter does not exceed the last value (lastVal)
      if (progress < 1) {
            window.requestAnimationFrame(step);
      }
      else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
  };

  //start animating
  window.requestAnimationFrame(step);
}


