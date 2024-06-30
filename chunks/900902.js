n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250), a = n(470079), l = n(778947), s = n(534761), r = n(901461), o = n(453687), c = n(507418), u = n(348238), d = n(981631);
let h = a.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: s = !1,
                groupId: r,
                isGroupStart: o,
                usernameProfile: h,
                avatarProfile: p,
                setPopout: m,
                author: _,
                repliedMessage: f,
                roleIcon: E
            } = e, C = (0, u.wq)(t.author.id, n.id), g = (0, u.XO)(t, n, h, m), I = (0, u.R9)(p, m), x = a.useCallback(() => m({
                usernameProfile: !1,
                avatarProfile: !1,
                referencedUsernameProfile: !1
            }), [m]);
        return (0, i.jsx)(l.ZP, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: f,
            author: _,
            compact: s,
            subscribeToGroupId: r,
            showTimestampOnHover: !o && s && t.type !== d.uaV.REPLY,
            renderPopout: c.Z,
            showAvatarPopout: p,
            showUsernamePopout: h,
            onClickAvatar: I,
            onClickUsername: g,
            onContextMenu: C,
            onPopoutRequestClose: x,
            roleIcon: E
        });
    }), p = a.memo(s.Z);
function m(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: a,
            replyReference: l,
            author: s,
            repliedMessage: c,
            roleIcon: u
        } = e, {
            message: d,
            compact: m,
            channel: _,
            groupId: f
        } = t, {
            usernameProfile: E,
            avatarProfile: C
        } = a;
    if ((0, r.Z)(d))
        return null;
    let g = d.id === f;
    return g || m || null != l ? (0, i.jsx)(h, {
        message: d,
        channel: _,
        compact: m,
        subscribeToGroupId: f,
        isGroupStart: g,
        groupId: f,
        setPopout: n,
        usernameProfile: E,
        avatarProfile: C,
        author: s,
        repliedMessage: c,
        roleIcon: u
    }) : (0, i.jsx)(p, {
        compact: !0,
        timestamp: d.timestamp,
        isInline: !1,
        id: (0, o.Dv)(d),
        isVisibleOnlyOnHover: !0,
        cozyAlt: !0
    });
}
