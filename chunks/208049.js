"use strict";
n.d(t, {
  $d: function() {
    return R
  },
  AA: function() {
    return C
  },
  Db: function() {
    return P
  },
  Dx: function() {
    return O
  },
  R: function() {
    return D
  },
  TB: function() {
    return p
  },
  XE: function() {
    return L
  },
  hs: function() {
    return g
  },
  w: function() {
    return m
  },
  xR: function() {
    return v
  },
  xz: function() {
    return M
  }
}), n(47120), n(653041);
var i = n(392711),
  r = n.n(i),
  s = n(544891),
  o = n(570140),
  a = n(668781),
  l = n(479531),
  u = n(675478),
  _ = n(763296),
  d = n(697426),
  c = n(174470),
  E = n(710111),
  I = n(981631),
  T = n(526761),
  h = n(689938);
let S = async e => {
  try {
    let t = (await s.tn.get({
      url: I.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
      query: {
        guild_ids: e
      }
    })).body.map(e => (0, d.o3)(e, E.X8));
    o.Z.dispatch({
      type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
      soundboardSounds: t
    })
  } catch (e) {
    throw o.Z.dispatch({
      type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
    }), new l.Z(e)
  }
}, f = e => new Promise(t => {
  let n = () => {
    o.Z.unsubscribe(e, n), setTimeout(t, 0)
  };
  o.Z.subscribe(e, n)
}), N = e => {
  if (!_.Z.shouldFetchDefaultSounds()) return Promise.resolve();
  o.Z.dispatch({
    type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
  });
  let t = f("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
  return S(e), t
}, A = () => {
  let e = (0, c.D)();
  if (0 === e.length) return Promise.resolve();
  let t = f("SOUNDBOARD_SOUNDS_RECEIVED");
  return o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_FETCH"
  }), o.Z.dispatch({
    type: "REQUEST_SOUNDBOARD_SOUNDS",
    guildIds: e
  }), t
}, m = () => __OVERLAY__ ? (o.Z.dispatch({
  type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
}), Promise.all([])) : Promise.all([N(), A()]);
async function O(e) {
  let {
    guildId: t,
    name: n,
    sound: i,
    volume: r,
    emojiId: o,
    emojiName: a
  } = e, l = await s.tn.post({
    url: I.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
    body: {
      name: n,
      sound: i,
      volume: r,
      emoji_id: o,
      emoji_name: a
    }
  });
  return (0, d.o3)(l.body, t)
}
async function R(e) {
  let {
    guildId: t,
    soundId: n,
    name: i,
    volume: r,
    emojiId: o,
    emojiName: a
  } = e, l = await s.tn.patch({
    url: I.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
    body: {
      name: i,
      volume: r,
      emoji_id: o,
      emoji_name: a
    }
  });
  return (0, d.o3)(l.body, t)
}
async function C(e, t) {
  await s.tn.del({
    url: I.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
    oldFormErrors: !0
  })
}

function p(e) {
  u.DZ.updateAsync("favoriteSoundboardSounds", t => r().size(t.soundIds) >= T.oX ? (a.Z.show({
    title: h.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: h.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: T.oX
    })
  }), !1) : !t.soundIds.includes(e) && void t.soundIds.push(e), T.fy.INFREQUENT_USER_ACTION)
}

function g(e) {
  u.DZ.updateAsync("favoriteSoundboardSounds", t => {
    t.soundIds = t.soundIds.filter(t => t !== e)
  }, T.fy.INFREQUENT_USER_ACTION)
}

function L(e, t, n) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
    sound: t,
    channelId: e,
    trigger: n
  })
}

function v(e, t) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
    soundId: e,
    userId: t
  })
}

function D(e, t) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
    soundId: e,
    userId: t
  })
}

function M(e) {
  o.Z.dispatch({
    type: "USER_SOUNDBOARD_SET_VOLUME",
    volume: e
  })
}

function P(e) {
  o.Z.dispatch({
    type: "SOUNDBOARD_MUTE_JOIN_SOUND",
    channelId: e
  })
}