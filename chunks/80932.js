"use strict";
n.d(t, {
  $K: function() {
    return L
  },
  OQ: function() {
    return m
  },
  RE: function() {
    return R
  },
  Xe: function() {
    return v
  },
  dv: function() {
    return C
  },
  rS: function() {
    return O
  },
  t0: function() {
    return A
  }
}), n(47120), n(653041);
var i = n(392711),
  r = n.n(i),
  s = n(544891),
  o = n(381499),
  a = n(570140),
  l = n(479531),
  u = n(339085),
  _ = n(633302),
  d = n(347374),
  c = n(38618),
  E = n(675478),
  I = n(486472),
  T = n(823379),
  h = n(668781),
  S = n(981631),
  f = n(526761),
  N = n(689938);

function A(e) {
  E.hW.updateAsync("textAndImages", t => {
    t.diversitySurrogate = o.Gm.create(), t.diversitySurrogate.value = e
  }, f.fy.FREQUENT_USER_ACTION)
}

function m(e) {
  a.Z.dispatch({
    type: "EMOJI_FETCH",
    guildId: e
  }), s.tn.get({
    url: S.ANM.GUILD_EMOJIS(e),
    oldFormErrors: !0
  }).then(t => a.Z.dispatch({
    type: "EMOJI_FETCH_SUCCESS",
    guildId: e,
    emojis: t.body
  }), () => a.Z.dispatch({
    type: "EMOJI_FETCH_FAILURE",
    guildId: e
  }))
}

function O(e) {
  let {
    guildId: t,
    image: n,
    name: i,
    roles: r
  } = e;
  return a.Z.dispatch({
    type: "EMOJI_UPLOAD_START",
    guildId: t
  }), s.tn.post({
    url: S.ANM.GUILD_EMOJIS(t),
    body: {
      image: n,
      name: i,
      roles: r
    },
    oldFormErrors: !0
  }).then(() => a.Z.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), e => (a.Z.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), Promise.reject(e)))
}

function R(e, t) {
  return a.Z.dispatch({
    type: "EMOJI_DELETE",
    guildId: e,
    emojiId: t
  }), s.tn.del({
    url: S.ANM.GUILD_EMOJI(e, t),
    oldFormErrors: !0
  })
}
async function C(e) {
  let {
    guildId: t,
    emojiId: n,
    name: i,
    roles: r
  } = e;
  try {
    return await s.tn.patch({
      url: S.ANM.GUILD_EMOJI(t, n),
      body: {
        name: i,
        roles: r
      },
      oldFormErrors: !0
    })
  } catch (e) {
    throw new l.Z(e)
  }
}

function p(e) {
  if (I.Z.totalUnavailableGuilds > 0 || !c.Z.isConnected()) return e;
  let t = e.map(e => {
    var t;
    return null !== (t = u.Z.getCustomEmojiById(e)) && void 0 !== t ? t : _.ZP.getByName(e)
  }).filter(T.lm);
  return [...(0, d.Z)(t).keys()]
}

function g(e) {
  var t, n, i;
  return null == e ? null : null !== (i = null !== (n = e.id) && void 0 !== n ? n : null === (t = _.ZP.convertSurrogateToBase(e.surrogates)) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : e.name
}

function L(e) {
  let t = g(e);
  if (null != t) E.DZ.updateAsync("favoriteEmojis", e => (e.emojis = p(e.emojis), r().size(e.emojis) >= f.oX) ? (h.Z.show({
    title: N.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: N.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: f.oX
    })
  }), !1) : !e.emojis.includes(t) && void e.emojis.push(t), f.fy.INFREQUENT_USER_ACTION)
}

function v(e) {
  let t = g(e);
  if (null != t) E.DZ.updateAsync("favoriteEmojis", e => {
    if (e.emojis = p(e.emojis), !e.emojis.includes(t)) return !1;
    e.emojis = e.emojis.filter(e => t !== e)
  }, f.fy.INFREQUENT_USER_ACTION)
}