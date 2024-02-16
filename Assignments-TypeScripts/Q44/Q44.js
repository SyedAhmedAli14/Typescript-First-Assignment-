function carInfo(manufacturer, modelName) {
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    return car;
}
var carObject = carInfo("Toyota", "Corolla");
console.log(carObject);
