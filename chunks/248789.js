n.d(t, {
  Y: function() {
return f;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(286379),
  s = n(442837),
  r = n(481060),
  o = n(797614),
  c = n(699516),
  d = n(378298),
  u = n(359119),
  h = n(473092),
  p = n(177342),
  m = n(134612),
  _ = n(689938);

function f(e) {
  let {
channelId: t,
warningId: f,
senderId: E
  } = e, C = a.useCallback(() => {
(0, d.T)(t, [f]);
  }, [
t,
f
  ]), g = (0, s.e7)([c.Z], () => c.Z.isBlocked(E)), I = a.useMemo(() => ({
channelId: t,
warningId: f,
senderId: E,
warningType: u.pj.INAPPROPRIATE_CONVERSATION_TIER_2
  }), [
t,
f,
E
  ]);
  a.useEffect(() => {
(0, h.KQ)({
  ...I,
  viewName: h.pb.SAFETY_WARNING_BANNER
}), o.Z.increment({
  name: l.V.SAFETY_WARNING_VIEW
});
  }, [I]);
  let x = a.useCallback(e => {
  (0, h.qc)({
    ...I,
    cta: e
  });
}, [I]),
T = a.useCallback(() => {
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('49508'),
      n.e('89650')
    ]).then(n.bind(n, 611446));
    return n => {
      let {
        transitionState: a,
        onClose: l
      } = n;
      return (0, i.jsx)(e, {
        otherUserId: E,
        channelId: t,
        warningId: f,
        warningType: u.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        transitionState: a,
        onClose: l
      });
    };
  }, {
    modalKey: m.X_
  }), x(h.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
}, [
  t,
  E,
  f,
  x
]),
v = a.useCallback(() => {
  C(), x(h.NM.USER_BANNER_BLOCK_CONFIRM);
}, [
  C,
  x
]),
N = a.useCallback(() => {
  C(), x(h.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
}, [
  C,
  x
]),
S = a.useCallback(() => {
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('19538').then(n.bind(n, 699783));
    return n => {
      let {
        transitionState: a,
        onClose: l
      } = n;
      return (0, i.jsx)(e, {
        transitionState: a,
        onBlock: v,
        onBlockAndReport: N,
        onCancel: () => {
          null == l || l(), x(h.NM.USER_BANNER_BLOCK_CANCEL);
        },
        onClose: l,
        userId: E,
        channelId: t
      });
    };
  });
}, [
  v,
  N,
  E,
  t,
  x
]);
  return (0, i.jsx)(p.Q, {
channelId: t,
warningId: f,
senderId: E,
warningType: u.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
header: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
description: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
onDismiss: C,
buttons: [{
    text: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
    color: r.Button.Colors.BRAND,
    onclick: T
  },
  ...g ? [] : [{
    text: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
    color: r.Button.Colors.PRIMARY,
    onclick: S
  }]
]
  });
}