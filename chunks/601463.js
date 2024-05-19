"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("63063"),
  d = n("284019"),
  c = n("620929"),
  f = n("981631"),
  E = n("689938"),
  h = n("590190");
let _ = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function C(e) {
  let {
    guildId: t,
    signed: n,
    setSigned: C,
    sidebarWidth: m,
    windowWidth: S,
    transition: p,
    brandPrimaryColor: g
  } = e, I = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), T = s.useRef(null), A = s.useMemo(() => (S - m) / 2, [m, S]), [N, v, R] = (0, l.useSpring)(() => ({
    to: [{
      transform: "translateX(-8px)"
    }, {
      transform: "translateX(0px)"
    }],
    loop: !0
  })), O = (0, l.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: _,
    delay: 800,
    immediate: I
  });
  s.useEffect(() => {
    n && (R(), v({
      to: {
        transform: "translateX(0px)"
      }
    }))
  }, [v, n, R]);
  let L = s.useCallback(() => {
      var e;
      null === (e = T.current) || void 0 === e || e.scrollIntoView({
        behavior: "smooth"
      }), null == C || C(!0)
    }, [C]),
    M = () => open(u.default.getArticleURL(f.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES));
  return (0, a.jsxs)("div", {
    className: h.sidebarContent,
    children: [p((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: h.sidebarLeftDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)")),
        width: A
      },
      children: (0, a.jsxs)("div", {
        className: h.sidebarLeftDecoration,
        style: {
          width: A
        },
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-xxl/medium",
          children: E.default.Messages.CLAN_SETUP_SIGN_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: E.default.Messages.CLAN_SETUP_SIGN_SUBTITLE
        })]
      })
    })), p((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: h.sidebarRightDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [-40, 0]).to(e => "translateX(".concat(e, "px)")),
        width: A
      },
      children: (0, a.jsxs)("div", {
        className: h.sidebarRightDecoration,
        children: [(0, a.jsx)(l.animated.div, {
          style: I ? void 0 : N,
          children: (0, a.jsx)(d.default, {
            className: h.signButton,
            size: r.Button.Sizes.SMALL,
            onClick: L,
            themeColor: g,
            children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
          })
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_AGREEMENT.format({
            onGuidelinesClick: M
          })
        })]
      })
    })), (0, a.jsx)(c.default, {
      guildId: t,
      signed: n,
      setSigned: C,
      signRef: T,
      animatedTextStyle: O
    })]
  })
}