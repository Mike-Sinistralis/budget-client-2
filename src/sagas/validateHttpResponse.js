import { createValidator } from '../utils';

function* onCheckValidity(response, stillValid) {
  if (!stillValid) {
    return false;
  }
  if (response.status === 401) {
    return false;
  } else if (response.status === 400) {
    return false;
  }
  return true;
}

const validateHttpResponse = createValidator(onCheckValidity);

export default validateHttpResponse;
