import { logger } from '../services';
import { Router } from 'express';

export abstract class BaseRoute {
  /**
   * Constructor
   *
   * @class BaseRoute
   * @constructor
   */

  protected router = Router();
  protected connection: any = {};
  public path = '/';

  public get getRouter() {
    return this.router;
  }

  public async connect (name: string): Promise<any> {
    return {};
  }

  public async disconnect (name: string): Promise<boolean> {
    try {
      return true;
    } catch (err) {
      logger.error('Error while disconnecting from database:', err);
      return false;
    }
  }
}