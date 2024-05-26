const randomBoolean = () => Math.random() >= 0.5;
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export { randomBoolean, randomIntegerInRange }