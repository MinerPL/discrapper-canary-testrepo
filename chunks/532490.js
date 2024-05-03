"use strict";
n.r(t), n.d(t, {
  SignHintPosition: function() {
    return a
  }
}), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("718017"),
  d = n("442837"),
  c = n("481060"),
  f = n("434650"),
  h = n("607070"),
  m = n("594174"),
  p = n("5192"),
  E = n("353093"),
  C = n("689938"),
  g = n("919915");
(l = a || (a = {})).LEFT = "left", l.RIGHT = "right";
t.default = i.memo(function(e) {
  let {
    guildId: t,
    primaryColor: n = c.tokens.colors.BG_BRAND.css,
    children: a,
    onSignCharter: l,
    animationDelayMs: r = 1e3,
    signHintButtonText: S,
    signHintHelperText: _,
    signHintPosition: T = "left"
  } = e, I = i.useRef(null), [A, N] = i.useState(!1), v = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == l || l(), N(!0)
  }, [l]), [x, M] = i.useState(!1), [R, L] = i.useState(!1), y = i.useRef(null), O = i.useCallback(e => {
    e && (y.current = setTimeout(() => {
      L(!0)
    }, r))
  }, [r]), j = (0, f.useIsVisible)(O), P = (0, d.useStateFromStores)([h.default], () => h.default.useReducedMotion), D = (0, d.useStateFromStores)([m.default], () => m.default.getCurrentUser()), [b, U] = (0, u.useSpring)(() => {
    var e, t;
    return e = T, t = P, "left" === e ? {
      right: t ? 68 : 0,
      config: u.config.stiff
    } : {
      left: t ? 68 : 0,
      config: u.config.stiff
    }
  }), [F, w] = (0, u.useSpring)(() => ({
    opacity: 0,
    top: -24,
    onRest: () => {
      A && M(!0)
    }
  }));
  i.useEffect(() => {
    if (R) U({
      ..."left" === T ? {
        right: 68,
        config: u.config.stiff
      } : {
        left: 68,
        config: u.config.stiff
      }
    }), w({
      opacity: 1,
      top: -24
    });
    R && A && w({
      opacity: 0,
      top: 0
    })
  }, [R, A, T]), i.useEffect(() => () => {
    null != y.current && clearTimeout(y.current)
  }, []);
  let k = o()(g.signHintAnimationContainer, x && g.noDisplay, "left" === T ? g.signTextLeft : g.signTextRight);
  return (0, s.jsxs)("div", {
    className: g.container,
    ref: j,
    children: [(0, s.jsxs)("div", {
      className: g.scrollBg,
      children: [(0, s.jsx)("div", {
        className: g.scrollBgTop
      }), (0, s.jsx)("div", {
        className: g.scrollBgBottom
      })]
    }), (0, s.jsxs)(u.animated.div, {
      className: g.overviewSidebarWrapper,
      children: [(0, s.jsx)(c.ScrollerNone, {
        fade: !0,
        className: g.overviewSidebarContent,
        children: (0, s.jsx)("div", {
          className: g.scrollContentContainer,
          children: a
        })
      }), (0, s.jsxs)(c.Clickable, {
        onClick: v,
        className: o()(g.signatureBlock, {
          [g.clickable]: null != l
        }),
        children: [(0, s.jsx)("div", {
          ref: I,
          className: g.signHintContainer,
          children: (0, s.jsxs)(u.animated.div, {
            className: k,
            style: {
              ...b,
              ...F
            },
            children: [(0, s.jsx)("div", {
              className: g.signContainerButton,
              children: (0, s.jsxs)(c.Button, {
                className: g.signButton,
                color: c.Button.Colors.CUSTOM,
                size: c.Button.Sizes.SMALL,
                style: {
                  backgroundColor: n,
                  color: (0, E.getAccessibleTextColor)(n).hex()
                },
                onClick: e => {
                  var t;
                  null === (t = I.current) || void 0 === t || t.scrollIntoView({
                    behavior: "smooth"
                  }), v(e)
                },
                children: [(0, s.jsx)("div", {
                  className: g.signCarot,
                  style: {
                    borderColor: n
                  }
                }), null != S ? S : C.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA]
              })
            }), (0, s.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: g.signHintHelperText,
              children: null != _ ? S : C.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
            })]
          })
        }), (0, s.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "none",
          children: "x"
        }), A ? (0, s.jsx)(c.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          className: g.signatureText,
          children: p.default.getName(t, null, D)
        }) : (0, s.jsx)(c.Text, {
          variant: "text-lg/normal",
          color: "none",
          className: g.signatureText,
          children: C.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
        })]
      })]
    })]
  })
})