"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("470079"),
  l = n("399606"),
  s = n("570140"),
  i = n("607070"),
  r = n("222677"),
  o = n("695346"),
  u = n("960020"),
  d = n("566006");

function c() {
  let e = o.AnimateEmoji.useSetting(),
    t = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion);
  a.useEffect(() => {
    function n(n) {
      let {
        messageId: a,
        channelId: l,
        emoji: s,
        optimistic: i,
        reactionType: o
      } = n;
      !i && o === d.ReactionTypes.BURST && e && !t && (0, r.playBurstReaction)({
        channelId: l,
        messageId: a,
        emoji: s,
        key: u.BurstReactionEffectSource.EXTERNAL
      })
    }
    return s.default.subscribe("MESSAGE_REACTION_ADD", n), () => {
      s.default.unsubscribe("MESSAGE_REACTION_ADD", n)
    }
  }, [e, t])
}