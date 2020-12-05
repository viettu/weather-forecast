export default (temperature) => {
    return temperature ? Number(temperature).toFixed(1) : ''
}
