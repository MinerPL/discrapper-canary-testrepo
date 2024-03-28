"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("653041"), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("933557"),
  u = s("471445"),
  c = s("131704"),
  E = s("324067"),
  _ = s("699516"),
  I = s("594174"),
  T = s("729285"),
  S = s("303737"),
  f = s("981631"),
  m = s("689938"),
  N = s("712186");

function g(e) {
  return String(e)
}

function h(e) {
  let {
    icon: t,
    title: s,
    subtitle: l,
    className: n
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(N.label, n),
    children: [t, (0, a.jsxs)("div", {
      className: N.labelText,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        className: N.labelTitle,
        children: s
      }), null != l && "" !== l ? (0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: N.labelSubtitle,
        children: l
      }) : null]
    })]
  })
}

function C() {
  return (0, a.jsx)(h, {
    icon: (0, a.jsx)(T.default, {
      className: N.labelIcon
    }),
    title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL,
    className: N.createLabel
  })
}

function R(e) {
  var t;
  let {
    channelId: s
  } = e, l = (0, S.useChannelWithTemplateFallback)(s), n = (0, S.useChannelWithTemplateFallback)(null !== (t = null == l ? void 0 : l.parent_id) && void 0 !== t ? t : f.EMPTY_STRING_SNOWFLAKE_ID);
  if (null == l) return null;
  let i = (0, u.getChannelIconComponent)(l),
    r = (0, d.computeChannelName)(l, I.default, _.default),
    o = null != n ? (0, d.computeChannelName)(n, I.default, _.default) : void 0;
  return (0, a.jsx)(h, {
    icon: null != i && (0, a.jsx)(i, {
      className: N.labelIcon
    }),
    title: r,
    subtitle: o
  })
}

function x(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, a.jsx)(R, {
    channelId: t
  }) : (0, a.jsx)(C, {})
}

function L(e) {
  let {
    guildId: t,
    value: n,
    initialChannelId: i,
    omitChannelIds: u,
    "aria-labelledby": T,
    onChange: N
  } = e, h = m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL, C = (0, r.useStateFromStores)([E.default], () => E.default.getCategories(t), [t]), R = (0, S.useChannelWithTemplateFallback)(null != n ? n : f.EMPTY_STRING_SNOWFLAKE_ID), L = l.useMemo(() => {
    let e = [{
        value: null,
        label: h
      }],
      t = !1;
    for (let s of C._categories)
      for (let {
          channel: a
        }
        of C[s.channel.id]) {
        if (!!(0, c.isGuildSelectableChannelType)(a.type) || !!(0, c.isGuildVocalChannelType)(a.type))(!(a.id !== n && (null == u ? void 0 : u.has(a.id))) || a.id === i && n !== i) && (n === a.id && (t = !0), e.push({
          value: a.id,
          label: (0, d.computeChannelName)(a, I.default, _.default)
        }))
      }
    return null != n && !t && null != R && e.push({
      value: n,
      label: R.name
    }), e
  }, [h, n, R, C, u, i]);
  return (0, a.jsx)(o.Select, {
    placeholder: m.default.Messages.CHANNEL_SELECT,
    options: L,
    select: function(e) {
      null == e ? (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("7590"), s.e("45094"), s.e("61214")]).then(s.bind(s, "797671"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t,
          onSubmit: N
        })
      }) : N(e)
    },
    isSelected: e => null != n && g(e) === g(n),
    serialize: g,
    renderOptionLabel: x,
    renderOptionValue: e => {
      let [t] = e;
      return x(t)
    },
    "aria-labelledby": T
  })
}