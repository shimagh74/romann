const { data } = require("autoprefixer");
var faker = require("faker");
faker.locale = "fa";

 var database = {};

var typeOfHouse = [
  { value: 1, text: "ویلایی" },
  { value: 2, text: "آپارتمان" },
  { value: 3, text: "کلنگی" },
];
var saleOrRent = [
  { value: 1, text: "خرید" },
  { value: 2, text: "اجاره" },
];
var provinces = [];
for (let i = 1; i <= 31; i++) {
  provinces.push({
    value: 1,
    text: faker.address.cityName(),
  });
}

var property = [];

for (let i = 1; i <= 200; i++) {
  property.push({
    id: i,
    price: faker.phone.phoneNumber("####0000"),
    numberOfPhotos: faker.datatype.number({ min: 1, max: 6 }),
    imageId:faker.datatype.number({ min: 1, max: 18 }),
    // titleHolder: faker.lorem.titleHolder(2),
    area: faker.datatype.number({ min: 100, max: 20000 }),
    typeOfHouse: faker.datatype.number({ min: 1, max: 2 }),
    numberOfRooms: faker.datatype.number({ min: 1, max: 5 }),
    address: `${faker.address.cityName()}`,
    
  });
}

database.provinces = provinces;
database.typeOfHouse = typeOfHouse;
database.saleOrRent = saleOrRent;
database.property = property;

console.log(JSON.stringify(database));
