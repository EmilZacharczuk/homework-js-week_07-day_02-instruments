const instrumentsData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const ResultView = require('./views/result_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrumentsDataModel = new InstrumentFamilies(instrumentsData);
  instrumentsDataModel.bindEvents();

  const selectInstrument = document.querySelector('select#animals-dropdown');
  const instrumentDropdown = new SelectView(selectInstrument);
  instrumentDropdown.bindEvents();

  
});
