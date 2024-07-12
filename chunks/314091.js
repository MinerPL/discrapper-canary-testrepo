n.d(t, {
  ZH: function() {
return p;
  },
  b6: function() {
return h;
  },
  j3: function() {
return m;
  },
  xC: function() {
return I;
  }
}), n(47120);
var r = n(866442),
  i = n(726542),
  a = n(503438),
  o = n(802856),
  s = n(420660),
  l = n(168631),
  u = n(621853),
  c = n(981631),
  d = n(689938);
let _ = e => ''.concat(e).length < 13 ? 1000 * e : e,
  E = e => {
let t = Date.now() / 1000;
return null != e.end ? f(t, _(e.end) / 1000) : null != e.start ? f(_(e.start) / 1000, t) : {
  hours: 0,
  minutes: 0,
  seconds: 0
};
  },
  f = (e, t) => {
let n = Math.max(t - e, 0),
  r = Math.floor(n) % 60,
  i = Math.floor(n / 60) % 60;
return {
  hours: Math.floor(n / 3600) % 24,
  minutes: i,
  seconds: r
};
  },
  h = e => {
let t = E(e);
return t.hours > 0 ? ''.concat(t.hours, ' hours') : t.minutes > 0 ? ''.concat(t.minutes, ' minutes') : ''.concat(t.seconds, ' seconds');
  },
  p = e => (0, a.Z)(e) ? i.Z.get(c.ABu.SPOTIFY) : (0, o.Z)(e) ? i.Z.get(c.ABu.XBOX) : null != e.platform && [
c.M7m.PS4,
c.M7m.PS5
  ].includes(e.platform) ? i.Z.get(c.ABu.PLAYSTATION) : e.name === i.Z.get(c.ABu.LEAGUE_OF_LEGENDS).name ? i.Z.get(c.ABu.LEAGUE_OF_LEGENDS) : void(e.type === c.IIU.PLAYING),
  m = (e, t) => {
var n;
let i = u.Z.getUserProfile(e.id),
  [a, o] = null !== (n = null == i ? void 0 : i.themeColors) && void 0 !== n ? n : [],
  s = (0, l.V3)(a),
  c = null != o ? (0, r.Rf)(o) : t;
return {
  color: c,
  theme: c === t ? 'dark' : s
};
  },
  I = (e, t) => (0, a.Z)(t) ? d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_SPOTIFY.format({
username: e.username,
song: t.details,
artist: t.state
  }) : t.type === c.IIU.PLAYING ? d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
username: e.username,
activity: t.name
  }) : t.type === c.IIU.WATCHING ? d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
username: e.username,
activity: t.name
  }) : t.type === c.IIU.LISTENING ? d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
username: e.username,
activity: t.name
  }) : (0, s.Z)(t) || t.type === c.IIU.STREAMING ? d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_STREAMING.format({
username: e.username,
activity: t.name
  }) : d.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_BASE.format({
username: e.username,
activity: t.name
  });