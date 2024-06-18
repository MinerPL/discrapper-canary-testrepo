"use strict";
n.d(t, {
  KS: function() {
    return q
  },
  Th: function() {
    return X
  },
  bT: function() {
    return z
  }
});
var i = n(281956),
  r = n(271383),
  s = n(430824),
  o = n(607744),
  a = n(594174),
  l = n(482500),
  u = n(36082),
  _ = n(119828),
  d = n(747380),
  c = n(648414),
  E = n(315970),
  I = n(308540),
  T = n(814550),
  h = n(93879),
  S = n(535321),
  f = n(277942),
  N = n(974029),
  A = n(481479),
  m = n(160696),
  O = n(832440),
  R = n(634648),
  C = n(630641),
  p = n(908434),
  g = n(74846),
  L = n(789536),
  v = n(316949),
  D = n(133429),
  M = n(702066),
  P = n(763300),
  y = n(883877),
  U = n(724215),
  b = n(761529),
  G = n(308570),
  w = n(632184),
  k = n(414896),
  B = n(398856),
  x = n(170039),
  V = n(178695),
  Z = n(548420),
  H = n(761374),
  F = n(435443),
  Y = n(447003),
  j = n(176505),
  W = n(981631),
  K = n(689938);

function z(e, t, n, i) {
  if (null == e) return null;
  if (e.id === (null == t ? void 0 : t.rulesChannelId)) return K.Z.Messages.CHANNEL_TOOLTIP_RULES;
  switch (e.type) {
    case W.d4z.GUILD_TEXT:
      if (i) return K.Z.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
      if (e.isNSFW()) return K.Z.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
      if ((0, Y.Z)(e)) return K.Z.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
      return K.Z.Messages.CHANNEL_TOOLTIP_TEXT;
    case W.d4z.GUILD_FORUM:
      let r = e.isMediaChannel();
      if (e.isNSFW()) return r ? K.Z.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : K.Z.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
      if ((0, Y.Z)(e)) return r ? K.Z.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : K.Z.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
      return r ? K.Z.Messages.MEDIA_CHANNEL : K.Z.Messages.FORUM;
    case W.d4z.GUILD_MEDIA:
      if (e.isNSFW()) return K.Z.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
      if ((0, Y.Z)(e)) return K.Z.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
      return K.Z.Messages.MEDIA_CHANNEL;
    case W.d4z.GUILD_STAGE_VOICE:
      if (n) return K.Z.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
      if ((0, Y.Z)(e)) return K.Z.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
      return K.Z.Messages.CHANNEL_TOOLTIP_STAGE;
    case W.d4z.GUILD_VOICE:
      if (n) return K.Z.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
      if ((0, Y.Z)(e)) return K.Z.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
      return K.Z.Messages.CHANNEL_TOOLTIP_VOICE;
    case W.d4z.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return K.Z.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
      if ((0, Y.Z)(e)) return K.Z.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
      return K.Z.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
    case W.d4z.GUILD_STORE:
      return K.Z.Messages.CHANNEL_TOOLTIP_STORE;
    case W.d4z.DM:
      return K.Z.Messages.DM;
    case W.d4z.GROUP_DM:
      return K.Z.Messages.GROUP_DM;
    case W.d4z.GUILD_DIRECTORY:
      return K.Z.Messages.CHANNEL_TOOLTIP_DIRECTORY;
    case W.d4z.PUBLIC_THREAD:
      return K.Z.Messages.THREAD;
    case W.d4z.PRIVATE_THREAD:
      return K.Z.Messages.PRIVATE_THREAD;
    default:
      return null
  }
}

