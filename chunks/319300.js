n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(260034),
  a = n(900927),
  o = n(659101),
  s = n(689938),
  l = n(655899);

function u(e) {
  let {
userId: t,
guildId: n
  } = e;
  return (0, r.jsx)(o.Z, {
children: (0, r.jsxs)('div', {
  children: [
    (0, r.jsx)(i.X, {
      variant: 'eyebrow',
      className: l.title,
      children: s.Z.Messages.USER_PROFILE_MEMBER_SINCE
    }),
    (0, r.jsx)(a.Z, {
      userId: t,
      guildId: n,
      textClassName: l.body
    })
  ]
})
  });
}