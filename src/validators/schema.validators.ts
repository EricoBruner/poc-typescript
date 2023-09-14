import { ObjectSchema } from "joi";

export function schemaValidators(objectSchema: ObjectSchema, object: object) {
  const validation = objectSchema.validate(object, { abortEarly: false });

  if (validation.error) {
    return validation.error.details[0].message;
  } else {
    return null;
  }
}
