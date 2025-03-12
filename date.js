function getNextDate() {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

console.log(getNextDate());
