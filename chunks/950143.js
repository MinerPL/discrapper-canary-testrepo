n(789020), n(47120);
var r = n(533800),
    i = n(147913),
    a = n(305325),
    s = n(82085),
    o = n(630388),
    l = n(981631);
function u(e) {
    var t, n, i;
    let { guild: u, flags: c } = e.invite;
    if (null != u && (null == u ? void 0 : null === (t = u.features) || void 0 === t ? void 0 : t.includes(l.oNc.HUB))) {
        s.Z.onOpenHubInvite(e.invite);
        return;
    }
    !(0, o.yE)(null != c ? c : 0, r.$.IS_GUEST_INVITE) && null != u && (null == u ? void 0 : null === (n = u.features) || void 0 === n ? void 0 : n.includes(l.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null == u ? void 0 : null === (i = u.features) || void 0 === i ? void 0 : i.includes(l.oNc.PREVIEW_ENABLED)) && (0, a.hk)(u.id);
}
class c extends i.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = { INVITE_ACCEPT_SUCCESS: u }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new c();
