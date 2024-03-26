(() => {
  let userId: string | number;
  userId = crypto.randomUUID();

  function greeTing(text: string | number) {
    if (typeof text !== 'number') {
      return text.toLowerCase();
    } else {
      return text.toFixed(1);
    }
  }
 console.log(greeTing('Hi'));
 console.log(greeTing(1234));
})();
