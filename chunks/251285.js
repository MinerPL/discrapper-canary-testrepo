"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("442837"),
  l = n("963374"),
  s = n("735020"),
  i = n("786761"),
  r = n("937889"),
  o = n("699516"),
  u = n("768119");

function d(e) {
  let t = (0, a.useStateFromStores)([u.default, s.default], () => {
      var t;
      let n = u.default.getQuery(e),
        a = u.default.getRawResults(e);
      if (null == n || null == a) return [];
      let o = (0, l.createASTHighlighter)(null !== (t = n.content) && void 0 !== t ? t : "");
      return a.map(e => e.map(e => {
        let t = s.default.getMessage(e.id, e.channel_id),
          n = (0, i.createMessageRecord)(e);
        return null != t && (n = n.merge({
          attachments: t.attachments,
          embeds: t.embeds
        })), n.isSearchHit ? n.set("customRenderedContent", (0, r.default)(n, {
          postProcessor: o,
          allowHeading: !0,
          allowList: !0
        })) : n
      }))
    }, [e], a.statesWillNeverBeEqual),
    [n, d] = (0, a.useStateFromStores)([o.default], () => {
      let e = 0;
      return [t.map(t => t.filter(t => {
        let n = o.default.isBlocked(t.author.id);
        return n && t.isSearchHit && e++, !n || t.isSearchHit
      })), e]
    }, [t], a.statesWillNeverBeEqual);
  return {
    searchResults: n,
    blockCount: d
  }
}