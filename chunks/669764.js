"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = new Map,
  _ = new Set,
  d = new Set;
class c extends(i = a.ZP.Store) {
  canFetch(e) {
    return !_.has(e) && !d.has(e) && !u.has(e)
  }
  isFetching(e) {
    return _.has(e)
  }
  getGame(e) {
    return u.get(e)
  }
  getLocalizedName(e) {
    var t;
    return null === (t = u.get(e)) || void 0 === t ? void 0 : t.name
  }
  getThemes(e) {
    var t;
    return null === (t = u.get(e)) || void 0 === t ? void 0 : t.themes
  }
  getCoverImageUrl(e, t) {
    var n;
    let i = null === (n = u.get(e)) || void 0 === n ? void 0 : n.coverImageUrl;
    return null == i ? null : null == t ? i : "".concat(i, "?width=").concat(t.width, "&height=").concat(t.height)
  }
}
o = "DetectableGameSupplementalStore", (s = "displayName") in(r = c) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new c(l.Z, {
  CONNECTION_OPEN: function() {
    u = new Map, _ = new Set, d = new Set
  },
  DETECTABLE_GAME_SUPPLEMENTAL_FETCH: function(e) {
    let {
      applicationIds: t
    } = e;
    t.forEach(e => {
      _.add(e), d.delete(e)
    })
  },
  DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: function(e) {
    let {
      applicationIds: t,
      supplementalGameData: n
    } = e;
    t.forEach(e => {
      _.delete(e), d.delete(e)
    }), n.forEach(e => {
      let {
        application_id: t,
        name: n,
        summary: i,
        websites: r,
        themes: s,
        genres: o,
        artwork_urls: a,
        cover_image_url: l,
        first_release_date: _
      } = e;
      u.set(t, {
        name: n,
        summary: i,
        websites: r,
        themes: s,
        genres: o,
        artwork: a,
        coverImageUrl: l,
        firstReleaseDate: _
      })
    })
  },
  DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: function(e) {
    let {
      applicationIds: t
    } = e;
    t.forEach(e => {
      _.delete(e), d.add(e)
    })
  }
})