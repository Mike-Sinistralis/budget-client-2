const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const caseInsensitiveComparator = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());

/* istanbul ignore next */
function daemonCreator(saga) {
  return function* daemon() {
    while (true) { // eslint-disable-line no-constant-condition
      yield* saga();
    }
  };
}

/* istanbul ignore next */
function createValidator(func) {
  return function* validator(...items) {
    let stillValid = true;
    for (const item of items) {
      stillValid = yield* func(item, stillValid);
    }
    return stillValid;
  };
}

export {
  delay,
  caseInsensitiveComparator,
  daemonCreator,
  createValidator,
};
