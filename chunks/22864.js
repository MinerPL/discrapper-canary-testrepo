"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var l = a("348327"),
  n = a.n(l),
  s = a("392711"),
  r = a.n(s),
  i = a("442837"),
  o = a("566006"),
  u = a("542578"),
  d = a("981631");

function c(e) {
  var t, a;
  let {
    channelId: l,
    messageId: s,
    reaction: c
  } = e, m = (0, i.useStateFromStores)([u.default], () => {
    let e = u.default.getReactions(l, s, c.emoji, d.DEFAULT_NUM_REACTION_USERS, o.ReactionTypes.VOTE);
    return r().map(e, e => e)
  }, [l, s, c.emoji], n());
  return {
    reactors: m,
    hasMore: (null !== (a = null === (t = c.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== a ? a : 0) > m.length
  }
}