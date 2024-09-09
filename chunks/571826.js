t.d(n, {
    CW: function () {
        return l;
    },
    DF: function () {
        return I;
    },
    KA: function () {
        return R;
    },
    M1: function () {
        return _;
    },
    PM: function () {
        return f;
    },
    Pn: function () {
        return T;
    },
    Rq: function () {
        return c;
    },
    ih: function () {
        return S;
    },
    s$: function () {
        return d;
    },
    sN: function () {
        return s;
    }
});
var r = t(367907),
    i = t(221292),
    E = t(592125),
    u = t(626135),
    a = t(981631);
function o(e) {
    var n;
    return null === (n = E.Z.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
}
function s(e) {
    let { channelId: n, selectedTab: t } = e;
    r.ZP.trackWithMetadata(a.rMx.RTC_PANEL_VIEWED, {
        channel_id: n,
        guild_id: o(n),
        selected_tab: t
    });
}
function c(e) {
    let { channelId: n, userId: t } = e;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: n,
        guild_id: o(n),
        ...(0, i.QN)({ userId: t })
    });
}
function _(e) {
    let { channelId: n, userId: t, analyticsLocation: E } = e;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFIED, {
        channel_id: n,
        guild_id: o(n),
        location: E,
        ...(0, i.QN)({ userId: t })
    });
}
function l(e) {
    let { channelId: n, userId: t, keyVersion: E, reason: u } = e;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_FAILED, {
        channel_id: n,
        guild_id: o(n),
        failure_reason: u,
        key_version: ''.concat(E),
        ...(0, i.QN)({ userId: t })
    });
}
function d(e) {
    let { channelId: n, userId: t } = e;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: n,
        guild_id: o(n),
        ...(0, i.QN)({ userId: t })
    });
}
function f(e) {
    let { channelId: n } = e;
    r.ZP.trackWithMetadata(a.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: n,
        guild_id: o(n)
    });
}
function S(e) {
    let { channelId: n } = e;
    r.ZP.trackWithMetadata(a.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
        channel_id: n,
        guild_id: o(n)
    });
}
function I() {
    u.default.track(a.rMx.E2EE_SETTINGS_USER_DELETE);
}
function T() {
    u.default.track(a.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}
function R(e) {
    u.default.track(a.rMx.E2EE_PUBLIC_KEY_MISMATCH, { key_version: ''.concat(e) });
}
