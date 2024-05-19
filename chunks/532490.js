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
  u = n("920906"),
  d = n("442837"),
  c = n("481060"),
  f = n("434650"),
  h = n("607070"),
  m = n("594174"),
  p = n("5192"),
  E = n("603368"),
  C = n("284019"),
  g = n("689938"),
  S = n("830430");
(l = a || (a = {})).LEFT = "left", l.RIGHT = "right";
t.default = i.memo(function(e) {
  let {
    guildId: t,
    primaryColor: n = c.tokens.colors.BG_BRAND.css,
    children: a,
    onSignCharter: l,
    animationDelayMs: r = 1e3,
    signHintButtonText: _,
    signHintHelperText: T,
    signHintPosition: I = "left"
  } = e, A = i.useRef(null), [N, v] = i.useState(!1), x = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == l || l(), v(!0)
  }, [l]), [M, R] = i.useState(!1), [y, L] = i.useState(!1), O = i.useRef(null), j = i.useCallback(e => {
    e && (O.current = setTimeout(() => {
      L(!0)
    }, r))
  }, [r]), P = (0, f.useIsVisible)(j), D = (0, d.useStateFromStores)([h.default], () => h.default.useReducedMotion), b = (0, d.useStateFromStores)([m.default], () => m.default.getCurrentUser()), [U, F] = (0, u.useSpring)(() => {
    var e, t;
    return e = I, t = D, "left" === e ? {
      right: t ? 68 : 0,
      config: u.config.stiff
    } : {
      left: t ? 68 : 0,
      config: u.config.stiff
    }
  }), [w, k] = (0, u.useSpring)(() => ({
    opacity: 0,
    top: -24,
    onRest: () => {
      N && R(!0)
    }
  }));
  i.useEffect(() => {
    if (y) F({
      ..."left" === I ? {
        right: 68,
        config: u.config.stiff
      } : {
        left: 68,
        config: u.config.stiff
      }
    }), k({
      opacity: 1,
      top: -24
    });
    y && N && k({
      opacity: 0,
      top: 0
    })
  }, [y, N, I]), i.useEffect(() => () => {
    null != O.current && clearTimeout(O.current)
  }, []);
  let B = o()(S.signHintAnimationContainer, M && S.noDisplay, "left" === I ? S.signTextLeft : S.signTextRight),
    H = (0, c.useToken)(c.tokens.colors.BG_SURFACE_OVERLAY),
    G = (0, E.getClanPrimaryButtonStyles)(n, H.hex());
  return (0, s.jsxs)("div", {
    className: S.container,
    ref: P,
    children: [(0, s.jsxs)("div", {
      className: S.scrollBg,
      children: [(0, s.jsx)("div", {
        className: S.scrollBgTop
      }), (0, s.jsx)("div", {
        className: S.scrollBgBottom
      })]
    }), (0, s.jsxs)(u.animated.div, {
      className: S.overviewSidebarWrapper,
      children: [(0, s.jsx)(c.ScrollerNone, {
        fade: !0,
        className: S.overviewSidebarContent,
        children: (0, s.jsx)("div", {
          className: S.scrollContentContainer,
          children: a
        })
      }), (0, s.jsxs)(c.Clickable, {
        onClick: x,
        className: o()(S.signatureBlock, {
          [S.clickable]: null != l
        }),
        children: [(0, s.jsx)("div", {
          ref: A,
          className: S.signHintContainer,
          children: (0, s.jsxs)(u.animated.div, {
            className: B,
            style: {
              ...U,
              ...w
            },
            children: [(0, s.jsx)("div", {
              className: S.signContainerButton,
              children: (0, s.jsxs)(C.default, {
                themeColor: n,
                className: S.signButton,
                size: c.Button.Sizes.SMALL,
                onClick: e => {
                  var t;
                  null === (t = A.current) || void 0 === t || t.scrollIntoView({
                    behavior: "smooth"
                  }), x(e)
                },
                children: [(0, s.jsx)("div", {
                  className: o()(S.signCarot, {
                    [S.signCarotCustomColors]: null != G
                  }),
                  style: null != G ? G : {
                    borderColor: n
                  }
                }), null != _ ? _ : g.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA]
              })
            }), (0, s.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: S.signHintHelperText,
              children: null != T ? _ : g.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
            })]
          })
        }), (0, s.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "none",
          children: "x"
        }), N ? (0, s.jsx)(c.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          className: S.signatureText,
          children: p.default.getName(t, null, b)
        }) : (0, s.jsx)(c.Text, {
          variant: "text-lg/normal",
          color: "none",
          className: S.signatureText,
          children: g.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
        })]
      })]
    })]
  })
})