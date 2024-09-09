n.d(t, {
    EK: function () {
        return x;
    },
    Io: function () {
        return M;
    },
    NY: function () {
        return U;
    },
    Ox: function () {
        return L;
    },
    Vq: function () {
        return b;
    },
    Wf: function () {
        return w;
    },
    cB: function () {
        return D;
    },
    dy: function () {
        return C;
    },
    mb: function () {
        return P;
    },
    wP: function () {
        return y;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(596454),
    o = n(99690),
    l = n(607070),
    u = n(797610),
    c = n(754688),
    d = n(699450),
    _ = n(303694),
    E = n(124072),
    f = n(891984),
    h = n(763296),
    p = n(592125),
    I = n(430824),
    m = n(246946),
    T = n(594174),
    S = n(934415),
    g = n(5192),
    A = n(51144),
    N = n(377668),
    O = n(689938),
    R = n(778718),
    v = n(910212);
function C(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.Tooltip, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(s.Z, {
                src: t.src,
                emojiName: t.name,
                animated: !1,
                ...e
            })
    });
}
function y(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.Tooltip, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(s.Z, {
                emojiId: t.emojiId,
                emojiName: t.name,
                animated: t.animated,
                ...e
            })
    });
}
function L(e) {
    let { text: t, channelId: n, guildId: i } = e,
        a = I.Z.getGuild(i),
        s = p.Z.getChannel(n),
        o = (0, u.Ib)(a, s) && '@Clyde' === t ? N.jM : null;
    return (0, r.jsx)(E.Z, {
        color: o,
        children: t
    });
}
function D(e) {
    let { id: t, guildId: n, channelId: s } = e,
        l = (0, i.e7)([T.default], () => T.default.getUser(t)),
        u = (0, i.e7)([m.Z], () => m.Z.hidePersonalInformation),
        c = g.ZP.useName(n, s, l),
        d = (0, r.jsx)(E.Z, { children: null == c ? '<@'.concat(t, '>') : '@'.concat(c) });
    if (null != l) {
        let e = u || l.isPomelo() ? null : '#'.concat(l.discriminator);
        return (0, r.jsx)(a.Tooltip, {
            text: (0, r.jsxs)('div', {
                className: R.userTooltip,
                children: [
                    (0, r.jsx)(o.Z, {
                        user: l,
                        animate: !0,
                        size: a.AvatarSizes.SIZE_16,
                        className: R.avatar
                    }),
                    A.ZP.getUserTag(l, {
                        mode: 'username',
                        identifiable: u ? 'never' : 'always'
                    }),
                    (0, r.jsx)('span', {
                        className: R.discriminator,
                        children: e
                    })
                ]
            }),
            delay: 750,
            position: 'top',
            'aria-label': A.ZP.getUserTag(l, { decoration: 'never' }),
            children: (e) =>
                (0, r.jsx)(a.Clickable, {
                    tag: 'span',
                    ...e,
                    children: d
                })
        });
    }
    return d;
}
function b(e) {
    let { id: t, guildId: n } = e,
        s = (0, i.e7)([I.Z], () => (null != n ? I.Z.getRole(n, t) : void 0)),
        o = (0, i.e7)([l.Z], () => l.Z.roleStyle);
    if (null == s)
        return (0, r.jsxs)('span', {
            children: ['@', O.Z.Messages.UNKNOWN_ROLE_PLACEHOLDER]
        });
    let u = null != s.color && 0 !== s.color;
    return (0, r.jsxs)(E.Z, {
        color: 'username' === o && u ? s.color : null,
        children: [
            'dot' === o &&
                (0, r.jsx)(a.RoleDot, {
                    color: s.colorString,
                    background: !1,
                    tooltip: !1
                }),
            '@',
            s.name
        ]
    });
}
function M(e) {
    let { id: t } = e,
        n = (0, i.e7)([p.Z], () => p.Z.getChannel(t)),
        a = O.Z.Messages.UNKNOWN_CHANNEL.toLowerCase(),
        s = 'text',
        o = !0;
    if (null != n) {
        var l;
        (a = (0, c.YO)(n) ? n.name : O.Z.Messages.NO_ACCESS), (s = (0, c.YO)(n) ? (null !== (l = (0, S.wl)(n)) && void 0 !== l ? l : 'text') : 'locked'), (o = (0, d.B)(n.type));
    }
    return o
        ? (0, r.jsx)(E.Z, {
              iconType: s,
              children: a
          })
        : (0, r.jsx)('span', { children: '#' + a });
}
function P(e) {
    var t;
    let { id: n } = e,
        a = (0, i.e7)([h.Z], () => h.Z.getSoundById(n));
    return (0, r.jsx)(E.Z, { children: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : 'Sound' });
}
function U(e) {
    let { id: t, itemId: n, guildId: i } = e,
        a = (0, _.l)(t),
        s = (0, _.W)(t, n, i);
    return (0, r.jsxs)(E.Z, {
        iconType: t,
        children: [a, null != s && (0, r.jsx)(f.Z, {}), s]
    });
}
function w(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(E.Z, {
        children: [t, '(', n, ')']
    });
}
function x(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)('span', {
        className: v.timestamp,
        children: t.formatted
    });
}
