const cars = [
    {
        make: "Toyota",
        model: "Supra",
        horsepower: 400
    },
    {
        make: "Honda",
        model: "Type R",
        horsepower: 300
    },
    {
        make: "Ford",
        model: "Mustang",
        horsepower: 350
    }
];

const powerfulCars = cars.filter((car) => {
    return car.horsepower >= 350;
});
console.log(powerfulCars);