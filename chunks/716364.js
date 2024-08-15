t.d(s, {
  c: function() {
return o;
  }
});
var n = t(570140),
  a = t(626135),
  i = t(474873),
  r = t(981631);

function o(e) {
  a.default.track(r.rMx.SOUNDPACK_UPDATED, {
soundpack: e,
previous_soundpack: i.Z.getSoundpack()
  }), n.Z.dispatch({
type: 'SET_SOUNDPACK',
soundpack: e
  });
}