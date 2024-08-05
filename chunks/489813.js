t.d(n, {
  Ih: function() {
return l;
  },
  PU: function() {
return c;
  },
  hK: function() {
return o;
  }
});
var a = t(735250);
t(470079);
var r = t(692547),
  i = t(481060),
  s = t(127829);

function o(e) {
  let {
title: n,
children: t
  } = e;
  return (0, a.jsxs)('div', {
className: s.questionContainer,
children: [
  (0, a.jsx)(i.Text, {
    className: s.questionTitle,
    variant: 'text-md/semibold',
    color: 'header-primary',
    children: n
  }),
  t
]
  });
}

function l(e) {
  let {
icon: n,
text: t,
meetsRequirement: o
  } = e;
  return (0, a.jsxs)('div', {
className: s.requirementContainer,
children: [
  (0, a.jsx)(n, {
    className: s.requirementIcon,
    height: 20,
    width: 20,
    size: 'custom',
    color: 'currentColor'
  }),
  (0, a.jsx)(i.Text, {
    className: s.requirementText,
    variant: 'text-md/normal',
    children: t
  }),
  o ? (0, a.jsx)(i.CircleCheckIcon, {
    size: 'md',
    color: 'currentColor',
    className: s.requirementSuccess,
    secondaryColor: r.Z.colors.WHITE.css
  }) : (0, a.jsx)(i.CircleXIcon, {
    size: 'md',
    color: 'currentColor',
    className: s.requirementFailure,
    secondaryColor: r.Z.colors.WHITE.css
  })
]
  });
}

function c(e) {
  let {
icon: n,
text: t,
footnote: o,
meetsRequirement: l,
children: c
  } = e;
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)('div', {
    className: s.requirementContainer,
    children: [
      (0, a.jsx)(n, {
        className: s.requirementIcon,
        height: 20,
        width: 20,
        size: 'custom',
        color: 'currentColor'
      }),
      (0, a.jsx)(i.Text, {
        className: s.requirementText,
        variant: 'text-md/normal',
        children: t
      }),
      l ? (0, a.jsx)(i.CircleCheckIcon, {
        size: 'md',
        color: 'currentColor',
        className: s.requirementSuccess,
        secondaryColor: r.Z.colors.WHITE.css
      }) : c
    ]
  }),
  null != o && (0, a.jsx)(i.Text, {
    color: 'header-secondary',
    className: s.footnote,
    variant: 'text-xs/normal',
    children: o
  })
]
  });
}