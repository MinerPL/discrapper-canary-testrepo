"use strict";
i.r(t), i.d(t, {
  getReactionTooltipText: function() {
    return h
  }
});
var n = i("392711"),
  a = i.n(n),
  s = i("995774"),
  l = i("592125"),
  o = i("542578"),
  r = i("699516"),
  u = i("5192"),
  d = i("566006"),
  c = i("689938");

function h(e, t) {
  var i;
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.ReactionTypes.NORMAL,
    h = arguments.length > 3 ? arguments[3] : void 0,
    f = o.default.getReactions(e.getChannelId(), e.id, t, 3, n),
    m = l.default.getChannel(e.getChannelId()),
    p = null == m || m.isPrivate() ? null : m.getGuildId(),
    g = e.getReaction(t),
    T = n === d.ReactionTypes.BURST,
    v = a()(f).reject(e => r.default.isBlocked(e.id)).take(3).map(e => u.default.getName(p, null == m ? void 0 : m.id, e)).value();
  if (0 === v.length) return "";
  let S = {
      standard: {
        reactionTooltip1NInteractive: c.default.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
        reactionTooltip1N: c.default.Messages.REACTION_TOOLTIP_1_N,
        reactionTooltip1: c.default.Messages.REACTION_TOOLTIP_1,
        reactionTooltip2NInteractive: c.default.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
        reactionTooltip2N: c.default.Messages.REACTION_TOOLTIP_2_N,
        reactionTooltip2: c.default.Messages.REACTION_TOOLTIP_2,
        reactionTooltip3NInteractive: c.default.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
        reactionTooltip3N: c.default.Messages.REACTION_TOOLTIP_3_N,
        reactionTooltip3: c.default.Messages.REACTION_TOOLTIP_3,
        reactionTooltipNInteractive: c.default.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
        reactionTooltipN: c.default.Messages.REACTION_TOOLTIP_N
      },
      burst: {
        reactionTooltip1NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
        reactionTooltip1N: c.default.Messages.BURST_REACTION_TOOLTIP_1_N,
        reactionTooltip1: c.default.Messages.BURST_REACTION_TOOLTIP_1,
        reactionTooltip2NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
        reactionTooltip2N: c.default.Messages.BURST_REACTION_TOOLTIP_2_N,
        reactionTooltip2: c.default.Messages.BURST_REACTION_TOOLTIP_2,
        reactionTooltip3NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
        reactionTooltip3N: c.default.Messages.BURST_REACTION_TOOLTIP_3_N,
        reactionTooltip3: c.default.Messages.BURST_REACTION_TOOLTIP_3,
        reactionTooltipNInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
        reactionTooltipN: c.default.Messages.BURST_REACTION_TOOLTIP_N
      }
    },
    E = T ? S.burst : S.standard,
    R = Math.max(0, (null !== (i = T ? null == g ? void 0 : g.burst_count : null == g ? void 0 : g.count) && void 0 !== i ? i : 0) - v.length),
    I = (0, s.getReactionEmojiName)(t);
  if (1 === v.length) return R > 0 ? null != h ? E.reactionTooltip1NInteractive.format({
    a: v[0],
    n: R,
    emojiName: I,
    onClick: h
  }) : E.reactionTooltip1N.format({
    a: v[0],
    n: R,
    emojiName: I
  }) : E.reactionTooltip1.format({
    a: v[0],
    emojiName: I
  });
  if (2 === v.length) return R > 0 ? null != h ? E.reactionTooltip2NInteractive.format({
    a: v[0],
    b: v[1],
    n: R,
    emojiName: I,
    onClick: h
  }) : E.reactionTooltip2N.format({
    a: v[0],
    b: v[1],
    n: R,
    emojiName: I
  }) : E.reactionTooltip2.format({
    a: v[0],
    b: v[1],
    emojiName: I
  });
  if (3 === v.length) return R > 0 ? null != h ? E.reactionTooltip3NInteractive.format({
    a: v[0],
    b: v[1],
    c: v[2],
    n: R,
    emojiName: I,
    onClick: h
  }) : E.reactionTooltip3N.format({
    a: v[0],
    b: v[1],
    c: v[2],
    n: R,
    emojiName: I
  }) : E.reactionTooltip3.format({
    a: v[0],
    b: v[1],
    c: v[2],
    emojiName: I
  });
  else return null != h ? E.reactionTooltipNInteractive.format({
    n: R,
    emojiName: I,
    onClick: h
  }) : E.reactionTooltipN.format({
    n: R,
    emojiName: I
  })
}