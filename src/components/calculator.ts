export default {
  getPace: (distance: number, duration: string, unit: string) => {
    const timeToSeconds: string[] = duration.split(":");
    let stringToSeconds: number = 0;

    switch (timeToSeconds.length) {
      case 2:
        stringToSeconds =
          +timeToSeconds[0] * 60 * 60 +
          +timeToSeconds[1] * 60 +
          +timeToSeconds[2];
        break;
      case 1:
        stringToSeconds = +timeToSeconds[0] * 60 + +timeToSeconds[1];
        break;
      default:
        stringToSeconds = +timeToSeconds;
        break;
    }
    const paceSeconds: number = stringToSeconds / distance;
    const paceMinutes: number = paceSeconds / 60;
    const remainder: number = paceMinutes - Math.floor(paceMinutes);
    let resultSeconds: number | string = Math.floor(remainder * 60); // takes the remainder converts to seconds
    if (resultSeconds < 10) {
      resultSeconds = `0${resultSeconds.toString()}`; //if seconds is < 10 add a zero
    } else {
      resultSeconds = resultSeconds.toString();
    }
    const resultMinutes: string = Math.floor(paceMinutes).toString(); //removes the remainder + converts to string
    return `${resultMinutes}:${resultSeconds} /${unit}`; //returns a string of the time
  },
};
