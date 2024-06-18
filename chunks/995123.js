"use strict";
n.d(t, {
  Z: function() {
    return V
  }
});
var r = n(762914),
  i = n(36082),
  l = n(308540),
  s = n(814550),
  a = n(93879),
  o = n(535321),
  u = n(277942),
  c = n(436088),
  d = n(481479),
  f = n(160696),
  v = n(832440),
  h = n(634648),
  C = n(908434),
  Z = n(74846),
  N = n(789536),
  p = n(316949),
  m = n(133429),
  E = n(702066),
  I = n(829134),
  g = n(158010),
  H = n(663949),
  L = n(632184),
  x = n(414896),
  A = n(170039),
  R = n(934458),
  w = n(447003),
  _ = n(981631);

function V(e, t) {
  switch (e.type) {
    case _.d4z.DM:
      return i.Z;
    case _.d4z.GROUP_DM:
      return (0, r.V1)(e.id) ? c.Z : g.Z;
    case _.d4z.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return E.Z;
      if ((0, w.Z)(e)) return m.Z;
      else return p.Z;
    case _.d4z.GUILD_TEXT:
      if (e.id === (null == t ? void 0 : t.rulesChannelId)) return s.Z;
      if (e.isNSFW()) return u.Z;
      else if ((0, w.Z)(e)) return o.Z;
      else return a.Z;
    case _.d4z.GUILD_FORUM:
      let n = e.isMediaChannel();
      if (e.isNSFW()) return n ? N.Z : v.Z;
      if ((0, w.Z)(e)) return n ? Z.Z : f.Z;
      else return n ? C.Z : d.Z;
    case _.d4z.GUILD_MEDIA:
      if (e.isNSFW()) return N.Z;
      if ((0, w.Z)(e)) return Z.Z;
      else return C.Z;
    case _.d4z.GUILD_STAGE_VOICE:
      return A.Z;
    case _.d4z.GUILD_VOICE:
      if ((0, w.Z)(e)) return x.Z;
      return L.Z;
    case _.d4z.ANNOUNCEMENT_THREAD:
    case _.d4z.PUBLIC_THREAD:
      if (e.isNSFW()) return I.Z;
      if (e.isForumPost()) return h.Z;
      else return R.Z;
    case _.d4z.PRIVATE_THREAD:
      if (e.isNSFW()) return I.Z;
      return H.Z;
    case _.d4z.GUILD_DIRECTORY:
      return l.Z;
    default:
      return null
  }
}