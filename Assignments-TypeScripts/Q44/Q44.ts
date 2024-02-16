function carInfo(manufacturer: string, modelName: string): object {
    let car: any = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    return car;
}


let carObject = carInfo("Toyota", "Corolla");


console.log(carObject);