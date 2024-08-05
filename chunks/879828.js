i.d(s, {
  Z: function() {
return Z;
  }
});
var n = i(735250),
  l = i(470079),
  t = i(704215),
  o = i(481060),
  a = i(906732),
  r = i(605236),
  d = i(785717),
  c = i(221292),
  u = i(929498),
  I = i(678738),
  _ = i(151545),
  f = i(527790),
  m = i(304042),
  E = i(981631),
  v = i(921944),
  S = i(689938),
  x = i(122606);

function Z(e) {
  let {
user: s,
currentUser: i,
onClose: Z
  } = e, {
analyticsLocations: h
  } = (0, a.ZP)(), {
trackUserProfileAction: p,
...T
  } = (0, d.KZ)(), {
live: g,
recent: N,
stream: j
  } = (0, u.Z)(s.id), C = s.id === i.id, A = (0, r.wE)(t.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
  return l.useEffect(() => {
if (!!C && !A)
  (0, r.EW)(t.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
    dismissAction: v.L.AUTO_DISMISS,
    forceTrack: !0
  });
  }, [
C,
A
  ]), (0, n.jsxs)(o.ScrollerThin, {
className: x.scroller,
fade: !0,
children: [
  (0, n.jsxs)(I.Z, {
    children: [
      null != j && (0, n.jsx)(m.Z, {
        user: s,
        currentUser: i,
        stream: j,
        onClose: Z,
        onAction: () => {
          p({
            action: 'JOIN_ACTIVITY'
          }), (0, c.Ac)({
            activityType: E.IIU.STREAMING,
            analyticsLocations: h,
            ...T
          });
        }
      }),
      g.map((e, l) => (0, n.jsx)(_.Z, {
        user: s,
        currentUser: i,
        activity: e,
        onClose: Z,
        onAction: () => {
          p({
            action: 'JOIN_ACTIVITY'
          }), (0, c.Ac)({
            activityType: e.type,
            activityName: e.name,
            activityPlatform: e.platform,
            activitySessionId: e.session_id,
            applicationId: e.application_id,
            analyticsLocations: h,
            ...T
          });
        }
      }, 'live-'.concat(l)))
    ]
  }),
  (0, n.jsx)(I.Z, {
    heading: S.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
    children: N.map(e => (0, n.jsx)(f.Z, {
      user: s,
      entry: e,
      onClose: Z
    }, e.id))
  })
]
  });
}