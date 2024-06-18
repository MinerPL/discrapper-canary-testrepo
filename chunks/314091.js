"use strict";
n.d(t, {
  ZH: function() {
    return h
  },
  b6: function() {
    return T
  },
  j3: function() {
    return S
  },
  xC: function() {
    return f
  }
}), n(47120);
var i = n(866442),
  r = n(726542),
  s = n(503438),
  o = n(802856),
  a = n(420660),
  l = n(168631),
  u = n(621853),
  _ = n(981631),
  d = n(689938);
let c = e => "".concat(e).length < 13 ? 1e3 * e : e,
  E = e => {
    let t = Date.now() / 1e3;
    return null != e.end ? I(t, c(e.end) / 1e3) : null != e.start ? I(c(e.start) / 1e3, t) : {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  I = (e, t) => {
    let n = Math.max(t - e, 0),
      i = Math.floor(n) % 60,
      r = Math.floor(n / 60) % 60;
    return {
      hours: Math.floor(n / 3600) % 24,
      minutes: r,
      seconds: i
    }
  },
  T = e => {
    let t = E(e);
    return t.hours > 0 ? "".concat(t.hours, " hours") : t.minutes > 0 ? "".concat(t.minutes, " minutes") : "".concat(t.seconds, " seconds")
  },
  h = e => (0, s.Z)(e) ? r.Z.get(_.ABu.SPOTIFY) : (0, o.Z)(e) ? r.Z.get(_.ABu.XBOX) : null != e.platform && [_.M7m.PS4, _.M7m.PS5].includes(e.platform) ? r.Z.get(_.ABu.PLAYSTATION) : e.name === r.Z.get(_.ABu.LEAGUE_OF_LEGENDS).name ? r.Z.get(_.ABu.LEAGUE_OF_LEGENDS) : void(e.type === _.IIU.PLAYING),
  S = (e, t) => {
    var n;
    let r = u.Z.getUserProfile(e.id),
      [s, o] = null !== (n = null == r ? void 0 : r.themeColors) && void 0 !== n ? n : [],
      a = (0, l.V3)(s),
      _ = null != o ? (0, i.Rf)(o) : t;
    return {
      color: _,
      theme: _ === t ? "dark" : a
    }
  },
  f = (e, t) => (0, s.Z)(t) ? d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_SPOTIFY.format({
    username: e.username,
    song: t.details,
    artist: t.state
  }) : t.type === _.IIU.PLAYING ? d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: e.username,
    activity: t.name
  }) : t.type === _.IIU.WATCHING ? d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: e.username,
    activity: t.name
  }) : t.type === _.IIU.LISTENING ? d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
    username: e.username,
    activity: t.name
  }) : (0, a.Z)(t) || t.type === _.IIU.STREAMING ? d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_STREAMING.format({
    username: e.username,
    activity: t.name
  }) : d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_BASE.format({
    username: e.username,
    activity: t.name
  })