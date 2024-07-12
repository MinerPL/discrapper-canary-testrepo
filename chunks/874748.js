n.d(t, {
  BC: function() {
return f;
  },
  LR: function() {
return E;
  },
  ku: function() {
return _;
  }
}), n(789020);
var r = n(830121),
  i = n(754688),
  a = n(430824),
  o = n(768581),
  s = n(5192),
  l = n(154135),
  u = n(981631),
  c = n(959517),
  d = n(689938);

function _(e) {
  var t, n, r, i, a;
  let {
mediaPostEmbedData: u,
guild: _,
parentChannel: E,
postThread: f,
user: h,
selectedGuildId: p,
canAccess: m = !1
  } = e;
  if (null == u)
return null;
  let I = (0, l.EY)(u.thumbnail),
T = !m && u.has_media_attachment,
g = m ? d.Z.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : d.Z.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
S = null != h ? s.ZP.getName(u.guild_id, u.channel_id, h) : void 0,
A = null == h ? void 0 : h.getAvatarURL(null == _ ? void 0 : _.id, 40);
  (null == A || p !== u.guild_id) && (A = o.ZP.getGuildIconURL({
id: u.guild_id,
icon: u.guild_icon,
size: 40,
canAnimate: !1
  }));
  let N = function(e) {
  if (null == e)
    return !1;
  let {
    height: t,
    width: n
  } = e;
  return null != t && null != n && t >= n;
}(u.thumbnail) && !T,
v = (null === (t = u.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (r = u.thumbnail) || void 0 === r ? void 0 : null === (n = r.filename) || void 0 === n ? void 0 : n.startsWith(c._j));
  return {
title: null !== (i = u.title) && void 0 !== i ? i : '',
subtitle: u.description,
ctaText: g,
coverImage: I,
coverImageOverlayText: T ? d.Z.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
parentChannelId: u.parent_channel_id,
threadId: u.channel_id,
postThread: f,
messageId: u.message_id,
canAccess: m,
guildId: u.guild_id,
guildName: null !== (a = null == _ ? void 0 : _.name) && void 0 !== a ? a : u.guild_name,
authorId: null == u ? void 0 : u.author_id,
authorName: S,
channelName: null == E ? void 0 : E.name,
avatarUrl: A,
shouldShowBlurredThumbnailImage: T,
shouldContainMediaWithBackground: N,
shouldSpoiler: v,
obscureAwaitingScan: !1,
flags: u.flags,
contentScanVersion: u.content_scan_version
  };
}

function E(e) {
  if (null == e)
return;
  let t = (0, r.FO)(e);
  if (null == t)
return;
  let n = (0, r.Sq)(t);
  if (null != n)
return (0, i.Qj)(n);
}

function f(e, t) {
  let n = a.Z.getGuild(e);
  if (null == n || null == t)
return !1;
  let r = n.hasFeature(u.oNc.CREATOR_MONETIZABLE) || n.hasFeature(u.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
  return !0 === t.isMediaChannel() && r;
}