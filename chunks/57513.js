n.d(t, {
  l: function() {
return p;
  }
});
var r = n(544891),
  i = n(379649),
  a = n(846519),
  s = n(570140),
  o = n(706454),
  l = n(283595),
  u = n(129542),
  c = n(70956),
  d = n(981631);
let _ = 10 * c.Z.Millis.MINUTE,
  E = 10 * c.Z.Millis.MINUTE,
  f = 1 * c.Z.Millis.MINUTE,
  h = {};
async function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
c = o.default.locale;
  return s.Z.dispatch({
type: 'APPLICATION_BUILD_FETCH_START',
applicationId: e,
branchId: t,
locale: c
  }), n && await (0, i._v)(Math.random() * f), r.tn.get({
url: d.ANM.APPLICATION_LIVE_BUILD(e, t),
query: {
  platform: (0, u.D)(),
  locale: c
},
oldFormErrors: !0
  }).then(n => {
let r = n.body;
if (0 === r.manifests.length) {
  s.Z.dispatch({
    type: 'APPLICATION_BUILD_NOT_FOUND',
    applicationId: e,
    branchId: t
  });
  return;
}
s.Z.dispatch({
  type: 'APPLICATION_BUILD_FETCH_SUCCESS',
  applicationId: e,
  branchId: t,
  locale: c,
  build: r
});
  }, n => {
let {
  status: r
} = n;
if (404 === r)
  s.Z.dispatch({
    type: 'APPLICATION_BUILD_NOT_FOUND',
    applicationId: e,
    branchId: t
  });
else {
  var i, o;
  i = e, null == h[o = t] && (h[o] = new a.V7()), h[o].start(_ + Math.random() * E, () => {
    null != l.Z.getLibraryApplication(i, o) && p(i, o);
  });
}
  });
}