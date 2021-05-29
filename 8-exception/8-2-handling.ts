class NetworkClient {
  tryConnect(): void {
    throw new Error('no network!');
  }
}

class UserService {
  constructor(private client: NetworkClient) { }

  login() {
    this.client.tryConnect();
    //login...
  }
}

class App {
  constructor(private userService: UserService) { }
  run() {
    this.userService.login();
  };
}


const client = new NetworkClient();
const service = new UserService(client);
service.login();
const app = new App(service);
app.run();