n.d(t, {
    $s: function () {
        return N;
    },
    Sg: function () {
        return S;
    },
    ow: function () {
        return m;
    },
    qn: function () {
        return T;
    },
    rQ: function () {
        return r;
    },
    t$: function () {
        return A;
    },
    tM: function () {
        return I;
    }
}), n(47120);
var r, i, a = n(544891), o = n(570140), s = n(904245), l = n(911969), u = n(346479), c = n(314897), d = n(709054), _ = n(603721), E = n(282397), f = n(622449), h = n(96989), p = n(981631);
function m(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 900000;
}
let I = async e => {
        let {
                componentType: t,
                messageId: n,
                messageFlags: r,
                customId: i,
                componentId: o,
                applicationId: s,
                channelId: f,
                guildId: h,
                localState: m
            } = e, I = d.default.fromTimestamp(Date.now());
        if (!E.Z.canQueueInteraction(n, I))
            return;
        await u.Z.unarchiveThreadIfNecessary(f), (0, _.kz)(I, {
            messageId: n,
            data: {
                interactionType: l.B8.MESSAGE_COMPONENT,
                customId: i,
                componentId: o
            },
            onFailure: (e, t) => g(f, e, t)
        }), null != m && (0, _.B0)(n, I, m, o);
        let T = {
            type: l.B8.MESSAGE_COMPONENT,
            nonce: I,
            guild_id: h,
            channel_id: f,
            message_flags: r,
            message_id: n,
            application_id: s,
            session_id: c.default.getSessionId(),
            data: {
                component_type: t,
                custom_id: i,
                ...function (e) {
                    if (null == e)
                        return null;
                    if (e.type === l.re.STRING_SELECT || e.type === l.re.INPUT_TEXT)
                        return e;
                    let t = e.selectedOptions.map(e => e.value);
                    return {
                        type: e.type,
                        values: t
                    };
                }(m)
            }
        };
        await a.tn.post({
            url: p.ANM.INTERACTIONS,
            body: T,
            timeout: 3000
        }, e => {
            S(I, e, s, f, h);
        });
    }, T = async e => {
        let {
                applicationId: t,
                channelId: n,
                guildId: r,
                command: i
            } = e, o = d.default.fromTimestamp(Date.now()), s = null == i ? { type: l.yU.PRIMARY_ENTRY_POINT } : {
                application_id: t,
                name: i.name,
                type: i.type,
                version: i.version,
                id: i.id
            }, u = {
                type: l.B8.APPLICATION_COMMAND,
                nonce: o,
                guild_id: r,
                channel_id: n,
                application_id: t,
                session_id: c.default.getSessionId(),
                data: s
            };
        await a.tn.post({
            url: p.ANM.INTERACTIONS,
            body: u,
            timeout: 3000
        }, e => {
            S(o, e, t, n, r);
        });
    }, g = (e, t, n) => {
        null == n && null != t && s.Z.sendClydeError(e, t);
    }, S = (e, t, n, r, i) => {
        if (!t.ok) {
            if (!t.hasErr) {
                var a;
                if (t.status >= 400 && t.status < 500 && t.body) {
                    if (t.body.code === p.evJ.INVALID_FORM_BODY && t.body.errors) {
                        let a = (0, h.e)(t.body.errors);
                        null != a && ('INTERACTION_APPLICATION_COMMAND_INVALID_VERSION' === a.code || 'INTERACTION_APPLICATION_COMMAND_INVALID' === a.code) && o.Z.dispatch({
                            type: 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION',
                            applicationId: n,
                            channelId: r,
                            guildId: null != i ? i : null
                        }), (0, _.yr)(e, void 0, null == a ? void 0 : a.message);
                        return;
                    }
                    (0, _.yr)(e, void 0, t.body.message);
                    return;
                }
                (0, _.yr)(e, null === (a = t.body) || void 0 === a ? void 0 : a.code);
                return;
            }
            (0, _.yr)(e);
        }
    };
(i = r || (r = {}))[i.SENDING = 0] = 'SENDING', i[i.CREATED = 1] = 'CREATED', i[i.FAILED = 2] = 'FAILED', i[i.TIMED_OUT = 3] = 'TIMED_OUT', i[i.EPHEMERAL_SUCCESS = 4] = 'EPHEMERAL_SUCCESS';
let A = (e, t) => {
    var n;
    let r = null == t ? void 0 : t.state, i = e.state === p.yb.SENT && m(e.id) < Date.now();
    let a = e.state === p.yb.SEND_FAILED && (null == (n = e.id) || '' === n || Number.isNaN(n) ? Date.now() : d.default.extractTimestamp(n) + 3000) < Date.now(), o = (null == t ? void 0 : t.data.interactionType) === l.B8.APPLICATION_COMMAND, s = e.isCommandType();
    if (o && r === f.F.QUEUED || s && e.state === p.yb.SENDING && null != t)
        return 0;
    if (o && r === f.F.CREATED || e.hasFlag(p.iLy.LOADING) && !i)
        return 1;
    if (null != e.interaction && e.hasFlag(p.iLy.LOADING) && i)
        return 3;
    else if (null != e.interaction && !e.hasFlag(p.iLy.LOADING) && a)
        return 3;
    else if (s && e.state === p.yb.SEND_FAILED)
        return 2;
    else if (null != e.interaction && e.hasFlag(p.iLy.EPHEMERAL))
        return 4;
};
function N(e) {
    let t = e.options;
    for (; (null == t ? void 0 : t.length) === 1 && (t[0].type === l.jw.SUB_COMMAND_GROUP || t[0].type === l.jw.SUB_COMMAND);)
        t = t[0].options;
    for (let e of null != t ? t : [])
        if (e.type === l.jw.ATTACHMENT)
            return !1;
    return !0;
}
