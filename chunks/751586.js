n.d(t, {
    K: function () {
        return v;
    },
    y: function () {
        return N;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(873546), l = n(481060), u = n(425493), c = n(169525), d = n(261922), _ = n(133910), E = n(68588), f = n(585483), h = n(956664), p = n(589530), m = n(981631), I = n(689938), T = n(626729);
function g(e) {
    let {onClose: t} = e, n = i.useRef(null);
    return (0, r.jsx)('div', {
        className: T.mobileCloseWrapper,
        ref: n,
        children: (0, r.jsx)(l.FocusRingScope, {
            containerRef: n,
            children: (0, r.jsx)('div', {
                children: (0, r.jsx)(u.Z, {
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
let S = e => {
    let {
            children: t,
            hasMediaControls: n,
            isObscured: a,
            src: s
        } = e, [l, u] = i.useState(!1), d = i.useRef(s);
    return (i.useEffect(() => {
        s !== d.current && u(!a);
    }, [
        s,
        a
    ]), a) ? (0, r.jsx)(E.a.Provider, {
        value: l,
        children: (0, r.jsx)(E.Z, {
            type: E.Z.Types.ATTACHMENT,
            reason: c.wk.EXPLICIT_CONTENT,
            className: T.obscureContainer,
            obscured: !0,
            isSingleMosaicItem: !0,
            obscurityControlClassName: o()({ [T.controlsOffset]: n && l }),
            onToggleObscurity: e => {
                e.stopPropagation(), e.nativeEvent.stopPropagation(), u(e => !e);
            },
            children: e => (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)('div', {
                    className: o()(T.obscureWrapper, { [T.obscure]: e }),
                    children: t(e)
                })
            })
        }, s)
    }) : (0, r.jsx)(r.Fragment, { children: t(!1) });
};
function A(e) {
    let {
            src: t,
            renderLinkComponent: n,
            renderForwardComponent: i
        } = e, a = n({
            href: t,
            target: '_blank',
            rel: 'noreferrer noopener',
            className: T.downloadLink,
            children: I.Z.Messages.OPEN_IN_BROWSER
        }), o = i({ className: T.forward });
    return null == a && null == o ? null : (0, r.jsxs)('div', {
        className: T.optionsContainer,
        children: [
            a,
            o
        ]
    });
}
function N(e) {
    let {
            src: t,
            original: n,
            placeholder: a,
            width: o,
            height: l,
            animated: u,
            children: c,
            responsive: _,
            renderLinkComponent: E,
            renderForwardComponent: p,
            maxWidth: I,
            maxHeight: N,
            shouldAnimate: v,
            onClose: O,
            shouldHideMediaOptions: R = !1,
            obscure: C = !1,
            ...y
        } = e, {
            width: D,
            height: L
        } = (0, h.zp)(o, l), b = s.tq && null != O;
    i.useEffect(() => {
        if (null != O)
            return f.S.subscribe(m.CkL.MEDIA_MODAL_CLOSE, O), () => {
                f.S.unsubscribe(m.CkL.MEDIA_MODAL_CLOSE, O);
            };
    }, [O]);
    let M = R ? e => {
        e.stopPropagation(), e.preventDefault();
    } : y.onContextMenu;
    return (0, r.jsxs)('div', {
        className: T.wrapper,
        children: [
            b ? (0, r.jsx)(g, { onClose: O }) : null,
            (0, r.jsx)(S, {
                isObscured: C,
                src: t,
                children: e => (0, r.jsx)(d.Z, {
                    src: t,
                    placeholder: a,
                    shouldLink: !1,
                    width: o,
                    height: l,
                    maxWidth: D,
                    maxHeight: L,
                    children: c,
                    animated: !e && u,
                    autoPlay: !e,
                    responsive: _,
                    onContextMenu: M,
                    ...y
                }, t)
            }),
            null == n || R ? null : (0, r.jsx)(A, {
                src: n,
                renderLinkComponent: E,
                renderForwardComponent: p
            })
        ]
    });
}
function v(e) {
    let {
            src: t,
            width: n,
            height: i,
            onClose: a,
            renderLinkComponent: l,
            renderForwardComponent: u,
            shouldHideMediaOptions: c = !1,
            obscure: d = !1,
            ...E
        } = e, {
            width: f,
            height: m
        } = (0, h.zp)(n, i), I = s.tq && null != a, N = c ? e => {
            e.stopPropagation(), e.preventDefault();
        } : E.onContextMenu;
    return (0, r.jsxs)('div', {
        className: o()(T.wrapper, T.videoWrapper),
        children: [
            I ? (0, r.jsx)(g, { onClose: a }) : null,
            (0, r.jsx)(S, {
                hasMediaControls: !0,
                isObscured: d,
                src: t,
                children: e => (0, r.jsx)(_.Z, {
                    src: t,
                    width: n,
                    height: i,
                    maxWidth: f,
                    maxHeight: m,
                    renderLinkComponent: l,
                    volume: p.FC,
                    autoMute: p.rs,
                    onVolumeChange: p.jA,
                    onMute: p.Zj,
                    autoPlay: !e,
                    onContextMenu: N,
                    ...E
                }, t)
            }),
            c ? null : (0, r.jsx)(A, {
                src: t,
                renderLinkComponent: l,
                renderForwardComponent: u
            })
        ]
    });
}
