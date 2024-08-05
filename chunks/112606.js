n(47120);
var r = n(392711),
  i = n.n(r),
  a = n(626135),
  s = n(524484),
  o = n(981631);

function l(e) {
  switch (e) {
case s.oZ.CHAT_INPUT:
  return 'chat_input';
case s.oZ.MENTION:
  return 'mention';
case s.oZ.VOICE_USER:
  return 'voice_user';
  }
}

function u(e) {
  switch (e) {
case s.Hn.CHAT_INPUT:
  return 'chat_input';
case s.Hn.MEMBER_USER:
  return 'member_user';
case s.Hn.REACTION:
  return 'reaction';
case s.Hn.CALL_TILE:
  return 'call_tile';
  }
}

function c(e, t) {
  return Object.entries(e).filter(e => {
let [t, n] = e;
return n;
  }).map(e => {
let [n] = e;
return t(Number.parseInt(n));
  });
}
let d = i().throttle(e => {
  let {
enabled: t,
combosEnabled: n,
combosRequiredCount: r,
screenshakeEnabled: i,
shakeIntensity: s,
screenshakeEnabledLocations: d,
confettiEnabled: _,
confettiSize: E,
confettiCount: f,
confettiEnabledLocations: h
  } = e;
  a.default.track(o.rMx.POGGERMODE_SETTINGS_UPDATED, {
enabled: t,
combos_enabled: n,
combos_required_count: r,
screenshake_enabled: i,
shake_intensity: s,
screenshake_enabled_locations: c(d, l),
confetti_enabled: _,
confetti_size: E,
confetti_count: f,
confetti_enabled_locations: c(h, u)
  });
}, 5000);
t.Z = d;