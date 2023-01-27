// //Task 1
// //Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;

const Employee = function (employee) {
  for (key in employee) {
    this[key] = employee[key];
  }
};

// //Task 2
// //Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя начиная с фамилии в виде строки

this.getFullName = function () {
  return this.surname + ' ' + this.name;
};

const employeeObjTwo = new Employee(
  '0',
  'Valeriy',
  'Zhmishenko',
  '1000',
  '10',
  'true',
  'male',
  Object.getFullName(this, 'fullName', {
    get() {
      return `${this.surname} ${this.name}`;
    },
    set(value) {
      console.log(value);
      return `${this.surname} ${this.name}`;
    },
  })
);

console.log(getFullName);

// //Task 3
// //Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты, но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr.

const emplyeeConstructArr = emplyeeArr.slice();
console.log(emplyeeConstructArr);

// // // Solution 2
// const Emploee = function (employee) {
//   for (key in employee) {
//     this[key] = employee[key];
//     this[value] = employee[value];
//   }
// };

//Task 4
// Создать функцию которая вернет массив со всеми полными именами каждого employee, содержащегося в emplyeeConstructArr;
const fullNameOfEmployee = emplyeeArr.map((x) => x.surname + ' ' + x.name);

console.log(fullNameOfEmployee);

//Task 5
//Создать функцию которая вернет среднее значение зарплаты всех employee

const salaries = emplyeeArr.map((x) => x.salary);
let allSalaries = 0;
for (let i = 0; i < salaries.length; i++) {
  allSalaries = allSalaries + salaries[i];
}
const averageSalary = allSalaries / salaries.length;

console.log(averageSalary);

//Task 6
// Создать функцию которая выберет наугад работника из массива emplyeeConstructArr. Вы должны учитывать в функции длинну массива, так как если работников 7, а рандомное число будет равно больше 7, то результат будет undefined. Вы можете использовать обьявленную функцию в сомой же себе. Подсказка Math.random

function getRandomEmployee(emplyeeConstructArr) {
  return Math.floor(Math.random() * emplyeeConstructArr.length);
}

const result = getRandomEmployee(emplyeeConstructArr);
console.log(emplyeeConstructArr[result]);

//Task 7
//Создать дескриптор со свойством fullInfo который будет записывать все свойства переданные ему в экземпляр от которого он вызывается. И выдавать все свойства, если к нему обратиться, в виде строки <Название свойства> - <значение> через запятую.
//не зроблено
