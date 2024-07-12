n.d(t, {
  Z: function() {
return C;
  }
}), n(411104), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(392711),
  l = n.n(s),
  u = n(442837),
  c = n(846519),
  d = n(481060),
  _ = n(239091),
  E = n(410575),
  f = n(199902),
  h = n(594174),
  p = n(321148),
  m = n(823379),
  I = n(5192),
  T = n(354459),
  g = n(981631),
  S = n(689938),
  A = n(338217);

function N(e, t) {
  switch (e) {
case T.fO.ACTIVITY:
  return S.Z.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
    numUsers: t
  });
case T.fO.STREAM:
  return S.Z.Messages.SPECTATORS.format({
    numViewers: t
  });
default:
  throw Error('Unknown participant type.');
  }
}

function v(e) {
  let {
users: t,
disableInteraction: n,
guildId: i,
participantType: a,
channelId: s,
handleUserContextMenu: l
  } = e, u = N(a, t.length);
  return (0, r.jsx)(d.Dialog, {
'aria-label': u,
className: A.popoutWrapper,
children: (0, r.jsxs)(d.Scroller, {
  className: A.scroller,
  children: [
    (0, r.jsx)(d.Heading, {
      variant: 'heading-deprecated-12/semibold',
      className: A.memberListHeader,
      children: u
    }),
    (0, r.jsx)('div', {
      children: t.map(e => (0, r.jsx)(p.Z, {
        guildId: null != i ? i : void 0,
        className: o()(A.memberListItem, {
          [A.popoutDisabled]: n
        }),
        textClassName: A.memberListItemText,
        user: e,
        disablePopout: n,
        nick: I.ZP.getNickname(i, s, e),
        onContextMenu: t => n ? null : l(t, e)
      }, e.id))
    })
  ]
})
  });
}

function O(e) {
  let {
users: t,
guildId: n,
channelId: i,
maxVisibleUsers: a = 3,
className: s,
participantType: l
  } = e, u = N(l, t.length), c = t.length < a ? t.map(e => (0, r.jsx)('div', {
className: A.viewersTooltipItem,
children: I.ZP.getName(n, i, e)
  }, e.id)) : u;
  return (0, r.jsx)(d.TooltipContainer, {
text: c,
'aria-label': u,
children: (0, r.jsxs)('div', {
  className: o()(A.viewers, s),
  children: [
    (0, r.jsx)(d.EyeIcon, {
      size: 'xs',
      color: 'currentColor',
      className: A.viewersIcon
    }),
    (0, r.jsx)('span', {
      'aria-hidden': 'true',
      children: t.length
    })
  ]
})
  });
}
let R = [];

function C(e) {
  let {
channelId: t,
guildId: a,
participant: s,
className: p,
compact: I = !1,
disableInteraction: S = !1,
maxVisibleUsers: N = 3
  } = e, [C, y] = i.useState(!1), D = i.useRef(new c.sW(150, () => y(!1))), L = (0, u.Wu)([
f.Z,
h.default
  ], () => {
if (s.type === T.fO.STREAM) {
  let e = f.Z.getViewerIds(s.id);
  return e.length > 0 ? e.map(e => h.default.getUser(e)).filter(m.lm) : R;
}
return s.type === T.fO.ACTIVITY ? s.participants.length > 0 ? Array.from(s.participants).map(e => h.default.getUser(e.userId)).filter(m.lm) : R : R;
  }, [s]), b = i.useCallback(() => {
D.current.cancel(), y(!0);
  }, []), M = i.useCallback(() => {
D.current.delay();
  }, []), P = i.useCallback((e, t) => {
b(), (0, _.jW)(e, async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('79695'),
    n.e('17400'),
    n.e('14183')
  ]).then(n.bind(n, 881351));
  return n => (0, r.jsx)(e, {
    ...n,
    user: t
  });
}, {
  onClose: M
});
  }, [
M,
b
  ]);
  if (0 === L.length)
return null;
  if (I)
return (0, r.jsx)(O, {
  maxVisibleUsers: N,
  users: L,
  guildId: a,
  channelId: t,
  className: p,
  participantType: s.type
});
  let U = l()(L).take(N).map(e => (0, r.jsx)(d.Avatar, {
src: e.getAvatarURL(a, 24),
'aria-label': e.username,
size: d.AvatarSizes.SIZE_24,
className: A.viewer
  }, e.id)).value();
  return L.length > N && (U[U.length - 1] = (0, r.jsxs)('div', {
className: A.overflow,
children: [
  '+',
  L.length - N + 1
]
  }, 'overflow')), (0, r.jsx)(E.Z, {
section: g.jXE.STREAM_VIEWER_POPOUT,
children: (0, r.jsx)('div', {
  onMouseEnter: b,
  onMouseLeave: M,
  children: (0, r.jsx)(d.Popout, {
    renderPopout: () => (0, r.jsx)(v, {
      participantType: s.type,
      handleUserContextMenu: P,
      guildId: a,
      channelId: t,
      users: L,
      disableInteraction: S
    }),
    shouldShow: C,
    position: 'top',
    children: () => (0, r.jsx)('div', {
      className: o()(A.viewers, p),
      children: U
    })
  })
})
  });
}