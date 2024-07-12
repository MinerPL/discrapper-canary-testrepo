r.d(s, {
  Z: function() {
return o;
  }
});
var t = r(735250);
r(470079);
var a = r(120356),
  i = r.n(a),
  n = r(481060),
  l = r(204197),
  C = r(940702);

function o(e) {
  var s;
  let {
user: r,
checked: a,
onChange: o,
disabled: d
  } = e, {
avatarSrc: c,
eventHandlers: _
  } = (0, l.Z)({
user: r,
size: n.AvatarSizes.SIZE_32
  }), x = null !== (s = r.globalName) && void 0 !== s ? s : r.username;
  return (0, t.jsxs)('div', {
className: C.container,
children: [
  (0, t.jsxs)('div', {
    className: C.user,
    children: [
      (0, t.jsx)(n.Avatar, {
        className: i()({
          [C.muted]: d
        }),
        src: c,
        'aria-label': x,
        size: n.AvatarSizes.SIZE_32,
        ..._
      }),
      (0, t.jsx)(n.Text, {
        color: d ? 'text-muted' : 'text-normal',
        variant: 'text-md/semibold',
        children: x
      })
    ]
  }),
  (0, t.jsx)('div', {
    className: C.checkbox,
    children: (0, t.jsx)(n.Checkbox, {
      disabled: d,
      value: a,
      onChange: (e, s) => o(r, s)
    })
  })
]
  });
}