"use strict";
n.d(t, {
  k9: function() {
    return u
  },
  tT: function() {
    return l
  },
  zx: function() {
    return r
  }
});
var i, r, s = n(442837),
  o = n(581883),
  a = n(710111);

function l(e) {
  return (0, s.e7)([o.Z], () => {
    var t, n;
    return _(e, null !== (n = null === (t = o.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {})
  })
}

function u(e) {
  var t, n;
  return _(e, null !== (n = null === (t = o.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {})
}

function _(e, t) {
  var n, i;
  let r = null === (n = t[e]) || void 0 === n ? void 0 : n.joinSound,
    s = null === (i = t[a.hY]) || void 0 === i ? void 0 : i.joinSound,
    o = null != r ? r : s;
  return null != o ? {
    ...o,
    type: null != r ? 1 : 0
  } : void 0
}(i = r || (r = {}))[i.GLOBAL = 0] = "GLOBAL", i[i.GUILD = 1] = "GUILD"