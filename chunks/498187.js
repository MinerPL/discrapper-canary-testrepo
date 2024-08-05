t.d(n, {
  Z: function() {
return p;
  }
});
var l = t(876215),
  r = t(758713),
  i = t(835473),
  a = t(810568),
  o = t(168524),
  s = t(561308),
  c = t(206583),
  u = t(96513),
  d = t(701488),
  m = t(689938);
let f = {
[r.z.XBOX]: c.kG.XBOX,
[r.z.PLAYSTATION]: c.kG.PLAYSTATION
  },
  _ = {
[u._.EMBED]: a.m1.Embed
  };

function p(e) {
  let n, t, {
  entry: r,
  location: a,
  baseEntryData: c
} = e,
u = (0, i.q)(r.extra.application_id),
p = null == u ? void 0 : u.getIconURL(d.Si.LARGE),
v = r.extra.game_name;
  if (null != r.extra.platform) {
let e = f[r.extra.platform];
null != e && (n = {
  type: e,
  'aria-label': m.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
});
  }
  t = r.content_type === l.s.PLAYED_GAME ? (0, s.kr)(r) && !(0, s.n2)(r) ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED;
  let C = _[a],
h = (0, o.Z)({
  location: C,
  applicationId: r.extra.application_id,
  source: C,
  trackEntryPointImpression: !0,
  sourceUserId: r.author_id
});
  return {
...c,
thumbnailUrl: p,
title: v,
onClickTitle: h,
onClickThumbnail: h,
userDescription: t,
providerIconProps: n
  };
}