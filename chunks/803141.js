"use strict";
n.r(t), n("47120");
var a = n("695346"),
  s = n("581883"),
  l = n("412788"),
  i = n("592204"),
  r = n("932941"),
  o = n("363072"),
  u = n("526761");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = new o.Trie;

function f() {
  let {
    profanity: e = !1,
    slurs: t = !1,
    sexualContent: n = !1
  } = a.KeywordFilterSettings.getSetting(), s = [...e ? r.PROFANITY_KEYWORD_LIST : [], ...t ? r.SLURS_KEYWORD_LIST : [], ...n ? r.SEXUAL_CONTENT_KEYWORD_LIST : []];
  c.addWords(s)
}

function E() {
  if (!(0, i.isEligibleForKeywordFiltering)({
      location: "connection_open"
    })) return !1;
  f()
}

function h() {
  if (!(0, i.isEligibleForKeywordFiltering)({
      location: "overlay_initialize"
    })) return !1;
  f()
}

function _(e) {
  let {
    local: t,
    settings: n
  } = e;
  if (!t || n.type !== u.UserSettingsTypes.PRELOADED_USER_SETTINGS || !(0, i.isEligibleForKeywordFiltering)({
      location: "user_settings_proto_update"
    })) return !1;
  c.clear(), f()
}
class C extends l.default {
  initialize() {
    this.waitFor(s.default)
  }
  loadCache() {
    let e = this.readSnapshot(C.LATEST_SNAPSHOT_VERSION);
    null != e && (c = o.Trie.fromSnapshot(e))
  }
  takeSnapshot() {
    return {
      version: C.LATEST_SNAPSHOT_VERSION,
      data: c
    }
  }
  getKeywordTrie() {
    return c
  }
  initializeForKeywordTests() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    c.clear(), ! function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      c.addWords(e)
    }(e)
  }
  constructor() {
    super({
      CONNECTION_OPEN: E,
      CONNECTION_OPEN_SUPPLEMENTAL: E,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      OVERLAY_INITIALIZE: h,
      USER_SETTINGS_PROTO_UPDATE: _
    })
  }
}
d(C, "displayName", "KeywordFilterStore"), d(C, "LATEST_SNAPSHOT_VERSION", 1), new C