import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

const colors = ['Красный', 'Синий', 'Зеленый', 'Черный', 'Белый'];
const clothesNames = ['Футболка', 'Джинсы', 'Платье', 'Рубашка', 'Брюки', 'Юбка', 'Свитер', 'Куртка'];
const clothesDescriptions = ['100% хлопок', 'Удобная посадка', 'Стильный дизайн', 'Идеально для повседневной носки', 'Высокое качество'];

const imageUrls = { 
    'Футболка': "https://imageproxy.fh.by/w1Aw1nQGUofdPhSzmJssYeZjRcznJYr8RbruN6sTRkU/w:954/h:1430/rt:fit/q:95/czM6Ly9maC1wcm9kdWN0aW9uLXJmMy8xMDQ1NDg3L2ZlOTYyNDE2LTMzMjMtMTFlZi04YmExLWIyZGM5ZWE5NTJjMQ.jpg",
    'Джинсы': "https://imageproxy.fh.by/YHLf1g3VGfPlrCSe6QRosKQKcR83KkXQk2ePkOPIUnY/w:954/h:1430/rt:fit/q:95/czM6Ly9maC1wcm9kdWN0aW9uLXJmMy8xMTIwNDAzLzNhNTkwZWU3LTgwYjItMTFlZi04YmE1LWYzMDQ0YzUxNTEyYQ.jpg",
    'Платье': "https://imageproxy.fh.by/OVOZN9ctESe6Zkl_vCzThUpPl6EqhAyLqSCgtX5WBdw/w:954/h:1430/rt:fit/q:95/czM6Ly9maC1wcm9kdWN0aW9uLXJmMy8xMTE2MzEyLzczMzQxNDExLTc3M2EtMTFlZi04YmE1LWYzMDQ0YzUxNTEyYQ.jpg",
    'Рубашка': "https://imageproxy.fh.by/0efVbsnhVidGjidkgAMixVMRpA3TQ7q2vJ7RpnnXL6c/w:954/h:1430/rt:fit/q:95/czM6Ly9maC1wcm9kdWN0aW9uLXJmMy8xMDM1MzQ0L2JiM2YyMDhjLTI3MjYtMTFlZi04YjlmLTgwODQyMTZjMjNkNg.jpg",
    'Брюки': "https://imageproxy.fh.by/nx56CESCr0RLBRf3XfPc_iWyt2p6egv0bmAsDNI1ly0/w:954/h:1430/rt:fit/q:95/czM6Ly9maC1wcm9kdWN0aW9uLXJmMy8xMTE2NjUyL2EyYTE5YjZmLTdjOWYtMTFlZi04YmE1LWYzMDQ0YzUxNTEyYQ.jpg",
     'Юбка':"https://imageproxy.fh.by/PKRqbW0uqywLoCB1WhgFNCQpiivPasONnY9GvmnTTTc/w:954/h:1430/rt:fit/q:95/czM6Ly9maC1wcm9kdWN0aW9uLXJmMy8xMTA5MDUyLzI5NTI1NzVmLTc1ODMtMTFlZi04YmE1LWYzMDQ0YzUxNTEyYQ.jpg",
     'Свитер': "https://imageproxy.fh.by/SL9hUqqfWe6OwBBZrsnUQHqtTJJTgda289988MXR4sk/w:954/h:1430/rt:fit/q:95/czM6Ly9maC1wcm9kdWN0aW9uLXJmMy8xMTMxNTIyLzQzNWM0ZDM0LThjNzktMTFlZi04YmE1LWYzMDQ0YzUxNTEyYQ.jpg",
     'Куртка':"https://imageproxy.fh.by/U06bK3QTtL43MDmpg3-ObdhdG8dnt37IfPZyU-aTwts/w:954/h:1430/rt:fit/q:95/czM6Ly9maC1wcm9kdWN0aW9uLXJmMy8xMDk2MjAwL2EzZGU0ZTQxLTY4ZjYtMTFlZi04YmE0LWM1MDA5YjNiY2FiNA.jpg",
};

export const generateProducts = (count) => {
    const products = [];
    for (let i = 0; i < count; i++) {
        const name = faker.helpers.arrayElement(clothesNames);
        products.push({
            id: uuidv4(),
            name: name,
            description: faker.helpers.arrayElement(clothesDescriptions),
            color: faker.helpers.arrayElement(colors),
            category: 'Одежда', 
            price: faker.number.int({ min: 10, max: 9999 }),
            rating: parseFloat(faker.number.float({ min: 0, max: 5, precision: 0.1 }).toFixed(1)),
            imageUrl: imageUrls[name] || faker.image.url(200, 200, 'fashion'), 
        });
    }
    return products;
};