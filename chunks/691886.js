"use strict";
t.d(s, {
  Z: function() {
    return O
  }
}), t(653041), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(933557),
  d = t(471445),
  u = t(131704),
  E = t(324067),
  _ = t(699516),
  I = t(594174),
  T = t(729285),
  N = t(303737),
  m = t(981631),
  S = t(689938),
  h = t(652144);

function g(e) {
  return String(e)
}

function x(e) {
  let {
    icon: s,
    title: t,
    subtitle: i,
    className: l
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(h.label, l),
    children: [s, (0, n.jsxs)("div", {
      className: h.labelText,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        className: h.labelTitle,
        children: t
      }), null != i && "" !== i ? (0, n.jsx)(o.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: h.labelSubtitle,
        children: i
      }) : null]
    })]
  })
}

function C() {
  return (0, n.jsx)(x, {
    icon: (0, n.jsx)(T.Z, {
      className: h.labelIcon
    }),
    title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL,
    className: h.createLabel
  })
}

function R(e) {
  var s;
  let {
    channelId: t
  } = e, i = (0, N.m7)(t), l = (0, N.m7)(null !== (s = null == i ? void 0 : i.parent_id) && void 0 !== s ? s : m.lds);
  if (null == i) return null;
  let a = (0, d.KS)(i),
    r = (0, c.F6)(i, I.default, _.Z),
    o = null != l ? (0, c.F6)(l, I.default, _.Z) : void 0;
  return (0, n.jsx)(x, {
    icon: null != a && (0, n.jsx)(a, {
      className: h.labelIcon
    }),
    title: r,
    subtitle: o
  })
}

function L(e) {
  let {
    value: s
  } = e;
  return null != s ? (0, n.jsx)(R, {
    channelId: s
  }) : (0, n.jsx)(C, {})
}

function O(e) {
  let {
    guildId: s,
    value: l,
    initialChannelId: a,
    omitChannelIds: d,
    "aria-labelledby": T,
    onChange: h
  } = e, x = S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL, C = (0, r.e7)([E.Z], () => E.Z.getCategories(s), [s]), R = (0, N.m7)(null != l ? l : m.lds), O = i.useMemo(() => {
    let e = [{
        value: null,
        label: x
      }],
      s = !1;
    for (let t of C._categories)
      for (let {
          channel: n
        }
        of C[t.channel.id]) {
        if (!!(0, u.r8)(n.type) || !!(0, u.bw)(n.type))(!(n.id !== l && (null == d ? void 0 : d.has(n.id))) || n.id === a && l !== a) && (l === n.id && (s = !0), e.push({
          value: n.id,
          label: (0, c.F6)(n, I.default, _.Z)
        }))
      }
    return null != l && !s && null != R && e.push({
      value: l,
      label: R.name
    }), e
  }, [x, l, R, C, d, a]);
  return (0, n.jsx)(o.Select, {
    placeholder: S.Z.Messages.CHANNEL_SELECT,
    options: O,
    select: function(e) {
      null == e ? (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("7590"), t.e("45094"), t.e("61214")]).then(t.bind(t, 797671));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: s,
          onSubmit: h
        })
      }) : h(e)
    },
    isSelected: e => null != l && g(e) === g(l),
    serialize: g,
    renderOptionLabel: L,
    renderOptionValue: e => {
      let [s] = e;
      return L(s)
    },
    "aria-labelledby": T
  })
}