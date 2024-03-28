"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
});
var s = a("762914"),
  l = a("36082"),
  r = a("308540"),
  n = a("814550"),
  u = a("93879"),
  d = a("535321"),
  i = a("277942"),
  o = a("436088"),
  c = a("481479"),
  f = a("160696"),
  h = a("832440"),
  m = a("634648"),
  T = a("908434"),
  g = a("74846"),
  C = a("789536"),
  E = a("316949"),
  S = a("133429"),
  v = a("702066"),
  x = a("829134"),
  N = a("158010"),
  _ = a("663949"),
  R = a("632184"),
  M = a("414896"),
  H = a("170039"),
  A = a("934458"),
  j = a("447003"),
  p = a("981631");

function I(e, t) {
  switch (e.type) {
    case p.ChannelTypes.DM:
      return l.default;
    case p.ChannelTypes.GROUP_DM:
      return (0, s.getIsBroadcastingGDM)(e.id) ? o.default : N.default;
    case p.ChannelTypes.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return v.default;
      if ((0, j.default)(e)) return S.default;
      else return E.default;
    case p.ChannelTypes.GUILD_TEXT:
      if (e.id === (null == t ? void 0 : t.rulesChannelId)) return n.default;
      if (e.isNSFW()) return i.default;
      else if ((0, j.default)(e)) return d.default;
      else return u.default;
    case p.ChannelTypes.GUILD_FORUM:
      let a = e.isMediaChannel();
      if (e.isNSFW()) return a ? C.default : h.default;
      if ((0, j.default)(e)) return a ? g.default : f.default;
      else return a ? T.default : c.default;
    case p.ChannelTypes.GUILD_MEDIA:
      if (e.isNSFW()) return C.default;
      if ((0, j.default)(e)) return g.default;
      else return T.default;
    case p.ChannelTypes.GUILD_STAGE_VOICE:
      return H.default;
    case p.ChannelTypes.GUILD_VOICE:
      if ((0, j.default)(e)) return M.default;
      return R.default;
    case p.ChannelTypes.ANNOUNCEMENT_THREAD:
    case p.ChannelTypes.PUBLIC_THREAD:
      if (e.isNSFW()) return x.default;
      if (e.isForumPost()) return m.default;
      else return A.default;
    case p.ChannelTypes.PRIVATE_THREAD:
      if (e.isNSFW()) return x.default;
      return _.default;
    case p.ChannelTypes.GUILD_DIRECTORY:
      return r.default;
    default:
      return null
  }
}