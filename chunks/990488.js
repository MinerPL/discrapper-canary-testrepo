n.d(s, {
  W: function() {
return x;
  },
  r: function() {
return R;
  }
}), n(47120);
var l = n(735250),
  t = n(470079),
  i = n(442837),
  r = n(430824),
  a = n(594174),
  o = n(246364),
  d = n(866319),
  u = n(118346),
  c = n(186078),
  I = n(73880),
  E = n(276486),
  M = n(196345),
  m = n(707592),
  _ = n(981631);

function N(e) {
  let {
guildId: s,
formFields: n,
updateFormFields: t
  } = e, a = (0, i.e7)([r.Z], () => {
var e;
return null === (e = r.Z.getGuild(s)) || void 0 === e ? void 0 : e.rulesChannelId;
  }), d = (e, s) => {
let l = n[e];
t([
  ...n.slice(0, e),
  {
    ...l,
    response: s
  },
  ...n.slice(e + 1)
]);
  }, u = (e, s) => {
let l = n[e];
t([
  ...n.slice(0, e),
  {
    ...l,
    response: s
  },
  ...n.slice(e + 1)
]);
  }, E = (e, s) => {
let {
  value: l
} = s, i = n[e];
t([
  ...n.slice(0, e),
  {
    ...i,
    response: l
  },
  ...n.slice(e + 1)
]);
  }, _ = (e, s) => {
switch (e.field_type) {
  case o.QJ.TERMS:
    return (0, l.jsx)(M.dd, {
      channelId: a,
      formField: e,
      onChange: (e, n) => d(s, n)
    }, s);
  case o.QJ.TEXT_INPUT:
    return (0, l.jsx)(m.zY, {
      formField: e,
      autofocus: 0 === s,
      onChange: e => u(s, e)
    }, s);
  case o.QJ.PARAGRAPH:
    return (0, l.jsx)(I.lX, {
      formField: e,
      autofocus: 0 === s,
      onChange: e => u(s, e)
    }, s);
  case o.QJ.MULTIPLE_CHOICE:
    return (0, l.jsx)(c.sp, {
      formField: e,
      onChange: e => E(s, e)
    }, s);
}
  };
  return (0, l.jsx)(l.Fragment, {
children: n.map((e, s) => _(e, s))
  });
}

function x(e) {
  let {
guildId: s,
formFields: n,
updateFormFields: t
  } = e, o = (0, i.e7)([r.Z], () => r.Z.getGuild(s)), c = (0, i.e7)([a.default], () => a.default.getCurrentUser()), I = (0, d.G)({
guildId: s
  }) ? E.l : u.b, M = null == o ? void 0 : o.hasFeature(_.oNc.COMMUNITY);
  return null == c ? null : (0, l.jsxs)(l.Fragment, {
children: [
  M && (0, l.jsx)(I, {}),
  (0, l.jsx)(N, {
    guildId: s,
    formFields: n,
    updateFormFields: t
  })
]
  });
}

function R(e) {
  let {
guildId: s,
formFields: n,
updateFormFields: o
  } = e, c = (0, i.e7)([r.Z], () => r.Z.getGuild(s)), I = (0, i.e7)([a.default], () => a.default.getCurrentUser()), {
isPhoneVerificationLevel: M,
isCurrentUserVerified: m
  } = (0, d.b)({
guildId: s
  }), x = t.useRef(m), R = M ? E.v : u.B, f = (null == c ? void 0 : c.hasFeature(_.oNc.COMMUNITY)) && !x.current;
  return null == I ? null : (0, l.jsxs)(l.Fragment, {
children: [
  f && (0, l.jsx)(R, {
    isUserVerified: m
  }),
  (0, l.jsx)(N, {
    guildId: s,
    formFields: n,
    updateFormFields: o
  })
]
  });
}