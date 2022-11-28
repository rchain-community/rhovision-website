const gfm = require('cmark-gfm-js');

const markdown = '# Hi\nThis ~text~~~~ is ~~~~curious 😡🙉🙈~.';
let html = gfm.convert(markdown);
console.log(html);
/** Prints: 
  <h1>Hi</h1>
  <p>This <del>text</del> is <del>curious 😡🙉🙈</del>.</p>
*/

// Specify an option
html = gfm.convert(markdown, gfm.Option.sourcePos);
console.log(html);
/** Prints
  <h1 data-sourcepos="1:1-1:4">Hi</h1>
  <p data-sourcepos="2:1-2:44">This <del>text</del> is <del>curious 😡🙉🙈</del>.</p>
*/
