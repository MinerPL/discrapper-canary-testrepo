n.d(r, {
  C3: function() {
return m;
  },
  O3: function() {
return f;
  },
  ZP: function() {
return _;
  }
});
var l = n(735250),
  o = n(470079),
  s = n(120356),
  t = n.n(s),
  a = n(512722),
  c = n.n(a),
  i = n(699581),
  d = n(481060),
  u = n(598),
  p = n(776674);

function _(e) {
  var r, n, s, a, i, _;
  let {
header: m,
isLargeModal: f,
stepProps: N
  } = function(e) {
let {
  header: r,
  isLargeModal: n,
  ...l
} = e;
return {
  header: r,
  isLargeModal: n,
  stepProps: l
};
  }(e), {
step: h,
stepConfigs: E,
setBodyNode: x,
setFooterNode: I,
setModalOverlayNode: S,
setReadySlideId: C
  } = (0, u.usePaymentContext)(), T = E.find(e => e.key === h);
  o.useEffect(() => {
S(null);
  }, [
h,
S
  ]), c()(null != T, 'Unknown step for current payment flow.');
  let b = null !== (i = null == T ? void 0 : null === (r = T.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== i && i,
j = null == T ? void 0 : null === (n = T.options) || void 0 === n ? void 0 : n.bodyClassName,
v = void 0 !== f && f ? p.sliderBodyLarge : null == T ? void 0 : null === (s = T.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
  return (0, l.jsxs)(l.Fragment, {
children: [
  null === (_ = null == T ? void 0 : null === (a = T.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === _ || _ ? m : null,
  T.renderStep(N),
  null == h || b ? null : (0, l.jsxs)(l.Fragment, {
    children: [
      (0, l.jsx)(d.ModalContent, {
        className: t()(p.body, j),
        children: (0, l.jsx)(d.Slides, {
          activeSlide: h,
          centered: !1,
          onSlideReady: e => C(e),
          children: E.filter(e => null != e.key).map(e => (0, l.jsx)(d.Slide, {
            id: e.key,
            children: (0, l.jsx)('form', {
              className: t()(p.sliderBody, v),
              ref: e => x(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }),
      (0, l.jsx)('div', {
        ref: e => I(e)
      }),
      (0, l.jsx)('div', {
        ref: e => S(e)
      })
    ]
  })
]
  });
}

function m(e) {
  let {
children: r
  } = e, {
bodyNode: n
  } = (0, u.usePaymentContext)();
  return null == n ? null : i.createPortal(r, n);
}

function f(e) {
  let {
children: r
  } = e, {
footerNode: n
  } = (0, u.usePaymentContext)();
  return null == n ? null : i.createPortal(r, n);
}