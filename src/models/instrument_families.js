const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function () {
  console.log(this.data)
  PubSub.publish('Select-view:instruments-list', this.data);

}

module.exports = InstrumentFamilies;
