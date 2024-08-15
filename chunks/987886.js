r.d(t, {
  B: function() {
return a;
  }
});
let n = r(899517).n;

function a() {
  let e = n.chrome,
t = e && e.app && e.app.runtime,
r = 'history' in n && !!n.history.pushState && !!n.history.replaceState;
  return !t && r;
}