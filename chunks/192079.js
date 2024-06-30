t.d(e, {
    ER: function () {
        return d;
    },
    kk: function () {
        return _;
    },
    s$: function () {
        return E;
    }
}), t(724458), t(47120), t(392711);
var i = t(19780), l = t(5192), s = t(700785), a = t(427679), r = t(157925), c = t(981631), o = t(71080), u = t(689938);
function d(n, e, t, i) {
    let s = e[0], a = l.ZP.getName(n, t, s), r = null != i ? i : e.length;
    return 1 === r && null != s ? a : null == s ? u.Z.Messages.SPEAKING_COUNT.format({ count: r }) : u.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
        name: a,
        count: r - 1
    });
}
function _(n, e) {
    switch (n) {
    case o.aC.OWNER:
        return u.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case o.aC.ADMINISTRATOR:
        return u.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case o.aC.MEMBER:
    case o.aC.ROLE:
        return e ? u.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : u.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case o.aC.EMPTY_STATE:
    }
    return null;
}
function E(n) {
    let e = a.Z.getStageInstanceByChannel(n.id);
    return {
        channel_id: n.id,
        guild_id: n.guild_id,
        topic: null == e ? void 0 : e.topic,
        media_session_id: i.Z.getMediaSessionId(),
        request_to_speak_state: s.Uu(c.Plq.REQUEST_TO_SPEAK, n) ? r.BM.EVERYONE : r.BM.NO_ONE,
        stage_instance_id: null == e ? void 0 : e.id
    };
}
