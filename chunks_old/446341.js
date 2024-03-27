"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("714617"),
  l = n.n(a),
  s = n("917351"),
  r = n.n(s),
  i = n("446674"),
  o = n("875978"),
  u = n("486996"),
  d = n("49111");

function c(e) {
  var t, n;
  let {
    channelId: a,
    messageId: s,
    reaction: c
  } = e, m = (0, i.useStateFromStores)([u.default], () => {
    let e = u.default.getReactions(a, s, c.emoji, d.DEFAULT_NUM_REACTION_USERS, o.ReactionTypes.VOTE);
    return r.map(e, e => e)
  }, [a, s, c.emoji], l), f = null !== (n = null === (t = c.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0;
  return {
    reactors: m,
    hasMore: f > m.length
  }
}