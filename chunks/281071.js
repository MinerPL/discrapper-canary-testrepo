"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(735250);
n(470079);
var r = n(302454);

function s(e) {
  return e.heading = r.defaultRules.heading, e.lheading = r.defaultRules.lheading, e.list = r.defaultRules.list, e.paragraph = {
    ...e.paragraph,
    react: function(e, t, n) {
      return (0, i.jsx)("p", {
        children: t(e.content, n)
      }, n.key)
    }
  }, e.link = {
    ...e.link,
    react: function(e, t, n) {
      let s = {};
      if (null != e.context) {
        let t = e.context[e.target];
        t && t.onClick ? (s.onClick = t.onClick, s.onContextMenu = t.onContextMenu) : s.onClick = t
      }
      if (null == s.onClick) {
        var o;
        s.href = null !== (o = (0, r.sanitizeUrl)(e.target)) && void 0 !== o ? o : void 0, s.target = "_blank"
      }
      return (0, i.jsx)("a", {
        title: e.title,
        ...s,
        rel: "noreferrer",
        children: t(e.content, n)
      }, n.key)
    }
  }, e
}