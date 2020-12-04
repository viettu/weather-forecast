export default (isoDate) => {
    return new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(new Date(isoDate));
}