n.d(t, {
  $K: function() {
return C;
  },
  OQ: function() {
return S;
  },
  RE: function() {
return N;
  },
  Xe: function() {
return y;
  },
  dv: function() {
return v;
  },
  rS: function() {
return A;
  },
  t0: function() {
return g;
  }
}), n(47120), n(653041);
var r = n(392711),
  i = n.n(r),
  a = n(544891),
  s = n(381499),
  o = n(570140),
  l = n(479531),
  u = n(339085),
  c = n(633302),
  d = n(347374),
  _ = n(38618),
  E = n(675478),
  f = n(486472),
  h = n(823379),
  p = n(668781),
  m = n(981631),
  I = n(526761),
  T = n(689938);

function g(e) {
  E.hW.updateAsync('textAndImages', t => {
t.diversitySurrogate = s.Gm.create(), t.diversitySurrogate.value = e;
  }, I.fy.FREQUENT_USER_ACTION);
}

function S(e) {
  o.Z.dispatch({
type: 'EMOJI_FETCH',
guildId: e
  }), a.tn.get({
url: m.ANM.GUILD_EMOJIS(e),
oldFormErrors: !0
  }).then(t => o.Z.dispatch({
type: 'EMOJI_FETCH_SUCCESS',
guildId: e,
emojis: t.body
  }), () => o.Z.dispatch({
type: 'EMOJI_FETCH_FAILURE',
guildId: e
  }));
}

function A(e) {
  let {
guildId: t,
image: n,
name: r,
roles: i
  } = e;
  return o.Z.dispatch({
type: 'EMOJI_UPLOAD_START',
guildId: t
  }), a.tn.post({
url: m.ANM.GUILD_EMOJIS(t),
body: {
  image: n,
  name: r,
  roles: i
},
oldFormErrors: !0
  }).then(() => o.Z.dispatch({
type: 'EMOJI_UPLOAD_STOP',
guildId: t
  }), e => (o.Z.dispatch({
type: 'EMOJI_UPLOAD_STOP',
guildId: t
  }), Promise.reject(e)));
}

function N(e, t) {
  return o.Z.dispatch({
type: 'EMOJI_DELETE',
guildId: e,
emojiId: t
  }), a.tn.del({
url: m.ANM.GUILD_EMOJI(e, t),
oldFormErrors: !0
  });
}
async function v(e) {
  let {
guildId: t,
emojiId: n,
name: r,
roles: i
  } = e;
  try {
return await a.tn.patch({
  url: m.ANM.GUILD_EMOJI(t, n),
  body: {
    name: r,
    roles: i
  },
  oldFormErrors: !0
});
  } catch (e) {
throw new l.Z(e);
  }
}

function O(e) {
  if (f.Z.totalUnavailableGuilds > 0 || !_.Z.isConnected())
return e;
  let t = e.map(e => {
var t;
return null !== (t = u.Z.getCustomEmojiById(e)) && void 0 !== t ? t : c.ZP.getByName(e);
  }).filter(h.lm);
  return [...(0, d.Z)(t).keys()];
}

function R(e) {
  var t, n, r;
  return null == e ? null : null !== (r = null !== (n = e.id) && void 0 !== n ? n : null === (t = c.ZP.convertSurrogateToBase(e.surrogates)) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : e.name;
}

function C(e) {
  let t = R(e);
  if (null != t)
E.DZ.updateAsync('favoriteEmojis', e => (e.emojis = O(e.emojis), i().size(e.emojis) >= I.oX) ? (p.Z.show({
  title: T.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
  body: T.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
    count: I.oX
  })
}), !1) : !e.emojis.includes(t) && void e.emojis.push(t), I.fy.INFREQUENT_USER_ACTION);
}

function y(e) {
  let t = R(e);
  if (null != t)
E.DZ.updateAsync('favoriteEmojis', e => {
  if (e.emojis = O(e.emojis), !e.emojis.includes(t))
    return !1;
  e.emojis = e.emojis.filter(e => t !== e);
}, I.fy.INFREQUENT_USER_ACTION);
}