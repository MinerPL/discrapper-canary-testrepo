i.d(n, {
  j: function() {
return a;
  }
});
var l = i(735250),
  t = i(470079),
  r = i(777207),
  s = i(393713);

function a(e) {
  let {
title: n,
subtitle: i,
iconSrc: a,
backgroundSrc: o,
animatedBackgroundSrc: d,
prefersReducedMotion: u = !0
  } = e, c = t.useMemo(() => {
let e = null != o ? o : a;
if (null != e)
  return {
    '--custom-background-url': 'url('.concat(e.toString(), ')')
  };
  }, [
o,
a
  ]), p = t.useMemo(() => {
if (null == o)
  return;
let e = {
  '--custom-background-static': 'url('.concat(o.toString())
};
return !u && null != d && (e['--custom-background-animated'] = 'url('.concat(d.toString(), ')')), e;
  }, [
d,
o,
u
  ]);
  return (0, l.jsxs)('div', {
className: s.wrapper,
children: [
  (0, l.jsx)('div', {
    className: s.background,
    style: c
  }),
  (0, l.jsxs)('div', {
    className: s.content,
    children: [
      null != a && (0, l.jsx)('div', {
        className: s.icon,
        children: (0, l.jsx)('img', {
          src: a.toString(),
          alt: ''
        })
      }),
      (0, l.jsxs)('div', {
        children: [
          (0, l.jsx)(r.x, {
            variant: 'heading-xl/bold',
            tag: 'div',
            children: n
          }),
          null != i && (0, l.jsxs)(r.x, {
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
    className: s.image,
    style: p
  }) : null
]
  });
}