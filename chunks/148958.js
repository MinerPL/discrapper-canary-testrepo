"use strict";
n.d(t, {
  h: function() {
    return u
  }
}), n(47120), n(653041);
var i = n(470079),
  r = n(442837),
  s = n(581364),
  o = n(675478),
  a = n(709054),
  l = n(822245);

function u(e, t) {
  i.useEffect(() => {
    o.DZ.loadIfNecessary()
  }, []);
  let n = (0, r.e7)([l.Z], () => l.Z.getApplicationFrecencyWithoutLoadingLatest()),
    u = i.useMemo(() => null == t ? void 0 : t.filter(t => !e.some(e => e.id === t.application.id)), [e, t]);
  return i.useMemo(() => {
    var t;
    null == u || u.forEach(e => {
      let t = a.default.extractTimestamp(e.id);
      null == n.getEntry(e.application.id) && n.track(e.application.id, t)
    }), n.compute();
    let i = null !== (t = null == u ? void 0 : u.map(e => (0, s.X0)(e.application))) && void 0 !== t ? t : [],
      r = [...e];
    return r.push(...i), r.sort((e, t) => {
      var i, r;
      let s = (null !== (i = n.getScore(t.id)) && void 0 !== i ? i : 0) - (null !== (r = n.getScore(e.id)) && void 0 !== r ? r : 0);
      return 0 !== s ? s : e.name.localeCompare(t.name)
    }), r
  }, [e, n, u])
}