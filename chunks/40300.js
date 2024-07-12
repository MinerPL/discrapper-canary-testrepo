n.d(t, {
  L: function() {
return i;
  }
}), n(47120);
var i, a, l = n(735250),
  s = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(481060),
  d = n(763520),
  u = n(153066),
  h = n(392037);
(a = i || (i = {})).CONTAIN = 'contain', a.COVER = 'cover';
let p = s.memo(function(e) {
  let {
streamId: t,
onResize: n,
wrapperClassName: i,
videoComponent: a,
className: r,
fit: p = 'contain',
mirror: m = !1,
paused: _ = !1,
streamPreviewURL: f,
videoSpinnerContext: E,
userId: C
  } = e, [g, I] = s.useState(!0), [x] = s.useState(() => new d.o('VideoStream'));
  s.useEffect(() => {
!_ && (g ? x.onSpinnerStarted() : null != t && x.trackSpinnerDuration(E, C, t));
  }, [
g,
_,
t,
x,
E,
C
  ]);
  let T = s.useCallback(() => {
I(!1);
  }, []);
  return (0, l.jsxs)('div', {
className: o()(h.wrapper, i),
children: [
  null != t && (0, l.jsx)(a, {
    className: o()(h.video, (0, u.l)(h, 'video', p), {
      [h.mirror]: m
    }, r),
    streamId: t,
    onResize: n,
    onReady: T,
    paused: _
  }),
  _ ? null : (0, l.jsx)('div', {
    className: o()(h.previewWrapper, {
      [h.loading]: g
    }),
    children: g && (0, l.jsxs)(s.Fragment, {
      children: [
        null != f ? (0, l.jsx)('img', {
          src: f,
          alt: '',
          className: h.previewImage
        }) : (0, l.jsx)('div', {
          className: h.emptyPreviewWrapper,
          children: (0, l.jsx)('div', {
            className: h.emptyPreview
          })
        }),
        (0, l.jsx)(c.Spinner, {
          className: h.spinner
        })
      ]
    })
  })
]
  });
});
t.Z = p;