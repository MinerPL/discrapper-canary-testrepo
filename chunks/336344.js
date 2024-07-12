r.d(e, {
  $G: function() {
return _;
  },
  U0: function() {
return i;
  },
  nK: function() {
return a;
  }
});
var n = r(46834);

function _(t, e = 0) {
  return 'string' != typeof t || 0 === e ? t : t.length <= e ? t : `${ t.slice(0, e) }...`;
}

function a(t, e) {
  if (!Array.isArray(t))
return '';
  let r = [];
  for (let e = 0; e < t.length; e++) {
let n = t[e];
try {
  r.push(String(n));
} catch (t) {
  r.push('[value cannot be serialized]');
}
  }
  return r.join(e);
}

function i(t, e = [], r = !1) {
  return e.some(e => function(t, e, r = !1) {
return !!(0, n.HD)(t) && ((0, n.Kj)(e) ? e.test(t) : !!(0, n.HD)(e) && (r ? t === e : t.includes(e)));
  }(t, e, r));
}