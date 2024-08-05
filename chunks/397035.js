t.d(n, {
  Z: function() {
return m;
  }
});
var l = t(470079),
  r = t(835473),
  i = t(81063),
  a = t(49012),
  o = t(591759),
  s = t(561308),
  c = t(206583),
  u = t(701488),
  d = t(689938);

function m(e) {
  let n, {
  entry: t,
  baseEntryData: m
} = e,
f = (0, r.q)(t.extra.application_id),
_ = null == f ? void 0 : f.getIconURL(128),
p = (0, i.getAssetImage)(t.extra.application_id, t.extra.media_assets_large_image, [
  u.Si.LARGE,
  u.Si.LARGE
]),
v = t.extra.media_subtitle,
C = (0, s.kr)(t) && !(0, s.n2)(t) ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
h = {
  type: c.kG.CRUNCHYROLL,
  'aria-label': d.Z.Messages.CRUNCHYROLL
},
x = l.useMemo(() => {
  if (null == t.extra.url)
    return;
  let e = o.Z.safeParseWithQuery(t.extra.url);
  if (null != e && null != e.protocol && null != e.hostname)
    return e;
}, [t.extra.url]);
  return null != x && (n = () => (0, a.q)({
href: o.Z.format(x),
trusted: !0
  })), {
...m,
thumbnailUrl: null != p ? p : _,
title: t.extra.media_title,
onClickTitle: n,
onClickThumbnail: n,
subtitle: v,
userDescription: C,
providerIconProps: h
  };
}