var i = t(735250),
  r = t(470079),
  a = t(512722),
  u = t.n(a),
  o = t(442837),
  l = t(481060),
  s = t(10718),
  d = t(667204),
  c = t(826298),
  E = t(17165),
  _ = t(276022),
  I = t(430824),
  T = t(594174),
  N = t(689079),
  S = t(689938),
  p = t(768075);
n.Z = e => {
  let n, {
  commandType: t,
  commandTargetId: a,
  channel: A,
  guildId: O,
  onHeightUpdate: f,
  context: h
} = e,
M = (0, o.e7)([I.Z], () => I.Z.getGuild(null != O ? O : A.guild_id)),
R = (0, o.e7)([T.default], () => T.default.getUser(a)),
m = (0, _.Z)({
  user: R,
  guildId: null == M ? void 0 : M.id,
  channel: A,
  context: h
}),
{
  commands: Z,
  sectionDescriptors: g,
  loading: C
} = s.wi(A, {
  commandType: t
}, {
  limit: N.lr
}),
{
  sections: G
} = r.useMemo(() => {
  let e = {};
  return g.forEach(n => {
    e[n.id] = n;
  }), {
    sections: e
  };
}, [g]),
y = r.useRef(C.current);
  r.useEffect(() => {
C.current !== y.current && (y.current = C.current, null == f || f());
  }, [
C,
f
  ]);
  let v = r.useCallback(e => {
u()(null != A, 'menu item should not show if channel is null');
let n = G[e.applicationId],
  t = null != n ? (0, c.ky)(n) : void 0;
return (0, i.jsx)(l.MenuItem, {
  id: e.id,
  label: e.displayName,
  showIconFirst: !0,
  icon: () => null != t ? (0, i.jsx)(t, {
    channel: A,
    section: n,
    width: 18,
    height: 18,
    selectable: !1
  }) : null,
  action: () => {
    (0, d.Z)({
      command: e,
      optionValues: {},
      context: {
        channel: A,
        guild: M
      },
      commandTargetId: a
    });
  }
}, e.id);
  }, [
A,
M,
a,
G
  ]);
  return C.current ? n = (0, i.jsx)(l.MenuItem, {
id: 'menu-commands-placeholder',
render: () => (0, i.jsx)(E.Z, {}),
disabled: !0
  }, 'menu-commands-placeholder') : (n = 0 === Z.length ? (0, i.jsx)(l.MenuItem, {
id: 'menu-commands-empty',
label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
disabled: !0
  }, 'menu-commands-empty') : Z.map(v), null != m && (n = (0, i.jsxs)(i.Fragment, {
children: [
  n,
  (0, i.jsx)(l.MenuSeparator, {}, 'separator'),
  m
]
  }))), (0, i.jsx)(l.MenuItem, {
id: 'apps',
label: S.Z.Messages.APPS,
listClassName: p.list,
children: n
  });
};