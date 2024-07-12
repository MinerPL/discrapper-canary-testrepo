
function r(e) {
  return new ResizeObserver(e);
}

function i(e, t) {
  e.observe(t);
}

function a(e, t) {
  e.unobserve(t);
}
n.d(t, {
  UC: function() {
return a;
  },
  YP: function() {
return i;
  },
  pP: function() {
return r;
  }
});