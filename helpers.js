/*
  contains basic helper functions
*/

const is_obj = (x) =>
  !Array.isArray(x) && typeof x === 'object';


const remove_dir = (path) =>
  path.replace(/[^\/]+\/$/, '');


const keys = (o) =>
  Object.keys(o);


/*
  JS analogue to bash `find` command
  returns either the path to the nearest key if found
    or null if the key doesn't exist in the object.
  This is accomplished through a breadth-first search.
*/
function key_in_obj(key, o) {
  let found = false;
  let q = [];
  
  return (function recurse(key, o) {
    // base case
    if (found) {
      return found;
    }
    
    // continuation case
    let k;
    const ks = keys(o);
    for (let i = 0; i < ks.length; i += 1) {
      k = ks[i];
      // check if key
      if (k === key) {
        found = true;
        return found;
      }
      // check if object
      else if (is_obj(o[k])) {
        q.push(o[k]);
      }
    }
    for (let i = 0; i < q.length ; i += 1) {
      return recurse(key, q.shift());
    }
    
    return found;
  }(key, o));
}
