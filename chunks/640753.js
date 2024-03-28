"use strict";
i.r(t), i("47120");
var n = i("735250"),
  a = i("470079"),
  s = i("442837"),
  l = i("570140"),
  o = i("607070"),
  r = i("222677"),
  u = i("695346"),
  d = i("960020"),
  c = i("347904"),
  h = i("620652"),
  f = i("815605"),
  m = i("781527"),
  p = i("435622");
t.default = a.memo(function(e) {
  let {
    channelId: t,
    messageId: i,
    emoji: g,
    useChatFontScaling: T,
    color: v,
    count: S
  } = e, E = (0, s.useStateFromStores)([d.default], () => d.default.getEffectForEmojiId(t, i, g)), R = T ? p : m, I = a.useMemo(() => (0, f.buildEffect)(g, v, t, {
    key: E,
    messageId: i
  }), [v, E, g, t, i]), [N, C] = a.useState(!1), _ = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion), x = u.AnimateEmoji.useSetting(), O = a.useCallback(() => {
    l.default.dispatch({
      type: "BURST_REACTION_EFFECT_CLEAR",
      channelId: t,
      messageId: i,
      emoji: g
    })
  }, [g, t, i]);
  return (a.useEffect(() => {
    let e = () => {
      if (N) return;
      let e = (0, c.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(i).concat(g.name)) % 10;
      (e += S > 4 ? 4 : S - 1) > 7 && (C(!0), (0, r.playBurstReaction)({
        channelId: t,
        messageId: i,
        emoji: g,
        key: d.BurstReactionEffectSource.RANDOM
      }))
    };
    if (N || _ && !x || !x) return;
    e();
    let n = setInterval(e, 5e3);
    return () => {
      clearInterval(n)
    }
  }, [x, t, S, g, g.name, N, i, _]), null == E) ? null : (0, n.jsx)(h.default, {
    className: R.effect,
    effect: I,
    onComplete: O
  })
})