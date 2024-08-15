t.d(n, {
  Z: function() {
return b;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(392711),
  l = t.n(s),
  r = t(149765),
  o = t(442837),
  d = t(481060),
  c = t(895924),
  u = t(581364),
  I = t(605436),
  m = t(777036),
  _ = t(271383),
  N = t(430824),
  E = t(496675),
  T = t(821864),
  h = t(905753),
  g = t(937427),
  p = t(643886),
  f = t(869157),
  C = t(454092),
  O = t(289465),
  x = t(981631),
  S = t(689079),
  A = t(689938),
  R = t(869880);

function b(e) {
  let {
applicationId: n,
commandId: s,
guildId: g,
inModal: p,
editedTargetPermissions: b,
originalApplicationPermissions: M,
originalCommandPermissions: L,
selectedPermissionCount: j
  } = e, D = (0, o.e7)([h.Z], () => null == s ? null : h.Z.getCommand(s), [s]), P = (null == D ? void 0 : D.defaultMemberPermissions) != null, B = (0, o.e7)([
N.Z,
_.ZP,
E.Z
  ], () => {
let e = N.Z.getGuild(g),
  n = _.ZP.getSelfMember(g);
return null != e && null != n && (0, u.Ft)({
  PermissionStore: E.Z,
  guild: e,
  selfMember: n,
  applicationLevelPermissions: M,
  commandLevelPermissions: L,
  defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
});
  }, [
g,
D,
M,
L
  ]), y = null != s ? s : n, [G, k] = a.useMemo(() => {
let e = {},
  n = {};
for (let [t, i] of Object.entries(b))
  i.type === c.Kw.CHANNEL ? e[t] = i : n[t] = i;
return [
  e,
  n
];
  }, [b]), U = a.useCallback(e => {
let n = N.Z.getGuild(g),
  t = _.ZP.getSelfMember(g);
return null != n && null != t && (null != s ? (0, u.Ft)({
  PermissionStore: E.Z,
  guild: n,
  selfMember: t,
  applicationLevelPermissions: M,
  commandLevelPermissions: e,
  defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
}) : (0, u.Ft)({
  PermissionStore: E.Z,
  guild: n,
  selfMember: t,
  applicationLevelPermissions: e
}));
  }, [
g,
D,
s,
M
  ]), H = a.useCallback((e, n) => {
let t;
let i = null;
if (0 !== n.length) {
  let e = b[n[0]];
  if (e.type === c.Kw.USER)
    t = C.s.REMOVE_SELF;
  else {
    let n = e.id;
    if (t = C.s.REMOVE_ROLE, (0, I.pM)(g, n))
      i = '@everyone';
    else {
      let e = N.Z.getRole(g, n);
      i = null != e ? e.name : 'role';
    }
  }
} else {
  let n = Object.values(e)[0].id;
  if (t = C.s.DENY_ROLE, (0, I.pM)(g, n))
    i = '@everyone';
  else {
    let e = N.Z.getRole(g, n);
    i = null != e ? e.name : 'role';
  }
}
(0, C._)(t, i);
  }, [
g,
b
  ]), w = a.useCallback((e, t) => {
let i = {};
for (let [e, n] of Object.entries(b))
  i[e] = {
    id: n.id,
    permission: n.permission,
    type: n.type
  };
if (i = Object.assign(i, e), t.length > 0 && (i = l().omit(i, t)), !U(i)) {
  H(e, t);
  return;
}
T.W4(n, y, i);
  }, [
n,
b,
y,
U,
H
  ]), W = a.useCallback(() => {
let e = Object.keys(G);
return (0, d.openModalLazy)(async () => {
  let {
    default: n
  } = await t.e('64908').then(t.bind(t, 557944));
  return t => (0, i.jsx)(n, {
    editPermissions: w,
    guildId: g,
    headerText: A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
    hasMemberSearch: !1,
    overwrittenKeys: e,
    search: Z,
    searchPlaceholderText: A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
    selectedPermissionCount: j,
    ...t
  });
});
  }, [
w,
G,
g,
j
  ]), F = a.useCallback(() => {
let e = Object.keys(k);
return (0, d.openModalLazy)(async () => {
  let {
    default: n
  } = await t.e('64908').then(t.bind(t, 557944));
  return t => (0, i.jsx)(n, {
    editPermissions: w,
    guildId: g,
    hasMemberSearch: !0,
    headerText: A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
    overwrittenKeys: e,
    search: v,
    searchPlaceholderText: A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
    selectedPermissionCount: j,
    ...t
  });
});
  }, [
w,
g,
k,
j
  ]), V = a.useCallback(() => (0, d.openModalLazy)(async () => {
let {
  default: e
} = await t.e('21897').then(t.bind(t, 303313)), n = D.defaultMemberPermissions;
return r.fS(n, u.BO) && (n = x.Plq.ADMINISTRATOR), t => (0, i.jsx)(e, {
  ...t,
  defaultMemberPermissions: n
});
  }), [D]), K = j - S._n, Y = K >= 0, z = [{
  buttonClick: F,
  buttonText: A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
  noneSelectedText: A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_NO_ENTRIES,
  overwrites: k,
  title: null == s ? A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD : A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_HEADER
},
{
  buttonClick: W,
  buttonText: A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
  noneSelectedText: A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_NO_ENTRIES,
  overwrites: G,
  title: null == s ? A.Z.Messages.CHANNELS : A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_HEADER
}
  ];
  return (0, i.jsxs)(a.Fragment, {
children: [
  K > 0 ? (0, i.jsx)(m.Z, {
    messageType: m.Q.WARNING,
    children: A.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_NOTICE_TEXT.format({
      removeCount: K
    })
  }) : null,
  P ? (0, i.jsxs)('div', {
    className: R.requiredPermissionsBanner,
    children: [
      (0, i.jsx)(d.CircleInformationIcon, {
        size: 'sm',
        color: 'currentColor',
        className: R.icon
      }),
      (0, i.jsx)('span', {
        className: R.message,
        children: A.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_SECTION_DESCRIPTION.format()
      }),
      (0, i.jsx)(d.Button, {
        color: d.Button.Colors.PRIMARY,
        onClick: V,
        size: d.Button.Sizes.SMALL,
        className: R.addButton,
        children: A.Z.Messages.VIEW
      })
    ]
  }) : null,
  z.map((e, n) => {
    let t = n => (0, i.jsx)(d.Button, {
        ...n,
        color: d.Button.Colors.PRIMARY,
        disabled: Y || !B,
        onClick: e.buttonClick,
        size: d.Button.Sizes.TINY,
        className: R.addButton,
        children: e.buttonText
      }),
      a = null;
    return B ? Y && (a = A.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX) : a = null != s ? A.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : A.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION, (0, i.jsx)(O.Z, {
      bar: (0, i.jsx)(d.Tooltip, {
        tooltipClassName: R.tooltip,
        text: a,
        shouldShow: null != a,
        children: e => t(e)
      }),
      inModal: p,
      title: e.title,
      children: (0, i.jsx)('div', {
        className: p ? void 0 : R.listContainer,
        children: (0, i.jsx)(f.Z, {
          guildId: g,
          commandId: s,
          noneSelectedText: e.noneSelectedText,
          overwrites: e.overwrites,
          editPermissions: w,
          hasAccessToMutatePermissions: B
        })
      })
    }, n);
  })
]
  });
}

function Z(e) {
  let n = (0, g.w)(e);
  return {
...n,
results: n.results.map(e => ({
  ...e,
  type: c.Kw.CHANNEL
}))
  };
}

function v(e) {
  let n = (0, p.U)(e);
  return {
...n,
results: n.results.roles.map(e => ({
  ...e,
  type: c.Kw.ROLE
})).concat(n.results.members.map(e => ({
  ...e,
  type: c.Kw.USER
})))
  };
}