"use strict";
n.r(t), n.d(t, {
  GAMING_BADGES: function() {
    return m
  },
  useGamingContentData: function() {
    return p
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("835473"),
  r = n("594174"),
  o = n("561308"),
  u = n("297781"),
  d = n("443487"),
  c = n("43205"),
  f = n("689938"),
  h = n("571425");
let m = [u.GameTimestampBadge, u.VoiceChannelBadge, u.NewReleaseBadge, u.NewGameBadge, u.StreakBadge, u.TrendingBadge, u.ResurrectedBadge, u.MarathonBadge],
  p = e => {
    let t = (0, i.useGetOrFetchApplication)(e.extra.application_id),
      n = null == t ? void 0 : t.getIconURL(128);
    return {
      applicationImageSrc: n,
      user: (0, s.useStateFromStores)([r.default], () => r.default.getUser(e.author_id))
    }
  };
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    applicationImageSrc: s
  } = p(t);
  return (0, a.jsxs)(d.Card, {
    selected: l,
    children: [(0, a.jsxs)(d.CardInfoSection, {
      children: [(0, a.jsx)(d.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(d.CardTitle, {
        children: function(e) {
          return (0, o.isEntryActive)(e) ? f.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.extra.game_name
          }) : f.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(u.BadgesContainer, {
        location: u.BadgeLocation.CARD,
        children: m.map((e, n) => (0, a.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, a.jsx)(c.ContentImage, {
      src: s,
      size: 48,
      className: h.thumbnail
    })]
  })
})