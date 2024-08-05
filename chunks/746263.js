s.d(t, {
  Z: function() {
return T;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(772848),
  l = s(481060),
  c = s(451593),
  d = s(694539),
  _ = s(757613);
let E = e => {
var t, s, a;
let {
  effect: i,
  onClick: o
} = e, {
  deleteConfig: d
} = (0, c.E)();
return (0, n.jsxs)(l.Clickable, {
  className: _.previewCard,
  onClick: () => {
    o(i);
  },
  children: [
    (0, n.jsx)('div', {
      className: _.previewCardImage,
      style: {
        backgroundImage: 'url('.concat(null === (a = i.config) || void 0 === a ? void 0 : null === (s = a.effects) || void 0 === s ? void 0 : null === (t = s[0]) || void 0 === t ? void 0 : t.base64, ')')
      }
    }),
    (0, n.jsxs)('div', {
      className: r()(_.previewCardFooter, _.row),
      children: [
        (0, n.jsx)(l.Text, {
          variant: 'text-md/bold',
          children: i.name
        }),
        (0, n.jsx)(l.Button, {
          color: l.ButtonColors.RED,
          look: l.ButtonLooks.LINK,
          onClick: e => {
            e.preventDefault(), e.stopPropagation(), d(i.id);
          },
          children: 'Delete'
        })
      ]
    })
  ]
});
  },
  u = () => {
let e = (0, o.Z)();
return {
  id: e,
  name: 'New Profile Effect',
  config: {
    effects: []
  }
};
  };

function T() {
  let {
profileEffects: e,
upsertConfig: t
  } = (0, c.E)(), [s, i] = a.useState();
  return (0, n.jsxs)('div', {
className: _.root,
children: [
  null == s && (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsxs)('div', {
        className: _.col,
        children: [
          (0, n.jsx)('div', {
            className: _.section,
            children: (0, n.jsx)(l.Heading, {
              variant: 'heading-lg/bold',
              children: 'Profile Effects'
            })
          }),
          (0, n.jsx)('div', {
            className: _.grid,
            children: Object.values(e).map(e => (0, n.jsx)(E, {
              effect: e,
              onClick: e => {
                i(e);
              }
            }, e.id))
          })
        ]
      }),
      (0, n.jsx)('div', {
        className: r()(_.row, _.end, _.section),
        children: (0, n.jsx)(l.Button, {
          onClick: () => {
            t(u());
          },
          children: 'Create New Effect'
        })
      })
    ]
  }),
  null != s && (0, n.jsx)(d.Z, {
    effect: s,
    back: () => {
      i(void 0);
    }
  })
]
  });
}