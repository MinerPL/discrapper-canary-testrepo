"use strict";
n.d(t, {
  e: function() {
    return V
  }
}), n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(442837),
  a = n(704215),
  l = n(780384),
  u = n(481060),
  _ = n(845538),
  d = n(410030),
  c = n(100527),
  E = n(906732),
  I = n(605236),
  T = n(243778),
  h = n(963249),
  S = n(646476),
  f = n(819640),
  N = n(594174),
  A = n(147915),
  m = n(559629),
  O = n(965645),
  R = n(362061),
  C = n(70956),
  p = n(709054),
  g = n(51144),
  L = n(981631),
  v = n(921944),
  D = n(474936),
  M = n(689938),
  P = n(252088),
  y = n(838329);
let U = [{
    box: "#FFD89E",
    ribbon: "#FF7476"
  }, {
    box: "#17B5E2",
    ribbon: "#FFFFFF"
  }, {
    box: "#EED169",
    ribbon: "#51A1EB"
  }, {
    box: "#509C65",
    ribbon: "#FFC96E"
  }, {
    box: "#E4578A",
    ribbon: "#BEC4FF"
  }, {
    box: "#AFE0FC",
    ribbon: "#FF9356"
  }, {
    box: "#DB6D6D",
    ribbon: "#67DA9C"
  }],
  b = [{
    box: "#EABB75",
    ribbon: "#E4595C"
  }, {
    box: "#2D7AA5",
    ribbon: "#64C7C2"
  }, {
    box: "#ECBF21",
    ribbon: "#51A1EB"
  }, {
    box: "#439359",
    ribbon: "#D5A24C"
  }, {
    box: "#FC90C4",
    ribbon: "#777FCE"
  }, {
    box: "#549DC6",
    ribbon: "#FF9356"
  }, {
    box: "#DB6F6F",
    ribbon: "#81C29F"
  }],
  G = 1 / 300,
  w = C.Z.Millis.DAYS_30,
  k = (0, s.animated)(O.Z),
  B = (0, s.animated)(R.Z),
  x = (0, s.animated)(m.Z);

function V(e) {
  let {
    themeOverride: t,
    hovered: n,
    isContentDismissed: o,
    boxColors: a = {
      dark: U,
      light: b
    }
  } = e, u = (0, d.ZP)(), [_, c] = function(e) {
    let [t, n] = r.useState(!1), [i, s] = r.useState(Math.floor(7 * Math.random()));
    return r.useEffect(() => {
      if (e) return;
      let t = Math.random() <= G;
      if (n(t), !t) {
        let e;
        do e = Math.floor(7 * Math.random()); while (e === i);
        s(e)
      }
    }, [e]), [t, i]
  }(n), E = (0, s.useSpring)({
    reverse: !n,
    reset: !0,
    from: {
      scale: 1
    },
    to: {
      scale: 1.14
    },
    config: {
      tension: 800,
      friction: 24
    }
  }), I = o ? c : 0, T = (0, l.wj)(null != t ? t : u) ? a.dark[I] : a.light[I];
  return !n && o ? (0, i.jsx)(x, {}) : o && _ ? (0, i.jsx)(B, {
    isDark: (0, l.wj)(u),
    style: E
  }) : (0, i.jsx)(k, {
    boxColor: T.box,
    ribbonColor: T.ribbon,
    style: E
  })
}
t.Z = r.memo(function(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    analyticsLocations: s
  } = (0, E.ZP)(c.Z.GIFT_BUTTON), [l, d] = r.useState(!1), m = (0, o.e7)([f.Z], () => !(null === f.Z || void 0 === f.Z ? void 0 : f.Z.hasLayers())), O = (0, o.e7)([N.default], () => N.default.getCurrentUser()), R = null != O ? p.default.age(O.id) : 0, C = !t && m && R >= w, {
    enabled: U
  } = S.RO.useExperiment({
    location: "ChannelPremiumGiftButton"
  }, {
    autoTrackExposure: C
  }), b = [];
  U && C && b.push(a.z.SEASONAL_GIFTING_COACHMARK_2023);
  let [G, k] = (0, T.U)(b), B = null != G, x = (0, g.Ft)(n), Z = null != x;
  if (t) return null;
  let H = () => {
      (0, h.Z)({
        isGift: !0,
        giftRecipient: null == x ? void 0 : x,
        initialPlanId: null,
        subscriptionTier: D.Si.TIER_2,
        analyticsLocations: s,
        analyticsObject: {
          page: n.isPrivate() ? L.ZY5.DM_CHANNEL : L.ZY5.GUILD_CHANNEL,
          section: L.jXE.CHANNEL_TEXT_AREA,
          object: L.qAy.SEASONAL_BUTTON_ICON,
          objectType: L.Qqv.GIFT
        }
      })
    },
    F = (0, i.jsxs)("div", {
      className: P.container,
      onMouseEnter: () => {
        !l && d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      children: [B && (0, i.jsx)(_.Z, {
        onComplete: () => d(!1),
        onDMCheckItOutClick: H,
        markAsDismissed: k,
        isDM: Z
      }), (0, i.jsx)(A.Z, {
        innerClassName: y.button,
        "aria-label": M.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
        isActive: !1,
        onClick: () => {
          d(!1), (0, I.EW)(a.z.SEASONAL_GIFTING_COACHMARK_2023, {
            dismissAction: v.L.TAKE_ACTION
          }), H()
        },
        children: (0, i.jsx)("div", {
          className: P.noPointerEvents,
          children: (0, i.jsx)(V, {
            hovered: l,
            isContentDismissed: !B
          })
        })
      })]
    });
  return B ? F : (0, i.jsx)(u.TooltipContainer, {
    className: P.container,
    text: (0, _.i)(Z),
    children: F
  })
})