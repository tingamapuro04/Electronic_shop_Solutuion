const list = [];
function getMoneySpent(keyboards, drives, b) {
    for (let x of keyboards) {
        for (let y of drives) {
        if (x + y <= b) list.push(x + y);
        }
    }
    if (list.length > 0) {
        console.log(list)
        return Math.max(...list);
    }
    
    return -1
}
