t.d(n, {
  E: function() {
return E;
  },
  Z: function() {
return _;
  }
});
var s = t(735250);
t(470079);
var o = t(120356),
  r = t.n(o),
  a = t(780384),
  l = t(481060),
  i = t(410030),
  c = t(696936),
  u = t(903773),
  d = t(91597);
let E = {
  RIGHT: d.horizontalStatusWarningBlock,
  BOTTOM: d.verticalStatusWarningBlock
};

function _(e) {
  let {
className: n,
color: t = c.W.YELLOW,
buttonPosition: o = E.BOTTOM,
notice: _,
ctaLabel: I,
ctaLoading: N,
ctaDisabled: h,
ctaClassName: p,
onClick: R
  } = e, g = (0, i.ZP)();
  return (0, s.jsx)(u.Z, {
className: r()(d.statusWarningBlock, {
  [d.statusWarningBlockWithCta]: null != I
}, n),
color: (0, a.wj)(g) ? t : c.W.BROWN,
children: (0, s.jsxs)('div', {
  className: o,
  children: [
    (0, s.jsx)(l.Text, {
      variant: 'text-sm/normal',
      color: 'interactive-active',
      children: _
    }),
    null != I && null != R && (0, s.jsx)('div', {
      className: d.ctaButtonContainer,
      children: (0, s.jsx)(l.Button, {
        className: r()(d.ctaButton, (0, a.wj)(g) ? void 0 : d.ctaBlackButton, p),
        color: (0, a.wj)(g) ? l.Button.Colors.WHITE : l.Button.Colors.CUSTOM,
        size: l.ButtonSizes.MEDIUM,
        onClick: R,
        disabled: h,
        submitting: N,
        children: (0, s.jsx)(l.Text, {
          className: d.ctaButtonText,
          variant: 'text-sm/medium',
          children: I
        })
      })
    })
  ]
})
  });
}