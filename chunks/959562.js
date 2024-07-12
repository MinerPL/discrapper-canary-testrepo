n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(367164),
  l = n(660097);

function r(e) {
  let {
user: t,
size: n
  } = e, r = (0, a.getAvatarSpecs)(n), o = null != t ? t.getAvatarURL(null, r.size) : l;
  return (0, i.jsx)('div', {
className: s.avatarBackground,
children: (0, i.jsx)('div', {
  className: s.avatar,
  style: {
    width: r.size,
    height: r.size
  },
  children: (0, i.jsx)(a.Avatar, {
    src: o,
    'aria-hidden': !0,
    size: n
  })
})
  });
}