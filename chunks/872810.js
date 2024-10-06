n.d(t, {
    L6: function () {
        return G;
    },
    Rc: function () {
        return w;
    },
    WH: function () {
        return R;
    },
    aP: function () {
        return M;
    },
    dV: function () {
        return x;
    },
    g: function () {
        return b;
    },
    iV: function () {
        return D;
    },
    n9: function () {
        return P;
    },
    pR: function () {
        return y;
    },
    rn: function () {
        return L;
    },
    tK: function () {
        return v;
    },
    xc: function () {
        return U;
    }
});
var r = n(512722),
    i = n.n(r),
    a = n(990547),
    s = n(544891),
    o = n(570140),
    l = n(258609),
    u = n(569545),
    c = n(525925),
    d = n(522474),
    _ = n(199902),
    E = n(314897),
    f = n(592125),
    h = n(430824),
    p = n(944486),
    I = n(979651),
    m = n(934415),
    T = n(70956),
    S = n(557457),
    g = n(573261);
n(26151), n(493683);
var A = n(475179);
n(287734);
var N = n(981631),
    O = n(70722);
function R(e, t, n) {
    o.Z.dispatch({
        type: 'STREAM_START',
        streamType: null != e ? O.lo.GUILD : O.lo.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? N.IlC.OVERLAY : N.IlC.APP,
        ...n
    });
}
function v(e, t) {
    let n = (0, u.V9)(e);
    o.Z.dispatch({
        type: 'STREAM_SET_PAUSED',
        streamKey: n,
        paused: t
    });
}
function C(e, t) {
    let n = f.Z.getChannel(t);
    return i()(null != n, 'Cannot join a null voice channel'), !I.Z.isInChannel(t) && (0, m.rY)(n, I.Z, h.Z);
}
function L(e, t) {
    if (null != l.Z.getRemoteSessionId()) return;
    let { guildId: n, channelId: r } = e;
    if (null != n && C(n, r)) return;
    let i = (0, u.V9)(e),
        a =
            (null == t ? void 0 : t.forceMultiple) ||
            _.Z.getAllActiveStreamsForChannel(r).filter((e) => {
                let { ownerId: t } = e;
                return t !== E.default.getId();
            }).length >= 2;
    o.Z.dispatch({
        type: 'STREAM_WATCH',
        streamKey: i,
        allowMultiple: a
    }),
        !a && (null == t || !t.noFocus) && A.Z.selectParticipant(e.channelId, i);
}
function y(e, t) {
    o.Z.dispatch({
        type: 'STREAM_UPDATE_SELF_HIDDEN',
        channelId: e,
        selfStreamHidden: t
    });
}
function D(e, t) {
    let { guildId: n, channelId: r } = e;
    if (null != n && C(n, r)) return;
    L(e, t);
    let i = d.Z.getWindowOpen(N.KJ3.CHANNEL_CALL_POPOUT),
        a = p.Z.getVoiceChannelId();
    if (!i || a !== r) (0, c.Z)(e);
}
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    M(e, t),
        o.Z.dispatch({
            type: 'STREAM_STOP',
            streamKey: e,
            appContext: __OVERLAY__ ? N.IlC.OVERLAY : N.IlC.APP
        });
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    o.Z.dispatch({
        type: 'STREAM_CLOSE',
        streamKey: e,
        canShowFeedback: t
    });
}
async function P(e, t, n) {
    let r = (0, u.V9)({
        streamType: null != e ? O.lo.GUILD : O.lo.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
    });
    o.Z.dispatch({
        type: 'STREAM_PREVIEW_FETCH_START',
        streamKey: r
    });
    try {
        let e = await s.tn.get({
            url: N.ANM.STREAM_PREVIEW(r),
            query: { version: Date.now() },
            oldFormErrors: !0
        });
        o.Z.dispatch({
            type: 'STREAM_PREVIEW_FETCH_SUCCESS',
            streamKey: r,
            previewURL: e.body.url
        });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * T.Z.Millis.SECOND),
            o.Z.dispatch({
                type: 'STREAM_PREVIEW_FETCH_FAIL',
                streamKey: r,
                retryAfter: e
            });
    }
}
async function U(e) {
    try {
        await g.Z.post({
            url: N.ANM.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY }
        });
    } catch (e) {}
}
function w(e) {
    (0, S.Ye)(e.preset, e.resolution, e.frameRate),
        o.Z.dispatch({
            type: 'STREAM_UPDATE_SETTINGS',
            ...e
        });
}
function x(e, t) {
    s.tn.patch({
        url: N.ANM.STREAM(e),
        body: { region: t },
        oldFormErrors: !0
    });
}
function G() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = _.Z.getCurrentUserActiveStream();
    null != t && b((0, u.V9)(t), e);
}
