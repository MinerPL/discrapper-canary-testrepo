n.d(t, {
    Lh: function () {
        return c;
    },
    MR: function () {
        return p;
    },
    g1: function () {
        return _;
    },
    iD: function () {
        return d;
    },
    ir: function () {
        return E;
    },
    s4: function () {
        return f;
    },
    sm: function () {
        return h;
    }
}),
    n(757143);
var r = n(633302),
    i = n(695346),
    a = n(314897),
    s = n(626135),
    o = n(981631),
    l = n(468788),
    u = n(689938);
function c(e) {
    return null == e.id ? r.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
function d(e, t, n, r) {
    var i, a, s;
    let o;
    return (o = r ? (e ? u.Z.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : u.Z.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL) : e ? u.Z.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : u.Z.Messages.REACT_WITH_COUNT_A11Y_LABEL).format({
        reactions: t,
        emojiName: null !== (s = null === (a = c(n)) || void 0 === a ? void 0 : null === (i = a.replace(/[:_]/g, ' ')) || void 0 === i ? void 0 : i.trim()) && void 0 !== s ? s : ''
    });
}
function _(e) {
    var t, n, r;
    return {
        id: null !== (t = e.id) && void 0 !== t ? t : null,
        name: null !== (r = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== r ? r : '',
        animated: !!e.animated
    };
}
function E(e, t) {
    if (null != t.id) {
        let n = null != e.id ? ''.concat(e.id) : e.id;
        return ''.concat(t.id) === n;
    }
    return null == e.id && t.name === e.name;
}
function f(e) {
    if (e.isThread()) return o.jXE.THREAD_TEXT_AREA;
    if (e.isForumPost()) return o.jXE.FORUM_CHANNEL_TEXT_AREA;
    if (e.isGuildVocal()) return o.jXE.TEXT_IN_VOICE;
    return o.jXE.CHANNEL_TEXT_AREA;
}
function h(e) {
    let { userId: t, optimistic: n } = e,
        r = a.default.getId() === t;
    return (!n || !!r) && !0;
}
function p(e, t) {
    i.fz.updateSetting(e),
        s.default.track(o.rMx.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: l.I.ACCOUNT,
            reaction_notifications: e,
            reaction_notifications_old: t
        });
}
