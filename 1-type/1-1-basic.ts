// {
//   /**
//    * JavaScript
//    * Primitive: number, string, boolean, bigint, symbol, null, undefined
//    * Object: function, array....
//    */

//   //number
//   const num: number = 1;
//   const num2: number = '2';

//   // string
//   const str: string = 'hello';
//   const str2: string = 1;

//   // boolean
//   const boal: boolean = false;
//   const boal2: boolean = 1;


//   // undefined 값이 있는지 없는지 아무것도 결정된것이 없는 상태
//   let name: undefined; //이렇게는 사용하지 않는다
//   name = 'string'; // undefined 형태만 넣을 수 있기 때문이다.
//   // 올바른 사용법 
//   let age: number | undefined;
//   age = undefined;
//   age = 1;

//   // null 명확하게 값이 비었다고 결정된 상태
//   let person: null; //null 역시 이렇게 사용하지 않음
//   person = 1;
//   let person2: string | null;
//   person2 = null;
//   person2 = 'person';

//   // unknown (알수 없는 이라는 뜻) 가능하면 쓰지 않는것이 좋다
//   // 그렇다면 왜 있을까? 타입스크립트는 타입이 없는 자바스크립트와 연동해서 사용할 수 있기 때문
//   let notSure: unknown = 0;
//   notSure = 'he';
//   notSure = true;

//   // any (어떤것이든 사용할 수 있다는 뜻) 가능하면 쓰지 않는 것이 좋다
//   let anything: any = 0;
//   anything = 'hello';
//   anything = 1;

//   // void 함수에서 아무것도 리턴하지 않으면 void 타입을 사용한다
//   function print(): void {
//     console.log('hello');
//   }

//   // never
//   function throwError(message: string): never {
//     // message -> server (log)
//     // throw new Error(message);
//     // while(true) {

//     // }
//   }

//   // object 원시 타입을 제외한 모든 object 타입을 할당할 수 있다
//   // obj 타입도 왠만하면 사용하지 않는 것이 좋다
//   let obj: object;
//   obj = [1, 4];
//   function acceptSomeObject(obj: object) {

//   }
//   acceptSomeObject({ name: 'kim' });
//   acceptSomeObject({ animal: 'cat' });
// }