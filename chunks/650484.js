"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  },
  PaymentPortalBody: function() {
    return m
  },
  PaymentPortalFooter: function() {
    return C
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("627445"),
  u = n.n(o),
  a = n("817736"),
  c = n.n(a),
  d = n("77078"),
  f = n("642906"),
  h = n("304006");

function v(e) {
  var t, n, l, o, a, c;
  let {
    header: v,
    isLargeModal: m,
    stepProps: C
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
    step: E,
    stepConfigs: g,
    setBodyNode: p,
    setFooterNode: S,
    setModalOverlayNode: _,
    setReadySlideId: I
  } = (0, f.usePaymentContext)(), P = g.find(e => e.key === E);
  r.useEffect(() => {
    _(null)
  }, [E, _]), u(null != P, "Unknown step for current payment flow.");
  let A = null !== (a = null == P ? void 0 : null === (t = P.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== a && a,
    T = null == P ? void 0 : null === (n = P.options) || void 0 === n ? void 0 : n.bodyClassName,
    N = void 0 !== m && m ? h.sliderBodyLarge : null == P ? void 0 : null === (l = P.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
  return (0, i.jsxs)(i.Fragment, {
    children: [null === (c = null == P ? void 0 : null === (o = P.options) || void 0 === o ? void 0 : o.renderHeader) || void 0 === c || c ? v : null, P.renderStep(C), null == E || A ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.ModalContent, {
        className: s(h.body, T),
        children: (0, i.jsx)(d.Slides, {
          activeSlide: E,
          centered: !1,
          onSlideReady: e => I(e),
          children: g.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
            id: e.key,
            children: (0, i.jsx)("form", {
              className: s(h.sliderBody, N),
              ref: e => p(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, i.jsx)("div", {
        ref: e => S(e)
      }), (0, i.jsx)("div", {
        ref: e => _(e)
      })]
    })]
  })
}

function m(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}

function C(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}