
export class Datastore {
  public static getStore(): any {
    const datastore = require('data-store');
    return new datastore({ path: 'config.json' });
  }
}
