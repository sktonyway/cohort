import * as authService from "./auth.service.js";
import ApiResponse from "../utils/api-response.js";

const register = async () => {
  authService.register(req.body);
  ApiResponse.created(res, "Registration success", user);
};

export { register };
