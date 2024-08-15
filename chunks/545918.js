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
  u = t(111028),
  _ = t(252618),
  E = t(189432),
  x = t(189357),
  I = t(473403),
  C = t(984370),
  N = t(703656),
  h = t(171368),
  T = t(433355),
  S = t(592125),
  A = t(984933),
  g = t(430824),
  M = t(944486),
  D = t(241559),
  L = t(575766),
  f = t(305473),
  R = t(937283),
  m = t(440857),
  j = t(707113),
  Z = t(981631),
  v = t(176505),
  p = t(50493),
  O = t(689938),
  B = t(212911),
  k = t(625032);

function G(e) {
  let {
guild: n,
previousChannel: t
  } = e, o = O.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = O.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
  return (0, _.Tt)({
location: n.name,
subsection: o
  }), (0, l.jsxs)(C.Z, {
className: B.header,
innerClassname: B.__invalid_innerHeader,
channelId: v.oC.MEMBER_SAFETY,
guildId: n.id,
hideSearch: !0,
toolbar: null != t ? (0, l.jsx)(r.Button, {
  className: B.returnButton,
  size: r.Button.Sizes.SMALL,
  look: r.Button.Looks.OUTLINED,
  color: r.Button.Colors.PRIMARY,
  onClick: () => {
    null != t && (0, N.XU)(n.id, t.id);
  },
  children: (0, l.jsx)(r.Text, {
    className: B.returnButtonText,
    variant: 'text-xs/medium',
    color: 'none',
    children: O.Z.Messages.RETURN_TO_CHANNEL.format({
      channelNameHook: () => null == t ? null : (0, l.jsxs)(s.Fragment, {
        children: [
          (0, l.jsx)(I._, {
            className: B.returnIcon,
            guild: n,
            channel: t
          }),
          (0, l.jsx)(u.Z, {
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
  (0, l.jsx)(C.Z.Icon, {
    icon: r.GroupIcon,
    'aria-hidden': !0
  }),
  (0, l.jsx)(C.Z.Title, {
    children: i
  })
]
  });
}

function b(e) {
  let {
guildId: n
  } = e, t = (0, a.e7)([g.Z], () => g.Z.getGuild(n)), {
analyticsLocations: o
  } = (0, c.ZP)(d.Z.MEMBER_SAFETY_PAGE), u = (0, D.n2)(n), _ = (0, x.ms)(n, u), I = (0, a.e7)([M.Z], () => M.Z.getLastSelectedChannelId(n)), C = (0, a.e7)([S.Z], () => S.Z.getChannel(I)), O = s.useRef(null);
  (0, L.n)(n), s.useEffect(() => {
if (!u && null != t) {
  var e;
  let n = null === (e = A.ZP.getDefaultChannel(t.id)) || void 0 === e ? void 0 : e.id;
  (0, N.XU)(t.id, n);
}
  }, [
t,
u
  ]);
  let b = (0, a.e7)([T.ZP], () => null != T.ZP.getGuildSidebarState(n), [n]),
P = s.useCallback(e => {
  (0, x.By)(e.guildId, !0) ? (0, E.r)(e.guildId, e.userId, v.oC.MEMBER_SAFETY, {
    modViewPanel: p.k.INFO
  }) : (0, h.openUserProfileModal)({
    userId: e.userId,
    guildId: e.guildId,
    sourceAnalyticsLocations: o,
    analyticsLocation: {
      section: Z.jXE.MEMBER_SAFETY_PAGE
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
        previousChannel: C
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
  _ && (0, l.jsx)(R.Z, {
    guildId: t.id
  })
]
  }) : null;
}