n.d(t, {
    Lh: function () {
        return s;
    },
    g1: function () {
        return u;
    },
    iD: function () {
        return l;
    },
    ir: function () {
        return c;
    },
    s4: function () {
        return d;
    },
    sm: function () {
        return _;
    }
}), n(757143);
var r = n(633302), i = n(314897), a = n(981631), o = n(689938);
function s(e) {
    return null == e.id ? r.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
function l(e, t, n, r) {
    var i, a, l;
    let u;
    return (u = r ? e ? o.Z.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : o.Z.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL : e ? o.Z.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : o.Z.Messages.REACT_WITH_COUNT_A11Y_LABEL).format({
        reactions: t,
        emojiName: null !== (l = null === (a = s(n)) || void 0 === a ? void 0 : null === (i = a.replace(/[:_]/g, ' ')) || void 0 === i ? void 0 : i.trim()) && void 0 !== l ? l : ''
    });
}
function u(e) {
    var t, n, r;
    return {
        id: null !== (t = e.id) && void 0 !== t ? t : null,
        name: null !== (r = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== r ? r : '',
        animated: !!e.animated
    };
}
function c(e, t) {
    if (null != t.id) {
        let n = null != e.id ? ''.concat(e.id) : e.id;
        return ''.concat(t.id) === n;
    }
    return null == e.id && t.name === e.name;
}
function d(e) {
    if (e.isThread())
        return a.jXE.THREAD_TEXT_AREA;
    if (e.isForumPost())
        return a.jXE.FORUM_CHANNEL_TEXT_AREA;
    if (e.isGuildVocal())
        return a.jXE.TEXT_IN_VOICE;
    return a.jXE.CHANNEL_TEXT_AREA;
}
function _(e) {
    let {
            userId: t,
            optimistic: n
        } = e, r = i.default.getId() === t;
    return (!n || !!r) && !0;
}
