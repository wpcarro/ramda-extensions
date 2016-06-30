/*
  contains basic helper functions
  Incomplete and disfunctional. Don't use
*/

function is_obj(x) {
  return !Array.isArray(x) && typeof x === 'object';
}


function remove_dir(path) {
  return path.replace(/[^\/]+\/$/, '');
}

/*
  JS analogue to bash `find` command
  returns either the path to the nearest key if found
    or null if the key doesn't exist in the object.
  This is accomplished through a breadth-first search.
*/
function obj_find(key, obj) {
  let path = './';
  let found = false;
  
  (function recurse(obj) {
    Object.keys(obj).map(k => {
      if (k === key) {
        found = true;
      }
      else if (is_obj(obj[k])) {
        path += k + '/';
        
        if (!found) {
          recurse(obj[k]);
          
          if (!found) {
            path = remove_dir(path);
          }
        }
        
      }
    });
  }(obj));
  
  return found ? path : null;
}
