o.d(t, {
  L: function() {
return g;
  },
  Z: function() {
return L;
  }
}), o(47120);
var n = o(735250),
  a = o(470079),
  s = o(120356),
  l = o.n(s),
  i = o(392711),
  r = o.n(i),
  c = o(481060),
  u = o(110924),
  d = o(572539),
  _ = o(285952),
  b = o(153124),
  E = o(863840),
  m = o(63063),
  O = o(957115),
  C = o(531578),
  h = o(689938),
  A = o(487448);
let p = [{
className: A.emojiSad,
rating: C.aZ.BAD,
classNameSelected: A.selected
  },
  {
className: A.emojiNeutral,
rating: C.aZ.NEUTRAL,
classNameSelected: A.selected
  },
  {
className: A.emojiHappy,
rating: C.aZ.GOOD,
classNameSelected: A.selected
  }
];

function g(e) {
  let {
className: t,
selectedRating: o,
ratingConfigs: a,
onChangeRating: s
  } = e;
  return (0, n.jsx)(_.Z, {
justify: _.Z.Justify.BETWEEN,
align: _.Z.Align.CENTER,
className: l()(A.ratingsSelector, t),
children: (null != a ? a : p).map(e => {
  let {
    rating: t,
    className: a,
    classNameSelected: i
  } = e;
  return (0, n.jsx)(c.Clickable, {
    onClick: () => s(t),
    'aria-label': t,
    children: (0, n.jsx)('div', {
      className: l()(a, o === t ? i : null)
    })
  }, t);
})
  });
}

function f() {
  return (0, n.jsx)(c.Text, {
className: A.helpdeskLink,
variant: 'text-xs/normal',
color: 'text-muted',
children: h.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
  helpdeskURL: m.Z.getSubmitRequestURL()
})
  });
}

function L(e) {
  let {
header: t,
body: o,
problemTitle: s,
problems: i,
transitionState: m,
ratingConfigs: p,
feedbackProblems: L = [],
otherKey: N,
ratingsSelectorClassName: D,
hideDontShowCheckbox: I,
startRating: v = null,
onSubmit: Z,
onClose: x
  } = e, B = (0, u.Z)(i), [T, j] = a.useState(!1), [S, M] = a.useState(v), [R, k] = a.useState(null), [K, F] = a.useState(r().shuffle(i)), [H, U] = a.useState(''), P = (0, b.Dt)(), y = (0, E.Z)(S), w = (0, E.Z)(T), V = (0, E.Z)(R), G = (0, E.Z)(Z), z = (0, E.Z)(H), Y = null != R && L.includes(R);
  return a.useEffect(() => {
!r().isEqual(B, i) && F((0, O.B)(i, N));
  }, [
i,
B,
N
  ]), a.useEffect(() => () => {
G.current({
  rating: y.current,
  problem: V.current,
  dontShowAgain: w.current,
  feedback: z.current
});
  }, []), (0, n.jsxs)(c.ModalRoot, {
transitionState: m,
className: A.__invalid_modalRoot,
'aria-labelledby': P,
children: [
  (0, n.jsxs)(c.ModalHeader, {
    separator: !1,
    className: A.headerContainer,
    children: [
      (0, n.jsx)(c.Heading, {
        id: P,
        variant: 'heading-xl/extrabold',
        color: 'none',
        children: t
      }),
      (0, n.jsx)(c.Text, {
        variant: 'text-md/normal',
        color: 'none',
        className: A.ratingBody,
        children: o
      }),
      Y ? null : (0, n.jsx)(g, {
        className: l()(A.emojis, D),
        selectedRating: S,
        onChangeRating: function(e) {
          M(e), e === C.aZ.GOOD && x();
        },
        ratingConfigs: p
      })
    ]
  }),
  (0, n.jsxs)(c.ModalContent, {
    className: A.__invalid_content,
    children: [
      null == S || S === C.aZ.GOOD || Y ? null : (0, n.jsx)(c.FormItem, {
        title: s,
        className: A.problemInfo,
        children: (0, n.jsx)(d.Z, {
          options: K,
          onClick: function(e) {
            let {
              value: t
            } = e;
            k(t), !L.includes(t) && x();
          },
          hideCaret: e => {
            let {
              value: t
            } = e;
            return !L.includes(t);
          }
        })
      }),
      Y ? (0, n.jsxs)(c.FormItem, {
        title: h.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
        className: A.problemInfo,
        children: [
          (0, n.jsx)(c.TextArea, {
            value: H,
            maxLength: C.iF,
            onChange: U
          }),
          (0, n.jsx)(f, {})
        ]
      }) : null
    ]
  }),
  (Y || !I) && (0, n.jsx)(c.ModalFooter, {
    className: A.footer,
    direction: _.Z.Direction.HORIZONTAL,
    children: Y ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          look: c.Button.Looks.LINK,
          color: c.Button.Colors.PRIMARY,
          onClick: () => {
            k(null), U('');
          },
          children: h.Z.Messages.BACK
        }),
        (0, n.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: x,
          children: h.Z.Messages.SUBMIT
        })
      ]
    }) : (0, n.jsx)(c.Checkbox, {
      type: c.Checkbox.Types.INVERTED,
      size: 18,
      value: T,
      onChange: () => j(!T),
      children: (0, n.jsx)(c.Text, {
        variant: 'text-sm/normal',
        children: h.Z.Messages.DONT_SHOW_AGAIN
      })
    })
  })
]
  });
}