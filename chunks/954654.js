"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  },
  renderComponents: function() {
    return C
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("911969"),
  u = n("592125"),
  o = n("970184"),
  i = n("292419"),
  r = n("987106"),
  d = n("927057"),
  c = n("574597"),
  m = n("378975"),
  p = n("413991"),
  f = n("889515"),
  E = n("719599");

function C(e) {
  return e.map((e, t) => (function(e, t) {
    switch (e.type) {
      case s.ComponentType.ACTION_ROW:
        return (0, l.jsx)(f.default, {
          ...e,
          renderComponents: C
        }, t);
      case s.ComponentType.BUTTON:
        return (0, l.jsx)(r.default, {
          ...e
        }, t);
      case s.ComponentType.STRING_SELECT:
        return (0, l.jsx)(m.default, {
          ...e
        }, t);
      case s.ComponentType.CHANNEL_SELECT:
        return (0, l.jsx)(d.default, {
          ...e
        }, t);
      case s.ComponentType.USER_SELECT:
      case s.ComponentType.ROLE_SELECT:
      case s.ComponentType.MENTIONABLE_SELECT:
        return (0, l.jsx)(c.default, {
          ...e
        }, t);
      case s.ComponentType.INPUT_TEXT:
        return (0, l.jsx)(p.default, {
          ...e
        }, t)
    }
  })(e, t.toString()))
}

function S(e) {
  let {
    message: t
  } = e, n = a.useMemo(() => {
    var e, n;
    let l = u.default.getChannel(t.channel_id),
      a = null == l ? void 0 : l.guild_id;
    return (0, i.createComponents)(null !== (e = t.components) && void 0 !== e ? e : [], null !== (n = t.applicationId) && void 0 !== n ? n : t.author.id, a)
  }, [t]);
  return 0 === n.length ? null : (0, l.jsx)("div", {
    className: E.container,
    children: (0, l.jsx)(o.ComponentStateContextProvider, {
      message: t,
      children: C(n)
    })
  })
}