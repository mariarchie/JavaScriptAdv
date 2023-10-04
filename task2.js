// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.


const chefsSpecialization = new Map();
chefsSpecialization.set("Виктор", "Пицца");
chefsSpecialization.set("Ольга", "Суши");
chefsSpecialization.set("Дмитрий", "Десерты");

const dishesAndChefs = new Map();
dishesAndChefs.set("Пицца \"Маргарита\"", "Виктор");
dishesAndChefs.set("Пицца \"Пепперони\"", "Виктор");
dishesAndChefs.set("Суши \"Филадельфия\"", "Ольга");
dishesAndChefs.set("Суши \"Калифорния\"", "Ольга");
dishesAndChefs.set("Тирамису", "Дмитрий");
dishesAndChefs.set("Чизкейк", "Дмитрий");

const orders = new Map();

const alexey = { name: "Алексей" };
orders.set(alexey, ["Пицца \"Пепперони\"", "Тирамису"]);

const maria = { name: "Мария" };
orders.set(maria, ["Суши \"Калифорния\"", "Пицца \"Маргарита\""]);

const irina = { name: "Ирина" };
orders.set(irina, ["Чизкейк"]);

// 
const alexeyOrder = orders.get(alexey);
for (const dish of alexeyOrder) {
  console.log(`Алексей заказал: ${dish} - повар: ${dishesAndChefs.get(dish)}`);
}

const irinaOrder = orders.get(irina);
for (const dish of irinaOrder) {
  console.log(`Ирина заказала: ${dish} - повар: ${dishesAndChefs.get(dish)}`);
}

const mariaOrder = orders.get(maria);
for (const dish of mariaOrder) {
  console.log(`Мария заказала: ${dish} - повар: ${dishesAndChefs.get(dish)}`);
}