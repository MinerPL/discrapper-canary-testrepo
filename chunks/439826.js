n.d(t, {
  Z: function() {
return S;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(186325),
  o = n(780384),
  c = n(481060),
  d = n(410030),
  u = n(810090),
  _ = n(113434),
  h = n(497505),
  E = n(918701),
  I = n(78826),
  m = n(670638),
  g = n(981631),
  p = n(689938),
  T = n(985164);

function S(e) {
  var t;
  let {
quest: n,
isHovering: a,
onCtxMenuClose: S,
onCtxMenuOpen: C,
onCtxMenuSelect: f
  } = e, N = (0, E.ph)(n), A = (0, d.ZP)(), Z = (0, o.wj)(A) ? g.BRd.DARK : g.BRd.LIGHT, L = Z === g.BRd.DARK, v = s.useMemo(() => (0, E.nP)(n.config.assets.questBarHero), [n]), O = s.useContext(l.S).reducedMotion.enabled, R = (0, E.Mi)(n, h.jn.GIFT_INVENTORY_FOR_YOU), x = (0, _.tP)(n), b = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, P = s.useRef(a), M = s.useRef(null);
  return s.useEffect(() => {
if (v && null != M.current)
  return P.current !== a && (a ? M.current.play() : (M.current.pause(), M.current.currentTime = 0)), P.current = a, () => {
    var e;
    null === (e = M.current) || void 0 === e || e.pause();
  };
  }, [
a,
v
  ]), (0, i.jsxs)('div', {
className: T.container,
children: [
  (0, i.jsx)('div', {
    className: T.heroAssetWrapper,
    children: v ? (0, i.jsx)(I.Fl, {
      id: 'QuestBarV2ContentExpanded_heroAnimated',
      children: e => (null != e.current && (M.current = e.current), (0, i.jsx)(u.Z, {
        ref: e,
        autoPlay: !O && a,
        loop: !0,
        playsInline: !0,
        className: T.heroAsset,
        controls: !1,
        children: (0, i.jsx)('source', {
          src: N,
          type: (0, E.mN)(N)
        })
      }))
    }) : (0, i.jsx)(I.Fl, {
      id: 'QuestTileBanner',
      children: e => (0, i.jsx)('img', {
        ref: e,
        alt: '',
        className: T.heroAsset,
        src: N
      })
    })
  }),
  (0, i.jsx)('div', {
    className: r()(T.overlay, {
      [T.darkThemeGradient]: L,
      [T.lightThemeGradient]: !L
    })
  }),
  (0, i.jsx)('div', {
    className: T.positionContentOverBackground,
    children: (0, i.jsxs)('div', {
      className: T.contents,
      children: [
        (0, i.jsxs)('div', {
          className: T.topRow,
          children: [
            R && !x && !b && (0, i.jsx)('div', {
              className: T.pill,
              children: (0, i.jsx)(c.Text, {
                variant: 'eyebrow',
                color: 'always-white',
                className: T.eyebrowText,
                children: p.Z.Messages.RECOMMENDED
              })
            }),
            (0, i.jsx)(m.r, {
              onOpen: C,
              onClose: S,
              onSelect: f,
              questContent: h.jn.QUEST_HOME_DESKTOP,
              quest: n,
              hideLearnMore: !0,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, i.jsx)(c.Clickable, {
                ...e,
                className: T.submenuWrapper,
                'aria-label': p.Z.Messages.ACTIONS,
                children: (0, i.jsx)(c.MoreHorizontalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: r()(T.submenuIcon)
                })
              })
            })
          ]
        }),
        (0, i.jsx)(I.Fl, {
          id: 'QuestPartnerBranding_gameLogotype',
          children: e => (0, i.jsx)('img', {
            ref: e,
            className: T.partnerBranding,
            alt: n.config.messages.gameTitle,
            src: (0, E.Gs)(n, Z)
          })
        }),
        (0, i.jsx)('div', {
          className: T.bottomRow,
          children: (0, i.jsx)(c.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: p.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({
              brandName: n.config.messages.gamePublisher
            })
          })
        })
      ]
    })
  })
]
  });
}