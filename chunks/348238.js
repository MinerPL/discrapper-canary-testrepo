n.d(t, {
    $3: function () {
        return w;
    },
    Go: function () {
        return k;
    },
    JC: function () {
        return L;
    },
    NU: function () {
        return b;
    },
    Nk: function () {
        return v;
    },
    R9: function () {
        return P;
    },
    RN: function () {
        return y;
    },
    Wl: function () {
        return R;
    },
    XO: function () {
        return O;
    },
    Xn: function () {
        return V;
    },
    bb: function () {
        return F;
    },
    qo: function () {
        return j;
    },
    rY: function () {
        return D;
    },
    sR: function () {
        return B;
    },
    tn: function () {
        return G;
    },
    wq: function () {
        return U;
    }
}),
    n(789020),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(668781),
    l = n(239091),
    r = n(904245),
    o = n(144144),
    c = n(40851),
    d = n(407477),
    u = n(675478),
    _ = n(592125),
    E = n(323873),
    I = n(375954),
    m = n(594174),
    T = n(585483),
    N = n(5967),
    h = n(630388),
    C = n(358085),
    p = n(51144),
    f = n(91047),
    g = n(50284),
    A = n(981631),
    S = n(689938);
function M(e, t, n) {
    return a.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function x(e, t, n) {
    return a.useCallback(
        (i) => {
            let a = m.default.getUser(e);
            if (null == a) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) {
                n();
                return;
            }
            let s = '@'.concat(p.ZP.getUserTag(a, { decoration: 'never' })),
                l = '<@'.concat(e, '>');
            T.S.dispatchToLastSubscribed(A.CkL.INSERT_TEXT, {
                plainText: s,
                rawText: l
            }),
                o.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function O(e, t, n, i) {
    let a = M('usernameProfile', n, i);
    return x(e.author.id, t.id, a);
}
function R(e, t, n, i) {
    let a = M('referencedUsernameProfile', n, i);
    return x(null == e ? void 0 : e.author.id, t.id, a);
}
function v(e, t, n, i) {
    let a = M('interactionUsernameProfile', n, i);
    return x(null == e ? void 0 : e.user.id, t.id, a);
}
function L(e, t, n, i) {
    let a = M('referencedUsernameProfile', n, i);
    return x(e, t.id, a);
}
function Z(e) {
    return a.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function P(e, t) {
    return Z(M('avatarProfile', e, t));
}
function D(e, t) {
    return Z(M('referencedAvatarProfile', e, t));
}
function b(e, t) {
    return Z(M('interactionAvatarProfile', e, t));
}
function j(e, t, s, r) {
    let { id: o } = t,
        { id: d, flags: u } = e,
        m = (0, h.yE)(u, A.iLy.EPHEMERAL),
        T = (0, c.bp)();
    return a.useCallback(
        (e, t) => {
            if (m) return;
            if (!C.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let a = _.Z.getChannel(o),
                c = I.Z.getMessage(o, d),
                u = E.Z.isEditing(o, d);
            if (null != a && null != c && !u)
                s({ contextMenu: !0 }),
                    (0, l.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('92557'), n.e('37220'), n.e('90042')]).then(n.bind(n, 225138));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    message: c,
                                    channel: a,
                                    mediaItem: t,
                                    shouldHideMediaOptions: r
                                });
                        },
                        {
                            onClose: () => s({ contextMenu: !1 }),
                            context: T
                        }
                    );
        },
        [m, o, d, s, T, r]
    );
}
function U(e, t) {
    return a.useCallback(
        (n) => {
            let i = m.default.getUser(e),
                a = _.Z.getChannel(t);
            null != i && null != a && (n.stopPropagation(), (0, f.Pv)(n, i, a));
        },
        [e, t]
    );
}
function y(e, t, n) {
    return a.useCallback(
        (i) => {
            let a = m.default.getUser(e),
                s = _.Z.getChannel(t);
            null != a &&
                null != s &&
                (i.stopPropagation(),
                (0, f._j)(i, {
                    user: a,
                    channel: s,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function B(e, t) {
    return a.useCallback(
        (n) => {
            let i = m.default.getUser(e),
                a = _.Z.getChannel(t);
            null != i && null != a && (n.stopPropagation(), (0, f.xS)(n, i, a.guild_id));
        },
        [e, t]
    );
}
function k(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return a.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, g.Z)(i, n));
        },
        [i, n]
    );
}
function G(e, t, n) {
    let { canShowReactionsOnMessageHover: i } = d.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        s = ''.concat(e, ':').concat(t),
        l = a.useRef(n),
        [r, o] = a.useState(n);
    l.current = r || l.current;
    let c = a.useCallback(() => {
            i && (0, u.T6)(), !r && (T.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, s, !0), o(!0));
        }, [r, s, i]),
        _ = a.useCallback(() => {
            T.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, s, !1), o(!1);
        }, [s]);
    return {
        hasHovered: l.current,
        isHovered: r,
        handleMouseEnter: c,
        handleMouseLeave: _
    };
}
function F(e, t) {
    let [n, i] = a.useState(!1),
        [s, l] = a.useState(!1),
        r = a.useCallback(
            (t) => {
                var n, a;
                let s = null !== (a = null === (n = (0, N.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
                (t.target === t.currentTarget || t.currentTarget.contains(s)) && (l(!0), i(!0)), null != e && e(t);
            },
            [e]
        );
    return {
        handleFocus: r,
        handleBlur: a.useCallback(
            (e) => {
                var n, a;
                let s = null !== (a = null === (n = (0, N.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
                (e.target === e.currentTarget || !e.currentTarget.contains(s)) && i(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n,
        hasFocused: s
    };
}
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return a.useCallback(() => {
        null != t &&
            (n
                ? s.Z.show({
                      title: S.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                      body: S.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: t.author.username }),
                      confirmText: S.Z.Messages.OKAY
                  })
                : r.Z.jumpToMessage({
                      channelId: t.channel_id,
                      messageId: t.id,
                      flash: !0,
                      returnMessageId: e.id
                  }));
    }, [n, e.id, t]);
}
function V(e, t) {
    let n = M('interactionData', e, t);
    return a.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
