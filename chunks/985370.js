n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(774078),
    u = n(579185),
    d = n(272929),
    h = n(456631),
    m = n(643720),
    p = n(981631),
    _ = n(177480);
t.Z = (e) => {
    let { channel: t, className: n } = e,
        { isHovered: s, setIsHovered: E, onMouseEnter: f, onMouseLeave: C, cancelTimers: g } = (0, u.Z)(200, 300),
        [I, x] = a.useState(!1),
        T = (0, r.e7)([h.Z], () => h.Z.effectCooldownEndTime),
        N = a.useMemo(() => (null != T ? (T.getTime() - Date.now()) / 1000 : 0), [T]),
        { seconds: v } = (0, c.Z)(null != T ? T : new Date()),
        S = v > 0,
        Z = a.useCallback(
            (e) => {
                if ('focus' !== e.type) !I && !S && f();
            },
            [I, S, f]
        ),
        A = a.useCallback(() => {
            !I && C();
        }, [C, I]),
        M = a.useCallback(
            (e, t) => {
                g(), x(!I), (!s || I) && (null == t || t(e));
            },
            [g, I, s]
        ),
        b = s || I;
    return (0, i.jsx)(o.Popout, {
        shouldShow: b,
        animationPosition: 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            E(!1), x(!1);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(m.Z, {
                isHovered: b,
                channel: t,
                closePopout: n,
                onMouseEnter: f,
                onMouseLeave: A,
                onFocus: () => x(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: a } = e;
            return (0, i.jsx)(d.Z, {
                isCenterButton: !0,
                totalCooldownSeconds: N,
                remainingCooldownSeconds: v,
                className: l()(_.controlButton, n),
                onKeyDown: (e) => {
                    var t, n;
                    return (t = e), (n = a), void (t.keyCode === p.yXg.ENTER && t.keyCode === p.yXg.SPACE && M(t, n));
                },
                onClick: (e) => {
                    M(e, t);
                },
                onMouseEnter: Z,
                onMouseLeave: A,
                isActive: b
            });
        }
    });
};
