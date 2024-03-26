"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  },
  PaymentPortalBody: function() {
    return _
  },
  PaymentPortalFooter: function() {
    return p
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("414456"),
  o = n.n(s),
  a = n("627445"),
  l = n.n(a),
  u = n("817736"),
  d = n.n(u),
  c = n("77078"),
  f = n("642906"),
  E = n("304006");

function h(e) {
  var t, n, s, a, u, d;
  let {
    header: h,
    isLargeModal: _,
    stepProps: p
  } = function(e) {
    let {
      header: t,
      isLargeModal: n,
      ...r
    } = e;
    return {
      header: t,
      isLargeModal: n,
      stepProps: r
    }
  }(e), {
    step: C,
    stepConfigs: v,
    setBodyNode: S,
    setFooterNode: m,
    setModalOverlayNode: R,
    setReadySlideId: I
  } = (0, f.usePaymentContext)(), A = v.find(e => e.key === C);
  i.useEffect(() => {
    R(null)
  }, [C, R]), l(null != A, "Unknown step for current payment flow.");
  let N = null !== (u = null == A ? void 0 : null === (t = A.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
    T = null == A ? void 0 : null === (n = A.options) || void 0 === n ? void 0 : n.bodyClassName,
    g = void 0 !== _ && _ ? E.sliderBodyLarge : null == A ? void 0 : null === (s = A.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
  return (0, r.jsxs)(r.Fragment, {
    children: [null === (d = null == A ? void 0 : null === (a = A.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === d || d ? h : null, A.renderStep(p), null == C || N ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.ModalContent, {
        className: o(E.body, T),
        children: (0, r.jsx)(c.Slides, {
          activeSlide: C,
          centered: !1,
          onSlideReady: e => I(e),
          children: v.filter(e => null != e.key).map(e => (0, r.jsx)(c.Slide, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: o(E.sliderBody, g),
              ref: e => S(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, r.jsx)("div", {
        ref: e => m(e)
      }), (0, r.jsx)("div", {
        ref: e => R(e)
      })]
    })]
  })
}

function _(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : d.createPortal(t, n)
}

function p(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : d.createPortal(t, n)
}