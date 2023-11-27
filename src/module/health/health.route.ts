import HealthCheckController from "@module/health/health.controller";
import { Router } from "express";

class HealthCheckRoute {
  public path = "/health";
  public router = Router();
  public controller: any;

  constructor() {
    this.controller = new HealthCheckController();
    this.initRoute();
  }

  public initRoute(): void {
    this.router.get(this.path, this.controller.getHealth);
  }
}
export default HealthCheckRoute;
