(() => {
type UserID = string | number | boolean  // ALIAS TYPE
  let userId: UserID;

   // literal type and alias type
   type Sizes = 'S' | 'M' | 'L' | 'XL';
   let shirtSize: Sizes;

  function greeTing(userId:UserID, size:Sizes) {
    if (typeof userId === 'string') {
      return userId.toLowerCase();
    }
  }
 console.log(greeTing('Hi','M'));
 console.log(greeTing(1234,'S'));

})();
