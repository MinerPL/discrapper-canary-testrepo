i.d(e, {
  j: function() {
return a;
  }
});
var l = i(735250),
  t = i(470079),
  s = i(777207),
  r = i(257574);

function a(n) {
  let {
title: e,
subtitle: i,
iconSrc: a,
backgroundSrc: o,
animatedBackgroundSrc: d,
prefersReducedMotion: u = !0
  } = n, c = t.useMemo(() => {
let n = null != o ? o : a;
if (null != n)
  return {
    '--custom-background-url': 'url('.concat(n.toString(), ')')
  };
  }, [
o,
a
  ]), p = t.useMemo(() => {
if (null == o)
  return;
let n = {
  '--custom-background-static': 'url('.concat(o.toString())
};
return !u && null != d && (n['--custom-background-animated'] = 'url('.concat(d.toString(), ')')), n;
  }, [
d,
o,
u
  ]);
  return (0, l.jsxs)('div', {
className: r.wrapper,
children: [
  (0, l.jsx)('div', {
    className: r.background,
    style: c
  }),
  (0, l.jsxs)('div', {
    className: r.content,
    children: [
      null != a && (0, l.jsx)('div', {
        className: r.icon,
        children: (0, l.jsx)('img', {
          src: a.toString(),
          alt: ''
        })
      }),
      (0, l.jsxs)('div', {
        children: [
          (0, l.jsx)(s.x, {
            variant: 'heading-xl/bold',
            tag: 'div',
            children: e
          }),
          null != i && (0, l.jsxs)(s.x, {
            variant: 'text-sm/normal',
            children: [
              '\u201C',
              i,
              '\u201D'
            ]
          })
        ]
      })
    ]
  }),
  null != o ? (0, l.jsx)('div', {
    className: r.image,
    style: p
  }) : null
]
  });
}