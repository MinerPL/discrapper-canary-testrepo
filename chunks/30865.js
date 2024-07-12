r.d(e, {
  B: function() {
return _;
  }
});
let n = (0, r(24716).Rf)();

function _() {
  let t = n.chrome,
e = t && t.app && t.app.runtime,
r = 'history' in n && !!n.history.pushState && !!n.history.replaceState;
  return !e && r;
}