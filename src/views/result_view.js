const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-instrument-ready', (event) => {
    const instrument = event.detail;
    console.log(instrument);
    this.render(instrument);
  })
}

ResultView.prototype.render = function(instrument){
  this.container.innerHTML = '';

  const heading = this.createHeading(instrument);
  const info = this.createInfo(instrument);

  this.container.appendChild(heading);
  this.container.appendChild(info);
};

ResultView.prototype.createHeading = function(instrument) {
  const heading = document.createElement('h2');
  heading.textContent = instrument.name;
  return heading;
};

ResultView.prototype.createInfo = function (instrument) {
  const info = document.createElement('h3');
  info.textContent = instrument.description;
  return info;
}

module.exports = ResultView;
