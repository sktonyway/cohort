import Joi from "joi";

class BaseDto {
  static schema = Joi.object({});
  // It is made to be overwritten by defined shema.

  static validate(data) {
    // So we can use validate which returns error or value, error if less data is provided then value when stripped as per schema
    const { error, value } = this.schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      const errors = error.details.map((d) => d.message);
      return { errors, value: null };
    }
    return { errors: null, value };
  }
  // Now we can use BaseDto.validate() which return standard errors and values.
}

export default BaseDto;
