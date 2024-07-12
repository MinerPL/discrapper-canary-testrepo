n.d(t, {
  Z: function() {
return h;
  },
  i: function() {
return I;
  }
}), n(47120);
var a = n(735250),
  i = n(470079),
  s = n(120356),
  o = n.n(s),
  r = n(338545),
  l = n(442837),
  d = n(481060),
  c = n(607070),
  m = n(671533),
  u = n(689938),
  _ = n(695812);

function h(e) {
  let {
message: t,
adminTitle: n,
profilePic: i,
emphasisColor: s = 'interactive-normal',
arrowPosition: r,
className: l
  } = e;
  return (0, a.jsxs)('div', {
className: o()(_.testimonialContainer, l),
children: [
  (0, a.jsx)(N, {
    testimonial: {
      message: t,
      adminTitle: n,
      profilePic: i,
      emphasisColor: s
    }
  }),
  (0, a.jsx)(d.Text, {
    variant: 'text-lg/bold',
    className: _.quotes,
    children: '\u201C'
  }),
  (0, a.jsx)('div', {
    className: o()(_.arrow, {
      [_.arrowRight]: 'right' === r,
      [_.arrowLeft]: 'left' === r
    }),
    children: (0, a.jsx)(x, {})
  })
]
  });
}

function N(e) {
  let {
testimonial: t,
className: n
  } = e, {
message: i,
profilePic: s,
adminTitle: o,
emphasisColor: r = 'interactive-normal'
  } = t;
  return (0, a.jsxs)('div', {
className: n,
children: [
  (0, a.jsx)(d.Text, {
    variant: 'text-sm/medium',
    color: 'header-secondary',
    children: i.format({
      testimonialHook: (e, t) => (0, a.jsx)(d.Text, {
        tag: 'span',
        variant: 'text-sm/bold',
        color: r,
        children: e
      }, t)
    })
  }),
  (0, a.jsxs)('div', {
    className: _.userContainer,
    children: [
      (0, a.jsx)(d.Avatar, {
        src: s,
        size: d.AvatarSizes.SIZE_16,
        'aria-hidden': !0
      }),
      (0, a.jsx)(d.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: o
      })
    ]
  })
]
  });
}

function x() {
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

function I(e) {
  let {
testimonials: t
  } = e, [
[n, s], o
  ] = i.useState([
0,
'right'
  ]), r = i.useCallback(() => {
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
  ]), l = i.useCallback(() => {
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
  ]), c = t[n], h = i.useCallback((e, t, n, i) => (0, a.jsx)(C, {
item: t,
state: n,
cleanup: i,
direction: s
  }, e), [s]);
  return (0, a.jsxs)('div', {
className: _.testimonialHeroContainer,
children: [
  (0, a.jsx)('div', {
    className: _.animatedContainer,
    children: (0, a.jsx)(d.TransitionGroup, {
      items: [c],
      renderItem: h,
      getItemKey: e => e.adminTitle
    })
  }),
  (0, a.jsx)(d.Text, {
    variant: 'text-lg/bold',
    className: _.heroQuotes,
    children: '\u201C'
  }),
  (0, a.jsxs)('div', {
    className: _.testimonialsControls,
    children: [
      (0, a.jsxs)(d.Button, {
        className: _.testimonialControl,
        innerClassName: _.testimonialControlInner,
        onClick: r,
        size: d.Button.Sizes.MIN,
        color: d.Button.Colors.PRIMARY,
        children: [
          (0, a.jsx)(m.Z, {
            className: _.testimonialControlIcon,
            direction: m.Z.Directions.LEFT
          }),
          (0, a.jsx)(d.HiddenVisually, {
            children: u.Z.Messages.BACK
          })
        ]
      }),
      (0, a.jsxs)(d.Button, {
        className: _.testimonialControl,
        innerClassName: _.testimonialControlInner,
        onClick: l,
        size: d.Button.Sizes.MIN,
        color: d.Button.Colors.PRIMARY,
        children: [
          (0, a.jsx)(m.Z, {
            className: _.testimonialControlIcon,
            direction: m.Z.Directions.RIGHT
          }),
          (0, a.jsx)(d.HiddenVisually, {
            children: u.Z.Messages.NEXT
          })
        ]
      })
    ]
  })
]
  });
}

function C(e) {
  let {
item: t,
state: n,
cleanup: i,
direction: s
  } = e, o = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), [m] = (0, r.useSpring)(() => {
switch (n) {
  case d.TransitionStates.ENTERED:
    return {
      from: {
          transform: 'right' === s ? 'translateX(150%)' : 'translate(-150%)'
        },
        to: {
          transform: 'translateX(0%)'
        },
        immediate: o
    };
  case d.TransitionStates.YEETED:
    return {
      from: {
          transform: 'translateX(0%)'
        },
        to: {
          transform: 'right' === s ? 'translateX(-150%)' : 'translate(150%)'
        },
        immediate: o,
        onRest: i
    };
  default:
    return {};
}
  }, [n]);
  return (0, a.jsx)(r.animated.div, {
style: m,
children: (0, a.jsx)(N, {
  className: _.testimonial,
  testimonial: t
})
  });
}