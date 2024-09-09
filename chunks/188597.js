n.d(t, {
    $s: function () {
        return R;
    },
    A0: function () {
        return v;
    },
    Sg: function () {
        return N;
    },
    ow: function () {
        return S;
    },
    rQ: function () {
        return r;
    },
    t$: function () {
        return O;
    },
    tM: function () {
        return g;
    }
}),
    n(47120);
var r,
    i,
    a = n(544891),
    s = n(570140),
    o = n(904245),
    l = n(911969),
    u = n(812206),
    c = n(375824),
    d = n(346479),
    _ = n(314897),
    E = n(709054),
    f = n(603721),
    h = n(282397),
    p = n(622449),
    I = n(96989),
    m = n(981631),
    T = n(689938);
function S(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : E.default.extractTimestamp(e) + 900000;
}
let g = async (e) => {
        let { componentType: t, messageId: n, messageFlags: r, customId: i, componentId: s, applicationId: o, channelId: u, guildId: c, localState: p } = e,
            I = E.default.fromTimestamp(Date.now());
        if (!h.ZP.canQueueInteraction(n, I)) return;
        await d.Z.unarchiveThreadIfNecessary(u),
            (0, f.kz)(I, {
                messageId: n,
                data: {
                    interactionType: l.B8.MESSAGE_COMPONENT,
                    customId: i,
                    componentId: s
                },
                onFailure: (e, t) => A(u, e, t)
            }),
            null != p && (0, f.B0)(n, I, p, s);
        let T = {
            type: l.B8.MESSAGE_COMPONENT,
            nonce: I,
            guild_id: c,
            channel_id: u,
            message_flags: r,
            message_id: n,
            application_id: o,
            session_id: _.default.getSessionId(),
            data: {
                component_type: t,
                custom_id: i,
                ...(function (e) {
                    if (null == e) return null;
                    if (e.type === l.re.STRING_SELECT || e.type === l.re.INPUT_TEXT) return e;
                    let t = e.selectedOptions.map((e) => e.value);
                    return {
                        type: e.type,
                        values: t
                    };
                })(p)
            }
        };
        await a.tn.post(
            {
                url: m.ANM.INTERACTIONS,
                body: T,
                timeout: 3000
            },
            (e) => {
                N(I, e, o, u, c);
            }
        );
    },
    A = (e, t, n) => {
        null == n && null != t && o.Z.sendClydeError(e, t);
    },
    N = (e, t, n, r, i) => {
        if (!t.ok) {
            if (!t.hasErr) {
                var a;
                if (t.status >= 400 && t.status < 500 && t.body) {
                    if (t.body.code === m.evJ.INVALID_FORM_BODY && t.body.errors) {
                        let a = (0, I.e)(t.body.errors);
                        null != a &&
                            ('INTERACTION_APPLICATION_COMMAND_INVALID_VERSION' === a.code || 'INTERACTION_APPLICATION_COMMAND_INVALID' === a.code) &&
                            s.Z.dispatch({
                                type: 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION',
                                applicationId: n,
                                channelId: r,
                                guildId: null != i ? i : null
                            }),
                            (0, f.yr)(e, void 0, null == a ? void 0 : a.message);
                        return;
                    }
                    (0, f.yr)(e, t.body.code, t.body.message, t.status);
                    return;
                }
                (0, f.yr)(e, null === (a = t.body) || void 0 === a ? void 0 : a.code);
                return;
            }
            (0, f.yr)(e);
        }
    };
((i = r || (r = {}))[(i.SENDING = 0)] = 'SENDING'), (i[(i.CREATED = 1)] = 'CREATED'), (i[(i.FAILED = 2)] = 'FAILED'), (i[(i.TIMED_OUT = 3)] = 'TIMED_OUT'), (i[(i.EPHEMERAL_SUCCESS = 4)] = 'EPHEMERAL_SUCCESS');
let O = (e, t) => {
    var n;
    let r = null == t ? void 0 : t.state,
        i = e.state === m.yb.SENT && S(e.id) < Date.now();
    let a = e.state === m.yb.SEND_FAILED && (null == (n = e.id) || '' === n || Number.isNaN(n) ? Date.now() : E.default.extractTimestamp(n) + 3000) < Date.now(),
        s = (null == t ? void 0 : t.data.interactionType) === l.B8.APPLICATION_COMMAND,
        o = e.isCommandType();
    if ((s && r === p.F.QUEUED) || (o && e.state === m.yb.SENDING && null != t)) return 0;
    if ((s && r === p.F.CREATED) || (e.hasFlag(m.iLy.LOADING) && !i)) return 1;
    if (null != e.interaction && e.hasFlag(m.iLy.LOADING) && i) return 3;
    else if (null != e.interaction && !e.hasFlag(m.iLy.LOADING) && a) return 3;
    else if (o && e.state === m.yb.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(m.iLy.EPHEMERAL)) return 4;
};
function R(e) {
    let t = e.options;
    for (; (null == t ? void 0 : t.length) === 1 && (t[0].type === l.jw.SUB_COMMAND_GROUP || t[0].type === l.jw.SUB_COMMAND); ) t = t[0].options;
    for (let e of null != t ? t : []) if (e.type === l.jw.ATTACHMENT) return !1;
    return !0;
}
function v(e, t) {
    switch (e) {
        case c.Z.ReasonCodes.TIMEOUT:
            let n = u.Z.getApplication(t);
            if (null != n) return T.Z.Messages.INTERACTION_FAIL_TIMEOUT.format({ applicationName: n.name });
            return T.Z.Messages.INTERACTION_FAIL_TIMEOUT_GENERIC;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
    }
}
