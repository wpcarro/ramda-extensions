/*
  contains basic helper functions
*/

const is_obj = (x) =>
  !Array.isArray(x) && typeof x === 'object';


const keys = (o) =>
  Object.keys(o);


/*
  JS analogue to unix `find` command
  returns either the path to the nearest key if found
    or null if the key doesn't exist in the object.
  This is accomplished through a breadth-first search.
*/
function key_in_obj(key, o) {
  let found = false;
  const q = [];
  const key_path = ['.']; // functionality is still incomplete
  
  const result = (function recurse(key, o) {
    if (found) {
      return found;
    }
    
    let k, res;
    const ks = keys(o);

    for (let i = 0; i < ks.length; i += 1) {
      k = ks[i];
      if (k === key) {
        found = true;
        key_path.push(k);
        return found;
      }
      else if (is_obj(o[k])) {
        key_path.push(k);
        q.push(o[k]);
      }
    }
    for (let i = 0; i < q.length ; i += 1) {
      return recurse(key, q.shift());
    }
    
    return found;
  }(key, o));
  
  return result ? key_path.join('/') : false;
}
