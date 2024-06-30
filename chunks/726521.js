n.d(t, {
    J7: function () {
        return N;
    },
    JM: function () {
        return S;
    },
    WL: function () {
        return I;
    },
    ak: function () {
        return h;
    },
    d$: function () {
        return m;
    },
    eE: function () {
        return A;
    },
    ic: function () {
        return p;
    },
    lt: function () {
        return E;
    },
    pX: function () {
        return g;
    },
    sq: function () {
        return f;
    },
    wk: function () {
        return v;
    },
    zd: function () {
        return T;
    }
});
var r = n(367907), i = n(427679), a = n(23750), o = n(598077), s = n(91156), l = n(545197), u = n(82554), c = n(185625), d = n(443599), _ = n(981631);
function E(e, t) {
    O(u.b.GUILD_DISCOVERY, { guild_id: e.id }), (0, d.m)({
        name: u.b.GUILD_DISCOVERY,
        record: e
    }, {}, t);
}
function f(e, t) {
    O(u.b.GUILD_DIRECTORY_ENTRY, {
        channel_id: e.channelId,
        guild_id: e.guildId
    }), (0, d.m)({
        name: u.b.GUILD_DIRECTORY_ENTRY,
        record: e
    }, {}, t);
}
function h(e, t, n) {
    let r;
    O(u.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    });
    let i = (0, s.p)(t), a = (0, l.l)(t);
    a && i ? r = '6a_spam_reorder_with_dislikes_experiment' : a ? r = '6b_spam_reorder_experiment' : i && (r = '5_dislike_experiment'), (0, d.m)({
        name: u.b.MESSAGE,
        record: e
    }, { variant: r }, n);
}
function p(e, t) {
    let n = i.Z.getStageInstanceByChannel(e.id);
    if (null != n)
        O(u.b.STAGE_CHANNEL, {
            stage_instance_id: n.id,
            channel_id: n.channel_id,
            guild_id: n.guild_id
        }), (0, d.m)({
            name: u.b.STAGE_CHANNEL,
            record: n
        }, {}, t);
}
function m(e, t) {
    var n;
    O(u.b.GUILD_SCHEDULED_EVENT, {
        guild_scheduled_event_id: e.id,
        guild_id: e.guild_id,
        channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
    }), (0, d.m)({
        name: u.b.GUILD_SCHEDULED_EVENT,
        record: e
    }, {}, t);
}
function I(e, t) {
    O(u.b.FIRST_DM, {
        message_id: e.id,
        channel_id: e.channel_id
    }), (0, d.m)({
        name: u.b.FIRST_DM,
        record: e
    }, {}, t, void 0, !1);
}
async function T(e, t) {
    try {
        await (0, c.ox)({
            name: u.b.FIRST_DM,
            record: e
        }, { variant: '_first_dm_ham_v1' }), null == t || t();
    } catch {
    }
}
function g(e, t, n) {
    O(u.b.USER, { reported_user_id: e.id }), (0, d.m)({
        name: u.b.USER,
        record: e,
        contextualGuildId: t
    }, {}, n, void 0, !1);
}
function S(e, t) {
    let n = new o.Z({});
    O(u.B.USER, { reported_user_id: n.id }), (0, d.m)({
        name: u.B.USER,
        record: n
    }, {}, t, void 0, !1, !1, e);
}
function A(e, t) {
    let n = new a.ZP({});
    O(u.B.MESSAGE, {
        message_id: void 0,
        channel_id: void 0
    }), (0, d.m)({
        name: u.B.MESSAGE,
        record: n
    }, {}, t, void 0, !1, !1, e);
}
async function N(e, t, n) {
    try {
        await (0, c.ox)({
            name: u.b.MESSAGE,
            record: e
        }, { variant: 'safety_alerts_headless_v1' }), null == t || t();
    } catch {
        null == n || n();
    }
}
function v(e, t) {
    O(u.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }), (0, d.m)({
        name: u.b.MESSAGE,
        record: e
    }, { variant: 'safety_alerts_v1' }, t);
}
function O(e, t) {
    r.ZP.trackWithMetadata(_.rMx.IAR_MODAL_OPEN, {
        report_type: e,
        ...t
    });
}
