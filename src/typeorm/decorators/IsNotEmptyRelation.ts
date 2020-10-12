import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'
import { BaseEntity } from '../BaseEntity'

export function IsNotEmptyRelation (validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string): void {
    registerDecorator({
      name: 'isNotEmptyRelation',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      async: true,
      validator: {
        validate (value: any, args: ValidationArguments): boolean {
          const { id } = args.object as BaseEntity
          if (!id && !value) return false
          if (id && value === null) return false
          return true
        },
      },
    })
  }
}
