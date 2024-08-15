n.d(t, {
  Z: function() {
return i;
  }
}), n(47120);
var s = n(470079);

function r() {
  return 'undefined' == typeof document || 'visible' === document.visibilityState;
}

function i() {
  let [e, t] = (0, s.useState)(r());
  return (0, s.useEffect)(() => {
function e() {
  t(r());
}
return window.addEventListener('visibilitychange', e), () => {
  window.removeEventListener('visibilitychange', e);
};
  }, [t]), e;
}