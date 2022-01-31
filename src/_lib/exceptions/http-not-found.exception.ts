// Exception import
import HttpException from "./http.exception";

/**
 * Entity not found exception extends http exception
 */
class NotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `Entity with id ${id} was not found`);
  }
}

export default NotFoundException;
