{
  /**
   *  Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  // function move(direction: Direction) {
  //   console.log(direction);
  // }
  // move('left');

  type TileSize = 8 | 16 | 32;
  const tile1: TileSize = 8;
  const tile2: TileSize = 16;
  const tile3: TileSize = 32;

  // fuction: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  }
  type FailState = {
    reason: string;
  }

  type LoginState = SuccessState | FailState;

  // function login(): LoginState {
  //   return {
  //     response: {
  //       body: 'logged in!',
  //     }
  //   }
  // }

  //printLoginState(state: LoginState)
  //success => 👍 body
  //fail -> 😓 reason

  // function printLoginState(state: LoginState) {
  //   if ('response' in state) {
  //     console.log(`👍${state.response.body}`);
  //   } else {
  //     console.log(`😓${state.reason}`);
  //   }
  // }

}