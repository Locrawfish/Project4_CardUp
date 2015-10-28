(function() {
  angular.module('cardUpApp').
  filter('inventory', function() {

    function isMatch(str, pattern) {
      if (pattern) {
        return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
      }
      else {
        return true;
      }
    }

    return function(inventory, searchText) {
      var cards = {
          searchText: searchText,
          out: []
      };
      angular.forEach(inventory, function (card) {
        if (isMatch(card.name   , this.searchText) ||
            isMatch(card.title      , this.searchText) ||
            isMatch(card.company, this.searchText) ||
            isMatch(card.email, this.searchText)) {
          this.out.push(card);
        }
      }, cards);
      return cards.out;
    };
  });
})();
