(function () {
  var STEPS = [0.2, 0.25, 0.33, 0.5, 0.67, 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5];
  var KEY = 'blog-font-scale';

  var dec = document.getElementById('font-decrease');
  var inc = document.getElementById('font-increase');
  var readout = document.getElementById('font-size-reset');
  if (!dec || !inc || !readout) return;

  function currentIndex() {
    var stored = parseFloat(localStorage.getItem(KEY));
    var idx = STEPS.indexOf(stored);
    return idx === -1 ? STEPS.indexOf(1) : idx;
  }

  function render(value) {
    var label = Math.round(value * 100) + '%';
    readout.textContent = label;
    dec.title = 'Decrease text size (' + label + ')';
    inc.title = 'Increase text size (' + label + ')';
  }

  function apply(value) {
    document.documentElement.style.setProperty('--font-scale', value);
    try { localStorage.setItem(KEY, value); } catch (e) {}
    render(value);
  }

  render(STEPS[currentIndex()]);

  dec.addEventListener('click', function () {
    apply(STEPS[Math.max(0, currentIndex() - 1)]);
  });
  inc.addEventListener('click', function () {
    apply(STEPS[Math.min(STEPS.length - 1, currentIndex() + 1)]);
  });
  readout.addEventListener('click', function () {
    apply(1);
  });
})();
