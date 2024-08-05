s.d(t, {
  Z: function() {
return u;
  }
});
var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(913527),
  o = s.n(r),
  l = s(481060),
  c = s(55935),
  d = s(955204),
  _ = s(674680),
  E = s(765333);

function u(e) {
  let {
achievementId: t,
dateUnlocked: s
  } = e, a = (0, d.oX)(t);
  if (null == a)
return null;
  let r = null != s,
{
  name: u,
  description: T,
  hideDescriptionUntilUnlock: I,
  onAction: S
} = a,
N = I && !r,
C = r ? 'header-primary' : 'text-muted',
m = r ? 'header-secondary' : 'text-muted',
A = o()(s),
g = null != S && r,
h = g ? l.Clickable : 'div';
  return (0, n.jsxs)(h, {
className: i()(E.container, g && E.actionable),
onClick: () => {
  g && S();
},
children: [
  (0, n.jsx)('div', {
    className: E.iconContainer,
    children: (0, n.jsx)(_.Z, {
      achievementId: t,
      size: _.Z.Sizes.SIZE_40,
      unlocked: r
    })
  }),
  (0, n.jsxs)('div', {
    className: E.nameContainer,
    children: [
      null != s && (0, n.jsx)(l.Text, {
        variant: 'text-xxs/semibold',
        color: 'text-muted',
        className: E.unlocked,
        children: (0, c.Y4)(A)
      }),
      (0, n.jsx)(l.Text, {
        variant: 'text-md/medium',
        color: C,
        children: u()
      }),
      (0, n.jsx)(l.Text, {
        variant: 'text-xs/normal',
        color: m,
        children: N ? '?????' : T()
      })
    ]
  })
]
  });
}