export default (isoDate) => {
    return isoDate ? new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(new Date(isoDate)) : ''
}
