E.d(_, {
  DF: function() {
return I;
  },
  ZP: function() {
return S;
  }
});
var s, T, I, n, A = E(735250),
  t = E(470079),
  a = E(120356),
  r = E.n(a),
  N = E(481060),
  L = E(921944),
  D = E(735233);

function S(e) {
  let {
className: _,
header: E,
headerClassName: s,
content: T,
contentClassName: I,
buttonCTA: n,
secondaryButtonCTA: a,
onClick: S,
onSecondaryClick: l,
buttonProps: U = {
  color: N.Button.Colors.BRAND,
  look: N.Button.Looks.FILLED
},
secondaryButtonProps: G = {
  color: N.Button.Colors.BRAND_INVERTED
},
onComponentMount: O,
asset: i,
markAsDismissed: M,
caretPosition: R = 'caretTopCenter',
buttonLayout: o = 0
  } = e;
  t.useEffect(() => {
null == O || O();
  }, []);
  let u = null != a;
  return (0, A.jsxs)('div', {
className: r()(_, D.upsellTooltipWrapper, D[R]),
children: [
  i,
  null == E ? null : (0, A.jsx)(N.Heading, {
    className: r()(s, D.upsellTooltipHeader),
    variant: 'heading-md/semibold',
    children: E
  }),
  (0, A.jsx)(N.Text, {
    color: 'always-white',
    className: r()(I, D.content),
    variant: 'text-sm/normal',
    children: T
  }),
  null != n || u ? (0, A.jsxs)('div', {
    className: r()(D.upsellButtonsContainer, {
      [D.upsellButtonsAdjacent]: 0 === o,
      [D.upsellButtonsStacked]: 1 === o
    }),
    children: [
      u ? (0, A.jsx)(N.Button, {
        ...G,
        onClick: () => {
          null == l || l(), null == M || M(L.L.SECONDARY);
        },
        children: a
      }) : null,
      null == n ? null : (0, A.jsx)(N.Button, {
        className: r()({
          [D.fullWidth]: !u
        }, U.className),
        color: U.color,
        look: U.look,
        innerClassName: U.innerClassName,
        onClick: e => {
          S(e), null == M || M(L.L.PRIMARY);
        },
        children: n
      })
    ]
  }) : null
]
  });
}
(s = I || (I = {})).TOP_CENTER = 'caretTopCenter', s.TOP_RIGHT = 'caretTopRight', s.TOP_LEFT = 'caretTopLeft', s.BOTTOM_CENTER = 'caretBottomCenter', s.BOTTOM_LEFT = 'caretBottomLeft', s.LEFT_CENTER = 'caretLeftCenter', s.LEFT_TOP = 'caretLeftTop', s.RIGHT_CENTER = 'caretRightCenter', (T = n || (n = {}))[T.ADJACENT = 0] = 'ADJACENT', T[T.STACKED = 1] = 'STACKED', S.CaretPosition = I, S.ButtonLayout = n;