n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(632519);

function s(e) {
  let {
user: t,
nickname: n
  } = e, s = null != n;
  return (0, r.jsx)(i.Avatar, {
src: t.getAvatarURL(void 0, s ? 16 : 24),
size: s ? i.AvatarSizes.SIZE_16 : i.AvatarSizes.SIZE_24,
className: s ? a.miniAvatar : a.largeAvatar,
'aria-hidden': !0
  });
}