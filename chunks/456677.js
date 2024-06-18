"use strict";
t.d(s, {
  Z: function() {
    return c
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(866830),
  a = t(85960),
  r = t(226192),
  o = t(683579);

function c(e) {
  let {
    rule: s,
    onChangeRule: t
  } = e, c = i.useMemo(() => (0, a.V9)(s.triggerType), [s.triggerType]), d = r.km(s.guildId), u = i.useMemo(() => (0, l.U5)(), []), E = (e, n) => {
    if (null == n) return;
    let i = s.actions.some(e => e.type === n.type),
      l = [...s.actions, n];
    if (i) {
      let t = s.actions.filter(e => e.type !== n.type);
      l = e ? [...t, n] : t
    }
    t({
      ...s,
      actions: l
    })
  }, _ = e => async t => {
    let n = s.actions.find(s => s.type === e),
      i = null != n,
      l = u[e],
      a = t ? n : l;
    if (null != a && (!i || t)) {
      let t = d[e];
      null != t ? E(!0, await t(s, a)) : E(!0, a)
    } else E(!1, i ? n : l)
  };
  return (0, n.jsx)(n.Fragment, {
    children: c.map(e => {
      let t = s.actions.find(s => s.type === e);
      return (0, n.jsx)(o.Z, {
        guildId: s.guildId,
        triggerType: s.triggerType,
        action: null != t ? t : u[e],
        toggled: null != t,
        onToggleAction: _(e)
      }, e)
    })
  })
}