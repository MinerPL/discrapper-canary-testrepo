"use strict";
n.d(t, {
  Z: function() {
    return I
  },
  i: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(873546),
  o = n(481060),
  a = n(626135),
  l = n(981631),
  u = n(921944),
  _ = n(689938),
  d = n(628842);

function c(e) {
  return e || !(s.tq || s.Em) ? _.Z.Messages.SEASONAL_GIFTING_DM_POPUP_BODY : _.Z.Messages.SEASONAL_GIFTING_MAKE_SOMEONES_DAY_TOOLTIP
}

function E(e) {
  let {
    onComplete: t,
    onDMCheckItOutClick: u,
    isDM: E
  } = e;
  r.useEffect(() => {
    a.default.track(l.rMx.PREMIUM_GIFT_UPSELL_VIEWED, {
      type: "holiday_gifting_tip"
    })
  }, []);
  let I = r.useMemo(() => [() => n.e("36278").then(n.t.bind(n, 268147, 19)), () => n.e("66902").then(n.t.bind(n, 7171, 19)), () => n.e("99694").then(n.t.bind(n, 55562, 19))], []),
    T = E || !(s.tq || s.Em),
    h = T ? _.Z.Messages.SEASONAL_GIFTING_DM_POPUP_HEADER : _.Z.Messages.SEASONAL_GIFTING_POPUP_HEADER,
    S = T ? _.Z.Messages.SEASONAL_GIFTING_DM_POPUP_CTA : _.Z.Messages.SEASONAL_GIFTING_SEND_GIFT_CTA;
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)(o.ChainedLottieAnimation, {
      className: d.image,
      animationData: I
    }), (0, i.jsxs)("div", {
      className: d.body,
      children: [(0, i.jsx)(o.Heading, {
        className: d.text,
        variant: "heading-sm/semibold",
        children: h
      }), (0, i.jsx)(o.Text, {
        className: d.text,
        variant: "text-sm/normal",
        children: c(E)
      })]
    }), (0, i.jsxs)("div", {
      className: d.dmButtonContainer,
      children: [(0, i.jsx)(o.Button, {
        className: d.dmButton,
        look: o.Button.Looks.FILLED,
        color: o.Button.Colors.BRAND,
        onClick: () => t(),
        children: _.Z.Messages.GOT_IT
      }), (0, i.jsx)(o.Button, {
        className: d.dmButton,
        color: o.Button.Colors.BRAND_INVERTED,
        onClick: () => u(),
        children: S
      })]
    }), (0, i.jsx)("div", {
      className: d.pointer
    })]
  })
}

function I(e) {
  let {
    onComplete: t,
    onDMCheckItOutClick: n,
    markAsDismissed: r,
    isDM: s
  } = e;
  return (0, i.jsx)(o.Popout, {
    spacing: 0,
    shouldShow: !0,
    position: "top",
    align: "center",
    renderPopout: e => (0, i.jsx)(E, {
      ...e,
      onComplete: () => {
        t(), r(u.L.USER_DISMISS)
      },
      onDMCheckItOutClick: () => {
        n(), t(), r(u.L.TAKE_ACTION)
      },
      isDM: s
    }),
    onRequestClose: () => void 0,
    closeOnScroll: !1,
    ignoreModalClicks: !0,
    children: () => (0, i.jsx)("div", {
      className: d.popoutTarget
    })
  })
}