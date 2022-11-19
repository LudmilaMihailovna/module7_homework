class ElektroPribor {
    constructor (name, consumption, enable) {
        this.enable = enable || 'выключен';
        //this.hasWork = true;
    }
    getWorks() {
        return 'Электроприбор ' + this.name + ' мощностью ' + this.consumption + ' кВТ ' + this.enable;
    }
}

class ElektroPriborName extends ElektroPribor {
    constructor (isWorks, name, consumption, work,  enable) {
        super (enable);
        this.isWorks = isWorks;
        this.name = name;
        this.consumption = consumption;
        this.work = isWorks ? work : enable;
    }
    getWorks() {
        if (this.isWorks) {
            return 'Электроприбор ' + this.name + ' мощностью ' + this.consumption + ' кВТ ' + this.work
        } else {
            return super.getWorks()
        }
    }
}

const mikrovolnovka = new ElektroPriborName (true, 'микроволновка', 1.1, 'включен');
console.log(mikrovolnovka.getWorks());

const chainik = new ElektroPriborName (false, 'чайник', 1.3, 'включен');
console.log(chainik.getWorks());

const fridge = new ElektroPriborName (true, 'холодильник', 2, 'включен');
console.log(fridge.getWorks())

