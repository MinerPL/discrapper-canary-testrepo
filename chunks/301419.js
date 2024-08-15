l.d(n, {
  Z: function() {
return s;
  }
});
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
{
  provider: o,
  image_url: c
} = l.extra.media,
d = l.extra.artist.name,
m = () => (0, r.o)(a.Hw.ALBUM, l.extra.media.external_parent_id);
  return o === t.p.SPOTIFY && (n = {
type: i.kG.SPOTIFY,
'aria-label': u.Z.Messages.SPOTIFY
  }), {
...s,
title: d,
thumbnailUrl: c,
onClickTitle: () => (0, r.o)(a.Hw.ARTIST, l.extra.artist.external_id),
onClickSubtitle: m,
onClickThumbnail: m,
userDescription: u.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
providerIconProps: n
  };
}