n.d(t, {
    B0: function () {
        return E;
    },
    M4: function () {
        return r;
    },
    Nt: function () {
        return _;
    },
    RV: function () {
        return I;
    },
    VP: function () {
        return R;
    },
    X: function () {
        return O;
    },
    ZD: function () {
        return h;
    },
    fw: function () {
        return p;
    },
    hs: function () {
        return g;
    },
    i_: function () {
        return C;
    },
    k8: function () {
        return v;
    },
    ox: function () {
        return f;
    },
    qJ: function () {
        return T;
    },
    yL: function () {
        return m;
    }
}),
    n(411104),
    n(724458),
    n(47120);
var r,
    i,
    a = n(470079),
    s = n(544891),
    o = n(570140),
    l = n(367907),
    u = n(432877),
    c = n(82554),
    d = n(981631);
async function _(e, t) {
    var n;
    let r = A(e),
        i = await s.tn.get({
            url: d.ANM.GET_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0
        });
    return null !== (n = i.body) && void 0 !== n ? n : JSON.parse(i.text);
}
async function E(e, t) {
    var n;
    let r = S(e),
        i = await s.tn.get({
            url: d.ANM.GET_UNAUTHENTICATED_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0
        });
    return null !== (n = i.body) && void 0 !== n ? n : JSON.parse(i.text);
}
async function f(e, t) {
    let n = A(e),
        r = await _(e, t);
    await s.tn.post({
        url: d.ANM.SUBMIT_REPORT_MENU(n),
        body: N(r, e, [
            {
                nodeRef: r.root_node_id,
                destination: ['', r.success_node_id]
            }
        ])
    });
}
function h(e, t, n) {
    return u.ZP.get('iar_skip_api_report_submit')
        ? Promise.resolve()
        : s.tn.post({
              url: d.ANM.SUBMIT_REPORT_MENU(A(t)),
              body: N(e, t, n)
          });
}
function p(e, t, n, r) {
    if (u.ZP.get('iar_skip_api_report_submit')) return Promise.resolve();
    let i = S(t);
    return s.tn.post({
        url: d.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(i),
        body: N(e, t, n, r)
    });
}
function m(e, t) {
    return s.tn.post({
        url: d.ANM.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
        body: {
            name: e,
            email: t
        }
    });
}
async function I(e, t, n) {
    return (
        await s.tn.post({
            url: d.ANM.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: {
                name: e,
                email: t,
                code: n
            }
        })
    ).body;
}
async function T() {
    return await s.tn.get({ url: d.ANM.DSA_EXPERIMENT_UNAUTHENTICATED });
}
async function g(e) {
    return (
        await s.tn.post({
            url: d.ANM.SUBMIT_REPORT_SECOND_LOOK,
            body: { token: e }
        })
    ).body;
}
function S(e) {
    let t = e.name;
    if (!Object.values(c.BM).includes(t)) throw Error('Invalid report type '.concat(e.name));
    return t;
}
function A(e) {
    let t = e.name;
    if (!Object.values(c.b).includes(t)) throw Error('Invalid report type '.concat(e.name));
    return t;
}
let N = (e, t, n, r) => {
    let { version: i, variant: a, language: s } = e,
        o = {
            channel_id: void 0,
            message_id: void 0,
            stage_instance_id: void 0,
            guild_id: void 0,
            guild_scheduled_event_id: void 0,
            user_id: void 0,
            email_token: void 0
        },
        l = {
            version: i,
            variant: a,
            language: null != s ? s : 'en',
            breadcrumbs: n.map((e) => e.nodeRef),
            elements: n.reduce((e, t) => {
                let { multiSelect: n, textInput: r } = t;
                return {
                    ...e,
                    ...(null != n && { [n.name]: Object.keys(n.state) }),
                    ...Object.fromEntries(
                        Object.entries(null != r ? r : {}).map((e) => {
                            let [t, { value: n }] = e;
                            return [t, n];
                        })
                    )
                };
            }, {})
        };
    if (t.name === c.b.MESSAGE || t.name === c.b.FIRST_DM) {
        let { channel_id: e, id: n } = t.record;
        return {
            ...l,
            ...o,
            name: t.name,
            channel_id: e,
            message_id: n
        };
    }
    if (t.name === c.b.GUILD || t.name === c.b.GUILD_DISCOVERY) {
        let { id: e } = t.record;
        return {
            ...l,
            ...o,
            name: t.name,
            guild_id: e
        };
    }
    if (t.name === c.b.GUILD_DIRECTORY_ENTRY) {
        let { guildId: e, channelId: n } = t.record;
        return {
            ...l,
            ...o,
            name: t.name,
            channel_id: n,
            guild_id: e
        };
    } else if (t.name === c.b.STAGE_CHANNEL) {
        let { id: e, guild_id: n, channel_id: r } = t.record;
        return {
            ...l,
            ...o,
            name: t.name,
            channel_id: r,
            guild_id: n,
            stage_instance_id: e
        };
    } else if (t.name === c.b.GUILD_SCHEDULED_EVENT) {
        let { id: e, guild_id: n } = t.record;
        return {
            ...l,
            ...o,
            name: t.name,
            guild_id: n,
            guild_scheduled_event_id: e
        };
    } else if (t.name === c.b.USER)
        return {
            ...l,
            ...o,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId
        };
    else if (t.name === c.BM.USER)
        return {
            ...l,
            ...o,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
            email_token: r
        };
    else if (t.name === c.BM.MESSAGE)
        return {
            ...l,
            ...o,
            name: t.name,
            message_id: t.record.id,
            email_token: r
        };
    return null;
};
function v(e, t, n) {
    l.ZP.trackWithMetadata(d.rMx.IAR_MODAL_CLOSE, {
        report_type: e.name,
        report_id: n,
        navigation_history: t,
        message_id: e.name === c.b.MESSAGE || e.name === c.b.FIRST_DM ? e.record.id : void 0,
        stage_instance_id: e.name === c.b.STAGE_CHANNEL ? e.record.id : void 0,
        guild_scheduled_event_id: e.name === c.b.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
        guild_id: e.name === c.b.GUILD || e.name === c.b.GUILD_DISCOVERY ? e.record.id : e.name === c.b.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === c.b.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
        channel_id: e.name === c.b.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === c.b.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0
    });
}
function O(e, t) {
    o.Z.dispatch({
        type: 'IN_APP_REPORTS_SHOW_FEEDBACK',
        reportId: t,
        reportType: e.name
    });
}
function R(e, t, n, r, i) {
    return (
        e.some((e) => {
            var t;
            return !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '' || !(null == r ? void 0 : null === (t = r[e.name]) || void 0 === t ? void 0 : t.isValid));
        }) ||
        t.some((e) => !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '')) ||
        ((null == n ? void 0 : n.should_submit_data) === !0 && (null == i || 0 === Object.keys(i).length))
    );
}
function C(e, t, n) {
    return a.useCallback(
        (r) => (i) => {
            l.ZP.trackWithMetadata(d.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                report_id: n,
                report_type: e.name,
                report_subtype: t,
                settings_upsells_type: r,
                action: i
            });
        },
        [n, e, t]
    );
}
((i = r || (r = {})).SETTINGS_UPSELLS_VIEWED = 'SETTINGS_UPSELLS_VIEWED'), (i.SETTINGS_UPSELLS_APPLY_CLICKED = 'SETTINGS_UPSELLS_APPLY_CLICKED');
