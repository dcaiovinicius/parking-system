import Context from './controllers/Context';

export default class Application {
  context: Context;

  constructor() {
    this.context = new Context();
  }
}

const application = new Application();
