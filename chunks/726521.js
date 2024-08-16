n.d(t, {
    I6: function () {
        return g;
    },
    J7: function () {
        return N;
    },
    JM: function () {
        return S;
    },
    WL: function () {
        return m;
    },
    ak: function () {
        return f;
    },
    d$: function () {
        return p;
    },
    eE: function () {
        return A;
    },
    ic: function () {
        return h;
    },
    lt: function () {
        return _;
    },
    pX: function () {
        return T;
    },
    sq: function () {
        return E;
    },
    wk: function () {
        return v;
    },
    zd: function () {
        return I;
    }
});
var r = n(367907),
    i = n(427679),
    a = n(23750),
    s = n(598077),
    o = n(91156),
    l = n(82554),
    u = n(185625),
    c = n(443599),
    d = n(981631);
function _(e, t) {
    O(l.b.GUILD_DISCOVERY, { guild_id: e.id }),
        (0, c.m)(
            {
                name: l.b.GUILD_DISCOVERY,
                record: e
            },
            {},
            t
        );
}
function E(e, t) {
    O(l.b.GUILD_DIRECTORY_ENTRY, {
        channel_id: e.channelId,
        guild_id: e.guildId
    }),
        (0, c.m)(
            {
                name: l.b.GUILD_DIRECTORY_ENTRY,
                record: e
            },
            {},
            t
        );
}
function f(e, t, n) {
    O(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    });
    let r = (0, o.p)(t);
    (0, c.m)(
        {
            name: l.b.MESSAGE,
            record: e
        },
        { variant: r ? '5_dislike_experiment' : void 0 },
        n
    );
}
function h(e, t) {
    let n = i.Z.getStageInstanceByChannel(e.id);
    if (null != n)
        O(l.b.STAGE_CHANNEL, {
            stage_instance_id: n.id,
            channel_id: n.channel_id,
            guild_id: n.guild_id
        }),
            (0, c.m)(
                {
                    name: l.b.STAGE_CHANNEL,
                    record: n
                },
                {},
                t
            );
}
function p(e, t) {
    var n;
    O(l.b.GUILD_SCHEDULED_EVENT, {
        guild_scheduled_event_id: e.id,
        guild_id: e.guild_id,
        channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
    }),
        (0, c.m)(
            {
                name: l.b.GUILD_SCHEDULED_EVENT,
                record: e
            },
            {},
            t
        );
}
function m(e, t) {
    O(l.b.FIRST_DM, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, c.m)(
            {
                name: l.b.FIRST_DM,
                record: e
            },
            {},
            t,
            void 0,
            !1
        );
}
async function I(e, t) {
    try {
        await (0, u.ox)(
            {
                name: l.b.FIRST_DM,
                record: e
            },
            { variant: '_first_dm_ham_v1' }
        ),
            null == t || t();
    } catch {}
}
function T(e, t, n) {
    O(l.b.USER, { reported_user_id: e.id }),
        (0, c.m)(
            {
                name: l.b.USER,
                record: e,
                contextualGuildId: t
            },
            {},
            n,
            void 0,
            !1
        );
}
function g(e, t, n) {
    O(l.b.USER, { reported_user_id: e.id }),
        (0, c.m)(
            {
                name: l.b.USER,
                record: e,
                contextualGuildId: t
            },
            { variant: 'staff' },
            n,
            void 0,
            !1
        );
}
function S(e, t) {
    let n = new s.Z({});
    O(l.BM.USER, { reported_user_id: n.id }),
        (0, c.m)(
            {
                name: l.BM.USER,
                record: n
            },
            {},
            t,
            void 0,
            !1,
            !1,
            e
        );
}
function A(e, t) {
    let n = new a.ZP({});
    O(l.BM.MESSAGE, {
        message_id: void 0,
        channel_id: void 0
    }),
        (0, c.m)(
            {
                name: l.BM.MESSAGE,
                record: n
            },
            {},
            t,
            void 0,
            !1,
            !1,
            e
        );
}
async function N(e, t, n) {
    try {
        await (0, u.ox)(
            {
                name: l.b.MESSAGE,
                record: e
            },
            { variant: 'safety_alerts_headless_v1' }
        ),
            null == t || t();
    } catch {
        null == n || n();
    }
}
function v(e, t) {
    O(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, c.m)(
            {
                name: l.b.MESSAGE,
                record: e
            },
            { variant: 'safety_alerts_v1' },
            t
        );
}
function O(e, t) {
    r.ZP.trackWithMetadata(d.rMx.IAR_MODAL_OPEN, {
        report_type: e,
        ...t
    });
}
