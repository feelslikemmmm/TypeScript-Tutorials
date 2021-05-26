interface Employee {
  payGeneric(): void;
}

class FullTimeEmployee implements Employee {
  payGeneric() {
    console.log(`full time!!`);
  }
  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  payGeneric() {
    console.log(`part time!!`);
  }

  workPartTime() {

  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function payGeneric<T extends Employee>(employee: T): T {
  employee.payGeneric();
  return employee;
}

const kim = new FullTimeEmployee();
const bob = new PartTimeEmployee();
kim.workFullTime();
bob.workPartTime();

const kimAfterPay = pay(kim);
const bobAfterPay = pay(13);

