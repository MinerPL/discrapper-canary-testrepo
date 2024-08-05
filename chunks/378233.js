n.d(t, {
  B0: function() {
return y;
  },
  Hc: function() {
return M;
  },
  J8: function() {
return P;
  },
  Q6: function() {
return R;
  },
  V9: function() {
return x;
  },
  WD: function() {
return b;
  },
  X_: function() {
return D;
  },
  Zt: function() {
return A;
  },
  Zv: function() {
return v;
  },
  _V: function() {
return O;
  },
  cv: function() {
return w;
  },
  jl: function() {
return U;
  },
  sM: function() {
return C;
  },
  z: function() {
return L;
  }
}), n(411104);
var r = n(606301),
  i = n(134432),
  a = n(430824),
  s = n(117530),
  o = n(768581),
  l = n(358085),
  u = n(913663),
  c = n(373228),
  d = n(611480),
  _ = n(981631);
let {
  API_ENDPOINT: E,
  MEDIA_PROXY_ENDPOINT: f,
  PROJECT_ENV: h,
  ASSET_ENDPOINT: p,
  CDN_HOST: m
} = window.GLOBAL_ENV, I = Object.values(c.og), T = decodeURIComponent(_.ANM.STICKER_ASSET('[\\d]+', '('.concat(I.join('|'), ')'))), g = RegExp('('.concat(location.protocol).concat(p, '|').concat(location.protocol).concat(f, ')(').concat(T, ')'), 'ig'), S = RegExp(''.concat(location.protocol).concat(E, '(').concat(T, ')'), 'ig'), A = e => {
  if (null != e.cover_sticker_id) {
let t = e.stickers.find(t => t.id === e.cover_sticker_id);
if (null != t)
  return t;
  }
  return e.stickers[0];
}, N = e => {
  switch (e) {
case c.u3.PNG:
  return o.$k ? c.og.WEBP : c.og.PNG;
case c.u3.APNG:
  return c.og.APNG;
case c.u3.LOTTIE:
  return c.og.LOTTIE;
case c.u3.GIF:
  return c.og.GIF;
default:
  throw Error('Unexpected format type: '.concat(e));
  }
}, v = e => {
  switch (e) {
case 'application/json':
  return c.u3.LOTTIE;
case 'image/apng':
  return c.u3.APNG;
case 'image/png':
case 'image/webp':
  return c.u3.PNG;
case 'image/gif':
  return c.u3.GIF;
default:
  throw Error('Unexpected file type: '.concat(e));
  }
}, O = e => null == e ? null : ''.concat(e.name, '.').concat(N(e.format_type)), R = function(e) {
  let {
isPreview: t = !1,
size: n = d.lE
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (null == e.format_type)
return null;
  let r = e.format_type;
  e.format_type === c.u3.GIF && t && (r = c.u3.PNG);
  let a = _.ANM.STICKER_ASSET(e.id, N(r));
  if ('development' !== h) {
if (e.format_type === c.u3.LOTTIE)
  return ''.concat(location.protocol).concat(p).concat(a);
let r = e.format_type === c.u3.APNG && t && !(0, l.isAndroid)() ? '&passthrough=false' : '',
  s = Math.min(2, (0, i.x_)());
return ''.concat(location.protocol).concat(f).concat(a, '?size=').concat((0, i.oO)(n * s)).concat(r);
  }
  return ''.concat(location.protocol).concat(E).concat(a);
}, C = (e, t) => {
  let n;
  let r = e.banner_asset_id;
  if (null == r)
return null;
  let a = o.$k ? 'webp' : 'png';
  return n = null != m ? ''.concat(location.protocol, '//').concat(m, '/app-assets/').concat(d.Ks, '/store/').concat(r, '.').concat(a) : ''.concat(location.protocol).concat(E).concat(_.ANM.STORE_ASSET(d.Ks, r, a)), null != t && (n += '?size='.concat((0, i.oO)(t))), n;
}, y = e => e.match('development' !== h ? g : S), D = e => e.stickers.some(e => {
  let {
format_type: t
  } = e;
  return t === c.u3.APNG || t === c.u3.LOTTIE || t === c.u3.GIF;
}), L = e => ({
  type: c.Ih.PACK,
  id: e.id,
  name: e.name,
  stickers: e.stickers,
  previewSticker: A(e)
}), b = (e, t) => e === d.yr.ANIMATE_ON_INTERACTION ? t : e !== d.yr.NEVER_ANIMATE, M = (e, t, n, i) => {
  if (s.Z.getUploadCount(n, i) > 0)
return !0;
  let a = u.Z.getStickerPreview(n, i);
  if (null != a && a.length > 0)
return !0;
  switch (e) {
case c.V0.STICKER_PICKER:
  return '' !== t.trim();
case c.V0.AUTOCOMPLETE:
case c.V0.EXPRESSION_SUGGESTIONS:
  return (0, r.wN)(t).length > 1;
case c.V0.BUILT_IN_INTEGRATION:
default:
  return !1;
  }
}, P = e => e.type === c.n0.GUILD, U = e => e.type === c.n0.STANDARD, w = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], x = e => {
  if (null === e)
return !1;
  let t = e.guild_id;
  return void 0 !== a.Z.getGuild(t);
};