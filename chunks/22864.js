n.d(t, {
  Z: function() {
return u;
  }
});
var a = n(348327),
  l = n.n(a),
  s = n(392711),
  r = n.n(s),
  o = n(442837),
  i = n(566006),
  d = n(542578),
  c = n(981631);

function u(e) {
  var t, n;
  let {
channelId: a,
messageId: s,
reaction: u
  } = e, m = (0, o.e7)([d.Z], () => {
let e = d.Z.getReactions(a, s, u.emoji, c.pTL, i.O.VOTE);
return r().map(e, e => e);
  }, [
a,
s,
u.emoji
  ], l());
  return {
reactors: m,
hasMore: (null !== (n = null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0) > m.length
  };
}