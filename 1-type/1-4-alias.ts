{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'React';
  const address: Text = '주소';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  }

  const testStudent: Student = {
    name: 'kim',
    age: 12,
  };

  // const testStudent2: Student = {
  //   animal: 'dog',
  // }
  /**
   * String Literal Types
   */
  type Name = 'name';
  let kimName: Name;
  kimName = 'name';

  type Boal = true;
  let isCat: Boal;
  isCat = true;
}