"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  },
  openCollectibleRewardModal: function() {
    return G
  }
}), n(773603), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(887024),
  o = n(979554),
  a = n(442837),
  l = n(149020),
  u = n(481060),
  _ = n(809206),
  d = n(607070),
  c = n(235400),
  E = n(204418),
  I = n(583434),
  T = n(530618),
  h = n(454585),
  S = n(164946),
  f = n(166625),
  N = n(25990),
  A = n(594174),
  m = n(810090),
  O = n(272008),
  R = n(497505),
  C = n(918701),
  p = n(566078),
  g = n(114732),
  L = n(46140),
  v = n(675654),
  D = n(689938),
  M = n(130035);

function P() {
  let e = N.Z.getAllPending(),
    t = (0, S.ED)(e);
  return (0, _.Mn)(t).finally(_.si)
}

function y(e) {
  var t;
  let {
    transitionState: n,
    onClose: o,
    quest: l,
    location: _,
    reward: c,
    decoration: E,
    onUseNow: I
  } = e, h = r.useRef(null), [S, f] = r.useState(null), N = r.useRef(new s.qA), m = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), p = (0, a.e7)([A.default], () => A.default.getCurrentUser()), L = (0, C.j8)(l), D = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, [P, y] = r.useState(D ? "claimed" : "loading");
  r.useEffect(() => {
    !D && (0, O.QB)(l.id, R.y$.CROSS_PLATFORM, _).then(() => y("claimed")).catch(() => y("error"))
  }, [l, _, D]);
  let b = null == p || null == E || "loading" === P;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.O_, {
      ref: f,
      className: M.confettiCanvas,
      environment: N.current
    }), (0, i.jsx)("div", {
      ref: h,
      children: (0, i.jsx)(u.ModalRoot, {
        transitionState: n,
        size: u.ModalSize.DYNAMIC,
        className: M.rootContainer,
        hideShadow: !0,
        children: b ? (0, i.jsx)("div", {
          className: M.spinnerContainer,
          children: (0, i.jsx)(u.Spinner, {
            className: M.spinner,
            type: u.Spinner.Type.SPINNING_CIRCLE
          })
        }) : "error" === P ? (0, i.jsx)(g.Z, {
          onClose: o
        }) : (0, i.jsx)(U, {
          quest: l,
          user: p,
          primaryColor: l.config.colors.primary,
          secondaryColor: l.config.colors.secondary,
          decoration: E,
          decorationName: c.messages.name,
          backgroundUrl: L,
          isSaving: "applying" === P,
          onClose: o,
          onConfirm: () => {
            y("applying"), I().finally(o)
          }
        })
      })
    }), !m && !D && "claimed" === P && (0, i.jsx)(T.Z, {
      confettiTarget: h.current,
      confettiCanvas: S,
      sprites: v.CA,
      colors: v.Br
    })]
  })
}

function U(e) {
  let {
    quest: t,
    user: n,
    decoration: r,
    decorationName: s,
    primaryColor: o,
    secondaryColor: a,
    backgroundUrl: _,
    isSaving: d,
    onClose: c,
    onConfirm: I
  } = e, T = (0, C.zK)(t, L.S7.IN_HOUSE_CONSOLE_QUEST), S = p.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[R.y$.CROSS_PLATFORM], f = (0, C.Kr)(t.config), N = null == f ? D.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY.format({
    decorationName: s
  }) : D.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY_WITH_EXPIRATION.format({
    decorationName: s,
    duration: f
  });
  return (0, i.jsxs)("div", {
    className: M.claimedRootContainer,
    children: [(0, i.jsxs)("div", {
      className: M.headerContainer,
      children: [(0, i.jsx)(m.Z, {
        className: M.headerBackground,
        autoPlay: !1,
        loop: !1,
        muted: !0,
        playsInline: !0,
        controls: !1,
        poster: _
      }), (0, i.jsxs)("div", {
        className: M.headerForeground,
        children: [(0, i.jsx)("div", {
          className: M.previewContainer,
          children: (0, i.jsx)(E.Z, {
            user: n,
            guildId: null,
            avatarDecorationOverride: r
          })
        }), (0, i.jsx)(u.ModalCloseButton, {
          className: M.close,
          withCircleBackground: !0,
          onClick: c
        })]
      })]
    }), (0, i.jsx)(u.ModalFooter, {
      className: M.footerContainer,
      separator: !1,
      children: (0, i.jsxs)("div", {
        className: M.gradient,
        style: {
          backgroundImage: "linear-gradient(180deg, ".concat(o, ", ").concat(a, ")")
        },
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          color: "always-white",
          className: M.heading,
          children: D.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: M.text,
          children: N
        }), (0, i.jsx)(u.Button, {
          submitting: d,
          onClick: I,
          children: D.Z.Messages.COLLECTIBLES_USE_NOW
        }), T && (0, i.jsxs)("div", {
          className: M.additionalRedemptionInstructions,
          children: [(0, i.jsx)(l.i, {
            width: 28,
            height: 28,
            className: M.sponsorLogo,
            color: "white"
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: M.sponsoredBy,
            children: D.Z.Messages.QUESTS_REWARD_SPONSORED_BY.format({
              publisherName: t.config.messages.gamePublisher
            })
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: h.Z.parse(S, !1, {
              allowLinks: !0
            })
          })]
        })]
      })
    })]
  })
}

function b(e) {
  var t, n;
  let {
    quest: s,
    location: a,
    onClose: l,
    transitionState: u
  } = e, d = r.useMemo(() => (0, C.xn)(s.config), [s]), [E, T] = function(e) {
    let {
      product: t,
      isFetching: n
    } = (0, I.T)(e), {} = (0, f.Z)({}), i = r.useMemo(() => {
      if (null == t || n) return null;
      let e = t.items.find(e => e.type === o.Z.AVATAR_DECORATION);
      return null == e ? null : e
    }, [t, n]);
    return [i, () => null == i ? Promise.reject() : ((0, _.cV)(i), P())]
  }(null !== (n = null == d ? void 0 : d.skuId) && void 0 !== n ? n : null);
  if (null == d) return null;
  let h = (0, C.zK)(s, L.S7.IN_HOUSE_CONSOLE_QUEST);
  return (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null || h ? (0, i.jsx)(y, {
    onClose: l,
    transitionState: u,
    quest: s,
    location: a,
    reward: d,
    decoration: E,
    onUseNow: T
  }) : (0, i.jsx)(c.default, {
    transitionState: u,
    onCloseModal: P,
    onClose: l,
    analyticsLocations: [],
    initialSelectedDecoration: E
  })
}

function G(e, t) {
  (0, u.openModalLazy)(async () => {
    let {
      default: r
    } = await Promise.resolve().then(n.bind(n, 920916));
    return n => (0, i.jsx)(r, {
      ...n,
      quest: e,
      location: t
    })
  })
}