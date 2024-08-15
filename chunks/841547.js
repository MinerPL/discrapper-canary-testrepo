a.d(L, {
  i: function() {
return h;
  }
}), a(47120);
var C = a(735250),
  t = a(470079),
  i = a(120356),
  s = a.n(i),
  r = a(442837),
  n = a(481060),
  l = a(607070),
  o = a(100527),
  H = a(906732),
  c = a(626135),
  d = a(127255),
  V = a(239298),
  M = a(981631),
  Z = a(689938),
  _ = a(429843),
  E = a(118805),
  I = a(923666);

function h() {
  var e;
  let L = (0, r.e7)([l.Z], () => l.Z.useReducedMotion),
[a] = t.useState(Math.random()),
i = (0, d.Z)({
  guildId: null
}),
{
  analyticsLocations: h
} = (0, H.ZP)(o.Z.ACTIVITIES_IM_FEELING_LUCKY),
u = Math.floor(a * i.length),
p = null === (e = i[u]) || void 0 === e ? void 0 : e.application.id,
f = null != p && '' !== p ? M.Z5c.ACTIVITY_DETAILS(p) : void 0;
  return (0, C.jsxs)(C.Fragment, {
children: [
  (0, C.jsx)('img', {
    src: E,
    alt: Z.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_KIT_BASH_ALT,
    className: _.kitBash
  }),
  void 0 !== f ? (0, C.jsxs)(C.Fragment, {
    children: [
      (0, C.jsxs)(V.o, {
        className: _.luckyButton,
        to: {
          pathname: f,
          state: {
            analyticsLocations: h
          }
        },
        onClick: () => c.default.track(M.rMx.ACTIVITIES_PAGE_FEELING_LUCKY_CLICKED, {
          application_id: p
        }),
        children: [
          (0, C.jsx)(n.Heading, {
            variant: 'heading-lg/bold',
            children: Z.Z.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_TITLE
          }),
          (0, C.jsx)(n.Heading, {
            variant: 'heading-sm/bold',
            children: Z.Z.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_DESCRIPTION
          })
        ]
      }),
      (0, C.jsx)('img', {
        src: I,
        className: s()(_.wumpus, {
          [_.wumpusReducedMotion]: L
        }),
        alt: Z.Z.Messages.EMBEDDED_ACTIVITIES_WUMPUS_PEEKING_ALT
      })
    ]
  }) : null
]
  });
}