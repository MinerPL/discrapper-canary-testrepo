"use strict";
n(757143), n(47120);
var i, r, s, o, a = n(442837),
  l = n(377108),
  u = n(570140),
  _ = n(187500),
  d = n(981631),
  c = n(689938);
let E = {
    MP4: "mp4",
    TINYMP4: "tinymp4",
    NANOMP4: "nanomp4",
    WEBM: "webm",
    TINYWEBM: "tinywebm",
    NANOWEBM: "nanowebm"
  },
  I = {
    FIXED_HEIGHT_MP4: "fixed_height.mp4",
    FIXED_HEIGHT_SMALL_MP4: "fixed_height_small.mp4",
    FIXED_WIDTH_MP4: "fixed_width.mp4",
    FIXED_WIDTH_SMALL_MP4: "fixed_width_small.mp4",
    DOWNSIZED_SMALL_MP4: "downsized_small.mp4",
    ORIGINAL_MP4: "original.mp4"
  },
  T = E.MP4,
  h = null,
  S = "",
  f = "",
  N = [],
  A = [],
  m = [],
  O = [];

function R(e) {
  return e.replace(/^https?:/, "")
}
class C extends(i = a.ZP.Store) {
  getAnalyticsID() {
    return h
  }
  getQuery() {
    return S
  }
  getResultQuery() {
    return f
  }
  getResultItems() {
    return N
  }
  getTrendingCategories() {
    return A
  }
  getSelectedFormat() {
    return T
  }
  getSuggestions() {
    return m
  }
  getTrendingSearchTerms() {
    return O
  }
}
o = "GIFPickerViewStore", (s = "displayName") in(r = C) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new C(u.Z, {
  GIF_PICKER_INITIALIZE: function(e) {
    h = e.analyticsID
  },
  GIF_PICKER_QUERY: function(e) {
    "" === (S = e.query) && (f = "", N = [], m = [])
  },
  GIF_PICKER_QUERY_SUCCESS: function(e) {
    if (null != e.query && S === f) return !1;
    null != e.query && (f = e.query), N = e.items.map(e => {
      let {
        width: t,
        height: n,
        src: i,
        gif_src: r,
        url: s,
        id: o
      } = e;
      return {
        width: t,
        height: n,
        src: R(i),
        gifSrc: R(r),
        url: s,
        id: o,
        format: ! function(e) {
          switch (e) {
            case I.FIXED_HEIGHT_MP4:
            case I.FIXED_HEIGHT_SMALL_MP4:
            case I.FIXED_WIDTH_MP4:
            case I.FIXED_WIDTH_SMALL_MP4:
            case I.DOWNSIZED_SMALL_MP4:
            case I.ORIGINAL_MP4:
            case E.MP4:
            case E.TINYMP4:
            case E.NANOMP4:
            case E.WEBM:
            case E.TINYWEBM:
            case E.NANOWEBM:
              return !0;
            default:
              return !1
          }
        }(T) ? l.EO.IMAGE : l.EO.VIDEO
      }
    })
  },
  GIF_PICKER_QUERY_FAILURE: function(e) {
    let {
      query: t
    } = e;
    if (null == t) return !1;
    f = t, N = []
  },
  GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
    let t = e.trendingCategories;
    A = [...null != e.trendingGIFPreview ? [{
      type: d.wI2.TRENDING_GIFS,
      icon: _.Z,
      name: c.Z.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
      src: R(e.trendingGIFPreview.src),
      format: l.EO.IMAGE
    }] : [], ...t.map(e => ({
      ...e,
      src: R(e.src),
      type: d.wI2.TRENDING_CATEGORY,
      format: l.EO.VIDEO
    }))]
  },
  GIF_PICKER_SUGGESTIONS_SUCCESS: function(e) {
    let {
      items: t
    } = e;
    m = t
  },
  GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function(e) {
    let {
      items: t
    } = e;
    O = t
  }
})