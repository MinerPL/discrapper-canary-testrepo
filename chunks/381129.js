"use strict";
n(47120);
var i = n(512722),
  r = n.n(i),
  s = n(957730),
  o = n(439170),
  a = n(496675),
  l = n(981631);
let u = new RegExp(/@(:?everyone|here)/);

function _(e, t) {
  let n = 0;
  if (t.isThread()) {
    var i;
    return null !== (i = t.memberCount) && void 0 !== i ? i : 0
  }
  return o.ZP.getProps(t.getGuildId(), t.id).groups.forEach(t => {
    ("@everyone" === e || t.id !== l.Skl.OFFLINE) && (n += t.count)
  }), n
}
t.Z = {
  shouldShowEveryoneGuard: function(e, t) {
    let n = t.getGuildId();
    return r()(n, "isGuildChannel with null guildId"), _(e, t) > 30 && a.Z.can(l.Plq.MENTION_EVERYONE, t)
  },
  everyoneMemberCount: _,
  extractEveryoneRole: function(e, t) {
    for (let n of s.ZP.parsePreprocessor(t, e)) {
      let e = function e(t) {
        if ("string" == typeof t.content) {
          var n;
          if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
          let e = null === (n = t.content) || void 0 === n ? void 0 : n.match(u);
          if (null != e) {
            let [t] = e;
            return t
          }
        } else if (Array.isArray(t.content))
          for (let n of t.content) {
            let t = e(n);
            if (null != t) return t
          }
        return null
      }(n);
      if (null != e) return e
    }
    return null
  }
}