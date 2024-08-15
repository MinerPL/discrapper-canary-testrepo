l.d(n, {
  Z: function() {
return s;
  }
}), l(47120);
var t = l(423875),
  r = l(740605),
  i = l(206583),
  a = l(616922),
  u = l(689938);

function s(e) {
  let n, {
  entry: l,
  baseEntryData: s
} = e,
o = l.extra.entries[0].media,
c = o.artists[0],
{
  title: d,
  provider: m,
  image_url: f
} = o,
p = c.name,
E = () => (0, r.o)(a.Hw.TRACK, o.external_id);
  return m === t.p.SPOTIFY && (n = {
type: i.kG.SPOTIFY,
'aria-label': u.Z.Messages.SPOTIFY
  }), {
...s,
title: d,
subtitle: p,
thumbnailUrl: f,
onClickTitle: E,
onClickSubtitle: () => (0, r.o)(a.Hw.ARTIST, c.external_id),
onClickThumbnail: E,
userDescription: u.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
providerIconProps: n
  };
}