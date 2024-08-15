l.d(n, {
  Z: function() {
return E;
  }
});
var t = l(876215),
  r = l(758713),
  i = l(835473),
  a = l(810568),
  u = l(168524),
  s = l(561308),
  o = l(206583),
  c = l(96513),
  d = l(701488),
  m = l(689938);
let f = {
[r.z.XBOX]: o.kG.XBOX,
[r.z.PLAYSTATION]: o.kG.PLAYSTATION
  },
  p = {
[c._.EMBED]: a.m1.Embed
  };

function E(e) {
  let n, l, {
  entry: r,
  location: a,
  baseEntryData: o
} = e,
c = (0, i.q)(r.extra.application_id),
E = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
v = r.extra.game_name;
  if (null != r.extra.platform) {
let e = f[r.extra.platform];
null != e && (n = {
  type: e,
  'aria-label': m.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
});
  }
  l = r.content_type === t.s.PLAYED_GAME ? (0, s.kr)(r) && !(0, s.n2)(r) ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED;
  let C = p[a],
h = (0, u.Z)({
  location: C,
  applicationId: r.extra.application_id,
  source: C,
  trackEntryPointImpression: !0,
  sourceUserId: r.author_id
});
  return {
...o,
thumbnailUrl: E,
title: v,
onClickTitle: h,
onClickThumbnail: h,
userDescription: l,
providerIconProps: n
  };
}