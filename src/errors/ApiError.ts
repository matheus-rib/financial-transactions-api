export default class ApiError {
  public code: string
  public message: string
  public additionalProperties: object
  public httpStatus: number

  constructor ({ message, code = 'unknown', additionalProperties = {}, httpStatus = 400 }) {
    this.message = message
    this.code = code
    this.additionalProperties = additionalProperties
    this.httpStatus = httpStatus
  }
}
