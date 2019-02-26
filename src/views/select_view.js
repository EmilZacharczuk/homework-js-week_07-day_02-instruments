const PubSub = require('../helpers/pub_sub.js');

const SelectView = function () {

};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Select-view:instruments-list', (event) => {
    const allInstruments = event.details;
    console.log(allInstruments);
  });
}
module.exports = SelectView;
