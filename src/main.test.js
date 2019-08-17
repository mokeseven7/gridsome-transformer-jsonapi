import jsonapi from './main.js';



describe('Core Test Lib', () => {
  it('json should match json', () => {
    const jsonstring = JSON.stringify({name: "Mike"});
    const API = jsonapi();
    
    expect(API.parse(jsonstring)).toMatchSnapshot();
  });
});