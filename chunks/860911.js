
function n(t) {
  let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
n = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : '',
_ = null != t ? '?redirect_to='.concat(encodeURIComponent(t)) : '';
  return 0 !== r.length && (r = 0 === _.length ? '?'.concat(r) : '&'.concat(r)), ''.concat(e ? n : '', '/login').concat(_).concat(r);
}
r.d(e, {
  F: function() {
return _;
  },
  U: function() {
return n;
  }
}), r(47120);

function _(t, e) {
  let r = {};
  for (let n of Object.keys(t)) {
let _ = t[n];
if ('function' != typeof _) {
  r[n] = _;
  continue;
}
r[n] = function() {
  for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return _(... function(t, e) {
    return t.map(t => null == t ? t : null == e ? encodeURIComponent(t) : String(t).split('').map(t => null != e && e.includes(t) ? t : encodeURIComponent(t)).join(''));
  }(r, e));
};
  }
  return r;
}