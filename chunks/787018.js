n.d(s, {
  Z: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  t = n(481060),
  o = n(100527),
  a = n(906732),
  r = n(785717),
  d = n(221292),
  c = n(318661),
  u = n(299261),
  _ = n(502762),
  I = n(475413),
  f = n(228168),
  E = n(981631),
  m = n(689938),
  x = n(570129),
  S = n(161068);

function v(e) {
  let {
user: s,
guildId: n,
channelId: v,
messageId: Z,
roleId: h,
transitionState: p,
onViewBlockedProfileClick: T,
showGuildProfile: g = !0,
sourceAnalyticsLocations: N = []
  } = e, j = n === E.ME ? void 0 : n, {
analyticsLocations: C
  } = (0, a.ZP)([
...N,
o.Z.BLOCKED_PROFILE_MODAL
  ]), A = (0, r.ZB)({
layout: 'BLOCKED_PROFILE_MODAL',
userId: s.id,
guildId: j,
channelId: v,
messageId: Z,
roleId: h,
showGuildProfile: g
  }), R = (0, c.ZP)(s.id, g ? j : void 0), O = l.createRef();
  return (0, i.jsx)(a.Gt, {
value: C,
children: (0, i.jsx)(r.Mt, {
  value: A,
  children: (0, i.jsx)(t.ModalRoot, {
    transitionState: p,
    className: x.root,
    hideShadow: !0,
    'aria-label': m.Z.Messages.USER_PROFILE_MODAL,
    children: (0, i.jsx)(_.Z, {
      user: s,
      displayProfile: R,
      profileType: f.y0.FULL_SIZE,
      ref: O,
      children: (0, i.jsxs)('div', {
        className: x.container,
        children: [
          (0, i.jsx)('img', {
            alt: '',
            src: S,
            className: x.previewForCollected,
            'aria-hidden': !0
          }),
          (0, i.jsxs)('div', {
            className: x.body,
            children: [
              (0, i.jsx)(u.Z, {
                user: s,
                guildId: j
              }),
              (0, i.jsx)(t.Heading, {
                variant: 'heading-xl/bold',
                className: x.header,
                children: m.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
              }),
              (0, i.jsx)(t.Text, {
                variant: 'text-md/medium',
                children: m.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({
                  username: s.username
                })
              }),
              (0, i.jsx)(t.Text, {
                variant: 'text-md/medium',
                children: m.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
              }),
              (0, i.jsx)(I.tG, {
                className: x.centeredButton,
                action: 'VIEW_BLOCKED_PROFILE',
                text: m.Z.Messages.VIEW_PROFILE,
                autoFocus: !0,
                fullWidth: !1,
                onClick: () => {
                  null == T || T(), (0, d.pQ)({
                    action: 'VIEW_BLOCKED_PROFILE',
                    analyticsLocations: C,
                    ...A
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