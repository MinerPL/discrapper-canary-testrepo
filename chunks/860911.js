
function n(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
n = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : '',
a = null != e ? '?redirect_to='.concat(encodeURIComponent(e)) : '';
  return 0 !== r.length && (r = 0 === a.length ? '?'.concat(r) : '&'.concat(r)), ''.concat(t ? n : '', '/login').concat(a).concat(r);
}
r.d(t, {
  F: function() {
return a;
  },
  U: function() {
return n;
  }
}), r(47120);

function a(e, t) {
  let r = {};
  for (let n of Object.keys(e)) {
let a = e[n];
if ('function' != typeof a) {
  r[n] = a;
  continue;
}
r[n] = function() {
  for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return a(... function(e, t) {
    return e.map(e => null == e ? e : null == t ? encodeURIComponent(e) : String(e).split('').map(e => null != t && t.includes(e) ? e : encodeURIComponent(e)).join(''));
  }(r, t));
};
  }
  return r;
}