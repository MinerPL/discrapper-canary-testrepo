n.d(t, {
    X9: function () {
        return v;
    },
    b8: function () {
        return L;
    },
    hz: function () {
        return R;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var l = n(470079),
    u = n(512722),
    i = n.n(u),
    r = n(442837),
    a = n(544891),
    o = n(570140),
    d = n(911969),
    s = n(81897),
    c = n(155268),
    E = n(603721),
    T = n(314897),
    _ = n(592125),
    I = n(271383),
    S = n(914010),
    C = n(768581),
    f = n(70956),
    p = n(709054),
    N = n(970184),
    m = n(471073),
    g = n(892902),
    O = n(981631),
    M = n(689938);
let A = (e) => {
    let t = !0;
    return (
        e.forEach((e) => {
            !e() && (t = !1);
        }),
        t
    );
};
function R(e) {
    var t;
    let n = (0, N.CJ)(),
        l = null == n ? void 0 : null === (t = n.modal) || void 0 === t ? void 0 : t.components[0];
    return (null == l ? void 0 : l.type) === d.re.ACTION_ROW && l.components[0].id === e;
}
function h(e) {
    return l.useMemo(() => {
        let t = S.Z.getGuildId(),
            n = null != t && null != e.bot ? I.ZP.getMember(t, e.bot.id) : void 0,
            l = C.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0
            }),
            u = null != n && null != e.bot ? e.bot.username : e.name;
        return {
            applicationIconURL: l,
            applicationName: u,
            applicationBaseUrl: (0, c.Z)(e.id)
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function v(e, t) {
    let { application: n, customId: u, components: c } = e,
        I = (0, s.Z)(),
        [S, C] = l.useState(null),
        [N, g] = l.useState(null),
        R = (0, r.e7)([m.Z], () => m.Z.getModalState(N), [N]),
        v = l.useRef(new Set()),
        L = l.useCallback(() => {
            C(null),
                g(null),
                A(v.current) &&
                    g(
                        (function (e, t) {
                            let n = p.default.fromTimestamp(Date.now()),
                                l = e.channelId,
                                u = _.Z.getChannel(l);
                            i()(null != u, 'expected channel');
                            let r = Z(e.customId, e.components);
                            (0, E.kz)(n, { data: { interactionType: d.B8.MODAL_SUBMIT } });
                            let o = () => {
                                (null == t || !t.aborted) &&
                                    a.tn
                                        .post({
                                            url: O.ANM.INTERACTIONS,
                                            body: {
                                                type: d.B8.MODAL_SUBMIT,
                                                application_id: e.application.id,
                                                channel_id: u.id,
                                                guild_id: u.guild_id,
                                                data: {
                                                    id: e.id,
                                                    custom_id: e.customId,
                                                    components: r
                                                },
                                                session_id: T.default.getSessionId(),
                                                nonce: n
                                            },
                                            signal: t
                                        })
                                        .catch((e) => {
                                            429 === e.status ? setTimeout(o, e.body.retry_after * f.Z.Millis.SECOND) : (0, E.yr)(n);
                                        });
                            };
                            return o(), n;
                        })(e, I)
                    );
        }, [I, e]);
    l.useEffect(() => {
        R === m.i.SUCCEEDED &&
            (o.Z.dispatch({
                type: 'CLEAR_INTERACTION_MODAL_STATE',
                customId: u
            }),
            t()),
            R === m.i.ERRORED && C(M.Z.Messages.INTERACTION_FORM_SUBMISSION_FAILED);
    }, [N, R, t, u]);
    let { applicationIconURL: y, applicationName: b } = h(n);
    return {
        components: c,
        applicationIconURL: y,
        applicationName: b,
        submissionState: R,
        error: S,
        validators: v.current,
        onSubmit: L
    };
}
function L(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: l, applicationName: u, applicationBaseUrl: r } = h(t),
        a = _.Z.getChannel(e.channelId);
    i()(null != a, 'channel should not be null');
    let o = {
        instance_id: ''.concat(e.channelId, ':').concat(t.id, ':').concat(n),
        custom_id: n,
        channel_id: e.channelId
    };
    null != a.guild_id && '' !== a.guild_id && (o.guild_id = a.guild_id);
    let d = new URL(null != r ? r : '');
    return (
        (d.pathname = e.iframePath),
        {
            applicationIconURL: l,
            applicationName: u,
            applicationBaseUrl: r,
            queryParams: o,
            iframeUrl: d.toString()
        }
    );
}
let Z = (e, t) =>
    t.map((t) => {
        switch (t.type) {
            case d.re.ACTION_ROW:
                return {
                    type: t.type,
                    components: Z(e, t.components)
                };
            case d.re.INPUT_TEXT: {
                let n = g.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null
                };
            }
            case d.re.STRING_SELECT: {
                let n = g.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.values : null
                };
            }
            default:
                i()(!1, 'unreachable');
        }
    });
