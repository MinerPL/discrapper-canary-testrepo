n.d(t, {
  j: function() {
return i;
  }
});
var r = n(570140);

function i(e) {
  let {
imageSrc: t,
file: n,
uploadType: i,
guildId: a,
isTryItOutFlow: s = !1
  } = e;
  r.Z.dispatch({
type: 'PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL',
imageSrc: t,
file: n,
uploadType: i,
guildId: a,
isTryItOutFlow: s
  });
}