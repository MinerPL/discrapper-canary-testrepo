n.d(t, {
  Z: function() {
return C;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(338545),
  o = n(186325),
  c = n(780384),
  d = n(481060),
  u = n(393238),
  _ = n(410030),
  h = n(810090),
  E = n(113434),
  I = n(497505),
  m = n(918701),
  g = n(78826),
  p = n(670638),
  T = n(981631),
  S = n(689938),
  f = n(985164);

function C(e) {
  var t, n;
  let {
quest: s,
isHovering: C,
errorHints: N,
onCtxMenuClose: A,
onCtxMenuOpen: v,
onCtxMenuSelect: Z
  } = e, L = (0, m.j8)(s), O = (0, _.ZP)(), R = (0, c.wj)(O) ? T.BRd.DARK : T.BRd.LIGHT, x = R === T.BRd.DARK, b = a.useMemo(() => (0, m.nP)(s.config.assets.hero), [s]), P = a.useContext(o.S).reducedMotion.enabled, M = (0, m.Mi)(s, I.jn.GIFT_INVENTORY_FOR_YOU), D = (0, E.tP)(s), y = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, j = (null === (n = s.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, U = a.useRef(C), G = a.useRef(null), k = (0, E.B6)(s.config.expiresAt, {
month: 'numeric',
day: 'numeric'
  }), w = (0, E.z)(s), {
ref: B,
height: H = 0
  } = (0, u.Z)([N]), V = !j && !w && N.length > 0, F = (0, l.useSpring)({
opacity: V ? 1 : 0,
height: V ? H : 0,
config: {
  tension: 275,
  friction: 25
}
  });
  return a.useEffect(() => {
if (b && null != G.current)
  return U.current !== C && (C ? G.current.play() : (G.current.pause(), G.current.currentTime = 0)), U.current = C, () => {
    var e;
    null === (e = G.current) || void 0 === e || e.pause();
  };
  }, [
C,
b
  ]), (0, i.jsxs)('div', {
className: f.container,
children: [
  (0, i.jsx)('div', {
    className: f.heroAssetWrapper,
    children: b ? (0, i.jsx)(g.Fl, {
      id: 'QuestTileBanner_heroAnimated',
      children: e => (null != e.current && (G.current = e.current), (0, i.jsx)(h.Z, {
        ref: e,
        autoPlay: !P && C,
        loop: !0,
        playsInline: !0,
        className: f.heroAsset,
        controls: !1,
        children: (0, i.jsx)('source', {
          src: L,
          type: (0, m.mN)(L)
        })
      }))
    }) : (0, i.jsx)(g.Fl, {
      id: 'QuestTileBanner',
      children: e => (0, i.jsx)('img', {
        ref: e,
        alt: ''.concat(s.config.messages.questName),
        className: f.heroAsset,
        src: L
      })
    })
  }),
  (0, i.jsx)('div', {
    className: r()(f.overlay, {
      [f.darkThemeGradient]: x,
      [f.lightThemeGradient]: !x
    })
  }),
  (0, i.jsxs)('div', {
    className: f.positionContentOverBackground,
    children: [
      (0, i.jsxs)('div', {
        className: f.contents,
        children: [
          (0, i.jsxs)('div', {
            className: f.topRow,
            children: [
              M && !D && !y && (0, i.jsx)('div', {
                className: f.pill,
                children: (0, i.jsx)(d.Text, {
                  variant: 'eyebrow',
                  color: 'always-white',
                  className: f.eyebrowText,
                  children: S.Z.Messages.RECOMMENDED
                })
              }),
              (0, i.jsx)(p.r, {
                onOpen: v,
                onClose: A,
                onSelect: Z,
                questContent: I.jn.QUEST_HOME_DESKTOP,
                quest: s,
                hideLearnMore: !0,
                shouldShowDisclosure: !0,
                showShareLink: !0,
                children: e => (0, i.jsx)(d.Clickable, {
                  ...e,
                  className: f.submenuWrapper,
                  'aria-label': S.Z.Messages.ACTIONS,
                  children: (0, i.jsx)(d.MoreHorizontalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(f.submenuIcon)
                  })
                })
              })
            ]
          }),
          (0, i.jsx)(g.Fl, {
            id: 'QuestPartnerBranding_gameLogotype',
            children: e => (0, i.jsx)('img', {
              ref: e,
              className: f.partnerBranding,
              alt: s.config.messages.gameTitle,
              src: (0, m.Gs)(s, R)
            })
          }),
          (0, i.jsxs)('div', {
            className: f.bottomRow,
            children: [
              (0, i.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: S.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({
                  brandName: s.config.messages.gamePublisher
                })
              }),
              D || y ? null : (0, i.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: S.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({
                  expiryDate: k
                })
              })
            ]
          })
        ]
      }),
      (0, i.jsx)(l.animated.div, {
        style: F,
        children: (0, i.jsxs)('div', {
          ref: B,
          className: f.defibrillatorHints,
          children: [
            (0, i.jsx)(d.CircleExclamationPointIcon, {
              size: 'xs',
              color: d.tokens.colors.TEXT_DANGER
            }),
            (0, i.jsx)('div', {
              className: f.hintsContainer,
              children: (0, i.jsx)(d.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: N.map(e => e.message).join(' ')
              })
            })
          ]
        })
      })
    ]
  })
]
  });
}