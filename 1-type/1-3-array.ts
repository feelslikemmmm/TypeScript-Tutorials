{
  // Array
  const fruits: string[] = ['토마토', '바나나'];
  const scroes: number[] = [1, 2, 3];

  const fruits2: Array<string> = ['토마토', '바나나'];
  const scores2: Array<number> = [1, 2, 3];

  function printArray(fruits: Array<string>) {
    //Array<string> 문법은 readonly 를 사용할 수 없다
  }

  // Tuple
  //튜플을 사용하는 것은 권장되지 않는다
  let student: [string, number];
  student = ['name', 1];
  student[0] // name
  student[1] // 1
}