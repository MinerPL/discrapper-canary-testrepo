t.d(n, {
  Z: function() {
return O;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(140835),
  r = t(246521),
  s = t(481060),
  o = t(911969),
  c = t(555573),
  u = t(213459),
  d = t(10718),
  m = t(895924),
  p = t(583027),
  _ = t(585483),
  E = t(499254),
  A = t(541099),
  h = t(827498),
  f = t(496158),
  N = t(676161),
  C = t(660090),
  v = t(783097),
  I = t(176412),
  P = t(870205),
  x = t(981631),
  T = t(689079),
  g = t(689938),
  R = t(763963);

function S(e) {
  var n, t;
  let {
channel: r,
command: o,
section: u,
sectionName: d
  } = e, f = l.useCallback(() => {
let e = A.Z.entrypoint();
E.y(h.ti.COMMAND), (0, p.Mo)({
  command: o,
  location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
  sectionName: d
}), c.Po({
  channelId: r.id,
  command: o,
  section: u,
  location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
  sectionName: d,
  source: e,
  commandOrigin: m.bB.APPLICATION_LAUNCHER
}), _.S.dispatch(x.CkL.FOCUS_CHANNEL_TEXT_AREA, {
  channelId: r.id
});
  }, [
r.id,
o,
u,
d
  ]), N = (null !== (t = null === (n = o.options) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0, C = l.useMemo(() => (0, i.jsxs)('div', {
className: R.commandTextContainer,
children: [
  (0, i.jsx)(s.Text, {
    variant: 'text-sm/semibold',
    color: 'header-primary',
    children: o.displayName
  }),
  (0, i.jsx)(s.Text, {
    variant: 'text-xs/medium',
    color: 'text-muted',
    lineClamp: 1,
    children: o.displayDescription
  })
]
  }), [
o.displayDescription,
o.displayName
  ]);
  return (0, i.jsxs)(s.Clickable, {
className: R.command,
onClick: f,
children: [
  C,
  N ? (0, i.jsx)(a.F, {}) : (0, i.jsx)(L, {
    channel: r,
    command: o,
    sectionName: d
  })
]
  });
}

function L(e) {
  let {
channel: n,
command: t,
sectionName: a
  } = e, o = (0, u.PL)(!0, !0), c = (0, u.LD)(n.guild_id, !0), d = (0, f.D)(n), [p, _] = l.useState(!1), A = l.useCallback(async e => {
e.stopPropagation();
try {
  await (0, I.L_)({
    applicationId: t.applicationId,
    userIndexState: o,
    guildIndexState: c,
    sectionName: a,
    location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW
  }) && (await (0, v.Y$)({
    command: t,
    optionValues: {},
    context: d,
    sectionName: a
  }), E.y(h.ti.COMMAND));
} finally {
  _(!1);
}
  }, [
t,
o,
c,
a,
d
  ]);
  return (0, i.jsxs)(s.Button, {
type: 'submit',
onClick: A,
disabled: p,
size: s.ButtonSizes.ICON,
color: s.Button.Colors.PRIMARY,
className: R.commandSentCTAButton,
innerClassName: R.commandSentCTAButtonInner,
'aria-label': g.Z.Messages.APP_LAUNCHER_SEND_COMMAND_ARIA_LABEL.format({
  commandName: t.name
}),
children: [
  (0, i.jsx)(s.Text, {
    variant: 'text-sm/medium',
    color: 'redesign-button-primary-text',
    children: g.Z.Messages.SEND
  }),
  (0, i.jsx)(r.U, {
    size: 'xs',
    color: s.tokens.colors.REDESIGN_BUTTON_PRIMARY_TEXT
  })
]
  });
}

function M(e) {
  let {
channel: n,
commands: t,
section: l,
headerName: a,
sectionName: r,
children: o
  } = e;
  return 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: R.commandListHeader,
    children: [
      (0, i.jsx)(s.Heading, {
        variant: 'heading-sm/semibold',
        children: a
      }),
      o
    ]
  }),
  (0, i.jsx)('ul', {
    className: R.commandContainer,
    'aria-label': a,
    children: t.map(e => (0, i.jsx)(S, {
      channel: n,
      command: e,
      section: l,
      sectionName: r
    }, e.id))
  })
]
  });
}

function O(e) {
  var n;
  let {
channel: t,
application: a,
sectionName: r,
installOnDemand: s
  } = e, {
filterSection: c,
commandsByActiveSection: u,
sectionDescriptors: m
  } = d.wi(t, {
commandType: o.yU.CHAT
  }, {
placeholderCount: 0,
limit: T.tn,
includeFrecency: !0,
allowApplicationState: s,
applicationId: a.id
  }), p = null !== (n = m.find(e => e.id === a.id)) && void 0 !== n ? n : null, {
sortOrder: _,
setSortOrder: E,
commands: A,
canSort: h
  } = (0, C.Z)({
sectionId: a.id,
commandsByActiveSection: u
  });
  l.useEffect(() => {
c(a.id);
  }, [
a.id,
c
  ]);
  let f = (0, N.Z)({
channel: t,
commands: A,
limit: 5
  });
  return (0, i.jsxs)('ul', {
className: R.contentContainer,
children: [
  (0, i.jsx)(M, {
    channel: t,
    section: p,
    commands: f,
    headerName: g.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
    sectionName: r
  }),
  (0, i.jsx)(M, {
    channel: t,
    section: p,
    commands: A,
    headerName: g.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
    sectionName: r,
    children: h && (0, i.jsx)(P.Z, {
      sortOrder: _,
      onSortOptionClick: E
    })
  })
]
  });
}