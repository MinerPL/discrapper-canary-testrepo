t.d(s, {
  Gz: function() {
return o;
  },
  P0: function() {
return u;
  },
  gH: function() {
return a;
  },
  tL: function() {
return i;
  },
  th: function() {
return l;
  }
}), t(411104);
var n = t(544891);
let l = 8,
  i = 11,
  a = 6,
  o = 6;
async function r(e) {
  let {
ticket: s,
mfaType: t,
data: l
  } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
  try {
return (await n.tn.post({
  url: '/mfa/finish',
  body: {
    ticket: s,
    mfa_type: t,
    data: l
  },
  retries: i
})).body;
  } catch (e) {
var a;
if (null === (a = e.body) || void 0 === a ? void 0 : a.message)
  throw Error(e.body.message);
throw e;
  }
}
async function u(e, s) {
  let {
token: t
  } = await r(e);
  return new Promise((e, n) => {
s({
  'X-Discord-MFA-Authorization': t
}, s => {
  var t, l;
  return (null === (t = s.body) || void 0 === t ? void 0 : t.code) === 60008 || (null === (l = s.body) || void 0 === l ? void 0 : l.code) === 60003 ? (n(Error(s.body.message)), !0) : (e(), !1);
});
  });
}