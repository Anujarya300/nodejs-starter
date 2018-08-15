import { NextFunction, Request, Response } from 'express';
import { logger } from '../services';
import { BaseRoute } from './base.route';
import { HTTPResponse } from '../utils/httpResponse';
import { HomeService } from '../services/home.service';

/**
 * @api {get} /home home request object
 * @apiName home
 * @apiGroup home
 *
 * @apiSuccess {String} type Json Type.
 */
export class HomeRoute extends BaseRoute {
  public path = '/home';

  /**
   * @class HomeRoute
   * @constructor
   */
  private constructor() {
    super();
    this.getHome = this.getHome.bind(this);
    this.getFamily = this.getFamily.bind(this);
    this.init();
  }

  private init() {
    // log
    logger.info('[HomeRoute] Creating Home route.');
    this.router.get('/', this.getHome);
    this.router.get('/family', this.getFamily);
  }

  /**
   * @class HomeRoute
   * @method getHome
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @param next {NextFunction} Execute the next method.
   */
  private async getHome(req: Request, res: Response, next: NextFunction) {
    let data = HomeService.getHome();
    HTTPResponse.send(req, res, data);
  }

  /**
   * @class HomeRoute
   * @method getFamily
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @param next {NextFunction} Execute the next method.
   */
  private async getFamily(req: Request, res: Response, next: NextFunction) {
    let data = HomeService.getFamily();
    HTTPResponse.send(req, res, data);
  }

}
