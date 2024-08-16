n.d(t, {
    DF: function () {
        return f;
    },
    KA: function () {
        return S;
    },
    M1: function () {
        return l;
    },
    PM: function () {
        return _;
    },
    Pn: function () {
        return I;
    },
    Rq: function () {
        return c;
    },
    s$: function () {
        return d;
    },
    sN: function () {
        return u;
    }
});
var r = n(367907),
    i = n(221292),
    a = n(592125),
    s = n(626135),
    o = n(981631);
function E(e) {
    var t;
    return null === (t = a.Z.getChannel(e)) || void 0 === t ? void 0 : t.guild_id;
}
function u(e) {
    let { channelId: t, selectedTab: n } = e;
    r.ZP.trackWithMetadata(o.rMx.RTC_PANEL_VIEWED, {
        channel_id: t,
        guild_id: E(t),
        selected_tab: n
    });
}
function c(e) {
    let { channelId: t, userId: n } = e;
    r.ZP.trackWithMetadata(o.rMx.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: t,
        guild_id: E(t),
        ...(0, i.QN)({ userId: n })
    });
}
function l(e) {
    let { channelId: t, userId: n, analyticsLocation: a } = e;
    r.ZP.trackWithMetadata(o.rMx.E2EE_USER_VERIFIED, {
        channel_id: t,
        guild_id: E(t),
        location: a,
        ...(0, i.QN)({ userId: n })
    });
}
function d(e) {
    let { channelId: t, userId: n } = e;
    r.ZP.trackWithMetadata(o.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: E(t),
        ...(0, i.QN)({ userId: n })
    });
}
function _(e) {
    let { channelId: t } = e;
    r.ZP.trackWithMetadata(o.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: E(t)
    });
}
function f() {
    s.default.track(o.rMx.E2EE_SETTINGS_USER_DELETE);
}
function I() {
    s.default.track(o.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}
function S(e) {
    s.default.track(o.rMx.E2EE_PUBLIC_KEY_MISMATCH, { key_version: ''.concat(e) });
}
