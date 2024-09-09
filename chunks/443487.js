n.d(t, {
    F9: function () {
        return S;
    },
    Zb: function () {
        return I;
    },
    cA: function () {
        return p;
    },
    e$: function () {
        return m;
    },
    ll: function () {
        return g;
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
    f = n(689938),
    h = n(182022);
function p() {
    return (0, r.jsx)('div', {
        className: h.container,
        'aria-hidden': !0
    });
}
function I(e) {
    let { children: t, selected: n } = e;
    return (0, r.jsx)('div', {
        className: a()(h.container, h.openOnHover, { [h.selected]: n }),
        children: t
    });
}
function m(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: h.infoSection,
        children: t
    });
}
function T(e) {
    let { users: t, guildId: n, 'aria-hidden': i } = e;
    return (0, r.jsx)('div', {
        className: h.facePile,
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
                          className: h.facePileItem,
                          children: s
                      },
                      e.id
                  )
                : (0, r.jsx)(
                      l.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: h.facePileItem,
                          mask: l.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: s
                      },
                      e.id
                  );
        })
    });
}
function S(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: a = 3 } = e,
        l = i.author_id,
        p = (0, s.e7)([d.default], () => d.default.getUser(l)),
        { displayParticipants: I, participant1: m, participant2: S, numOtherParticipants: g } = (0, E.Z)(i, a),
        A = (0, s.e7)([u.ZP], () => u.ZP.getMember(t, l)),
        N = (0, s.e7)(
            [c.Z],
            () => {
                var e;
                return (null == A ? void 0 : A.colorRoleId) != null ? (null === (e = c.Z.getRole(t, A.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
            },
            [t, A]
        );
    if (null == p) return null;
    let O = null == A ? void 0 : A.colorString,
        R = _.ZP.getName(t, n, p);
    return (0, r.jsxs)('div', {
        className: h.userSection,
        children: [
            (0, r.jsx)(T, {
                users: I,
                guildId: t,
                'aria-hidden': !0
            }),
            (0, r.jsx)(o.NameWithRole, {
                color: null != O ? O : void 0,
                roleName: N,
                name: R,
                className: h.userName,
                'aria-hidden': !0
            }),
            g > 0
                ? (0, r.jsx)('div', {
                      className: h.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, r.jsxs)(o.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: h.additionalParticipantBadgeText,
                          children: ['+', g]
                      })
                  })
                : null,
            (0, r.jsx)(o.HiddenVisually, {
                children: f.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                    user0: _.ZP.getName(t, n, m),
                    user1: _.ZP.getName(t, n, S),
                    countOthers: g,
                    name0Hook: (e, t) => (0, r.jsx)('span', { children: e }, t),
                    name1Hook: (e, t) => (0, r.jsx)('span', { children: e }, t),
                    countOthersHook: (e, t) => (0, r.jsx)('span', { children: e }, t)
                })
            })
        ]
    });
}
function g(e) {
    let { children: t } = e;
    return (0, r.jsx)(o.Heading, {
        color: 'text-normal',
        variant: 'heading-sm/medium',
        className: h.contentTitle,
        lineClamp: 1,
        children: t
    });
}
