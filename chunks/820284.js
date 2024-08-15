r.d(t, {
  G: function() {
return i;
  }
});
var n = r(572299),
  a = r(263449),
  o = r(233517);
let i = function() {
  return {
bindClient(e) {
  (0, a.nZ)().setClient(e);
},
withScope: a.$e,
getClient: () => (0, a.s3)(),
getScope: a.nZ,
getIsolationScope: a.aF,
captureException: (e, t) => (0, a.nZ)().captureException(e, t),
captureMessage: (e, t, r) => (0, a.nZ)().captureMessage(e, t, r),
captureEvent: o.eN,
addBreadcrumb: n.n,
setUser: o.av,
setTags: o.mG,
setTag: o.YA,
setExtra: o.sU,
setExtras: o.rJ,
setContext: o.v,
getIntegration(e) {
  let t = (0, a.s3)();
  return t && t.getIntegrationByName(e.id) || null;
},
startSession: o.yj,
endSession: o.TM,
captureSession(e) {
  if (e)
    return (0, o.TM)();
  (function() {
    let e = (0, a.nZ)(),
      t = (0, a.s3)(),
      r = e.getSession();
    t && r && t.captureSession(r);
  }());
}
  };
};