angular.module('bookyet')
  .factory('Book', function (DEFAULT_IMAGE) {
    
    /*
    School structure:
    {
      title: "book title", 
      image: "http://logos.com/bookimg.png",
      author: "name",
      isbn10: "1212232323", 
      isbn13: "1212232323",
      desc  : "lorem ipsum" 
    }
    */

    var books = [
      {
        title: "Professional development with Git.", 
        image: DEFAULT_IMAGE,
        author: "name",
        isbn10: "1212232323",
        isbn13: "1212232323",
        desc  : "lorem ipsum"
      },
      {
          title: "ng-book - La guia definitiva de AngularJS", 
          image: "assets/img/ngbook.png",
          author: "name 2",
          isbn10: "1212232323 2", 
          isbn13: "1212232323 2",
          desc  : "lorem ipsum 2"
      }
    ];

    // Public API here
    return {
      books: books
      
    };
  });
