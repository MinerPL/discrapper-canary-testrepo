n.d(t, {
  k9: function() {
return u;
  },
  tT: function() {
return l;
  },
  zx: function() {
return i;
  }
});
var r, i, a = n(442837),
  o = n(581883),
  s = n(710111);

function l(e) {
  return (0, a.e7)([o.Z], () => {
var t, n;
return c(e, null !== (n = null === (t = o.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {});
  });
}

function u(e) {
  var t, n;
  return c(e, null !== (n = null === (t = o.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {});
}

function c(e, t) {
  var n, r;
  let i = null === (n = t[e]) || void 0 === n ? void 0 : n.joinSound,
a = null === (r = t[s.hY]) || void 0 === r ? void 0 : r.joinSound,
o = null != i ? i : a;
  return null != o ? {
...o,
type: null != i ? 1 : 0
  } : void 0;
}
(r = i || (i = {}))[r.GLOBAL = 0] = 'GLOBAL', r[r.GUILD = 1] = 'GUILD';