var ghpages = require('gh-pages');

ghpages.publish('public', function(err) {
    if ( err ) console.error(err)
    else console.log("successfuly published 'public' folder to gh-pages branch")
});
