// Utility functions
import { Err } from "../helpers/pretty-logging.helper";

/**
 * HttpException model
 */
class HttpException extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);

    Err(`HTTP Exception - Status: ${ status } - Message: ${ message }`)

    this.status = status;
    this.message = message;
  }
}

export default HttpException;
