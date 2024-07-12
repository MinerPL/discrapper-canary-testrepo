n.d(t, {
  Z: function() {
return S;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(866442),
  o = n(481060),
  c = n(393238),
  d = n(44315),
  u = n(663993),
  _ = n(981631),
  I = n(689938),
  E = n(404957);
let T = (0, u.Un)({
  createPromise: () => n.e('5609').then(n.bind(n, 336231)),
  webpackId: 336231
});

function m(e) {
  let t = (0, l.Bd)(e) > 0.25;
  return (0, d.Lq)(t ? _.Ilk.WHITE_500 : _.Ilk.PRIMARY_530);
}

function N(e) {
  let {
value: t,
onChange: n,
disabled: i = !1
  } = e, [c, d] = a.useState(t);

  function u() {
n(c);
  }

  function T(e) {
n(e), d(e);
  }
  let N = t === _.p6O,
S = N ? c : t,
h = (0, s.jsx)(o.CheckmarkLargeIcon, {
  size: 'custom',
  width: 32,
  height: 24,
  color: m(t)
}),
g = (0, o.useRadioGroup)({
  orientation: 'horizontal',
  isDisabled: i
}),
C = (0, o.useRadioItem)({
  isSelected: N,
  label: I.Z.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT_BUTTON.format({
    colorHex: (0, l.Rf)(_.p6O)
  })
}),
x = (0, o.useRadioItem)({
  isSelected: !N,
  label: I.Z.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM_BUTTON.format({
    colorHex: (0, l.Rf)(t)
  })
});
  return (0, s.jsxs)('div', {
className: E.buttonsContainer,
'aria-label': I.Z.Messages.USER_SETTINGS_PROFILE_COLOR,
...g,
children: [
  (0, s.jsx)('div', {
    className: r()(E.colorSwatch, {
      [E.disabled]: i
    }),
    children: (0, s.jsxs)(o.Clickable, {
      onClick: i ? void 0 : function() {
        n(_.p6O);
      },
      'aria-disabled': i,
      ...C,
      children: [
        (0, s.jsx)('div', {
          className: E.swatch,
          style: {
            backgroundColor: (0, l.Rf)(_.p6O)
          },
          children: N ? h : null
        }),
        (0, s.jsx)(o.Text, {
          className: E.swatchDescription,
          color: 'header-secondary',
          variant: 'text-xs/normal',
          'aria-hidden': !0,
          children: I.Z.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT
        })
      ]
    })
  }),
  (0, s.jsxs)('div', {
    className: r()(E.colorSwatch, {
      [E.disabled]: i
    }),
    children: [
      (0, s.jsxs)(o.Clickable, {
        onClick: i ? void 0 : u,
        'aria-disabled': i,
        ...x,
        children: [
          (0, s.jsx)('div', {
            className: r()(E.customSwatch, {
              [E.defaultSwatch]: S === _.p6O
            }),
            style: {
              '--custom-color': (0, l.Rf)(S)
            },
            children: N ? null : h
          }),
          (0, s.jsx)(o.Text, {
            className: E.swatchDescription,
            color: 'header-secondary',
            variant: 'text-xs/normal',
            'aria-hidden': !0,
            children: I.Z.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM
          })
        ]
      }),
      !i && (0, s.jsx)(o.Popout, {
        onRequestOpen: u,
        renderPopout: e => (0, s.jsx)(o.CustomColorPicker, {
          ...e,
          value: t,
          onChange: T
        }),
        children: e => (0, s.jsx)(o.Clickable, {
          ...e,
          className: E.dropperIconButton,
          'aria-label': I.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          children: (0, s.jsx)(o.EyeDropperIcon, {
            size: 'custom',
            className: E.dropperIcon,
            width: 14,
            height: 14,
            color: m(S)
          })
        })
      })
    ]
  })
]
  });
}

function S(e) {
  let t, {
  value: n,
  onChange: a,
  disabled: i = !1
} = e,
{
  ref: r,
  width: l
} = (0, c.Z)();
  return t = null == l || l < 440 ? (0, s.jsx)(N, {
value: n,
onChange: a,
disabled: i
  }) : (0, s.jsx)(T, {
defaultColor: _.p6O,
colors: _.pmI,
value: n,
onChange: a,
disabled: i
  }), (0, s.jsx)('div', {
ref: r,
children: t
  });
}