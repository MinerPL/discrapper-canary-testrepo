n.d(t, {
  Z: function() {
return I;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(100527),
  l = n(906732),
  u = n(271383),
  c = n(785717),
  d = n(318661),
  _ = n(502762),
  E = n(475413),
  f = n(228168),
  h = n(689938),
  p = n(895793),
  m = n(609440);

function I(e) {
  let {
user: t,
guildId: n,
setPopoutRef: I,
channelId: T,
messageId: g,
roleId: S,
onViewBlockedProfileClick: A,
newAnalyticsLocations: N = []
  } = e, {
analyticsLocations: v
  } = (0, l.ZP)([
...N,
o.Z.BLOCKED_PROFILE_POPOUT
  ]), O = (0, c.Q1)({
layout: 'BLOCKED_PROFILE_POPOUT',
userId: t.id,
guildId: n,
channelId: T,
messageId: g,
roleId: S
  }), R = i.useRef(null), C = (0, d.ZP)(t.id, n), y = (0, a.e7)([u.ZP], () => null != n ? u.ZP.getMember(n, t.id) : null);
  return i.useEffect(() => {
null == I || I(null == R ? void 0 : R.current);
  }, [
R,
I
  ]), (0, r.jsx)(l.Gt, {
value: v,
children: (0, r.jsx)(c.Mt, {
  layout: 'POPOUT',
  userId: t.id,
  guildId: n,
  channelId: T,
  messageId: g,
  roleId: S,
  shouldTrackViewOnMount: null == y || null != y.fullProfileLoadedTimestamp,
  children: (0, r.jsx)(s.Dialog, {
    ref: R,
    'aria-label': t.username,
    children: (0, r.jsx)(_.Z, {
      user: t,
      displayProfile: C,
      profileType: f.y0.BITE_SIZE,
      children: (0, r.jsxs)('div', {
        className: p.container,
        children: [
          (0, r.jsx)('img', {
            alt: '',
            src: m,
            className: p.previewForCollected,
            'aria-hidden': !0
          }),
          (0, r.jsx)(E.tG, {
            className: p.centeredButton,
            action: 'VIEW_BLOCKED_PROFILE',
            text: h.Z.Messages.VIEW_PROFILE,
            autoFocus: !0,
            fullWidth: !1,
            onClick: () => {
              null == A || A(), O({
                action: 'VIEW_BLOCKED_PROFILE',
                analyticsLocations: v
              });
            }
          })
        ]
      })
    })
  })
})
  });
}