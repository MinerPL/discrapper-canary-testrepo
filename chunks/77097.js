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
  messageId: P,
  roleId: U
} = (0, h.KZ)(),
w = (0, d.Z)(y, R, C),
[x, G] = i.useState(new Set()),
k = (0, o.e7)([p.Z], () => p.Z.getUserProfile(R)),
B = null !== (t = null == k ? void 0 : k.connectedAccounts) && void 0 !== t ? t : [],
F = null !== (n = null == k ? void 0 : k.applicationRoleConnections) && void 0 !== n ? n : [],
V = (0, o.e7)([E.Z], () => E.Z.hidePersonalInformation),
H = (0, o.e7)([_.default], () => _.default.locale);
  if (i.useEffect(() => {
  if ((null == y ? void 0 : y.id) != null && (null == w ? void 0 : w.id) != null)
    u.Z.fetchGuildRoleConnectionsEligibility(y.id, w.id).then(e => {
      let t = new Set();
      for (let n of e)
        for (let {
            connection_type: e
          }
          of n)
          t.add(e);
      G(t);
    });
}, [
  null == y ? void 0 : y.id,
  null == w ? void 0 : w.id
]), V || null == w)
return null;
  let Z = Array.from(x).map(e => {
let t = B.find(t => t.type === e);
return null == t ? null : (0, r.jsx)(m.E3, {
  connectedAccount: t,
  theme: D,
  locale: H,
  userId: R
}, ''.concat(t.type, ':').concat(t.id));
  }).filter(e => null != e);
  return (Z.length > 0 && (a = (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(l.Heading, {
    variant: 'eyebrow',
    className: v.title,
    children: A.Z.Messages.CONNECTIONS
  }),
  (0, r.jsxs)('div', {
    className: s()(N.connectionsContainer, b),
    children: [
      Z,
      (0, r.jsxs)(l.Clickable, {
        onClick: function() {
          (0, I.openUserProfileModal)({
            userId: R,
            channelId: C,
            guildId: null == y ? void 0 : y.id,
            messageId: P,
            roleId: U,
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
  })), F.length > 0 && (O = (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(l.Heading, {
    variant: 'eyebrow',
    className: v.title,
    children: A.Z.Messages.APPS
  }),
  (0, r.jsx)('div', {
    className: s()(N.connectionsContainer, b),
    children: F.map(e => (0, r.jsx)(m.tH, {
      applicationRoleConnection: e,
      locale: H
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