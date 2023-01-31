import { NextFunction, Request, Response } from "express"
import { AppError } from "../error/app-error"

export const middlewareOfError = ((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `internal server error - ${error.message}`
  })
})
