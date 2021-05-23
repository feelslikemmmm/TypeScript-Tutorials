{

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance(obj) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMaker {
      return new CoffeMaker(coffeeBeans);
    }

    makeCoffe(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffe beans!');
      }
      this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = new CoffeMaker(32);
  const maker2 = new CoffeMaker(40);
  console.log(maker);
  console.log(maker2);
  const maker3 = CoffeMaker.makeMachine(10);
  console.log(maker3);


}