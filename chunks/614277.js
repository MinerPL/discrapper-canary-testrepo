"use strict";
l.r(r), l.d(r, {
  PaymentPortalBody: function() {
    return E
  },
  PaymentPortalFooter: function() {
    return N
  },
  default: function() {
    return f
  }
});
var t = l("735250"),
  n = l("470079"),
  s = l("120356"),
  a = l.n(s),
  i = l("512722"),
  o = l.n(i),
  c = l("699581"),
  d = l.n(c),
  u = l("481060"),
  p = l("598"),
  m = l("636461");

function f(e) {
  var r, l, s, i, c, d;
  let {
    header: f,
    isLargeModal: E,
    stepProps: N
  } = function(e) {
    let {
      header: r,
      isLargeModal: l,
      ...t
    } = e;
    return {
      header: r,
      isLargeModal: l,
      stepProps: t
    }
  }(e), {
    step: S,
    stepConfigs: x,
    setBodyNode: h,
    setFooterNode: _,
    setModalOverlayNode: C,
    setReadySlideId: T
  } = (0, p.usePaymentContext)(), j = x.find(e => e.key === S);
  n.useEffect(() => {
    C(null)
  }, [S, C]), o()(null != j, "Unknown step for current payment flow.");
  let P = null !== (c = null == j ? void 0 : null === (r = j.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== c && c,
    v = null == j ? void 0 : null === (l = j.options) || void 0 === l ? void 0 : l.bodyClassName,
    A = void 0 !== E && E ? m.sliderBodyLarge : null == j ? void 0 : null === (s = j.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
  return (0, t.jsxs)(t.Fragment, {
    children: [null === (d = null == j ? void 0 : null === (i = j.options) || void 0 === i ? void 0 : i.renderHeader) || void 0 === d || d ? f : null, j.renderStep(N), null == S || P ? null : (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(u.ModalContent, {
        className: a()(m.body, v),
        children: (0, t.jsx)(u.Slides, {
          activeSlide: S,
          centered: !1,
          onSlideReady: e => T(e),
          children: x.filter(e => null != e.key).map(e => (0, t.jsx)(u.Slide, {
            id: e.key,
            children: (0, t.jsx)("form", {
              className: a()(m.sliderBody, A),
              ref: e => h(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, t.jsx)("div", {
        ref: e => _(e)
      }), (0, t.jsx)("div", {
        ref: e => C(e)
      })]
    })]
  })
}

function E(e) {
  let {
    children: r
  } = e, {
    bodyNode: l
  } = (0, p.usePaymentContext)();
  return null == l ? null : d().createPortal(r, l)
}

function N(e) {
  let {
    children: r
  } = e, {
    footerNode: l
  } = (0, p.usePaymentContext)();
  return null == l ? null : d().createPortal(r, l)
}