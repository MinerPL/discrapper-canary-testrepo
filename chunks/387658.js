t.d(n, {
  Z: function() {
return D;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(120356),
  o = t.n(l),
  r = t(140835),
  s = t(246521),
  c = t(442837),
  u = t(481060),
  d = t(911969),
  m = t(607070),
  p = t(555573),
  _ = t(213459),
  C = t(10718),
  f = t(895924),
  h = t(583027),
  A = t(585483),
  E = t(499254),
  N = t(541099),
  v = t(827498),
  x = t(496158),
  I = t(676161),
  g = t(660090),
  P = t(783097),
  L = t(845936),
  R = t(176412),
  S = t(870205),
  T = t(981631),
  b = t(689079),
  M = t(689938),
  j = t(627542),
  y = t(763963);
let O = 'placeholder',
  Z = [, , , , , ].fill(O);

function H(e) {
  var n, t;
  let {
channel: l,
command: o,
section: s,
sectionName: c
  } = e, d = a.useCallback(() => {
let e = N.Z.entrypoint();
E.y(v.ti.COMMAND), (0, h.Mo)({
  command: o,
  location: f.Vh.APP_LAUNCHER_APPLICATION_VIEW,
  sectionName: c
}), p.Po({
  channelId: l.id,
  command: o,
  section: s,
  location: f.Vh.APP_LAUNCHER_APPLICATION_VIEW,
  sectionName: c,
  source: e,
  commandOrigin: f.bB.APPLICATION_LAUNCHER
}), A.S.dispatch(T.CkL.FOCUS_CHANNEL_TEXT_AREA, {
  channelId: l.id
});
  }, [
l.id,
o,
s,
c
  ]), m = (null !== (t = null === (n = o.options) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0, _ = a.useMemo(() => (0, R.ae)(o.displayDescription, void 0), [o.displayDescription]), C = a.useMemo(() => (0, i.jsxs)('div', {
className: y.commandTextContainer,
children: [
  (0, i.jsx)(u.Text, {
    variant: 'text-sm/semibold',
    color: 'header-primary',
    children: o.displayName
  }),
  (0, i.jsx)(u.Text, {
    variant: 'text-xs/medium',
    color: 'text-muted',
    lineClamp: 1,
    children: _
  })
]
  }), [
o.displayName,
_
  ]);
  return (0, i.jsxs)(u.Clickable, {
className: y.command,
onClick: d,
children: [
  (0, i.jsx)(u.FocusBlock, {
    className: y.commandFocusBlock,
    children: C
  }),
  m ? (0, i.jsx)(r.F, {}) : (0, i.jsx)(B, {
    channel: l,
    command: o,
    sectionName: c
  })
]
  });
}

function U() {
  let e = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
{
  styleLarge: n,
  styleSmall: t
} = a.useMemo(() => ({
  styleLarge: {
    width: ''.concat(10 + 20 * Math.random(), '%'),
    height: 'auto'
  },
  styleSmall: {
    width: ''.concat(30 + 60 * Math.random(), '%'),
    height: 'auto'
  }
}), []),
l = a.useMemo(() => (0, i.jsxs)('div', {
  className: y.commandTextContainerPlaceholder,
  children: [
    (0, i.jsx)('div', {
      className: j.textPlaceholder,
      style: n,
      children: (0, i.jsx)(u.Text, {
        className: j.hidden,
        variant: 'text-sm/semibold',
        color: 'header-primary',
        lineClamp: 1,
        children: '_'
      })
    }),
    (0, i.jsx)('div', {
      className: j.textPlaceholder,
      style: t,
      children: (0, i.jsx)(u.Text, {
        className: j.hidden,
        variant: 'text-xs/medium',
        color: 'text-muted',
        lineClamp: 1,
        children: '_'
      })
    })
  ]
}), [
  n,
  t
]);
  return (0, i.jsx)('div', {
className: o()(y.command, j.loadingAnimation, {
  [j.noAnimation]: e
}),
children: l
  });
}

function B(e) {
  let {
channel: n,
command: t,
sectionName: l
  } = e, o = (0, _.PL)(!0, !0), r = (0, _.LD)(n.guild_id, !0), c = (0, x.D)(n), [d, m] = a.useState(!1), p = a.useCallback(async e => {
e.stopPropagation();
let n = N.Z.lastShownEntrypoint();
try {
  await (0, L.L)({
    applicationId: t.applicationId,
    userIndexState: o,
    guildIndexState: r,
    sectionName: l,
    location: f.Vh.APP_LAUNCHER_APPLICATION_VIEW,
    entrypoint: n
  }) && (await (0, P.Y$)({
    command: t,
    optionValues: {},
    context: c,
    sectionName: l
  }), E.y(v.ti.COMMAND));
} finally {
  m(!1);
}
  }, [
t,
o,
r,
l,
c
  ]);
  return (0, i.jsxs)(u.Button, {
type: 'submit',
onClick: p,
disabled: d,
size: u.ButtonSizes.ICON,
color: u.Button.Colors.PRIMARY,
className: y.commandSentCTAButton,
innerClassName: y.commandSentCTAButtonInner,
'aria-label': M.Z.Messages.APP_LAUNCHER_SEND_COMMAND_ARIA_LABEL.format({
  commandName: t.name
}),
children: [
  (0, i.jsx)(u.Text, {
    variant: 'text-sm/medium',
    color: 'currentColor',
    children: M.Z.Messages.SEND
  }),
  (0, i.jsx)(s.U, {
    size: 'xs',
    color: 'currentColor'
  })
]
  });
}

function k(e) {
  let {
channel: n,
commands: t,
section: a,
headerName: l,
sectionName: o,
children: r
  } = e;
  return 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: y.commandListHeader,
    children: [
      (0, i.jsx)(u.Heading, {
        variant: 'heading-sm/semibold',
        children: l
      }),
      r
    ]
  }),
  (0, i.jsx)('ul', {
    className: y.commandContainer,
    'aria-label': l,
    children: t.map((e, t) => e === O ? (0, i.jsx)(U, {}, e + t) : (0, i.jsx)(H, {
      channel: n,
      command: e,
      section: a,
      sectionName: o
    }, e.id))
  })
]
  });
}

function D(e) {
  var n;
  let {
channel: t,
application: l,
sectionName: o,
installOnDemand: r
  } = e, {
filterSection: s,
commandsByActiveSection: c,
sectionDescriptors: u,
loading: m
  } = C.wi(t, {
commandTypes: [d.yU.CHAT]
  }, {
placeholderCount: 0,
limit: b.tn,
includeFrecency: !0,
allowApplicationState: r,
installOnDemand: r,
applicationId: l.id
  }), p = null !== (n = u.find(e => e.id === l.id)) && void 0 !== n ? n : null, {
sortOrder: _,
setSortOrder: f,
commands: h,
canSort: A
  } = (0, g.Z)({
sectionId: l.id,
commandsByActiveSection: c
  });
  a.useEffect(() => {
s(l.id);
  }, [
l.id,
s
  ]);
  let E = (0, I.Z)({
channel: t,
commands: h,
limit: 5
  });
  return (0, i.jsxs)('ul', {
className: y.contentContainer,
children: [
  (0, i.jsx)(k, {
    channel: t,
    section: p,
    commands: E,
    headerName: M.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
    sectionName: o
  }),
  (0, i.jsx)(k, {
    channel: t,
    section: p,
    commands: m.current ? Z : h,
    headerName: M.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
    sectionName: o,
    children: A && (0, i.jsx)(S.Z, {
      sortOrder: _,
      onSortOptionClick: f
    })
  })
]
  });
}