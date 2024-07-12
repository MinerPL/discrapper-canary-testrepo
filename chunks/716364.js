s.d(t, {
  c: function() {
return o;
  }
});
var n = s(570140),
  a = s(626135),
  i = s(474873),
  r = s(981631);

function o(e) {
  a.default.track(r.rMx.SOUNDPACK_UPDATED, {
soundpack: e,
previous_soundpack: i.Z.getSoundpack()
  }), n.Z.dispatch({
type: 'SET_SOUNDPACK',
soundpack: e
  });
}