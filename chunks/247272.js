i.d(t, {
  C: function() {
return l;
  },
  x: function() {
return s;
  }
}), i(47120);
var a = i(570140),
  n = i(93127);

function s(e) {
  let {
omitUserIds: t,
guild: i,
channel: s,
applicationId: l,
inviteTargetType: r
  } = e;
  return (0, n.W)().then(() => {
a.Z.dispatch({
  type: 'LOAD_INVITE_SUGGESTIONS',
  omitUserIds: null != t ? t : new Set(),
  guild: i,
  channel: s,
  applicationId: l,
  inviteTargetType: r
});
  });
}

function l(e) {
  a.Z.dispatch({
type: 'INVITE_SUGGESTIONS_SEARCH',
query: e
  });
}