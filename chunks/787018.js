n.d(s, {
  Z: function() {
return Z;
  }
}), n(47120);
var i = n(735250),
  t = n(470079),
  l = n(481060),
  o = n(100527),
  a = n(906732),
  r = n(138201),
  d = n(785717),
  c = n(221292),
  u = n(318661),
  _ = n(299261),
  I = n(502762),
  f = n(475413),
  E = n(228168),
  m = n(981631),
  S = n(689938),
  x = n(493248),
  v = n(161068);

function Z(e) {
  let {
user: s,
guildId: n,
channelId: Z,
messageId: h,
roleId: p,
transitionState: T,
onViewBlockedProfileClick: g,
showGuildProfile: N = !0,
sourceAnalyticsLocations: C = []
  } = e, j = n === m.ME ? void 0 : n, {
analyticsLocations: A
  } = (0, a.ZP)([
...C,
o.Z.BLOCKED_PROFILE_MODAL
  ]), R = (0, d.ZB)({
layout: 'BLOCKED_PROFILE_MODAL',
userId: s.id,
guildId: j,
channelId: Z,
messageId: h,
roleId: p,
showGuildProfile: N
  }), O = [{
  icon: l.BellSlashIcon,
  description: S.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED
},
{
  icon: l.DenyIcon,
  description: S.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED
}
  ], L = (0, u.ZP)(s.id, N ? j : void 0), M = t.createRef();
  return (0, i.jsx)(a.Gt, {
value: A,
children: (0, i.jsx)(d.Mt, {
  value: R,
  children: (0, i.jsx)(l.ModalRoot, {
    transitionState: T,
    className: x.root,
    hideShadow: !0,
    'aria-label': S.Z.Messages.USER_PROFILE_MODAL,
    children: (0, i.jsx)(I.Z, {
      user: s,
      displayProfile: L,
      profileType: E.y0.FULL_SIZE,
      ref: M,
      children: (0, i.jsxs)('div', {
        className: x.container,
        children: [
          (0, i.jsx)('img', {
            alt: '',
            src: v,
            className: x.previewForCollected,
            'aria-hidden': !0
          }),
          (0, i.jsxs)('div', {
            className: x.body,
            children: [
              (0, i.jsx)(_.Z, {
                user: s,
                guildId: j
              }),
              (0, i.jsx)(l.Heading, {
                variant: 'heading-xl/bold',
                className: x.header,
                children: S.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
              }),
              (0, i.jsx)(l.Text, {
                variant: 'text-md/medium',
                children: S.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({
                  username: s.username
                })
              }),
              (0, i.jsx)(l.Text, {
                variant: 'text-md/medium',
                children: S.Z.Messages.USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION
              }),
              (0, i.jsx)('div', {
                className: x.safetyTable,
                children: O.map((e, s) => {
                  let {
                    icon: n,
                    description: t
                  } = e;
                  return (0, i.jsx)(r.Z, {
                    icon: n,
                    title: t,
                    titleVariant: 'text-md/normal'
                  }, s);
                })
              }),
              (0, i.jsx)(f.tG, {
                className: x.centeredButton,
                action: 'VIEW_BLOCKED_PROFILE',
                text: S.Z.Messages.VIEW_PROFILE,
                autoFocus: !0,
                fullWidth: !1,
                onClick: () => {
                  null == g || g(), (0, c.pQ)({
                    action: 'VIEW_BLOCKED_PROFILE',
                    analyticsLocations: A,
                    ...R
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