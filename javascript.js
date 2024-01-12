/* eslint-disable import/no-unresolved */
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

class Car {
  constructor(name, type, color, fuel, year, img, price) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.fuel = fuel;
    this.year = year;
    this.img = `https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F${img}.png`;
    this.price = price.toLocaleString({
      style: 'currency',
      currency: 'SEK',
      minimumFractionDigits: 0,
    });
  }
}

const cars = [];
for (let i = 0; i < 20; i += 1) {
  const name = faker.vehicle.vehicle();
  const type = faker.vehicle.type();
  const color = faker.vehicle.color();
  const fuel = faker.vehicle.fuel();
  const year = faker.number.int({ min: 1970, max: 2023 });
  const price = faker.number.int({ min: 1, max: 100 });
  const mainPrice = faker.number.int({ min: 30, max: 200 }) * 1000;
  cars.push(new Car(name, type, color, fuel, year, price, mainPrice));
}

function createHtmlForCars() {
  for (let i = 0; i < cars.length; i += 1) {
    const productGallery = document.getElementsByClassName('productgallery')[0];
    const productCard = `<div class="productcard">
    
    <img src="${cars[i].img}">
    <div class="information">
        <div class="name">${cars[i].name}</div>
        <div class="description">${cars[i].year}</div>
        <a class="ctabutton" href="#">${cars[i].price} kr</a>
    </div>`;
    productGallery.innerHTML += productCard;
  }
}

createHtmlForCars();