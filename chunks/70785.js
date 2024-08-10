n.d(t, {
  Z: function() {
return g;
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
  d = n(221292),
  _ = n(318661),
  E = n(299261),
  f = n(502762),
  h = n(475413),
  p = n(228168),
  m = n(689938),
  I = n(895793),
  T = n(609440);

function g(e) {
  let {
user: t,
guildId: n,
setPopoutRef: g,
channelId: S,
messageId: A,
roleId: N,
onViewBlockedProfileClick: v,
newAnalyticsLocations: O = []
  } = e, {
analyticsLocations: R
  } = (0, l.ZP)([
...O,
o.Z.BLOCKED_PROFILE_POPOUT
  ]), C = (0, c.ZB)({
layout: 'BLOCKED_PROFILE_POPOUT',
userId: t.id,
guildId: n,
channelId: S,
messageId: A,
roleId: N
  }), y = i.useRef(null), D = (0, _.ZP)(t.id, n), L = (0, a.e7)([u.ZP], () => null != n ? u.ZP.getMember(n, t.id) : null);
  return i.useEffect(() => {
null == g || g(null == y ? void 0 : y.current);
  }, [
y,
g
  ]), (0, r.jsx)(l.Gt, {
value: R,
children: (0, r.jsx)(c.Mt, {
  value: C,
  shouldTrackViewOnMount: null == L || null != L.fullProfileLoadedTimestamp,
  children: (0, r.jsx)(s.Dialog, {
    ref: y,
    'aria-label': t.username,
    children: (0, r.jsx)(f.Z, {
      user: t,
      displayProfile: D,
      profileType: p.y0.BITE_SIZE,
      children: (0, r.jsxs)('div', {
        className: I.container,
        children: [
          (0, r.jsx)('img', {
            alt: '',
            src: T,
            className: I.previewForCollected,
            'aria-hidden': !0
          }),
          (0, r.jsxs)('div', {
            className: I.body,
            children: [
              (0, r.jsx)(E.Z, {
                user: t,
                guildId: n
              }),
              (0, r.jsx)(s.Heading, {
                variant: 'heading-lg/bold',
                className: I.header,
                children: m.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
              }),
              (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                children: m.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({
                  username: t.username
                })
              }),
              (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                children: m.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_CONFIRMATION
              }),
              (0, r.jsx)(h.tG, {
                className: I.centeredButton,
                action: 'VIEW_BLOCKED_PROFILE',
                text: m.Z.Messages.VIEW_PROFILE,
                autoFocus: !0,
                fullWidth: !1,
                onClick: () => {
                  null == v || v(), (0, d.pQ)({
                    action: 'VIEW_BLOCKED_PROFILE',
                    analyticsLocations: R,
                    ...C
                  });
                }
              })
            ]
          })
        ]
      })
    })
  })
})
  });
}