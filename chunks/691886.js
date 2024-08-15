n.d(t, {
  Z: function() {
return R;
  }
}), n(653041), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(933557),
  d = n(471445),
  u = n(131704),
  _ = n(324067),
  I = n(699516),
  E = n(594174),
  T = n(303737),
  m = n(981631),
  N = n(689938),
  S = n(919319);

function h(e) {
  return String(e);
}

function g(e) {
  let {
icon: t,
title: n,
subtitle: a,
className: i
  } = e;
  return (0, s.jsxs)('div', {
className: r()(S.label, i),
children: [
  t,
  (0, s.jsxs)('div', {
    className: S.labelText,
    children: [
      (0, s.jsx)(o.Text, {
        variant: 'text-md/normal',
        color: 'none',
        className: S.labelTitle,
        children: n
      }),
      null != a && '' !== a ? (0, s.jsx)(o.Text, {
        variant: 'text-xs/semibold',
        color: 'text-muted',
        className: S.labelSubtitle,
        children: a
      }) : null
    ]
  })
]
  });
}

function C() {
  return (0, s.jsx)(g, {
icon: (0, s.jsx)(o.PlusSmallIcon, {
  size: 'md',
  color: 'currentColor',
  className: S.labelIcon
}),
title: N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL,
className: S.createLabel
  });
}

function x(e) {
  var t;
  let {
channelId: n
  } = e, a = (0, T.m7)(n), i = (0, T.m7)(null !== (t = null == a ? void 0 : a.parent_id) && void 0 !== t ? t : m.lds);
  if (null == a)
return null;
  let r = (0, d.KS)(a),
l = (0, c.F6)(a, E.default, I.Z),
o = null != i ? (0, c.F6)(i, E.default, I.Z) : void 0;
  return (0, s.jsx)(g, {
icon: null != r && (0, s.jsx)(r, {
  className: S.labelIcon
}),
title: l,
subtitle: o
  });
}

function p(e) {
  let {
value: t
  } = e;
  return null != t ? (0, s.jsx)(x, {
channelId: t
  }) : (0, s.jsx)(C, {});
}

function R(e) {
  let {
guildId: t,
value: i,
initialChannelId: r,
omitChannelIds: d,
'aria-labelledby': S,
onChange: g
  } = e, C = N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_SELECT_CREATE_LABEL, x = (0, l.e7)([_.Z], () => _.Z.getCategories(t), [t]), R = (0, T.m7)(null != i ? i : m.lds), f = a.useMemo(() => {
let e = [{
    value: null,
    label: C
  }],
  t = !1;
for (let n of x._categories)
  for (let {
      channel: s
    }
    of x[n.channel.id]) {
    if (!!(0, u.r8)(s.type) || !!(0, u.bw)(s.type))
      (!(s.id !== i && (null == d ? void 0 : d.has(s.id))) || s.id === r && i !== r) && (i === s.id && (t = !0), e.push({
        value: s.id,
        label: (0, c.F6)(s, E.default, I.Z)
      }));
  }
return null != i && !t && null != R && e.push({
  value: i,
  label: R.name
}), e;
  }, [
C,
i,
R,
x,
d,
r
  ]);
  return (0, s.jsx)(o.Select, {
placeholder: N.Z.Messages.CHANNEL_SELECT,
options: f,
select: function(e) {
  null == e ? (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('7590'),
      n.e('45094'),
      n.e('2367')
    ]).then(n.bind(n, 797671));
    return n => (0, s.jsx)(e, {
      ...n,
      guildId: t,
      onSubmit: g
    });
  }) : g(e);
},
isSelected: e => null != i && h(e) === h(i),
serialize: h,
renderOptionLabel: p,
renderOptionValue: e => {
  let [t] = e;
  return p(t);
},
'aria-labelledby': S
  });
}