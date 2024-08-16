n.d(t, {
    F9: function () {
        return g;
    },
    Zb: function () {
        return m;
    },
    e$: function () {
        return I;
    },
    ll: function () {
        return S;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(686546),
    u = n(271383),
    c = n(430824),
    d = n(594174),
    _ = n(5192),
    E = n(192918),
    f = n(687694),
    h = n(689938),
    p = n(182022);
function m(e) {
    let { children: t, selected: n } = e,
        { showReplyIcon: i, openOnHover: s } = (0, f.C)({ location: 'ContentCard' });
    return (0, r.jsxs)('div', {
        className: a()(p.container, { [p.selected]: n }, { [p.openOnHover]: s }),
        children: [
            t,
            i &&
                (0, r.jsx)('div', {
                    className: p.reply,
                    children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: p.icon
                    })
                })
        ]
    });
}
function I(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: p.infoSection,
        children: t
    });
}
function T(e) {
    let { users: t, guildId: n, 'aria-hidden': i } = e;
    return (0, r.jsx)('div', {
        className: p.facePile,
        children: t.map((e, a) => {
            let s = (0, r.jsx)(o.Avatar, {
                src: e.getAvatarURL(n, 80),
                size: o.AvatarSizes.SIZE_16,
                'aria-label': i ? void 0 : e.username,
                'aria-hidden': i
            });
            return a === t.length - 1
                ? (0, r.jsx)(
                      'div',
                      {
                          className: p.facePileItem,
                          children: s
                      },
                      e.id
                  )
                : (0, r.jsx)(
                      l.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: p.facePileItem,
                          mask: l.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: s
                      },
                      e.id
                  );
        })
    });
}
function g(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: a = 3 } = e,
        l = i.author_id,
        f = (0, s.e7)([d.default], () => d.default.getUser(l)),
        { displayParticipants: m, participant1: I, participant2: g, numOtherParticipants: S } = (0, E.Z)(i, a),
        A = (0, s.e7)([u.ZP], () => u.ZP.getMember(t, l)),
        N = (0, s.e7)(
            [c.Z],
            () => {
                var e;
                return (null == A ? void 0 : A.colorRoleId) != null ? (null === (e = c.Z.getRole(t, A.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
            },
            [t, A]
        );
    if (null == f) return null;
    let v = null == A ? void 0 : A.colorString,
        O = _.ZP.getName(t, n, f);
    return (0, r.jsxs)('div', {
        className: p.userSection,
        children: [
            (0, r.jsx)(T, {
                users: m,
                guildId: t,
                'aria-hidden': !0
            }),
            (0, r.jsx)(o.NameWithRole, {
                color: null != v ? v : void 0,
                roleName: N,
                name: O,
                className: p.userName,
                'aria-hidden': !0
            }),
            S > 0
                ? (0, r.jsx)('div', {
                      className: p.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, r.jsxs)(o.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: p.additionalParticipantBadgeText,
                          children: ['+', S]
                      })
                  })
                : null,
            (0, r.jsx)(o.HiddenVisually, {
                children: h.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS.format({
                    user1: _.ZP.getName(t, n, I),
                    user2: _.ZP.getName(t, n, g),
                    countOthers: S,
                    nameHook: (e, t) => (0, r.jsx)('span', { children: 'text' }, t)
                })
            })
        ]
    });
}
function S(e) {
    let { children: t } = e;
    return (0, r.jsx)(o.Heading, {
        color: 'text-normal',
        variant: 'heading-sm/medium',
        className: p.contentTitle,
        lineClamp: 1,
        children: t
    });
}
