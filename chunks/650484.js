"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  PaymentPortalBody: function() {
    return h
  },
  PaymentPortalFooter: function() {
    return S
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("817736"),
  c = n.n(u),
  d = n("77078"),
  f = n("642906"),
  E = n("304006");

function _(e) {
  var t, n, l, r, u, c;
  let {
    header: _,
    isLargeModal: h,
    stepProps: S
  } = function(e) {
    let {
      header: t,
      isLargeModal: n,
      ...i
    } = e;
    return {
      header: t,
      isLargeModal: n,
      stepProps: i
    }
  }(e), {
    step: m,
    stepConfigs: p,
    setBodyNode: v,
    setFooterNode: A,
    setModalOverlayNode: C,
    setReadySlideId: T
  } = (0, f.usePaymentContext)(), g = p.find(e => e.key === m);
  a.useEffect(() => {
    C(null)
  }, [m, C]), o(null != g, "Unknown step for current payment flow.");
  let I = null !== (u = null == g ? void 0 : null === (t = g.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
    N = null == g ? void 0 : null === (n = g.options) || void 0 === n ? void 0 : n.bodyClassName,
    x = void 0 !== h && h ? E.sliderBodyLarge : null == g ? void 0 : null === (l = g.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
  return (0, i.jsxs)(i.Fragment, {
    children: [null === (c = null == g ? void 0 : null === (r = g.options) || void 0 === r ? void 0 : r.renderHeader) || void 0 === c || c ? _ : null, g.renderStep(S), null == m || I ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.ModalContent, {
        className: s(E.body, N),
        children: (0, i.jsx)(d.Slides, {
          activeSlide: m,
          centered: !1,
          onSlideReady: e => T(e),
          children: p.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
            id: e.key,
            children: (0, i.jsx)("form", {
              className: s(E.sliderBody, x),
              ref: e => v(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, i.jsx)("div", {
        ref: e => A(e)
      }), (0, i.jsx)("div", {
        ref: e => C(e)
      })]
    })]
  })
}

function h(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}

function S(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}