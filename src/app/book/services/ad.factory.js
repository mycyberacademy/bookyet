angular.module('bookyet')
  .factory('Ad', function () {
    
    /*
    Ad structure:
    {
      title: "book title", 
      image: "http://logos.com/bookimg.png",
      author: "name",
      isbn10: "1212232323", 
      isbn13: "1212232323",
      desc  : "lorem ipsum" 
    }
    */

    var ads = [
      {
          seller     : "Vladimir Lopez",
          phone      : "123456789",
          email      : "arvelazco@nauta.cu",
          published  : "2/2/2015",
          price      : "120",
          status     : "Poor",
          description: "The book has been used for 3 months"
      },
      {
          seller     : "Adrianet Ramos",
          phone      : "58049014",
          email      : "vlopezsalvador.22@yahoo.com",
          published  : new Date(),
          price      : "100",
          status     : "Good",
          description: "The book has been used for 3 days tj rltkj rltjhrthr tlkrjntrlthrlth rlth relkth lrthel"
      },
      {
          seller     : "Adrianet Ramos",
          phone      : "58049014",
          email      : "adry@nauta.cu",
          published  : "2/5/2015",
          price      : "100",
          status     : "Good",
          description: "The book has been used for 3 days"
      },
      {
          seller     : "Adrianet Ramos",
          phone      : "58049014",
          email      : "vlopez@nauta.cu",
          published  : "2/5/2015",
          price      : "100",
          status     : "Good",
          description: "The book has been used for 3 days"
      },

    ];

    // Public API here
    return {
      getAds: function () {
        return ads;
      },
      insertAd : function (ad) {
        ads.unshift(ad);
      }
      
    };
  });
