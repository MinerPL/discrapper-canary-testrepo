n.d(t, {
    EK: function () {
        return M;
    },
    Io: function () {
        return L;
    },
    NY: function () {
        return x;
    },
    Ox: function () {
        return R;
    },
    Vq: function () {
        return D;
    },
    Wf: function () {
        return w;
    },
    cB: function () {
        return O;
    },
    dy: function () {
        return N;
    },
    wP: function () {
        return C;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(596454),
    o = n(99690),
    l = n(607070),
    u = n(797610),
    c = n(754688),
    d = n(699450),
    f = n(303694),
    _ = n(124072),
    h = n(692629);
n(763296);
var p = n(592125),
    m = n(430824),
    g = n(246946),
    E = n(594174),
    v = n(934415),
    I = n(5192),
    S = n(51144),
    T = n(377668),
    b = n(388032),
    y = n(124158),
    A = n(554034);
function N(e) {
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
function C(e) {
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
function R(e) {
    let { text: t, channelId: n, guildId: i } = e,
        a = m.Z.getGuild(i),
        s = p.Z.getChannel(n),
        o = (0, u.Ib)(a, s) && '@Clyde' === t ? T.jM : null;
    return (0, r.jsx)(_.Z, {
        color: o,
        children: t
    });
}
function O(e) {
    let { id: t, guildId: n, channelId: s } = e,
        l = (0, i.e7)([E.default], () => E.default.getUser(t)),
        u = (0, i.e7)([g.Z], () => g.Z.hidePersonalInformation),
        c = I.ZP.useName(n, s, l),
        d = (0, r.jsx)(_.Z, { children: null == c ? '<@'.concat(t, '>') : '@'.concat(c) });
    if (null != l) {
        let e = u || l.isPomelo() ? null : '#'.concat(l.discriminator);
        return (0, r.jsx)(a.Tooltip, {
            text: (0, r.jsxs)('div', {
                className: y.userTooltip,
                children: [
                    (0, r.jsx)(o.Z, {
                        user: l,
                        animate: !0,
                        size: a.AvatarSizes.SIZE_16,
                        className: y.avatar
                    }),
                    S.ZP.getUserTag(l, {
                        mode: 'username',
                        identifiable: u ? 'never' : 'always'
                    }),
                    (0, r.jsx)('span', {
                        className: y.discriminator,
                        children: e
                    })
                ]
            }),
            delay: 750,
            position: 'top',
            'aria-label': S.ZP.getUserTag(l, { decoration: 'never' }),
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
function D(e) {
    let { id: t, guildId: n } = e,
        s = (0, i.e7)([m.Z], () => (null != n ? m.Z.getRole(n, t) : void 0)),
        o = (0, i.e7)([l.Z], () => l.Z.roleStyle);
    if (null == s)
        return (0, r.jsxs)('span', {
            children: ['@', b.intl.string(b.t['YV4F/v'])]
        });
    let u = null != s.color && 0 !== s.color;
    return (0, r.jsxs)(_.Z, {
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
function L(e) {
    let { id: t } = e,
        n = (0, i.e7)([p.Z], () => p.Z.getChannel(t)),
        a = b.intl.string(b.t.zLZPmp).toLowerCase(),
        s = 'text',
        o = !0;
    if (null != n) {
        var l;
        (a = (0, c.YO)(n) ? n.name : b.intl.string(b.t['/YzI6+'])), (s = (0, c.YO)(n) ? (null !== (l = (0, v.wl)(n)) && void 0 !== l ? l : 'text') : 'locked'), (o = (0, d.B)(n.type));
    }
    return o
        ? (0, r.jsx)(_.Z, {
              iconType: s,
              children: a
          })
        : (0, r.jsx)('span', { children: '#' + a });
}
function x(e) {
    let { id: t, itemId: n, guildId: i } = e,
        a = (0, f.l)(t),
        s = (0, f.W)(t, n, i);
    return (0, r.jsxs)(_.Z, {
        iconType: t,
        children: [a, null != s && (0, r.jsx)(h.Z, {}), s]
    });
}
function w(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(_.Z, {
        children: [t, '(', n, ')']
    });
}
function M(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)('span', {
        className: A.timestamp,
        children: t.formatted
    });
}
