"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  PaymentPortalBody: function() {
    return I
  },
  PaymentPortalFooter: function() {
    return h
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  o = n.n(l),
  s = n("627445"),
  a = n.n(s),
  u = n("817736"),
  c = n.n(u),
  d = n("77078"),
  f = n("642906"),
  E = n("990893");

function _(e) {
  var t, n, l, s, u, c;
  let {
    header: _,
    isLargeModal: I,
    stepProps: h
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
    step: p,
    stepConfigs: S,
    setBodyNode: C,
    setFooterNode: T,
    setModalOverlayNode: N,
    setReadySlideId: v
  } = (0, f.usePaymentContext)(), m = S.find(e => e.key === p);
  r.useEffect(() => {
    N(null)
  }, [p, N]), a(null != m, "Unknown step for current payment flow.");
  let g = null !== (u = null == m ? void 0 : null === (t = m.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
    A = null == m ? void 0 : null === (n = m.options) || void 0 === n ? void 0 : n.bodyClassName,
    L = void 0 !== I && I ? E.sliderBodyLarge : null == m ? void 0 : null === (l = m.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
  return (0, i.jsxs)(i.Fragment, {
    children: [null === (c = null == m ? void 0 : null === (s = m.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === c || c ? _ : null, m.renderStep(h), null == p || g ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.ModalContent, {
        className: o(E.body, A),
        children: (0, i.jsx)(d.Slides, {
          activeSlide: p,
          centered: !1,
          onSlideReady: e => v(e),
          children: S.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
            id: e.key,
            children: (0, i.jsx)("form", {
              className: o(E.sliderBody, L),
              ref: e => C(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, i.jsx)("div", {
        ref: e => T(e)
      }), (0, i.jsx)("div", {
        ref: e => N(e)
      })]
    })]
  })
}

function I(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}

function h(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}