n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(392711),
    i = n(846519),
    l = n(481060),
    o = n(626135),
    c = n(572004),
    d = n(70956),
    _ = n(981631),
    u = n(689938);
let E = d.Z.Millis.SECOND,
    T = 2 * E,
    I = d.Z.Millis.HALF_SECOND,
    R = [() => u.Z.Messages.COPY_SUCCESS_1, () => u.Z.Messages.COPY_SUCCESS_2, () => u.Z.Messages.COPY_SUCCESS_3, () => u.Z.Messages.COPY_SUCCESS_4, () => u.Z.Messages.COPY_SUCCESS_5, () => u.Z.Messages.COPY_SUCCESS_6, () => u.Z.Messages.COPY_SUCCESS_7, () => u.Z.Messages.COPY_SUCCESS_8, () => u.Z.Messages.COPY_SUCCESS_9, () => u.Z.Messages.COPY_SUCCESS_10, () => u.Z.Messages.COPY_SUCCESS_11];
function g(e) {
    let { text: t, copyValue: n, children: d, onCopy: u, 'aria-label': g, delay: C = I } = e,
        [N, m] = a.useState(0),
        [p, A] = a.useState(!1),
        [f, S] = a.useState(!1),
        [h] = a.useState(() => new i.V7()),
        [M] = a.useState(() => new i.V7());
    if (
        (a.useEffect(
            () => () => {
                h.stop(), M.stop();
            },
            [h, M]
        ),
        !c.wS)
    )
        return (0, s.jsx)(s.Fragment, { children: d({}) });
    let x = N >= R.length - 1,
        O = x ? l.TooltipColors.RED : l.TooltipColors.GREEN,
        b = p ? O : l.TooltipColors.PRIMARY,
        P = () => {
            null == u || u(), (0, c.JG)(n), o.default.track(_.rMx.TEXT_COPIED), !f && m(N + 1), S(!0), A(!0), h.start(E, () => S(!1)), M.start(T, () => m(0));
        };
    return (0, s.jsx)(l.Tooltip, {
        text: (() => {
            var e;
            if (!p) return t;
            let n = (0, r.clamp)(N - 1, 0, R.length - 1),
                a = null !== (e = R[n]) && void 0 !== e ? e : R[0];
            return (0, s.jsx)(l.Shaker, {
                isShaking: x,
                children: a()
            });
        })(),
        delay: C,
        'aria-label': g,
        color: b,
        forceOpen: f,
        onAnimationRest: (e, t) => {
            !f && p && t.phase === _.UkZ.LEAVE && A(!1);
        },
        children: (e) => {
            let { onClick: t, onMouseEnter: n, ...s } = e;
            return d({
                ...s,
                onClick: () => {
                    null == t || t(), P();
                },
                onMouseEnter: () => {
                    if (!p) {
                        null == n || n();
                        return;
                    }
                    h.stop(), S(!1);
                }
            });
        }
    });
}
