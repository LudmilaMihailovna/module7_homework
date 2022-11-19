function ElektroPribor (power, name) {
    this.works='Работает от розетки 220v',
    this._enabled = false;
    this.getEnable = function() {
        this._enabled = true;
    };
    this.getDisable = function() {
      this._enabled = false;
    };
    this.name=name
  }
  
  ElektroPribor.prototype.getConsumption=function (power, name, consumption) {
      console.log (`Потребляемая мощность ${name}: ${consumption} кВт.`)
  }
  
  function ElektroPriborName (name, color) {
    ElektroPribor.call(this);
    this.getEnable();
    console.log(this._enabled);
    this.name=name,
    this.color=color
  }
  
  ElektroPriborName.prototype = new ElektroPribor()
  
  const mikrovolnovka = new ElektroPriborName ('mikrovolnovka', 'black');
  const chainik = new ElektroPriborName ('chainik', 'blue');
  mikrovolnovka.getConsumption('mikrovolnovka', 1.1);
  chainik.getConsumption('chainik', 1.8);
  console.log (mikrovolnovka);
  console.log (chainik);
