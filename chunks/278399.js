"use strict";
n.r(t), n.d(t, {
  ALLOWED_RANGES: function() {
    return p
  },
  TOP_ARTIST_BADGES: function() {
    return m
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("317261"),
  i = n("823379"),
  r = n("162461"),
  o = n("561308"),
  u = n("297781"),
  d = n("443487"),
  c = n("43205"),
  f = n("689938"),
  h = n("571425");
let m = [u.TopArtistBadge],
  p = [s.AggregateRange.WEEK];
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e;
  if (!(0, r.useIsEligibleForTopArtistInventory)("MemberListTopArtistContent")) return null;
  let s = (0, o.getAggregateRange)(t);
  return null != s && (0, i.isIn)(s, p) ? (0, a.jsxs)(d.Card, {
    selected: l,
    children: [(0, a.jsxs)(d.CardInfoSection, {
      children: [(0, a.jsx)(d.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(d.CardTitle, {
        children: f.default.Messages.MEMBER_LIST_CONTENT_FEED_LISTENED_TO_MEDIA.format({
          media: t.extra.artist.name
        })
      }), (0, a.jsx)(u.BadgesContainer, {
        location: u.BadgeLocation.CARD,
        children: m.map((e, n) => (0, a.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, a.jsx)(c.ContentImage, {
      src: t.extra.media.image_url,
      size: 48,
      className: h.thumbnail
    })]
  }) : null
})