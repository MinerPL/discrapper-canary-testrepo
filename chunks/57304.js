n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(481060),
  r = n(23536),
  o = n(40851),
  c = n(762914),
  u = n(731290),
  d = n(306680),
  h = n(594174),
  p = n(585483),
  m = n(665149),
  _ = n(981631),
  f = n(689938);
t.Z = function(e) {
  let {
channel: t
  } = e, n = (0, s.e7)([
u.Z,
h.default
  ], () => {
let e = h.default.getCurrentUser();
return null == e || t.isNSFW() && (!e.nsfwAllowed || !u.Z.didAgree(t.getGuildId()));
  }, [t]), [E, g] = a.useState(!1), C = (0, s.e7)([d.ZP], () => d.ZP.hasUnreadPins(t.id), [t]), I = (0, o.Aq)(), x = (0, c.Dd)(t.id), T = a.useCallback(() => {
!n && g(e => !e);
  }, [n]);

  function N(e) {
!(null == e ? void 0 : e.shiftKey) && I.dispatch(_.CkL.POPOUT_CLOSE);
  }
  return (a.useEffect(() => (p.S.subscribe(_.CkL.TOGGLE_CHANNEL_PINS, T), () => {
p.S.unsubscribe(_.CkL.TOGGLE_CHANNEL_PINS, T);
  }), [T]), x) ? null : (0, i.jsx)(l.Popout, {
shouldShow: E,
animation: l.Popout.Animation.NONE,
position: 'bottom',
align: 'right',
autoInvert: !1,
ignoreModalClicks: !0,
onRequestClose: () => g(!1),
renderPopout: function(e) {
  return (0, i.jsx)(r.Z, {
    ...e,
    onJump: N,
    channel: t
  });
},
children: (e, t) => {
  let {
    isShown: a
  } = t;
  return (0, i.jsx)(m.JO, {
    ...e,
    onClick: T,
    tooltip: a ? null : f.Z.Messages.PINNED_MESSAGES,
    icon: l.PinIcon,
    'aria-label': f.Z.Messages.PINNED_MESSAGES,
    disabled: n,
    showBadge: C,
    selected: a
  });
}
  });
};