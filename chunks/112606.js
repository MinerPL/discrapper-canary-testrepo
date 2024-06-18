"use strict";
n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(626135),
  o = n(524484),
  a = n(981631);

function l(e) {
  switch (e) {
    case o.oZ.CHAT_INPUT:
      return "chat_input";
    case o.oZ.MENTION:
      return "mention";
    case o.oZ.VOICE_USER:
      return "voice_user"
  }
}

function u(e) {
  switch (e) {
    case o.Hn.CHAT_INPUT:
      return "chat_input";
    case o.Hn.MEMBER_USER:
      return "member_user";
    case o.Hn.REACTION:
      return "reaction";
    case o.Hn.CALL_TILE:
      return "call_tile"
  }
}

function _(e, t) {
  return Object.entries(e).filter(e => {
    let [t, n] = e;
    return n
  }).map(e => {
    let [n] = e;
    return t(Number.parseInt(n))
  })
}
let d = r().throttle(e => {
  let {
    enabled: t,
    combosEnabled: n,
    combosRequiredCount: i,
    screenshakeEnabled: r,
    shakeIntensity: o,
    screenshakeEnabledLocations: d,
    confettiEnabled: c,
    confettiSize: E,
    confettiCount: I,
    confettiEnabledLocations: T
  } = e;
  s.default.track(a.rMx.POGGERMODE_SETTINGS_UPDATED, {
    enabled: t,
    combos_enabled: n,
    combos_required_count: i,
    screenshake_enabled: r,
    shake_intensity: o,
    screenshake_enabled_locations: _(d, l),
    confetti_enabled: c,
    confetti_size: E,
    confetti_count: I,
    confetti_enabled_locations: _(T, u)
  })
}, 5e3);
t.Z = d