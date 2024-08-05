n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(748780),
  o = n(91192),
  c = n(481060),
  d = n(239091),
  u = n(687683),
  _ = n(821233);
t.Z = function(e) {
  let {
index: t,
children: s,
user: h,
channel: E,
onClick: I,
isFocused: m,
isActive: g,
onOtherHover: p,
className: T
  } = e, [S, f] = a.useState(!1), [C, N] = a.useState(!1), A = () => {
f(!0), m && !g && !C && (null == p || p());
  }, v = () => {
f(!1);
  }, Z = (e, t) => {
if (null != t)
  N(!0), (0, d.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('69220'),
      n.e('86541')
    ]).then(n.bind(n, 881351));
    return n => (0, i.jsx)(e, {
      ...n,
      user: t
    });
  }, {
    onClose: () => {
      N(!1);
    }
  });
  };
  return (0, i.jsx)(o.mh, {
id: E.id,
children: e => (0, i.jsx)(c.FocusRing, {
  offset: {
    left: -8,
    right: -8
  },
  children: (0, i.jsx)(l.Z.div, {
    className: r()(_.messageRequestItem, T, {
      [_.active]: g || C,
      [_.firstItem]: 0 === t
    }),
    onContextMenu: e => Z(e, h),
    onMouseEnter: A,
    onMouseLeave: v,
    onClick: null != I ? I : void 0,
    style: {
      LIST_ROW_HEIGHT: u.WN,
      opacity: 1
    },
    ...e,
    children: s(S || g || C)
  })
})
  });
};