t.r(i), t.d(i, {
  FailedChannelRow: function() {
return b;
  },
  FailedGroupDMRow: function() {
return L;
  },
  FailedUserRow: function() {
return N;
  },
  ForwardFailedAlertModal: function() {
return T;
  }
});
var a = t(735250),
  n = t(470079),
  l = t(442837),
  s = t(481060),
  r = t(700582),
  c = t(933557),
  d = t(266076),
  o = t(810123),
  u = t(592125),
  A = t(430824),
  I = t(158776),
  _ = t(699516),
  S = t(594174),
  E = t(51144),
  f = t(912332),
  h = t(689938),
  g = t(303222);

function p(e) {
  let {
icon: i,
label: t
  } = e;
  return (0, a.jsxs)('div', {
className: g.failedRow,
children: [
  i,
  (0, a.jsx)(s.Text, {
    className: g.label,
    variant: 'text-md/medium',
    lineClamp: 1,
    children: t
  })
]
  });
}

function L(e) {
  let {
channel: i
  } = e, t = (0, c.ZP)(i);
  return (0, a.jsx)(p, {
icon: (0, a.jsx)(d.Z, {
  'aria-hidden': !0,
  size: s.AvatarSizes.SIZE_32,
  channel: i,
  experimentLocation: 'forward-failed-retry-modal'
}),
label: t
  });
}

function N(e) {
  let {
user: i
  } = e, t = E.ZP.useName(i), n = (0, l.e7)([_.Z], () => _.Z.getNickname(i.id)), c = (0, l.e7)([I.Z], () => I.Z.getStatus(i.id));
  return (0, a.jsx)(p, {
icon: (0, a.jsx)(r.Z, {
  'aria-hidden': !0,
  size: s.AvatarSizes.SIZE_32,
  user: i,
  status: c
}),
label: null != n ? n : t
  });
}

function b(e) {
  let {
channel: i
  } = e, t = (0, l.e7)([A.Z], () => A.Z.getGuild(null == i ? void 0 : i.guild_id)), n = (0, c.ZP)(i);
  return (0, a.jsx)(p, {
icon: (0, a.jsx)(o.Z, {
  size: o.E.SMALL_32,
  guild: t,
  channel: i
}),
label: n
  });
}

function x(e) {
  let {
destination: i
  } = e, {
channel: t,
user: n
  } = (0, l.cj)([
u.Z,
S.default
  ], () => ({
channel: 'channel' === i.type ? u.Z.getChannel(i.id) : null,
user: 'user' === i.type ? S.default.getUser(i.id) : null
  }));
  if (null == t ? void 0 : t.isGroupDM())
return (0, a.jsx)(L, {
  channel: t
});
  if (null != n)
return (0, a.jsx)(N, {
  user: n
});
  if (null != t)
return (0, a.jsx)(b, {
  channel: t
});
  return null;
}

function T(e) {
  let {
messageId: i,
channelId: t,
failedDestinations: l,
forwardOptions: r,
...c
  } = e, d = n.useCallback(() => {
(0, f.l8)({
  messageId: i,
  channelId: t,
  source: 'retry-modal',
  initialSelectedDestinations: l,
  forwardOptions: r
});
  }, [
t,
l,
i,
r
  ]);
  return (0, a.jsxs)(s.ConfirmModal, {
header: h.Z.Messages.MESSAGE_FORWARD_FAILED,
confirmText: h.Z.Messages.RETRY,
cancelText: h.Z.Messages.CANCEL,
confirmButtonColor: s.Button.Colors.BRAND,
onConfirm: d,
...c,
children: [
  (0, a.jsx)(s.Text, {
    variant: 'text-md/medium',
    children: h.Z.Messages.MESSAGE_FORWARD_FAILED_BODY.format({
      count: l.length
    })
  }),
  (0, a.jsx)('div', {
    className: g.failedDestinations,
    children: l.map((e, i) => (0, a.jsx)(x, {
      destination: e
    }, i))
  })
]
  });
}