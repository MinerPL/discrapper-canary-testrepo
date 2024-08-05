n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var i = n(470079);
let s = !1,
  a = new Set();

function r(e) {
  e !== s && (s = e, a.forEach(e => e(s)));
}

function l() {
  let [e, t] = i.useState(s);
  return i.useEffect(() => {
let e = e => {
  t(e);
};
return a.add(e), () => {
  a.delete(e);
};
  }, []), e;
}
window.addEventListener('keydown', e => {
  r(e.shiftKey);
}), window.addEventListener('keyup', e => {
  r(e.shiftKey);
}), window.addEventListener('mousemove', e => {
  r(e.shiftKey);
}), window.addEventListener('blur', () => {
  r(!1);
});