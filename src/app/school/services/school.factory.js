angular.module('bookyet')
  .factory('School', function () {
    
    /*
    School structure:
    {
      name: "School1", 
      logo: "http://logos.com/school1.png" 
    }
    */

    var universities = [
      {
        name: "MyCyberAcademy University at Florida", 
        image: "assets/img/mca.png",
        desc: "MyCyberAcademy is an University with three years old. They offer great courses for your career"
      },
      // {
      //   name: "School2", 
      //   logo: "http://logos.com/school1.png",
      //   desc: "lorem ipsum dollor"
      // },
      // {
      //   name: "School3", 
      //   logo: "http://logos.com/school1.png",
      //   desc: "lorem ipsum dollor"
      // },
      // {
      //   name: "School1", 
      //   logo: "http://logos.com/school1.png",
      //   desc: "lorem ipsum dollor"
      // }
    ];

    // Public API here
    return {
      universities: universities
      
    };
  });
