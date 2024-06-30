n(47120);
var r = n(392711), i = n.n(r), a = n(626135), o = n(524484), s = n(981631);
function l(e) {
    switch (e) {
    case o.oZ.CHAT_INPUT:
        return 'chat_input';
    case o.oZ.MENTION:
        return 'mention';
    case o.oZ.VOICE_USER:
        return 'voice_user';
    }
}
function u(e) {
    switch (e) {
    case o.Hn.CHAT_INPUT:
        return 'chat_input';
    case o.Hn.MEMBER_USER:
        return 'member_user';
    case o.Hn.REACTION:
        return 'reaction';
    case o.Hn.CALL_TILE:
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
        shakeIntensity: o,
        screenshakeEnabledLocations: d,
        confettiEnabled: _,
        confettiSize: E,
        confettiCount: f,
        confettiEnabledLocations: h
    } = e;
    a.default.track(s.rMx.POGGERMODE_SETTINGS_UPDATED, {
        enabled: t,
        combos_enabled: n,
        combos_required_count: r,
        screenshake_enabled: i,
        shake_intensity: o,
        screenshake_enabled_locations: c(d, l),
        confetti_enabled: _,
        confetti_size: E,
        confetti_count: f,
        confetti_enabled_locations: c(h, u)
    });
}, 5000);
t.Z = d;
