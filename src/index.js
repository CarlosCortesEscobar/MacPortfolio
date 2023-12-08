document.addEventListener('DOMContentLoaded', () => {
    const date = document.getElementById('date');
    const frmt = (date) => {
        const options = { day: '2-digit', month: 'short', year: '2-digit' };
        const formattedDate = new Date(date).toLocaleDateString(undefined, options);
        return formattedDate.replace(',', '');
    }
    let today = new Date();
    date.innerText = frmt(today);
})