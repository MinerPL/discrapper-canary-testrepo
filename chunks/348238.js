n.d(t, {
    $3: function () {
        return G;
    },
    Go: function () {
        return y;
    },
    NU: function () {
        return P;
    },
    Nk: function () {
        return M;
    },
    R9: function () {
        return L;
    },
    RN: function () {
        return j;
    },
    Wl: function () {
        return R;
    },
    XO: function () {
        return O;
    },
    Xn: function () {
        return F;
    },
    bb: function () {
        return k;
    },
    qo: function () {
        return b;
    },
    rY: function () {
        return Z;
    },
    sR: function () {
        return U;
    },
    tn: function () {
        return B;
    },
    wq: function () {
        return D;
    }
}), n(789020), n(47120);
var i = n(735250), a = n(470079), s = n(668781), l = n(239091), r = n(904245), o = n(144144), c = n(40851), d = n(592125), u = n(323873), _ = n(375954), E = n(594174), m = n(585483), I = n(5967), T = n(630388), h = n(358085), N = n(51144), f = n(91047), p = n(901461), C = n(50284), g = n(981631), S = n(689938);
function A(e, t, n) {
    return a.useCallback(() => {
        n({ [e]: !t });
    }, [
        e,
        n,
        t
    ]);
}
function x(e, t, n) {
    return a.useCallback(i => {
        let a = E.default.getUser(e);
        if (null == a)
            return;
        if (i.preventDefault(), i.stopPropagation(), !i.shiftKey) {
            n();
            return;
        }
        let s = '@'.concat(N.ZP.getUserTag(a, { decoration: 'never' })), l = '<@'.concat(e, '>');
        m.S.dispatchToLastSubscribed(g.CkL.INSERT_TEXT, {
            plainText: s,
            rawText: l
        }), o.Z.startTyping(t);
    }, [
        e,
        t,
        n
    ]);
}
function O(e, t, n, i) {
    let a = A('usernameProfile', n, i);
    return x(e.author.id, t.id, a);
}
function R(e, t, n, i) {
    let a = A('referencedUsernameProfile', n, i);
    return x(null == e ? void 0 : e.author.id, t.id, a);
}
function M(e, t, n, i) {
    let a = A('interactionUsernameProfile', n, i);
    return x(null == e ? void 0 : e.user.id, t.id, a);
}
function v(e) {
    return a.useCallback(t => {
        t.preventDefault(), t.stopPropagation(), e();
    }, [e]);
}
function L(e, t) {
    return v(A('avatarProfile', e, t));
}
function Z(e, t) {
    return v(A('referencedAvatarProfile', e, t));
}
function P(e, t) {
    return v(A('interactionAvatarProfile', e, t));
}
function b(e, t, s, r) {
    let {id: o} = t, {
            id: E,
            flags: m
        } = e, I = (0, T.yE)(m, g.iLy.EPHEMERAL), N = (0, p.Z)(e), f = (0, c.bp)();
    return a.useCallback((e, t) => {
        if (I)
            return;
        if (!h.isPlatformEmbedded) {
            let t = e.target;
            if ('A' === t.tagName && '' !== t.textContent || null == window.getSelection)
                return;
            let n = window.getSelection();
            if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode)))
                return;
        }
        let a = d.Z.getChannel(o), c = _.Z.getMessage(o, E), m = u.Z.isEditing(o, E);
        if (null != a && null != c && !m)
            s({ contextMenu: !0 }), (0, l.jW)(e, async () => {
                if (N) {
                    let {default: e} = await Promise.all([
                        n.e('47939'),
                        n.e('80621')
                    ]).then(n.bind(n, 240678));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        message: c,
                        channel: a,
                        mediaItem: t
                    });
                }
                {
                    let {default: e} = await Promise.all([
                        n.e('47939'),
                        n.e('37220'),
                        n.e('92557'),
                        n.e('92490')
                    ]).then(n.bind(n, 225138));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        message: c,
                        channel: a,
                        mediaItem: t,
                        shouldHideMediaOptions: r
                    });
                }
            }, {
                onClose: () => s({ contextMenu: !1 }),
                context: f
            });
    }, [
        I,
        o,
        E,
        s,
        f,
        N,
        r
    ]);
}
function D(e, t) {
    return a.useCallback(n => {
        let i = E.default.getUser(e), a = d.Z.getChannel(t);
        null != i && null != a && (n.stopPropagation(), (0, f.Pv)(n, i, a));
    }, [
        e,
        t
    ]);
}
function j(e, t, n) {
    return a.useCallback(i => {
        let a = E.default.getUser(e), s = d.Z.getChannel(t);
        null != a && null != s && (i.stopPropagation(), (0, f._j)(i, {
            user: a,
            channel: s,
            moderationAlertId: n
        }));
    }, [
        e,
        t,
        n
    ]);
}
function U(e, t) {
    return a.useCallback(n => {
        let i = E.default.getUser(e), a = d.Z.getChannel(t);
        null != i && null != a && (n.stopPropagation(), (0, f.xS)(n, i, a.guild_id));
    }, [
        e,
        t
    ]);
}
function y(e, t) {
    let {id: n} = e, {id: i} = t;
    return a.useCallback(e => {
        e.altKey && (e.preventDefault(), (0, C.Z)(i, n));
    }, [
        i,
        n
    ]);
}
function B(e, t, n) {
    let i = ''.concat(e, ':').concat(t), s = a.useRef(n), [l, r] = a.useState(n);
    s.current = l || s.current;
    let o = a.useCallback(() => {
            !l && (m.S.dispatchKeyed(g.LPv.ANIMATE_CHAT_AVATAR, i, !0), r(!0));
        }, [
            l,
            i
        ]), c = a.useCallback(() => {
            m.S.dispatchKeyed(g.LPv.ANIMATE_CHAT_AVATAR, i, !1), r(!1);
        }, [i]);
    return {
        hasHovered: s.current,
        isHovered: l,
        handleMouseEnter: o,
        handleMouseLeave: c
    };
}
function k(e, t) {
    let [n, i] = a.useState(!1), [s, l] = a.useState(!1), r = a.useCallback(t => {
            var n, a;
            let s = null !== (a = null === (n = (0, I.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
            (t.target === t.currentTarget || t.currentTarget.contains(s)) && (l(!0), i(!0)), null != e && e(t);
        }, [e]);
    return {
        handleFocus: r,
        handleBlur: a.useCallback(e => {
            var n, a;
            let s = null !== (a = null === (n = (0, I.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
            (e.target === e.currentTarget || !e.currentTarget.contains(s)) && i(!1), null != t && t(e);
        }, [t]),
        isFocused: n,
        hasFocused: s
    };
}
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return a.useCallback(() => {
        null != t && (n ? s.Z.show({
            title: S.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
            body: S.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: t.author.username }),
            confirmText: S.Z.Messages.OKAY
        }) : r.Z.jumpToMessage({
            channelId: t.channel_id,
            messageId: t.id,
            flash: !0,
            returnMessageId: e.id
        }));
    }, [
        n,
        e.id,
        t
    ]);
}
function F(e, t) {
    let n = A('interactionData', e, t);
    return a.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), n();
    }, [n]);
}
