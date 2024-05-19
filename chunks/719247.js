"use strict";
n.r(t), n("47120");
var a, l = n("392711"),
  s = n.n(l),
  i = n("661869"),
  r = n("876215"),
  o = n("423875"),
  u = n("442837"),
  d = n("570140"),
  c = n("158776"),
  f = n("146282"),
  h = n("26033"),
  m = n("561308"),
  p = n("981631"),
  E = n("616922");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = new Set([r.ContentInventoryEntryType.LISTENED_SESSION]),
  S = new Map;

function _(e) {
  return "".concat(e.author_id, ":").concat(e.id)
}

function T(e) {
  let t = new Set,
    n = new Set;
  for (let a of e) {
    let e = function(e) {
      return (0, m.isEntryExpired)(e) ? null : (0, m.isEntryActive)(e) && e.author_type === i.ContentInventoryAuthorType.USER ? c.default.getActivities(e.author_id).find(t => {
        if (t.type === p.ActivityTypes.PLAYING && (0, h.isGamingLikeEntry)(e)) return function(e, t) {
          let n = e.extra;
          return null != n && ("application_id" in t && t.application_id === n.application_id || "game_name" in n && t.name === n.game_name)
        }(e, t);
        if (t.type === p.ActivityTypes.LISTENING && e.content_type === r.ContentInventoryEntryType.LISTENED_SESSION) {
          var n, a, l, s, i;
          return n = e, a = t, (null === (s = n.extra.entries[0]) || void 0 === s ? void 0 : null === (l = s.media) || void 0 === l ? void 0 : l.provider) === o.ContentInventoryListenedMediaProvider.SPOTIFY && (0, E.isSpotifyParty)(null === (i = a.party) || void 0 === i ? void 0 : i.id)
        }
        return !1
      }) : void 0
    }(a.content);
    if (void 0 !== e) {
      let l = _(a.content);
      n.add(l), e !== S.get(l) && (t.add(l), S.set(l, e))
    }
  }
  return {
    updatedKeys: t,
    matchedKeys: n
  }
}

function I() {
  let e = !1,
    t = Array.from(S.keys()),
    n = new Set,
    a = new Set;
  for (let t of f.default.getFeeds().values()) {
    let {
      updatedKeys: l,
      matchedKeys: s
    } = T(n.size > 0 ? t.entries.filter(e => !n.has(_(e.content))) : t.entries);
    for (let e of l) n.add(e);
    for (let e of s) a.add(e);
    e = e || l.size > 0
  }
  for (let n of s().difference(t, [...a])) S.delete(n), e = !0;
  return e
}
class A extends(a = u.default.Store) {
  initialize() {
    this.waitFor(f.default, c.default), this.syncWith([c.default], I)
  }
  getMatchingActivity(e) {
    return (0, m.isEntryExpired)(e) ? null : S.get(_(e))
  }
  constructor(...e) {
    super(...e), C(this, "canRenderContent", e => !(0, m.isEntryExpired)(e) && (!g.has(e.content_type) || null != this.getMatchingActivity(e)))
  }
}
C(A, "displayName", "ContentInventoryActivityStore"), t.default = new A(d.default, {
  CONNECTION_OPEN: function() {
    S.clear()
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feed: t
    } = e, {
      updatedKeys: n
    } = T(t.entries);
    return n.size > 0
  }
})