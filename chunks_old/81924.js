"use strict";
i.r(t), i.d(t, {
  default: function() {
    return T
  }
}), i("222007");
var n = i("37983"),
  a = i("884691"),
  l = i("446674"),
  o = i("913144"),
  s = i("206230"),
  r = i("166257"),
  u = i("845579"),
  c = i("15935"),
  d = i("103475"),
  h = i("512306"),
  m = i("941723"),
  f = i("757616"),
  p = i("957044"),
  T = a.memo(function(e) {
    let {
      channelId: t,
      messageId: i,
      emoji: T,
      useChatFontScaling: R,
      color: g,
      count: E
    } = e, I = (0, l.useStateFromStores)([c.default], () => c.default.getEffectForEmojiId(t, i, T)), N = R ? p : f, S = a.useMemo(() => (0, m.buildEffect)(T, g, t, {
      key: I,
      messageId: i
    }), [g, I, T, t, i]), [_, v] = a.useState(!1), C = (0, l.useStateFromStores)([s.default], () => s.default.useReducedMotion), j = u.AnimateEmoji.useSetting(), O = a.useCallback(() => {
      o.default.dispatch({
        type: "BURST_REACTION_EFFECT_CLEAR",
        channelId: t,
        messageId: i,
        emoji: T
      })
    }, [T, t, i]);
    return (a.useEffect(() => {
      let e = () => {
        if (_) return;
        let e = (0, d.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(i).concat(T.name)),
          n = e % 10;
        (n += E > 4 ? 4 : E - 1) > 7 && (v(!0), (0, r.playBurstReaction)({
          channelId: t,
          messageId: i,
          emoji: T,
          key: c.BurstReactionEffectSource.RANDOM
        }))
      };
      if (_ || C && !j || !j) return;
      e();
      let n = setInterval(e, 5e3);
      return () => {
        clearInterval(n)
      }
    }, [j, t, E, T, T.name, _, i, C]), null == I) ? null : (0, n.jsx)(h.default, {
      className: N.effect,
      effect: S,
      onComplete: O
    })
  })