function q(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    {
      locked: K = !1,
      video: z = !1,
      stream: q = !1,
      hasActiveThreads: X = !1,
      textFocused: Q = !1
    } = n;
  if (null == e) return null;
  null == t && (t = s.Z.getGuild(e.getGuildId()));
  let J = (0, i.n)(null == t ? void 0 : t.id, [s.Z, o.Z, a.default, r.ZP]);
  if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return T.Z;
  switch (e.type) {
    case W.d4z.GUILD_ANNOUNCEMENT:
      if (X) {
        if (e.isNSFW()) return P.Z;
        if ((0, Y.Z)(e)) return U.Z;
        else return l.Z
      }
      if (e.isNSFW()) return M.Z;
      if ((0, Y.Z)(e)) return D.Z;
      return v.Z;
    case W.d4z.GUILD_STORE:
      return Z.Z;
    case W.d4z.DM:
    case W.d4z.GROUP_DM:
      return u.Z;
    case W.d4z.PRIVATE_THREAD:
      return b.Z;
    case W.d4z.ANNOUNCEMENT_THREAD:
    case W.d4z.PUBLIC_THREAD:
      if (e.isNSFW()) return y.Z;
      if (e.isForumPost()) return R.Z;
      else return F.Z;
    case W.d4z.GUILD_TEXT:
      if (X) {
        if (e.isNSFW()) return y.Z;
        if ((0, Y.Z)(e)) return b.Z;
        else return F.Z
      }
      if (e.isNSFW()) return f.Z;
      if ((0, Y.Z)(e)) return S.Z;
      return h.Z;
    case W.d4z.GUILD_FORUM:
      let $ = e.isMediaChannel();
      if (e.isNSFW()) return $ ? L.Z : O.Z;
      if ((0, Y.Z)(e)) return $ ? g.Z : m.Z;
      else return $ ? p.Z : A.Z;
    case W.d4z.GUILD_MEDIA:
      if (e.isNSFW()) return L.Z;
      if ((0, Y.Z)(e)) return g.Z;
      else return p.Z;
    case W.d4z.GUILD_STAGE_VOICE:
      if (J) return (0, Y.Z)(e) ? C.Z : V.Z;
      if (K) return C.Z;
      if ((0, Y.Z)(e)) return V.Z;
      else return x.Z;
    case W.d4z.GUILD_VOICE:
      if (Q) return N.Z;
      if (e.isNSFW()) return B.Z;
      if (q) return H.Z;
      if (J) {
        if ((0, Y.Z)(e)) return C.Z;
        return z ? d.Z : k.Z
      }
      if (K) return C.Z;
      if ((0, Y.Z)(e)) return z ? d.Z : k.Z;
      else return z ? _.Z : w.Z;
    case W.d4z.GUILD_DIRECTORY:
      return I.Z;
    case W.d4z.GUILD_CATEGORY:
      return E.Z;
    default:
      if (j.EC.has(e.id)) {
        if (e.id === j.HY.GUILD_HOME || e.id === j.HY.SERVER_GUIDE) return G.Z;
        if (e.id === j.HY.CHANNEL_BROWSER || e.id === j.HY.CUSTOMIZE_COMMUNITY) return c.Z
      }
      return null
  }
}

function X(e) {
  switch (e) {
    case W.d4z.GUILD_ANNOUNCEMENT:
      return v.Z;
    case W.d4z.GUILD_STORE:
      return Z.Z;
    case W.d4z.DM:
    case W.d4z.GROUP_DM:
      return u.Z;
    case W.d4z.PRIVATE_THREAD:
      return b.Z;
    case W.d4z.ANNOUNCEMENT_THREAD:
    case W.d4z.PUBLIC_THREAD:
      return F.Z;
    case W.d4z.GUILD_TEXT:
    case W.d4z.GUILD_FORUM:
    case W.d4z.GUILD_MEDIA:
      return h.Z;
    case W.d4z.GUILD_STAGE_VOICE:
      return x.Z;
    case W.d4z.GUILD_VOICE:
      return w.Z;
    case W.d4z.GUILD_CATEGORY:
      return E.Z;
    default:
      return null
  }
}