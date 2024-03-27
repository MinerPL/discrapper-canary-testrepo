"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("369035"),
  i = s("296839"),
  r = s("928098"),
  o = s("914559");

function d(e) {
  let {
    rule: t,
    onChangeRule: s
  } = e, d = l.useMemo(() => (0, i.getAvailableActionTypes)(t.triggerType), [t.triggerType]), u = r.getPromiseableActionHandlers(t.guildId), c = l.useMemo(() => (0, n.getDefaultActions)(), []), E = (e, a) => {
    if (null == a) return;
    let l = t.actions.some(e => e.type === a.type),
      n = [...t.actions, a];
    if (l) {
      let s = t.actions.filter(e => e.type !== a.type);
      n = e ? [...s, a] : s
    }
    s({
      ...t,
      actions: n
    })
  }, _ = e => async s => {
    let a = t.actions.find(t => t.type === e),
      l = null != a,
      n = c[e],
      i = s ? a : n;
    if (null != i && (!l || s)) {
      let s = u[e];
      if (null != s) {
        let e = await s(t, i);
        E(!0, e)
      } else E(!0, i)
    } else E(!1, l ? a : n)
  };
  return (0, a.jsx)(a.Fragment, {
    children: d.map(e => {
      let s = t.actions.find(t => t.type === e);
      return (0, a.jsx)(o.default, {
        guildId: t.guildId,
        triggerType: t.triggerType,
        action: null != s ? s : c[e],
        toggled: null != s,
        onToggleAction: _(e)
      }, e)
    })
  })
}