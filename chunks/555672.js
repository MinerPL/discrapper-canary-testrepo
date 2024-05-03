"use strict";
n.r(t), n.d(t, {
  TOP_GAME_BADGES: function() {
    return p
  },
  isAllowedRange: function() {
    return C
  },
  useGamingContentData: function() {
    return g
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("317261"),
  i = n("442837"),
  r = n("835473"),
  o = n("594174"),
  u = n("561308"),
  d = n("297781"),
  c = n("443487"),
  f = n("43205"),
  h = n("689938"),
  m = n("288564");
let p = [d.TopGameBadge],
  E = [s.AggregateRange.WEEK];

function C(e) {
  return null != e && E.includes(e)
}
let g = e => {
  let t = (0, r.useGetOrFetchApplication)(e.extra.application_id),
    n = null == t ? void 0 : t.getIconURL(128);
  return {
    applicationImageSrc: n,
    user: (0, i.useStateFromStores)([o.default], () => o.default.getUser(e.author_id))
  }
};
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    applicationImageSrc: s
  } = g(t), i = (0, u.getAggregateRange)(t);
  return null != i && C(i) ? (0, a.jsxs)(c.Card, {
    selected: l,
    children: [(0, a.jsxs)(c.CardInfoSection, {
      children: [(0, a.jsx)(c.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(c.CardTitle, {
        children: function(e) {
          return h.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(d.BadgesContainer, {
        location: d.BadgeLocation.CARD,
        children: p.map((e, n) => (0, a.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, a.jsx)(f.ContentImage, {
      src: s,
      size: 48,
      className: m.thumbnail
    })]
  }) : null
})