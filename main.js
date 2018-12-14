class Casino {
    constructor(startMoney, machines = []){
        this.machines = machines;
        this.startMoney = startMoney;
    };
    
    casionAllMoney() {  // загальна сума грошей в цілому казино вичисляємо з масиву
        const allMoney = this.machines.reduce(function(item, current){
            return item + current.money
        },0);
        return allMoney
    };
    casinoCountMachines() {  // кількість автоматів, вичисляємо їх з масиву
        const allMachines = this.machines.length
        return allMachines
    };
    casinoAddMachine() {  // створюємо автомат, даючи йому половину грошей з найбагатшого автоматy
        function richMachine(m, start){
            if (m.length > 0) {
                let arrMoney = []
                m.forEach((elem) => {
                arrMoney.push(elem.money)
                return arrMoney
                })
                const machine = m.find(machine => machine.money == Math.max(...arrMoney));
                machine.money = machine.money / 2;
                return machine.money
            } else if (m.length >= 0) {
                return start
            }
        }
        const machine = new Machine (richMachine( this.machines, this.startMoney))
        this.machines.push(machine);
        this.machines.forEach((machine, index) => {
            machine.id = index
        });

    };
    casinoDeleteMachine() { // видаляємо автомат а гроші розподіляємо між рештою автоматів  АЛЕ ЯК НАМ ДОСТУКАТИСЬ ДО КОНКРЕТНОГО АВТОМАТУ ЩОБ ВИДАЛИТИ ЙОГО?(
        const average = this.money / this.machines.length - 1;
        this.machines.filter(item => item == this.money);
        this.machines.forEach((elem) => {
           return elem + average
        });  
    };
    casinoGetMoney(x) {     // зняти певну сумму грошей з казино
        this.machines.sort(function (a, b) {
            if (a.money > b.money) {
              return -1;
            }
            if (a.money < b.money) {
              return 1;
            }
            return 0;
          });
       for (let i = 0; i < this.machines.length; i++){
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
    machineAllMoney() {      // гроші в автоматі
        return this.money
    };
    machineGetAllMoney() {   // зняти всі гроші з автомату
        const m = this.money;
        this.money = 0;
        return m
    };
    mashinePushMoney(m) {   // закинути гроші в автомат
        if (m > 0) {
            this.money = this.money + m
        } 
    };
    machinePlay(m) {       // зіграти на автоматі
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
}

const casino = new Casino(100000);
console.log(casino);