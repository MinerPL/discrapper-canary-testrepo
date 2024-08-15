n.d(t, {
  Z: function() {
return u;
  },
  i: function() {
return N;
  }
}), n(47120);
var a = n(735250),
  s = n(470079),
  i = n(120356),
  o = n.n(i),
  r = n(338545),
  l = n(481060),
  c = n(671533),
  d = n(689938),
  m = n(444086);

function u(e) {
  let {
message: t,
adminTitle: n,
profilePic: s,
emphasisColor: i = 'interactive-normal',
arrowPosition: r,
className: c
  } = e;
  return (0, a.jsxs)('div', {
className: o()(m.testimonialContainer, c),
children: [
  (0, a.jsx)(_, {
    testimonial: {
      message: t,
      adminTitle: n,
      profilePic: s,
      emphasisColor: i
    }
  }),
  (0, a.jsx)(l.Text, {
    variant: 'text-lg/bold',
    className: m.quotes,
    children: '\u201C'
  }),
  (0, a.jsx)('div', {
    className: o()(m.arrow, {
      [m.arrowRight]: 'right' === r,
      [m.arrowLeft]: 'left' === r
    }),
    children: (0, a.jsx)(h, {})
  })
]
  });
}

function _(e) {
  let {
testimonial: t,
className: n
  } = e, {
message: s,
profilePic: i,
adminTitle: o,
emphasisColor: r = 'interactive-normal'
  } = t;
  return (0, a.jsxs)('div', {
className: n,
children: [
  (0, a.jsx)(l.Text, {
    variant: 'text-sm/medium',
    color: 'header-secondary',
    children: s.format({
      testimonialHook: (e, t) => (0, a.jsx)(l.Text, {
        tag: 'span',
        variant: 'text-sm/bold',
        color: r,
        children: e
      }, t)
    })
  }),
  (0, a.jsxs)('div', {
    className: m.userContainer,
    children: [
      (0, a.jsx)(l.Avatar, {
        src: i,
        size: l.AvatarSizes.SIZE_16,
        'aria-hidden': !0
      }),
      (0, a.jsx)(l.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: o
      })
    ]
  })
]
  });
}

function h() {
  return (0, a.jsx)('svg', {
width: '12',
height: '20',
viewBox: '0 0 12 20',
fill: 'none',
xmlns: 'http://www.w3.org/2000/svg',
children: (0, a.jsx)('path', {
  d: 'M11.5 0.662598H0L11.5 19.1626V0.662598Z',
  fill: '#2B2D31'
})
  });
}

function N(e) {
  let {
testimonials: t
  } = e, [
[n, i], o
  ] = s.useState([
0,
'right'
  ]), r = s.useCallback(() => {
o(e => {
  let [n] = e;
  return 0 === n ? [
    t.length - 1,
    'left'
  ] : [
    n - 1,
    'left'
  ];
});
  }, [
o,
t.length
  ]), u = s.useCallback(() => {
o(e => {
  let [n] = e;
  return [
    (n + 1) % t.length,
    'right'
  ];
});
  }, [
o,
t.length
  ]), _ = t[n], h = s.useCallback((e, t, n, s) => (0, a.jsx)(x, {
item: t,
state: n,
cleanup: s,
direction: i
  }, e), [i]);
  return (0, a.jsxs)('div', {
className: m.testimonialHeroContainer,
children: [
  (0, a.jsx)('div', {
    className: m.animatedContainer,
    children: (0, a.jsx)(l.TransitionGroup, {
      items: [_],
      renderItem: h,
      getItemKey: e => e.adminTitle
    })
  }),
  (0, a.jsx)(l.Text, {
    variant: 'text-lg/bold',
    className: m.heroQuotes,
    children: '\u201C'
  }),
  (0, a.jsxs)('div', {
    className: m.testimonialsControls,
    children: [
      (0, a.jsxs)(l.Button, {
        className: m.testimonialControl,
        innerClassName: m.testimonialControlInner,
        onClick: r,
        size: l.Button.Sizes.MIN,
        color: l.Button.Colors.PRIMARY,
        children: [
          (0, a.jsx)(c.Z, {
            className: m.testimonialControlIcon,
            direction: c.Z.Directions.LEFT
          }),
          (0, a.jsx)(l.HiddenVisually, {
            children: d.Z.Messages.BACK
          })
        ]
      }),
      (0, a.jsxs)(l.Button, {
        className: m.testimonialControl,
        innerClassName: m.testimonialControlInner,
        onClick: u,
        size: l.Button.Sizes.MIN,
        color: l.Button.Colors.PRIMARY,
        children: [
          (0, a.jsx)(c.Z, {
            className: m.testimonialControlIcon,
            direction: c.Z.Directions.RIGHT
          }),
          (0, a.jsx)(l.HiddenVisually, {
            children: d.Z.Messages.NEXT
          })
        ]
      })
    ]
  })
]
  });
}

function x(e) {
  let {
item: t,
state: n,
cleanup: s,
direction: i
  } = e, [o] = (0, l.useSpring)(() => {
switch (n) {
  case l.TransitionStates.ENTERED:
    return {
      from: {
          transform: 'right' === i ? 'translateX(150%)' : 'translate(-150%)'
        },
        to: {
          transform: 'translateX(0%)'
        }
    };
  case l.TransitionStates.YEETED:
    return {
      from: {
          transform: 'translateX(0%)'
        },
        to: {
          transform: 'right' === i ? 'translateX(-150%)' : 'translate(150%)'
        },
        onRest: s
    };
  default:
    return {};
}
  }, 'respect-motion-settings', [n]);
  return (0, a.jsx)(r.animated.div, {
style: o,
children: (0, a.jsx)(_, {
  className: m.testimonial,
  testimonial: t
})
  });
}