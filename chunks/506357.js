n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(565138),
  o = n(241559),
  c = n(527379),
  u = n(430824),
  d = n(944486),
  _ = n(914010),
  E = n(626135),
  I = n(528011),
  m = n(666657),
  T = n(533244),
  h = n(981631),
  N = n(176505),
  f = n(689938),
  C = n(679168);

function p(e) {
  var t, p;
  let {
onDismiss: g
  } = e, S = (0, s.e7)([_.Z], () => _.Z.getGuildId()), A = (0, s.e7)([d.Z], () => null != S ? d.Z.getChannelId(S) : null, [S]), R = null != S ? S : null, x = (0, s.e7)([u.Z], () => null != R ? u.Z.getGuild(R) : null, [R]), {
shouldShowIncidentActions: O,
incidentData: M,
isUnderLockdown: v
  } = (0, I.mI)(R), L = (0, o.n2)(null !== (t = null == x ? void 0 : x.id) && void 0 !== t ? t : h.lds), Z = a.useCallback(() => null != x && (0, c._X)(x.id), [x]);
  if (null == x || null == M || !O)
return null;
  let P = e => {
  if (e && L && A !== N.oC.MEMBER_SAFETY && Z()) {
    E.default.track(h.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
      notice_type: h.kVF.GUILD_RAID_NOTIFICATION,
      guild_id: x.id
    });
    return;
  }
  (0, r.openModalLazy)(async () => {
    let e = {
        source: m.Zu.NAGBAR,
        alertType: (0, T.T1)(M)
      },
      {
        default: t
      } = await n.e('58175').then(n.bind(n, 664452));
    return n => (0, i.jsx)(t, {
      ...n,
      guildId: x.id,
      analyticsData: e
    });
  });
},
b = (0, i.jsx)(l.Z, {
  className: C.guildIcon,
  guild: x,
  size: l.Z.Sizes.MINI
}),
D = (0, T.OY)(M, x.name);
  if (null != (null !== (p = M.dmsDisabledUntil) && void 0 !== p ? p : M.invitesDisabledUntil) && v)
return (0, i.jsxs)(r.Notice, {
  className: C.notice,
  color: r.NoticeColors.NEUTRAL,
  children: [
    (0, i.jsx)(r.NoticeCloseButton, {
      onClick: g,
      noticeType: h.kVF.GUILD_RAID_NOTIFICATION
    }),
    b,
    D,
    (0, i.jsx)(r.NoticeButton, {
      className: C.actionButton,
      onClick: () => P(!1),
      children: (0, i.jsxs)('div', {
        className: C.actionButtonInner,
        children: [
          (0, i.jsx)(r.LockIcon, {
            size: 'xs',
            color: 'currentColor'
          }),
          (0, i.jsx)('span', {
            children: f.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION
          })
        ]
      })
    })
  ]
});
  let j = (0, T.CG)(M) ? f.Z.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
  guildName: x.name
}) : (0, T.kk)(M) ? f.Z.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
  guildName: x.name
}) : f.Z.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
  guildName: x.name
}),
U = L && A === N.oC.MEMBER_SAFETY;
  return (0, i.jsxs)(r.Notice, {
className: C.notice,
color: r.NoticeColors.WARNING,
children: [
  (0, i.jsx)(r.NoticeCloseButton, {
    onClick: g,
    noticeType: h.kVF.GUILD_RAID_NOTIFICATION
  }),
  b,
  j,
  !U && (0, i.jsx)(r.NoticeButton, {
    className: C.actionButton,
    onClick: () => P(!0),
    children: (0, i.jsx)('div', {
      className: C.actionButtonInner,
      children: (0, i.jsx)('span', {
        children: f.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW
      })
    })
  })
]
  });
}