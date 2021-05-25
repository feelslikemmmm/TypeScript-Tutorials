{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffe(shot: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffe(shot: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance(obj) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffe beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffe(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // maker.fillCoffeeBeans(32);
  // maker.makeCoffe(2);

  // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBeans(32);
  // maker2.makeCoffe(2);
  // maker2.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) { }
    makeCoffee() {
      const coffee = this.machine.makeCoffe(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) { }
    makeCoffee() {
      const coffee = this.machine.makeCoffe(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(32);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee();
  pro.makeCoffee();
}
