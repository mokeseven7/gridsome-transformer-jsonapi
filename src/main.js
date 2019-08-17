export default function jsonapi( callback = null ) {
  return {
    parse: function(string){
      if(typeof(callback) === 'function'){
        return JSON.parse(string, callback);
      }
      return JSON.parse(string)
    },
  };
}