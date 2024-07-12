var i = n(735250),
  a = n(470079),
  l = n(873546),
  s = n(442837),
  r = n(481060),
  o = n(433355),
  c = n(373791),
  d = n(792913);
t.Z = a.memo(function(e) {
  let {
message: t,
subtitle: n,
countdown: u,
buttonText: h,
buttonColor: p,
buttonSubmitting: m,
onButtonClick: _,
imageSrc: f,
animationSrc: E,
secondaryButtonText: C,
onSecondaryButtonClick: g,
children: I,
useReducedMotion: x = !1
  } = e, T = (0, s.e7)([o.ZP], () => o.ZP.getState().isMembersOpen);
  if (l.tq && T)
return null;
  if (null == t)
return (0, i.jsx)(i.Fragment, {
  children: a.Children.only(I)
});
  let v = null;
  return null != f ? v = (0, i.jsx)('img', {
alt: '',
src: f,
className: d.image
  }) : null != E && (v = (0, i.jsx)(r.LottieAnimation, {
importData: E,
shouldAnimate: !x,
className: d.animation
  })), (0, i.jsxs)('div', {
className: d.wrapper,
children: [
  (0, i.jsxs)('div', {
    className: d.content,
    children: [
      v,
      (0, i.jsxs)('div', {
        className: d.text,
        children: [
          (0, i.jsx)(r.Heading, {
            variant: 'heading-md/semibold',
            className: d.title,
            children: t
          }),
          null != n && (0, i.jsx)(r.Text, {
            color: 'text-muted',
            variant: 'text-xs/normal',
            children: n
          })
        ]
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: d.buttonContainer,
    children: [
      null != C && (0, i.jsx)(r.Button, {
        className: d.button,
        size: r.Button.Sizes.SMALL,
        onClick: g,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        submitting: m,
        children: C
      }),
      null != h && (0, i.jsx)(r.Button, {
        className: d.button,
        innerClassName: d.innerButton,
        size: r.Button.Sizes.SMALL,
        onClick: _,
        submitting: m,
        color: null != p ? p : r.Button.Colors.PRIMARY,
        children: h
      })
    ]
  }),
  null != u && (0, i.jsx)(c.Z, {
    className: d.countdown,
    deadline: u
  })
]
  });
});