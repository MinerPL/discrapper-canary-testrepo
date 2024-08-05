n.d(t, {
  $: function() {
return _;
  }
}), n(653041);
var s = n(735250),
  r = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(338545),
  c = n(873546),
  l = n(481060),
  d = n(774078),
  u = n(689938),
  f = n(447986),
  p = n(493978),
  g = n(932135);

function C(e) {
  let {
endDate: t
  } = e, {
days: n,
hours: r,
minutes: a,
seconds: o
  } = (0, d.Z)(t), i = function(e, t, n, s) {
let r = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
  a = [];
return e > 0 && a.push(r(e, u.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || a.length > 0) && a.push(r(t, u.Z.Messages.COUNTDOWN_UNITS_HOURS)), (n > 0 || a.length > 0) && a.push(r(n, u.Z.Messages.COUNTDOWN_UNITS_MINUTES)), a.push(r(s, u.Z.Messages.COUNTDOWN_UNITS_SECONDS)), a.join(':');
  }(n, r, a, o);
  return (0, s.jsx)(l.Text, {
variant: 'heading-md/medium',
className: f.countdown,
tag: 'div',
children: (0, s.jsx)('div', {
  role: 'timer',
  'aria-relevant': 'all',
  children: i
})
  });
}
let _ = r.memo(function(e) {
  let {
unpublishedAt: t,
isVisible: n,
displayOptions: r,
isFullScreen: a
  } = e, d = (0, l.useSpring)({
transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
opacity: n ? 1 : 0,
config: {
  tension: 120,
  friction: 12
}
  });
  return (0, s.jsxs)(i.animated.div, {
className: o()([
  f.countDownWrapper,
  a && f.fullScreenWrapper,
  c.tq && f.mobileWrapper
]),
role: 'status',
style: {
  ...r.style,
  ...d
},
children: [
  (0, s.jsx)(l.Text, {
    variant: 'text-md/medium',
    className: f.countdownLabel,
    children: r.label()
  }),
  null != r.iconSrc && (0, s.jsx)('img', {
    src: r.iconSrc,
    className: f.countdownIcon,
    alt: '',
    'aria-hidden': !0
  }),
  (0, s.jsx)(C, {
    endDate: t
  }),
  (0, s.jsx)('img', {
    src: p,
    className: o()(f.sparkles, f.left),
    alt: '',
    'aria-hidden': !0
  }),
  (0, s.jsx)('img', {
    src: g,
    className: o()(f.sparkles, f.right),
    alt: '',
    'aria-hidden': !0
  })
]
  });
});