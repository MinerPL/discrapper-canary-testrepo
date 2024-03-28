"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
}), i("653041"), i("47120");
var l = i("470079"),
  n = i("911969"),
  a = i("822245"),
  d = i("675478"),
  u = i("358085"),
  o = i("761122");

function r(e) {
  return d.FrecencyUserSettingsActionCreators.loadIfNecessary(), l.useMemo(() => {
    let t = [];
    e.forEach(e => t.push(e.application.id));
    let i = [...t];
    return i.sort((e, i) => {
      let l = a.default.getScoreWithoutLoadingLatest(e),
        n = a.default.getScoreWithoutLoadingLatest(i);
      return l !== n ? n - l : t.findIndex(t => t === e) < t.findIndex(e => e === i) ? -1 : 1
    }), c(e, i)
  }, [e])
}
let c = (e, t) => {
  let i = [...e],
    l = 0;
  return t.forEach(e => {
    let t = i.findIndex(t => t.application.id === e);
    if (-1 !== t) {
      let e = i[t];
      i.splice(t, 1), i = [...i.slice(0, l), e, ...i.slice(l)], ++l
    }
  }), i.map((e, t) => [e, t]).filter(e => {
    var t, i;
    let [l] = e, a = null === (i = l.application.embeddedActivityConfig) || void 0 === i ? void 0 : null === (t = i.client_platform_config[(0, o.default)((0, u.getOS)())]) || void 0 === t ? void 0 : t.label_type;
    return !!a && (a === n.EmbeddedActivityLabelTypes.NEW || a === n.EmbeddedActivityLabelTypes.UPDATED)
  }).forEach(e => {
    let [t, l] = e, n = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : l;
    if (n < l) {
      let e = i[l];
      i.splice(l, 1), i = [...i.slice(0, n), e, ...i.slice(n)]
    }
  }), i
}