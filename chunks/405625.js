"use strict";
n.d(t, {
  Z: function() {
    return u
  }
}), n(653041), n(47120);
var i = n(470079),
  r = n(911969),
  s = n(822245),
  o = n(675478),
  a = n(358085),
  l = n(761122);

function u(e) {
  return o.DZ.loadIfNecessary(), i.useMemo(() => {
    let t = [];
    e.forEach(e => t.push(e.application.id));
    let n = [...t];
    return n.sort((e, n) => {
      let i = s.Z.getScoreWithoutLoadingLatest(e),
        r = s.Z.getScoreWithoutLoadingLatest(n);
      return i !== r ? r - i : t.findIndex(t => t === e) < t.findIndex(e => e === n) ? -1 : 1
    }), _(e, n)
  }, [e])
}
let _ = (e, t) => {
  let n = [...e],
    i = 0;
  return t.forEach(e => {
    let t = n.findIndex(t => t.application.id === e);
    if (-1 !== t) {
      let e = n[t];
      n.splice(t, 1), n = [...n.slice(0, i), e, ...n.slice(i)], ++i
    }
  }), n.map((e, t) => [e, t]).filter(e => {
    var t, n;
    let [i] = e, s = null === (n = i.application.embeddedActivityConfig) || void 0 === n ? void 0 : null === (t = n.client_platform_config[(0, l.Z)((0, a.getOS)())]) || void 0 === t ? void 0 : t.label_type;
    return !!s && (s === r.ww.NEW || s === r.ww.UPDATED)
  }).forEach(e => {
    let [t, i] = e, r = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : i;
    if (r < i) {
      let e = n[i];
      n.splice(i, 1), n = [...n.slice(0, r), e, ...n.slice(r)]
    }
  }), n
}