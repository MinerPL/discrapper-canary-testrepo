n.d(t, {
  Z: function() {
return i;
  }
});
var r = n(358085);

function i() {
  let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
i = window.GLOBAL_ENV.INVITE_HOST;
  return (0, r.isAndroid)() ? (i = location.host, e = '/invite/'.concat(t)) : e = '/'.concat(t), ''.concat(n ? ''.concat(location.protocol, '//') : '').concat(i).concat(e);
}