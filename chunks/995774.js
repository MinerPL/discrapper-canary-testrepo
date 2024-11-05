n.d(t, {
    Lh: function () {
        return c;
    },
    MR: function () {
        return m;
    },
    g1: function () {
        return f;
    },
    iD: function () {
        return d;
    },
    ir: function () {
        return _;
    },
    s4: function () {
        return h;
    },
    sm: function () {
        return p;
    }
}),
    n(757143);
var r = n(633302),
    i = n(695346),
    a = n(314897),
    s = n(626135),
    o = n(981631),
    l = n(468788),
    u = n(388032);
function c(e) {
    return null == e.id ? r.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
function d(e, t, n, r) {
    var i, a, s;
    let o;
    return (
        (o = r ? (e ? u.t.i9DXqK : u.t['Z/l+qq']) : e ? u.t.CLuzw8 : u.t.PirBBA),
        u.intl.formatToPlainString(o, {
            reactions: t,
            emojiName: null !== (s = null === (a = c(n)) || void 0 === a ? void 0 : null === (i = a.replace(/[:_]/g, ' ')) || void 0 === i ? void 0 : i.trim()) && void 0 !== s ? s : ''
        })
    );
}
function f(e) {
    var t, n, r;
    return {
        id: null !== (t = e.id) && void 0 !== t ? t : null,
        name: null !== (r = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== r ? r : '',
        animated: !!e.animated
    };
}
function _(e, t) {
    if (null != t.id) {
        let n = null != e.id ? ''.concat(e.id) : e.id;
        return ''.concat(t.id) === n;
    }
    return null == e.id && t.name === e.name;
}
function h(e) {
    if (e.isThread()) return o.jXE.THREAD_TEXT_AREA;
    if (e.isForumPost()) return o.jXE.FORUM_CHANNEL_TEXT_AREA;
    if (e.isGuildVocal()) return o.jXE.TEXT_IN_VOICE;
    return o.jXE.CHANNEL_TEXT_AREA;
}
function p(e) {
    let { userId: t, optimistic: n } = e,
        r = a.default.getId() === t;
    return (!n || !!r) && !0;
}
function m(e, t) {
    i.fz.updateSetting(e),
        s.default.track(o.rMx.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: l.I.ACCOUNT,
            reaction_notifications: e,
            reaction_notifications_old: t
        });
}
