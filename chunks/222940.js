n.d(t, {
  Z: function() {
return E;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(399606),
  r = n(846519),
  l = n(481060),
  o = n(317632),
  c = n(174767),
  u = n(594174),
  d = n(689938),
  _ = n(605310);

function E(e) {
  let {
inboxIconRef: t,
recentsPopoutShown: n
  } = e, [E, I] = s.useState(!1), m = (0, a.e7)([o.Z], () => o.Z.getLastUnseenInvite()), T = (0, a.e7)([u.default], () => null != m ? u.default.getUser(m.inviter_id) : null);
  return (s.useEffect(() => {
n && I(!1);
  }, [n]), s.useEffect(() => {
if (null == m) {
  I(!1);
  return;
}
(0, c.Br)(m), I(!0);
let e = new r.V7();
return e.start(5000, () => {
  I(!1);
}), () => {
  e.stop();
};
  }, [m]), E && null != m && null != T) ? (0, i.jsxs)(l.TooltipLayer, {
tooltipClassName: _.tooltip,
tooltipContentClassName: _.tooltipContent,
targetElementRef: t,
position: 'bottom',
color: l.TooltipColors.BLACK,
children: [
  (0, i.jsxs)('div', {
    className: _.iconContainer,
    children: [
      (0, i.jsx)('img', {
        className: _.inviteImage,
        src: m.application_asset,
        alt: 'Game Invite'
      }),
      (0, i.jsx)('div', {
        className: _.offsetAvatarContainer,
        children: (0, i.jsx)(l.Avatar, {
          'aria-label': 'Inviter',
          className: _.inviterImage,
          src: T.getAvatarURL(null, 24),
          size: l.AvatarSizes.SIZE_24
        })
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: _.titleContainer,
    children: [
      (0, i.jsx)(l.Text, {
        className: _.__invalid_title,
        variant: 'text-xs/semibold',
        children: d.Z.Messages.GAME_INVITES_INVITE_FROM.format({
          username: T.username
        })
      }),
      (0, i.jsx)(l.Text, {
        className: _.__invalid_subtitle,
        variant: 'text-xxs/medium',
        children: m.application_name
      })
    ]
  })
]
  }) : null;
}