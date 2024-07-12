t.r(n), t.d(n, {
  default: function() {
return b;
  }
});
var l = t(735250),
  s = t(470079),
  o = t(120356),
  i = t.n(o),
  a = t(442837),
  r = t(481060),
  d = t(100527),
  c = t(906732),
  u = t(252618),
  _ = t(189432),
  E = t(189357),
  x = t(473403),
  I = t(984370),
  C = t(703656),
  N = t(171368),
  h = t(433355),
  T = t(592125),
  S = t(984933),
  A = t(430824),
  g = t(944486),
  M = t(514342),
  D = t(241559),
  L = t(575766),
  f = t(305473),
  R = t(937283),
  m = t(440857),
  j = t(707113),
  v = t(981631),
  Z = t(176505),
  p = t(50493),
  O = t(689938),
  B = t(455136),
  k = t(489919);

function G(e) {
  let {
guild: n,
previousChannel: t
  } = e, o = O.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = O.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
  return (0, u.Tt)({
location: n.name,
subsection: o
  }), (0, l.jsxs)(I.Z, {
className: B.header,
innerClassname: B.__invalid_innerHeader,
channelId: Z.oC.MEMBER_SAFETY,
guildId: n.id,
hideSearch: !0,
toolbar: null != t ? (0, l.jsx)(r.Button, {
  className: B.returnButton,
  size: r.Button.Sizes.SMALL,
  look: r.Button.Looks.OUTLINED,
  color: r.Button.Colors.PRIMARY,
  onClick: () => {
    null != t && (0, C.XU)(n.id, t.id);
  },
  children: (0, l.jsx)(r.Text, {
    className: B.returnButtonText,
    variant: 'text-xs/medium',
    color: 'none',
    children: O.Z.Messages.RETURN_TO_CHANNEL.format({
      channelNameHook: () => null == t ? null : (0, l.jsxs)(s.Fragment, {
        children: [
          (0, l.jsx)(x._, {
            className: B.returnIcon,
            guild: n,
            channel: t
          }),
          (0, l.jsx)(M.Z, {
            children: (0, l.jsx)(r.Text, {
              variant: 'text-xs/medium',
              color: 'none',
              children: t.name
            })
          })
        ]
      }, t.id)
    })
  })
}) : (0, l.jsx)('div', {}),
children: [
  (0, l.jsx)(I.Z.Icon, {
    icon: r.GroupIcon,
    'aria-hidden': !0
  }),
  (0, l.jsx)(I.Z.Title, {
    children: i
  })
]
  });
}

function b(e) {
  let {
guildId: n
  } = e, t = (0, a.e7)([A.Z], () => A.Z.getGuild(n)), {
analyticsLocations: o
  } = (0, c.ZP)(d.Z.MEMBER_SAFETY_PAGE), u = (0, D.n2)(n), x = (0, E.ms)(n, u), I = (0, a.e7)([g.Z], () => g.Z.getLastSelectedChannelId(n)), M = (0, a.e7)([T.Z], () => T.Z.getChannel(I)), O = s.useRef(null);
  (0, L.n)(n), s.useEffect(() => {
if (!u && null != t) {
  var e;
  let n = null === (e = S.ZP.getDefaultChannel(t.id)) || void 0 === e ? void 0 : e.id;
  (0, C.XU)(t.id, n);
}
  }, [
t,
u
  ]);
  let b = (0, a.e7)([h.ZP], () => null != h.ZP.getGuildSidebarState(n), [n]),
P = s.useCallback(e => {
  (0, E.By)(e.guildId, !0) ? (0, _.r)(e.guildId, e.userId, Z.oC.MEMBER_SAFETY, {
    modViewPanel: p.k.INFO
  }) : (0, N.openUserProfileModal)({
    userId: e.userId,
    guildId: e.guildId,
    sourceAnalyticsLocations: o,
    analyticsLocation: {
      section: v.jXE.MEMBER_SAFETY_PAGE
    }
  });
}, [o]);
  return null != t && u ? (0, l.jsxs)(c.Gt, {
value: o,
children: [
  (0, l.jsxs)('div', {
    className: i()(k.chat, B.page, {
      [k.threadSidebarOpen]: b
    }),
    children: [
      (0, l.jsx)(G, {
        guild: t,
        previousChannel: M
      }),
      (0, l.jsx)(r.AdvancedScroller, {
        className: i()(B.scroller),
        ref: O,
        orientation: 'vertical',
        children: (0, l.jsxs)('div', {
          className: i()(k.content, B.container),
          children: [
            (0, l.jsx)(f.Z, {
              guild: t
            }),
            (0, l.jsx)(j.Z, {
              guild: t,
              onMemberSelect: P
            })
          ]
        })
      }),
      (0, l.jsx)(m.Z, {
        guildId: t.id
      })
    ]
  }),
  x && (0, l.jsx)(R.Z, {
    guildId: t.id
  })
]
  }) : null;
}