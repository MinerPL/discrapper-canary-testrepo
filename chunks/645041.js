n.d(t, {
  FT: function() {
return E;
  },
  Qd: function() {
return f;
  }
});
var r = n(442837),
  i = n(704215),
  a = n(675478),
  o = n(581883),
  s = n(626135),
  l = n(915486),
  u = n(981631),
  c = n(921944),
  d = n(526761);

function _(e, t) {
  let n = o.Z.getDismissedGuildContent(t);
  return null != n && (0, l.jl)(n, e);
}

function E(e, t) {
  return (0, r.e7)([o.Z], () => _(e, t));
}

function f(e, t, n, r) {
  (0, a.PS)(t, n => {
if (_(e, t))
  return !1;
n.dismissedGuildContent = (0, l.GV)(n.dismissedGuildContent, e);
  }, d.fy.INFREQUENT_USER_ACTION), n && s.default.track(u.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
type: i.C[e],
guild_id: t,
action: null != r ? r : c.L.UNKNOWN
  });
}