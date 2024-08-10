n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(749210),
  c = n(906732),
  d = n(977392),
  _ = n(706454),
  E = n(246946),
  f = n(259580),
  h = n(785717),
  p = n(621853),
  m = n(335191),
  I = n(171368),
  T = n(659101),
  g = n(228168),
  S = n(981631),
  A = n(689938),
  N = n(805151),
  v = n(655899);

function O(e) {
  var t, n;
  let a, O, {
  userId: R,
  channelId: C,
  guild: y,
  theme: D,
  onClose: L,
  className: b
} = e,
{
  analyticsLocations: M
} = (0, c.ZP)(),
{
  context: P
} = (0, h.KZ)(),
U = (0, d.Z)(y, R, C),
[w, x] = i.useState(new Set()),
G = (0, o.e7)([p.Z], () => p.Z.getUserProfile(R)),
k = null !== (t = null == G ? void 0 : G.connectedAccounts) && void 0 !== t ? t : [],
B = null !== (n = null == G ? void 0 : G.applicationRoleConnections) && void 0 !== n ? n : [],
F = (0, o.e7)([E.Z], () => E.Z.hidePersonalInformation),
V = (0, o.e7)([_.default], () => _.default.locale);
  if (i.useEffect(() => {
  if ((null == y ? void 0 : y.id) != null && (null == U ? void 0 : U.id) != null)
    u.Z.fetchGuildRoleConnectionsEligibility(y.id, U.id).then(e => {
      let t = new Set();
      for (let n of e)
        for (let {
            connection_type: e
          }
          of n)
          t.add(e);
      x(t);
    });
}, [
  null == y ? void 0 : y.id,
  null == U ? void 0 : U.id
]), F || null == U)
return null;
  let H = Array.from(w).map(e => {
let t = k.find(t => t.type === e);
return null == t ? null : (0, r.jsx)(m.E3, {
  connectedAccount: t,
  theme: D,
  locale: V,
  userId: R
}, ''.concat(t.type, ':').concat(t.id));
  }).filter(e => null != e);
  return (H.length > 0 && (a = (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(l.Heading, {
    variant: 'eyebrow',
    className: v.title,
    children: A.Z.Messages.CONNECTIONS
  }),
  (0, r.jsxs)('div', {
    className: s()(N.connectionsContainer, b),
    children: [
      H,
      (0, r.jsxs)(l.Clickable, {
        onClick: function() {
          (0, I.openUserProfileModal)({
            ...P,
            userId: R,
            section: g.oh.USER_INFO_CONNECTIONS,
            sourceAnalyticsLocations: M,
            analyticsLocation: {
              section: S.jXE.PROFILE_POPOUT
            }
          }), null == L || L();
        },
        className: N.connections,
        children: [
          (0, r.jsx)(l.Text, {
            variant: 'text-md/semibold',
            color: 'interactive-active',
            className: N.connectionsText,
            children: A.Z.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
          }),
          (0, r.jsx)(f.Z, {
            direction: f.Z.Directions.RIGHT,
            className: N.connectionsCaret
          })
        ]
      })
    ]
  })
]
  })), B.length > 0 && (O = (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(l.Heading, {
    variant: 'eyebrow',
    className: v.title,
    children: A.Z.Messages.APPS
  }),
  (0, r.jsx)('div', {
    className: s()(N.connectionsContainer, b),
    children: B.map(e => (0, r.jsx)(m.tH, {
      applicationRoleConnection: e,
      locale: V
    }, e.application.id))
  })
]
  })), null == a && null == O) ? null : (0, r.jsxs)(T.Z, {
children: [
  O,
  a
]
  });
}