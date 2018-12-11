class Casino {
    constructor(machines, startMoney){
        this.machines = machines;
        this.startMoney = startMoney;
    }
    allMoney(listMachines) {  // загальна сума грошей в цілому казино вичисляємо з масиву
        const allMoney = listMachines.reduce(function(item, current){
            return item + current.money
        },0);
        return allMoney
    }
    howManyMachines(listMachines) {  // кількість автоматів, вичисляємо їх з масиву
        const allMachines = listMachines.length
        return allMachines
    }
    getOneNewMachine(listMachines) {  // створюємо автомат, даючи йому половину грошей з найбагатшого автомату
        const richMachine = (listMachines) => {
            const arrMoney = [];
            listMachines.forEach((elem) => {
            arrMoney.push(elem.money)
            return arrMoney
            })
            const item = listMachines.find(item => item.money == Math.max(...arrMoney));
            item.money = item.money / 2;
            return item
        }
        // const machine = new Machine {}
        this.money = richMachine() / 2;
    }
    deleteMachine(id) { // видаляємо автомат а гроші розподіляємо між рештою автоматів
        const dm = item.id;
        const average = dm / listMachines.length - 1;
        listMachines.filter(item => item == item.id);
        listMachines.forEach((elem) => {
           return elem + average
        });  
    }
    getAllMoney(listMachines) {

    }

}