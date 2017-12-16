module.exports = function clean(incomingObject, { functions, objects, strings } = {}) {
  const obj = Object.assign({}, incomingObject);
  var scrub = function(objA) {
    var keys = Object.keys(objA),
      i = keys.length;

    while (i--) {
      let value = objA[keys[i]];
      if (value == null || typeof value == 'undefined') {
        delete objA[keys[i]];
      } else if (functions && typeof value == 'function') {
        delete objA[keys[i]];
      } else if (strings && value === '') {
        delete objA[keys[i]];
      } else if (objects && typeof value == 'object' && Object.keys(value).length == 0) {
        delete objA[keys[i]];
      } else if (typeof value == 'object') {
        scrub(value);
      }
    }
  };

  scrub(obj);

  return obj;
};
