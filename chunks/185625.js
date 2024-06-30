n.d(t, {
    B0: function () {
        return u;
    },
    Nt: function () {
        return l;
    },
    RV: function () {
        return f;
    },
    VP: function () {
        return A;
    },
    X: function () {
        return S;
    },
    ZD: function () {
        return d;
    },
    fw: function () {
        return _;
    },
    hs: function () {
        return p;
    },
    k8: function () {
        return g;
    },
    ox: function () {
        return c;
    },
    qJ: function () {
        return h;
    },
    yL: function () {
        return E;
    }
}), n(411104), n(724458), n(47120);
var r = n(544891), i = n(570140), a = n(367907), o = n(82554), s = n(981631);
async function l(e, t) {
    var n;
    let i = I(e), a = await r.tn.get({
            url: s.ANM.GET_REPORT_MENU(i),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0
        });
    return null !== (n = a.body) && void 0 !== n ? n : JSON.parse(a.text);
}
async function u(e, t) {
    var n;
    let i = m(e), a = await r.tn.get({
            url: s.ANM.GET_UNAUTHENTICATED_REPORT_MENU(i),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0
        });
    return null !== (n = a.body) && void 0 !== n ? n : JSON.parse(a.text);
}
async function c(e, t) {
    let n = I(e), i = await l(e, t);
    await r.tn.post({
        url: s.ANM.SUBMIT_REPORT_MENU(n),
        body: T(i, e, [{
                nodeRef: i.root_node_id,
                destination: [
                    '',
                    i.success_node_id
                ]
            }])
    });
}
function d(e, t, n) {
    return r.tn.post({
        url: s.ANM.SUBMIT_REPORT_MENU(I(t)),
        body: T(e, t, n)
    });
}
function _(e, t, n, i) {
    let a = m(t);
    return r.tn.post({
        url: s.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(a),
        body: T(e, t, n, i)
    });
}
function E(e, t) {
    return r.tn.post({
        url: s.ANM.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
        body: {
            name: e,
            email: t
        }
    });
}
async function f(e, t, n) {
    return (await r.tn.post({
        url: s.ANM.VERIFY_UNAUTHENTICATED_REPORT(e),
        body: {
            name: e,
            email: t,
            code: n
        }
    })).body;
}
async function h() {
    return await r.tn.get({ url: s.ANM.DSA_EXPERIMENT_UNAUTHENTICATED });
}
async function p(e) {
    return (await r.tn.post({
        url: s.ANM.SUBMIT_REPORT_SECOND_LOOK,
        body: { token: e }
    })).body;
}
function m(e) {
    let t = e.name;
    if (!Object.values(o.B).includes(t))
        throw Error('Invalid report type '.concat(e.name));
    return t;
}
function I(e) {
    let t = e.name;
    if (!Object.values(o.b).includes(t))
        throw Error('Invalid report type '.concat(e.name));
    return t;
}
let T = (e, t, n, r) => {
    let {
            version: i,
            variant: a,
            language: s
        } = e, l = {
            channel_id: void 0,
            message_id: void 0,
            stage_instance_id: void 0,
            guild_id: void 0,
            guild_scheduled_event_id: void 0,
            user_id: void 0,
            email_token: void 0
        }, u = {
            version: i,
            variant: a,
            language: null != s ? s : 'en',
            breadcrumbs: n.map(e => e.nodeRef),
            elements: n.reduce((e, t) => {
                let {
                    multiSelect: n,
                    textInput: r
                } = t;
                return {
                    ...e,
                    ...null != n && { [n.name]: Object.keys(n.state) },
                    ...Object.fromEntries(Object.entries(null != r ? r : {}).map(e => {
                        let [t, {value: n}] = e;
                        return [
                            t,
                            n
                        ];
                    }))
                };
            }, {})
        };
    if (t.name === o.b.MESSAGE || t.name === o.b.FIRST_DM) {
        let {
            channel_id: e,
            id: n
        } = t.record;
        return {
            ...u,
            ...l,
            name: t.name,
            channel_id: e,
            message_id: n
        };
    }
    if (t.name === o.b.GUILD || t.name === o.b.GUILD_DISCOVERY) {
        let {id: e} = t.record;
        return {
            ...u,
            ...l,
            name: t.name,
            guild_id: e
        };
    }
    if (t.name === o.b.GUILD_DIRECTORY_ENTRY) {
        let {
            guildId: e,
            channelId: n
        } = t.record;
        return {
            ...u,
            ...l,
            name: t.name,
            channel_id: n,
            guild_id: e
        };
    } else if (t.name === o.b.STAGE_CHANNEL) {
        let {
            id: e,
            guild_id: n,
            channel_id: r
        } = t.record;
        return {
            ...u,
            ...l,
            name: t.name,
            channel_id: r,
            guild_id: n,
            stage_instance_id: e
        };
    } else if (t.name === o.b.GUILD_SCHEDULED_EVENT) {
        let {
            id: e,
            guild_id: n
        } = t.record;
        return {
            ...u,
            ...l,
            name: t.name,
            guild_id: n,
            guild_scheduled_event_id: e
        };
    } else if (t.name === o.b.USER)
        return {
            ...u,
            ...l,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId
        };
    else if (t.name === o.B.USER)
        return {
            ...u,
            ...l,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
            email_token: r
        };
    else if (t.name === o.B.MESSAGE)
        return {
            ...u,
            ...l,
            name: t.name,
            message_id: t.record.id,
            email_token: r
        };
    return null;
};
function g(e, t, n) {
    a.ZP.trackWithMetadata(s.rMx.IAR_MODAL_CLOSE, {
        report_type: e.name,
        report_id: n,
        navigation_history: t,
        message_id: e.name === o.b.MESSAGE || e.name === o.b.FIRST_DM ? e.record.id : void 0,
        stage_instance_id: e.name === o.b.STAGE_CHANNEL ? e.record.id : void 0,
        guild_scheduled_event_id: e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
        guild_id: e.name === o.b.GUILD || e.name === o.b.GUILD_DISCOVERY ? e.record.id : e.name === o.b.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
        channel_id: e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === o.b.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0
    });
}
function S(e, t) {
    i.Z.dispatch({
        type: 'IN_APP_REPORTS_SHOW_FEEDBACK',
        reportId: t,
        reportType: e.name
    });
}
function A(e, t, n, r, i) {
    return e.some(e => {
        var t;
        return !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '' || !(null == r ? void 0 : null === (t = r[e.name]) || void 0 === t ? void 0 : t.isValid));
    }) || t.some(e => !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '')) || (null == n ? void 0 : n.should_submit_data) === !0 && (null == i || 0 === Object.keys(i).length);
}
