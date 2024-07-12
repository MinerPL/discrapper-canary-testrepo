n.d(t, {
  Z: function() {
return N;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(317632),
  o = n(602478),
  c = n(665149),
  d = n(306680),
  u = n(594174),
  _ = n(280763),
  E = n(178088),
  I = n(222940),
  m = n(490897),
  T = n(689938),
  h = n(423493);

function N(e) {
  let {
onOpen: t,
onClose: n,
className: N
  } = e, f = (0, s.e7)([u.default], () => u.default.getCurrentUser()), p = a.useRef(null), C = (0, s.e7)([d.ZP], () => (null == f ? void 0 : f.id) != null && d.ZP.getMentionCount(f.id, m.W.NOTIFICATION_CENTER) > 0), {
enabled: g
  } = o.Z.useExperiment({
location: 'RecentsButton'
  }, {
autoTrackExposure: !1
  }), S = (0, s.e7)([l.Z], () => g && l.Z.getUnseenInviteCount() > 0);
  return (0, i.jsx)(E.k, {
onOpen: t,
onClose: n,
badgeState: {
  badgeForYou: C
},
popoutPosition: 'bottom',
popoutAlign: 'right',
children: (e, t, n) => (0, i.jsxs)('div', {
  ref: p,
  className: h.recentsIcon,
  children: [
    g && (0, i.jsx)(I.Z, {
      inboxIconRef: p,
      recentsPopoutShown: t
    }),
    (0, i.jsx)(c.JO, {
      ...n,
      className: N,
      onClick: e,
      icon: r.InboxIcon,
      'aria-label': T.Z.Messages.INBOX,
      tooltip: t ? null : T.Z.Messages.INBOX,
      selected: t,
      showBadge: C || S,
      children: (0, i.jsx)(_.Z, {
        className: h.todoBadge
      })
    })
  ]
})
  });
}