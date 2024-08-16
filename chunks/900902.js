n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(901461),
    l = n(453687),
    r = n(464891),
    o = n(318713),
    c = n(507418),
    u = n(348238),
    d = n(981631);
let h = a.memo(function (e) {
        let { message: t, channel: n, compact: s = !1, groupId: l, isGroupStart: o, usernameProfile: h, avatarProfile: m, setPopout: p, author: _, repliedMessage: f, roleIcon: E } = e,
            g = (0, u.wq)(t.author.id, n.id),
            C = (0, u.XO)(t, n, h, p),
            I = (0, u.R9)(m, p),
            x = a.useCallback(
                () =>
                    p({
                        usernameProfile: !1,
                        avatarProfile: !1,
                        referencedUsernameProfile: !1
                    }),
                [p]
            );
        return (0, i.jsx)(r.ZP, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: f,
            author: _,
            compact: s,
            subscribeToGroupId: l,
            showTimestampOnHover: !o && s && t.type !== d.uaV.REPLY,
            renderPopout: c.Z,
            showAvatarPopout: m,
            showUsernamePopout: h,
            onClickAvatar: I,
            onClickUsername: C,
            onContextMenu: g,
            onPopoutRequestClose: x,
            roleIcon: E
        });
    }),
    m = a.memo(o.Z);
function p(e) {
    let { messageProps: t, setPopout: n, messagePopouts: a, replyReference: r, author: o, repliedMessage: c, roleIcon: u } = e,
        { message: d, compact: p, channel: _, groupId: f } = t,
        { usernameProfile: E, avatarProfile: g } = a;
    if ((0, s.Z)(d)) return null;
    let C = d.id === f;
    return C || p || null != r
        ? (0, i.jsx)(h, {
              message: d,
              channel: _,
              compact: p,
              subscribeToGroupId: f,
              isGroupStart: C,
              groupId: f,
              setPopout: n,
              usernameProfile: E,
              avatarProfile: g,
              author: o,
              repliedMessage: c,
              roleIcon: u
          })
        : (0, i.jsx)(m, {
              compact: !0,
              timestamp: d.timestamp,
              isInline: !1,
              id: (0, l.Dv)(d),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0
          });
}
