"use strict";
n.d(t, {
  BC: function() {
    return I
  },
  LR: function() {
    return E
  },
  ku: function() {
    return c
  }
}), n(789020);
var i = n(830121),
  r = n(754688),
  s = n(430824),
  o = n(768581),
  a = n(5192),
  l = n(154135),
  u = n(981631),
  _ = n(959517),
  d = n(689938);

function c(e) {
  var t, n, i, r, s;
  let {
    mediaPostEmbedData: u,
    guild: c,
    parentChannel: E,
    postThread: I,
    user: T,
    selectedGuildId: h,
    canAccess: S = !1
  } = e;
  if (null == u) return null;
  let f = (0, l.EY)(u.thumbnail),
    N = !S && u.has_media_attachment,
    A = S ? d.Z.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : d.Z.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
    m = null != T ? a.ZP.getName(u.guild_id, u.channel_id, T) : void 0,
    O = null == T ? void 0 : T.getAvatarURL(null == c ? void 0 : c.id, 40);
  (null == O || h !== u.guild_id) && (O = o.ZP.getGuildIconURL({
    id: u.guild_id,
    icon: u.guild_icon,
    size: 40,
    canAnimate: !1
  }));
  let R = function(e) {
      if (null == e) return !1;
      let {
        height: t,
        width: n
      } = e;
      return null != t && null != n && t >= n
    }(u.thumbnail) && !N,
    C = (null === (t = u.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (i = u.thumbnail) || void 0 === i ? void 0 : null === (n = i.filename) || void 0 === n ? void 0 : n.startsWith(_._j));
  return {
    title: null !== (r = u.title) && void 0 !== r ? r : "",
    subtitle: u.description,
    ctaText: A,
    coverImage: f,
    coverImageOverlayText: N ? d.Z.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
    parentChannelId: u.parent_channel_id,
    threadId: u.channel_id,
    postThread: I,
    messageId: u.message_id,
    canAccess: S,
    guildId: u.guild_id,
    guildName: null !== (s = null == c ? void 0 : c.name) && void 0 !== s ? s : u.guild_name,
    authorId: null == u ? void 0 : u.author_id,
    authorName: m,
    channelName: null == E ? void 0 : E.name,
    avatarUrl: O,
    shouldShowBlurredThumbnailImage: N,
    shouldContainMediaWithBackground: R,
    shouldSpoiler: C,
    obscureAwaitingScan: !1,
    flags: u.flags,
    contentScanVersion: u.content_scan_version
  }
}

function E(e) {
  if (null == e) return;
  let t = (0, i.FO)(e);
  if (null == t) return;
  let n = (0, i.Sq)(t);
  if (null != n) return (0, r.Qj)(n)
}

function I(e, t) {
  let n = s.Z.getGuild(e);
  if (null == n || null == t) return !1;
  let i = n.hasFeature(u.oNc.CREATOR_MONETIZABLE) || n.hasFeature(u.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
  return !0 === t.isMediaChannel() && i
}