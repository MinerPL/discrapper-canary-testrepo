"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
}), i("424973"), i("222007");
var l = i("884691"),
  n = i("798609"),
  a = i("605393"),
  d = i("872173"),
  u = i("773336"),
  r = i("334368");

function o(e) {
  return d.FrecencyUserSettingsActionCreators.loadIfNecessary(), l.useMemo(() => {
    let t = [];
    e.forEach(e => t.push(e.application.id));
    let i = [...t];
    i.sort((e, i) => {
      let l = a.default.getScoreWithoutLoadingLatest(e),
        n = a.default.getScoreWithoutLoadingLatest(i);
      return l !== n ? n - l : t.findIndex(t => t === e) < t.findIndex(e => e === i) ? -1 : 1
    });
    let l = c(e, i);
    return l
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
    let [l] = e, a = null === (i = l.application.embeddedActivityConfig) || void 0 === i ? void 0 : null === (t = i.client_platform_config[(0, r.default)((0, u.getOS)())]) || void 0 === t ? void 0 : t.label_type;
    return !!a && (a === n.EmbeddedActivityLabelTypes.NEW || a === n.EmbeddedActivityLabelTypes.UPDATED)
  }).forEach(e => {
    let [t, l] = e, n = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : l;
    if (n < l) {
      let e = i[l];
      i.splice(l, 1), i = [...i.slice(0, n), e, ...i.slice(n)]
    }
  }), i
}