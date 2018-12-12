class Casino {
    constructor(machines = [], startMoney, count){
        this.machines = machines;
        this.startMoney = startMoney;
        this.count = count;
    };
    casionAllMoney() {  // загальна сума грошей в цілому казино вичисляємо з масиву
        const allMoney = this.machines.reduce(function(item, current){
            return item + current.money
        },0);
        return allMoney
    };
    casinoHowManyMachines() {  // кількість автоматів, вичисляємо їх з масиву
        const allMachines = this.machines.length
        return allMachines
    };
    casinoGetOneNewMachine() {  // створюємо автомат, даючи йому половину грошей з найбагатшого автомату
        const richMachine = () => {
            const arrMoney = [];
            this.machines.forEach((elem) => {
            arrMoney.push(elem.money)
            return arrMoney
            })
            const item = this.machines.find(item => item.money == Math.max(...arrMoney));
            item.money = item.money / 2;
            return item
        }
        // const machine = new Machine {}
        this.money = richMachine() / 2;
    };
    casinoDeleteMachine(id) { // видаляємо автомат а гроші розподіляємо між рештою автоматів
        const dm = item.id;
        const average = dm / this.machines.length - 1;
        this.machines.filter(item => item == item.id);
        this.machines.forEach((elem) => {
           return elem + average
        });  
    };
    casinoGetMoney(x) {    
        this.machines.sort(function (a, b) {
            if (a.money > b.money) {
              return -1;
            }
            if (a.money < b.money) {
              return 1;
            }
            return 0;
          });
       for (i = 0; i < this.machines.length; i++){
           if (this.machines[i].money < x) {
                x = x - this.machines[i].money;
                this.machines[i].money = 0;
            } else if (this.machines[i].money > x) {
                this.machines[i].money = this.machines[i].money - x
                break
            }
        };
        return x            
    };       
};

class Machine {
    constructor(money) {
        this.money = money;
    };
    machineAllMoney() {
        return this.money
    };
    machineGetAllMoney() {
        const m = this.money;
        this.money = 0;
        return m
    };
    mashinePushMoney(m) {
        if (m > 0) {
            this.money = this.money + m
        } 
    };
    machinePlay(m) {
        this.money = this.money + m
        const getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const replay = () => {
            const a = "" + getRandomInt(1, 9), b = getRandomInt(1, 9), c = getRandomInt(1, 9);
            const n = (a + b + c).split('');    // генеруємо випадкове число, з трьох випадкових чисел
            let p = 0;
            for (i=0; i < n.length; i ++) {  // перевіряємо скільки чисел збіглось якщо 292 = 2, 123 = 1, 444 = 3
                if( n[0] == n[i]){
                    p += 1
                }
            }
            if ( p == 2) {         // якщо два числа збіглось то введену сумму множимо на два і повертаємо, але якщо в автоматі меньше грошей ніж m * 2 далі теж купа таких проблем
                this.money - m * 2;
                return m * 2
            } else if (n == 777) {
                p = this.money;
                this.money = 0;
                return p
            } else if ( p === 3) {
                this.money > 1000 ? this.money = this.money - 1000 : void 0;
                return 1000
        }
    }
}