t.d(n, {
  f: function() {
return _;
  }
}), t(47120);
var i = t(470079),
  a = t(243814),
  l = t(442837),
  o = t(384275),
  r = t(911969),
  s = t(10718),
  c = t(148958),
  u = t(881998);
t(445392);
var d = t(689079);
let m = {
commandType: r.yU.CHAT
  },
  p = {
placeholderCount: 0,
limit: d.tn,
includeFrecency: !0
  };

function _(e, n) {
  let {
sectionDescriptors: t,
loading: r
  } = s.wi(e, m, p);
  return {
loading: r,
frecentApps: function(e, n) {
  i.useEffect(() => {
    e && o.Z.fetch();
  }, [e]);
  let t = (0, l.Wu)([u.Z], () => {
      var n, t;
      return e && null !== (t = null === (n = u.Z.getApps()) || void 0 === n ? void 0 : n.filter(e => e.scopes.includes(a.x.APPLICATIONS_COMMANDS))) && void 0 !== t ? t : [];
    }, [e]),
    r = n.filter(e => e.id !== d.bi.FRECENCY && e.id !== d.bi.BUILT_IN);
  return (0, c.h)(r, e ? t : []);
}(n, t)
  };
}