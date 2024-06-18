"use strict";
n(47120);
var i = n(695346),
  r = n(412788),
  s = n(932941),
  o = n(363072),
  a = n(526761);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = null;

function _() {
  let {
    profanity: e = !1,
    slurs: t = !1,
    sexualContent: n = !1
  } = i.gw.getSetting(), r = [...e ? s.pF : [], ...t ? s.wq : [], ...n ? s.$u : []];
  (u = new o.B).addWords(r)
}

function d() {
  _()
}

function c() {
  _()
}

function E(e) {
  let {
    local: t,
    settings: n
  } = e;
  if (!t || n.type !== a.yP.PRELOADED_USER_SETTINGS) return !1;
  null != u && u.clear(), _()
}
class I extends r.Z {
  loadCache() {
    let e = this.readSnapshot(I.LATEST_SNAPSHOT_VERSION);
    null != e && (u = null != e.keywordTrie ? o.B.fromSnapshot(e.keywordTrie) : null)
  }
  takeSnapshot() {
    return {
      version: I.LATEST_SNAPSHOT_VERSION,
      data: {
        keywordTrie: u
      }
    }
  }
  getKeywordTrie() {
    return u
  }
  initializeForKeywordTests() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    ! function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      null == u && (u = new o.B), u.addWords(e)
    }(e)
  }
  constructor() {
    super({
      CONNECTION_OPEN: d,
      CONNECTION_OPEN_SUPPLEMENTAL: d,
      CACHE_LOADED: () => this.loadCache(),
      OVERLAY_INITIALIZE: c,
      USER_SETTINGS_PROTO_UPDATE: E
    })
  }
}
l(I, "displayName", "KeywordFilterStore"), l(I, "LATEST_SNAPSHOT_VERSION", 2), t.Z = new I