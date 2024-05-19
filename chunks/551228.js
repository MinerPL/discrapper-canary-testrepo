"use strict";
n.r(t), n.d(t, {
  useListenedSessionData: function() {
    return C
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("442837"),
  o = n("276852"),
  u = n("594174"),
  d = n("719247"),
  c = n("297781"),
  f = n("443487"),
  h = n("43205"),
  m = n("689938"),
  p = n("571425");
let E = [c.ListenTimestampBadge];

function C(e) {
  var t, n, a, l, s, i, c;
  let f = (0, r.useStateFromStores)([d.default], () => d.default.getMatchingActivity(e)),
    h = (0, r.useStateFromStores)([u.default], () => u.default.getUser(e.author_id));
  if (null == f || null == h) return {};
  let m = e.extra.entries[0],
    p = null !== (l = null !== (a = (0, o.default)(f)) && void 0 !== a ? a : null === (t = f.assets) || void 0 === t ? void 0 : t.small_image) && void 0 !== l ? l : m.media.image_url,
    E = null !== (i = null !== (s = f.state) && void 0 !== s ? s : null === (n = m.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : m.media.title,
    C = null !== (c = f.details) && void 0 !== c ? c : m.media.title;
  return {
    activity: f,
    artist: E,
    currentEntry: m,
    imageUrl: p,
    title: C,
    user: h
  }
}
t.default = l.memo(function(e) {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    activity: s,
    artist: r,
    imageUrl: o
  } = C(t);
  return i()(null != s, "There must be a matching live Activity for LISTENED_SESSION"), (0, a.jsxs)(f.Card, {
    selected: l,
    children: [(0, a.jsxs)(f.CardInfoSection, {
      children: [(0, a.jsx)(f.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(f.CardTitle, {
        children: function(e) {
          return m.default.Messages.MEMBER_LIST_CONTENT_FEED_LISTENING_TO_MEDIA.format({
            media: e
          })
        }(r)
      }), (0, a.jsx)(c.BadgesContainer, {
        location: c.BadgeLocation.CARD,
        children: E.map((e, n) => (0, a.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, a.jsx)(h.ContentImage, {
      src: o,
      size: 48,
      className: p.thumbnail
    })]
  })
})