n.d(t, {
  Z: function() {
return T;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(399606),
  r = n(704215),
  l = n(481060),
  o = n(605236),
  c = n(434404),
  u = n(430824),
  d = n(914010),
  _ = n(626135),
  E = n(150340),
  I = n(981631),
  m = n(689938);

function T(e) {
  let {
dismissCurrentNotice: t
  } = e, n = (0, a.e7)([d.Z], () => d.Z.getGuildId(), []), T = (0, a.e7)([u.Z], () => u.Z.getGuild(n), [n]);
  return (s.useEffect(() => {
(0, o.kk)(r.z.GUILD_ONBOARDING_UPSELL_NAGBAR);
  }, []), null == T) ? null : (0, i.jsxs)(l.Notice, {
color: l.NoticeColors.DEFAULT,
children: [
  (0, i.jsx)(l.NoticeCloseButton, {
    onClick: () => {
      _.default.track(I.rMx.UPSELL_CLICKED, {
        type: r.z[r.z.GUILD_ONBOARDING_UPSELL_NAGBAR],
        action: 'dismiss'
      }), t(), (0, E.G)(T.id, r.z.GUILD_ONBOARDING_UPSELL_NAGBAR);
    }
  }),
  m.Z.Messages.GUILD_ONBOARDING_NAGBAR_MESSAGE,
  (0, i.jsx)(l.NoticeButton, {
    onClick: () => {
      _.default.track(I.rMx.UPSELL_CLICKED, {
        type: r.z[r.z.GUILD_ONBOARDING_UPSELL_NAGBAR],
        action: 'primary'
      }), c.Z.open(T.id, I.pNK.ONBOARDING), (0, E.G)(T.id, r.z.GUILD_ONBOARDING_UPSELL_NAGBAR);
    },
    children: m.Z.Messages.GUILD_ONBOARDING_UPSELL_COACHMARK_CHECK_IT_OUT
  })
]
  });
}