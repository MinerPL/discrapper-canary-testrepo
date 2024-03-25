"use strict";
i.r(t), i.d(t, {
  getReactionTooltipText: function() {
    return h
  }
});
var n = i("917351"),
  a = i.n(n),
  l = i("432173"),
  o = i("42203"),
  s = i("486996"),
  r = i("27618"),
  u = i("387111"),
  c = i("875978"),
  d = i("782340");

function h(e, t) {
  var i;
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.ReactionTypes.NORMAL,
    h = arguments.length > 3 ? arguments[3] : void 0,
    m = s.default.getReactions(e.getChannelId(), e.id, t, 3, n),
    f = o.default.getChannel(e.getChannelId()),
    p = null == f || f.isPrivate() ? null : f.getGuildId(),
    T = e.getReaction(t),
    R = n === c.ReactionTypes.BURST,
    g = a(m).reject(e => r.default.isBlocked(e.id)).take(3).map(e => u.default.getName(p, null == f ? void 0 : f.id, e)).value();
  if (0 === g.length) return "";
  let E = {
      standard: {
        reactionTooltip1NInteractive: d.default.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
        reactionTooltip1N: d.default.Messages.REACTION_TOOLTIP_1_N,
        reactionTooltip1: d.default.Messages.REACTION_TOOLTIP_1,
        reactionTooltip2NInteractive: d.default.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
        reactionTooltip2N: d.default.Messages.REACTION_TOOLTIP_2_N,
        reactionTooltip2: d.default.Messages.REACTION_TOOLTIP_2,
        reactionTooltip3NInteractive: d.default.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
        reactionTooltip3N: d.default.Messages.REACTION_TOOLTIP_3_N,
        reactionTooltip3: d.default.Messages.REACTION_TOOLTIP_3,
        reactionTooltipNInteractive: d.default.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
        reactionTooltipN: d.default.Messages.REACTION_TOOLTIP_N
      },
      burst: {
        reactionTooltip1NInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
        reactionTooltip1N: d.default.Messages.BURST_REACTION_TOOLTIP_1_N,
        reactionTooltip1: d.default.Messages.BURST_REACTION_TOOLTIP_1,
        reactionTooltip2NInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
        reactionTooltip2N: d.default.Messages.BURST_REACTION_TOOLTIP_2_N,
        reactionTooltip2: d.default.Messages.BURST_REACTION_TOOLTIP_2,
        reactionTooltip3NInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
        reactionTooltip3N: d.default.Messages.BURST_REACTION_TOOLTIP_3_N,
        reactionTooltip3: d.default.Messages.BURST_REACTION_TOOLTIP_3,
        reactionTooltipNInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
        reactionTooltipN: d.default.Messages.BURST_REACTION_TOOLTIP_N
      }
    },
    I = R ? E.burst : E.standard,
    N = null !== (i = R ? null == T ? void 0 : T.burst_count : null == T ? void 0 : T.count) && void 0 !== i ? i : 0,
    S = Math.max(0, N - g.length),
    _ = (0, l.getReactionEmojiName)(t);
  if (1 === g.length) return S > 0 ? null != h ? I.reactionTooltip1NInteractive.format({
    a: g[0],
    n: S,
    emojiName: _,
    onClick: h
  }) : I.reactionTooltip1N.format({
    a: g[0],
    n: S,
    emojiName: _
  }) : I.reactionTooltip1.format({
    a: g[0],
    emojiName: _
  });
  if (2 === g.length) return S > 0 ? null != h ? I.reactionTooltip2NInteractive.format({
    a: g[0],
    b: g[1],
    n: S,
    emojiName: _,
    onClick: h
  }) : I.reactionTooltip2N.format({
    a: g[0],
    b: g[1],
    n: S,
    emojiName: _
  }) : I.reactionTooltip2.format({
    a: g[0],
    b: g[1],
    emojiName: _
  });
  if (3 === g.length) return S > 0 ? null != h ? I.reactionTooltip3NInteractive.format({
    a: g[0],
    b: g[1],
    c: g[2],
    n: S,
    emojiName: _,
    onClick: h
  }) : I.reactionTooltip3N.format({
    a: g[0],
    b: g[1],
    c: g[2],
    n: S,
    emojiName: _
  }) : I.reactionTooltip3.format({
    a: g[0],
    b: g[1],
    c: g[2],
    emojiName: _
  });
  else return null != h ? I.reactionTooltipNInteractive.format({
    n: S,
    emojiName: _,
    onClick: h
  }) : I.reactionTooltipN.format({
    n: S,
    emojiName: _
  })
}