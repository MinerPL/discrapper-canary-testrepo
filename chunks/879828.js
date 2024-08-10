n.d(s, {
  Z: function() {
return m;
  }
});
var i = n(735250),
  l = n(470079),
  t = n(704215),
  o = n(481060),
  a = n(605236),
  r = n(929498),
  d = n(678738),
  c = n(151545),
  u = n(527790),
  _ = n(304042),
  I = n(921944),
  f = n(689938),
  E = n(122606);

function m(e) {
  let {
user: s,
currentUser: n,
onClose: m
  } = e, {
live: x,
recent: S,
stream: v
  } = (0, r.Z)(s.id), Z = s.id === n.id, h = (0, a.wE)(t.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
  return l.useEffect(() => {
if (!!Z && !h)
  (0, a.EW)(t.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
    dismissAction: I.L.AUTO_DISMISS,
    forceTrack: !0
  });
  }, [
Z,
h
  ]), (0, i.jsxs)(o.ScrollerThin, {
className: E.scroller,
fade: !0,
children: [
  (0, i.jsxs)(d.Z, {
    children: [
      null != v && (0, i.jsx)(_.Z, {
        user: s,
        currentUser: n,
        stream: v,
        onClose: m
      }),
      x.map((e, l) => (0, i.jsx)(c.Z, {
        user: s,
        currentUser: n,
        activity: e,
        onClose: m
      }, 'live-'.concat(l)))
    ]
  }),
  (0, i.jsx)(d.Z, {
    heading: (0, i.jsxs)('div', {
      className: E.heading,
      children: [
        f.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
        (0, i.jsx)(o.Tooltip, {
          text: f.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_INFORMATION_TOOLTIP,
          children: e => (0, i.jsx)(o.CircleInformationIcon, {
            ...e,
            size: 'xxs',
            color: 'currentColor'
          })
        })
      ]
    }),
    children: S.map(e => (0, i.jsx)(u.Z, {
      user: s,
      entry: e,
      onClose: m
    }, e.id))
  })
]
  });
}