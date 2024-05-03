"use strict";
n.r(t), n.d(t, {
  StreamButtonDemoPopout: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("481060"),
  o = n("570140"),
  u = n("170671"),
  d = n("937995"),
  c = n("332475"),
  f = n("465670"),
  h = n("153850"),
  m = n("689938"),
  p = n("451142"),
  E = n("946790");

function C(e) {
  let {
    hidden: t,
    onDismiss: n
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(p.demoCta, {
      [p.hidden]: t
    }),
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)("div", {
        className: p.wumpusContainer,
        children: (0, a.jsx)(c.default, {
          src: E,
          width: 72,
          height: 52,
          zoomable: !1
        })
      }), (0, a.jsx)(r.Button, {
        "aria-label": m.default.Messages.CLOSE,
        look: r.Button.Looks.BLANK,
        size: r.Button.Sizes.NONE,
        onClick: () => n(),
        className: p.closeButton,
        children: (0, a.jsx)(f.default, {
          width: 24,
          height: 24,
          className: p.closeIcon,
          color: "white"
        })
      })]
    }), (0, a.jsx)("div", {
      className: p.textContainer,
      children: (0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "always-white",
        children: m.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_UPSELL_TOOLTIP
      })
    }), (0, a.jsxs)("div", {
      className: p.nitroTextAndBadge,
      children: [(0, a.jsx)(u.default, {
        isSelected: !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        children: m.default.Messages.POWERED_BY_NITRO
      })]
    })]
  })
}

function g(e) {
  let {
    buttonRef: t,
    dismissed: n,
    onDismiss: s
  } = e, i = l.useContext(d.IdleStateContext), [u, c] = l.useState(""), [f, m] = l.useState(!1);

  function p(e) {
    var t;
    let {
      settings: n
    } = e, a = n.callHeaderHeight;
    c(null !== (t = null == a ? void 0 : a.toString()) && void 0 !== t ? t : ""), m(void 0 !== a && a < 300)
  }
  return (l.useEffect(() => (o.default.subscribe("UNSYNCED_USER_SETTINGS_UPDATE", p), () => {
    o.default.unsubscribe("UNSYNCED_USER_SETTINGS_UPDATE", p)
  }), []), (null == t ? void 0 : t.current) == null) ? null : (0, a.jsx)(r.Layer, {
    layerContext: h.appLayerContext,
    children: (0, a.jsx)(r.ReferencePositionLayer, {
      targetRef: t,
      position: "top",
      align: "center",
      spacing: 0,
      nudgeAlignIntoViewport: !1,
      positionKey: u,
      children: () => (0, a.jsx)(C, {
        hidden: f || i || n,
        onDismiss: s
      })
    })
  })
}