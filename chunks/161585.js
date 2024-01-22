"use strict";
var i, s, r, a, o, l, u, d, c, f, _, h, g, m;
n.r(t), n.d(t, {
  StickerFormat: function() {
    return i
  },
  MetaStickerType: function() {
    return s
  },
  StickerExtensions: function() {
    return r
  },
  isAnimatedSticker: function() {
    return E
  },
  isCustomSticker: function() {
    return p
  },
  StickerGridItemTypes: function() {
    return a
  },
  StickerCategoryTypes: function() {
    return o
  },
  StickerMetadataTypes: function() {
    return l
  },
  StickerSelectLocation: function() {
    return u
  }
}), (d = i || (i = {}))[d.PNG = 1] = "PNG", d[d.APNG = 2] = "APNG", d[d.LOTTIE = 3] = "LOTTIE", d[d.GIF = 4] = "GIF", (c = s || (s = {}))[c.STANDARD = 1] = "STANDARD", c[c.GUILD = 2] = "GUILD", (f = r || (r = {})).PNG = "png", f.APNG = "png", f.LOTTIE = "json", f.WEBP = "webp", f.GIF = "gif";
let E = e => 1 !== e,
  p = e => 1 !== e;
(_ = a || (a = {}))[_.STICKER = 0] = "STICKER", _[_.CREATE_STICKER = 1] = "CREATE_STICKER", (h = o || (o = {})).PACK = "PACK", h.FAVORITE = "FAVORITE", h.RECENT = "RECENT", h.SEARCH_RESULTS = "SEARCH_RESULTS", h.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS", h.GUILD = "GUILD", h.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL", h.CREATE_STICKER = "CREATE_STICKER", (g = l || (l = {}))[g.STICKER_NAME = 0] = "STICKER_NAME", g[g.TAG = 1] = "TAG", g[g.CORRELATED_EMOJI = 2] = "CORRELATED_EMOJI", g[g.GUILD_NAME = 3] = "GUILD_NAME", g[g.PACK_NAME = 4] = "PACK_NAME", (m = u || (u = {}))[m.STICKER_PICKER = 0] = "STICKER_PICKER", m[m.EXPRESSION_SUGGESTIONS = 1] = "EXPRESSION_SUGGESTIONS", m[m.AUTOCOMPLETE = 2] = "AUTOCOMPLETE"