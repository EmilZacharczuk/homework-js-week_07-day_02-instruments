const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    // console.log(allInstruments);
    this.populate(allInstruments)
  });

    this.element.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      // console.log(selectedIndex);
      PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentsData){
  instrumentsData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    // console.log(option.textContent);
    option.value = index;
    // console.log(index)
    this.element.appendChild(option);
  })
}
module.exports = SelectView;
