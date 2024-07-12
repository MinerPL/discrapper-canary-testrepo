n(47120);
var r = n(512722),
  i = n.n(r),
  a = n(957730),
  o = n(439170),
  s = n(496675),
  l = n(981631);
let u = new RegExp(/@(:?everyone|here)/);

function c(e, t) {
  let n = 0;
  if (t.isThread()) {
var r;
return null !== (r = t.memberCount) && void 0 !== r ? r : 0;
  }
  return o.ZP.getProps(t.getGuildId(), t.id).groups.forEach(t => {
('@everyone' === e || t.id !== l.Skl.OFFLINE) && (n += t.count);
  }), n;
}
t.Z = {
  shouldShowEveryoneGuard: function(e, t) {
let n = t.getGuildId();
return i()(n, 'isGuildChannel with null guildId'), c(e, t) > 30 && s.Z.can(l.Plq.MENTION_EVERYONE, t);
  },
  everyoneMemberCount: c,
  extractEveryoneRole: function(e, t) {
for (let n of a.ZP.parsePreprocessor(t, e)) {
  let e = function e(t) {
    if ('string' == typeof t.content) {
      var n;
      if ('inlineCode' === t.type || 'codeBlock' === t.type)
        return null;
      let e = null === (n = t.content) || void 0 === n ? void 0 : n.match(u);
      if (null != e) {
        let [t] = e;
        return t;
      }
    } else if (Array.isArray(t.content))
      for (let n of t.content) {
        let t = e(n);
        if (null != t)
          return t;
      }
    return null;
  }(n);
  if (null != e)
    return e;
}
return null;
  }
};