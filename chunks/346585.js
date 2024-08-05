n.d(t, {
  IE: function() {
return g;
  },
  K9: function() {
return I;
  },
  NX: function() {
return S;
  },
  R_: function() {
return m;
  },
  e$: function() {
return E;
  },
  ti: function() {
return b;
  },
  zV: function() {
return _;
  }
}), n(757143), n(47120), n(627341);
var i = n(913527),
  r = n.n(i),
  s = n(278074),
  l = n(768581),
  a = n(709054),
  o = n(624138),
  u = n(219496),
  d = n(801461),
  c = n(689938);

function _(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return l.ZP.getUserAvatarURL({
id: e.id,
avatar: e.avatar,
bot: e.bot,
discriminator: '0000'
  }, t, 80);
}

function E(e) {
  let t = (0, o._I)(e.username).replace(d.RN, '').replace(d.iF, '.').toLowerCase();
  return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let h = [
'@',
'#',
':'
  ],
  p = [
'```',
'discord',
'hypesquad',
'system message',
'system mesage',
'sustem message',
'sustem mesage',
'clyde'
  ],
  f = [
'discordtag',
'everyone',
'here',
'discord nitro',
'discord',
'snowsgiving'
  ];

function S(e) {
  var t, n;
  let i = e.username.toLowerCase();
  if ((t = i, n = d.kt, t.split('').filter(e => !n.includes(e.charCodeAt(0))).join('')).length < 2)
return !0;
  for (let e of h)
if (i.includes(e))
  return !0;
  for (let e of f)
if (i === e.toLowerCase())
  return !0;
  for (let e of p)
if (i.includes(e.toLowerCase()))
  return !0;
  return !1;
}

function m(e) {
  return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}

function I(e) {
  let t = a.default.extractTimestamp(e);
  try {
return r()(new Date(t)).format('MMM DD, YYYY');
  } catch (e) {}
  return null;
}

function b(e) {
  return (0, s.EQ)(e).with({
rateLimited: !0
  }, () => ({
type: u.K.RATE_LIMIT,
message: c.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
  })).with({
error: s.P.not(s.P.nullish)
  }, e => {
let {
  error: t
} = e;
return {
  type: u.K.ERROR,
  message: t
};
  }).with({
taken: !1
  }, () => ({
type: u.K.AVAILABLE,
message: c.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE
  })).with({
taken: !0
  }, () => ({
type: u.K.ERROR,
message: c.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
  })).with({
error: s.P.nullish
  }, () => ({
type: u.K.INTERNAL_ERROR,
message: ''
  })).otherwise(() => void 0);
}

function g(e) {
  return new Date(2024, 2, 4).toLocaleDateString(e, {
month: 'long',
day: 'numeric',
year: 'numeric'
  });
}