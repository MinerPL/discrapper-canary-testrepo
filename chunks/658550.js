s.d(t, {
  Gz: function() {
return o;
  },
  P0: function() {
return d;
  },
  gH: function() {
return r;
  },
  tL: function() {
return i;
  },
  th: function() {
return l;
  }
}), s(411104);
var n = s(544891);
let l = 8,
  i = 11,
  r = 6,
  o = 6;
async function a(e) {
  let {
ticket: t,
mfaType: s,
data: l
  } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
  try {
return (await n.tn.post({
  url: '/mfa/finish',
  body: {
    ticket: t,
    mfa_type: s,
    data: l
  },
  retries: i
})).body;
  } catch (e) {
var r;
if (null === (r = e.body) || void 0 === r ? void 0 : r.message)
  throw Error(e.body.message);
throw e;
  }
}
async function d(e, t) {
  let {
token: s
  } = await a(e);
  return new Promise((e, n) => {
t({
  'X-Discord-MFA-Authorization': s
}, t => {
  var s, l;
  return (null === (s = t.body) || void 0 === s ? void 0 : s.code) === 60008 || (null === (l = t.body) || void 0 === l ? void 0 : l.code) === 60003 ? (n(Error(t.body.message)), !0) : (e(), !1);
});
  });
}