import Joi from "joi";
import BaseDto from "../../dto/base.dto.js";

class RegisterDto extends BaseDto {
  static schema = Joi.object({
    name: Joi.string().trim().min(2).max(20).required(),
    email: Joi.email().lowercase().required(),
    password: Joi.string()
      .min(8)
      .required()
      .message("Password should be more than 8 characters."),
    role: Joi.string().valid("customer", "seller").default("customer"),
  });
}
export default RegisterDto;
