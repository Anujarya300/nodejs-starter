import { NextFunction, Request, Response } from 'express';
import { logger } from '../services';
import { BaseRoute } from './base.route';
import { HTTPResponse } from '../utils/httpResponse';
import { HomeService } from '../services/home.service';
import { route } from '../decorators/route';
import { Router } from 'express';

/**
 * @api {get} /home home request object
 * @apiName home
 * @apiGroup home
 *
 * @apiSuccess {String} type Json Type.
 */
export class HomeRoute {
  public static path = '/home';
  public static router = Router();
  /**
   * @class HomeRoute
   * @constructor
   */
  private constructor() {
  }

  /**
   * @class HomeRoute
   * @method getHome
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @param next {NextFunction} Execute the next method.
   */
  @route({ path: "/", method: "get" })
  getHome() {
    return HomeService.getHome();
  }

  @route({ path: "/:id", method: "get" })
  getHomeById(id: number) {
    return { id };
  }


  /**
   * @class HomeRoute
   * @method getFamily
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @param next {NextFunction} Execute the next method.
   */
  @route({ path: "/family", method: "get" })
  private async getFamily(req: Request, res: Response, next: NextFunction) {
    return HomeService.getFamily();
  }

}
