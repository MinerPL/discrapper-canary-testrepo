n.d(t, {
    K: function () {
        return O;
    },
    y: function () {
        return N;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(873546),
    l = n(481060),
    u = n(425493),
    c = n(95398),
    d = n(169525),
    _ = n(585483),
    E = n(956664),
    f = n(589530),
    h = n(124347),
    p = n(80966),
    I = n(981631),
    m = n(689938),
    T = n(565986);
function S(e) {
    let { onClose: t } = e,
        n = i.useRef(null);
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
let g = (e) => {
    let { children: t, hasMediaControls: n, isObscured: a, src: o } = e,
        [l, u] = i.useState(!1),
        _ = i.useRef(o);
    return (i.useEffect(() => {
        o !== _.current && u(!a);
    }, [o, a]),
    a)
        ? (0, r.jsx)(c.a.Provider, {
              value: l,
              children: (0, r.jsx)(
                  c.Z,
                  {
                      type: c.Z.Types.ATTACHMENT,
                      reason: d.wk.EXPLICIT_CONTENT,
                      className: T.obscureContainer,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      obscurityControlClassName: s()({ [T.controlsOffset]: n && l }),
                      onToggleObscurity: (e) => {
                          e.stopPropagation(), e.nativeEvent.stopPropagation(), u((e) => !e);
                      },
                      children: (e) =>
                          (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)('div', {
                                  className: s()(T.obscureWrapper, { [T.obscure]: e }),
                                  children: t(e)
                              })
                          })
                  },
                  o
              )
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
};
function A(e) {
    let { src: t, renderLinkComponent: n, renderForwardComponent: i } = e,
        a = n({
            href: t,
            target: '_blank',
            rel: 'noreferrer noopener',
            className: T.downloadLink,
            children: m.Z.Messages.OPEN_IN_BROWSER
        }),
        s = i({ className: T.forward });
    return null == a && null == s
        ? null
        : (0, r.jsxs)('div', {
              className: T.optionsContainer,
              children: [a, s]
          });
}
function N(e) {
    let { src: t, original: n, placeholder: a, width: s, height: l, animated: u, children: c, responsive: d, renderLinkComponent: f, renderForwardComponent: p, maxWidth: m, maxHeight: N, shouldAnimate: O, srcIsAnimated: R, onClose: v, shouldHideMediaOptions: C = !1, obscure: L = !1, ...y } = e,
        { width: D, height: b } = (0, E.zp)(s, l),
        M = o.tq && null != v;
    i.useEffect(() => {
        if (null != v)
            return (
                _.S.subscribe(I.CkL.MEDIA_MODAL_CLOSE, v),
                () => {
                    _.S.unsubscribe(I.CkL.MEDIA_MODAL_CLOSE, v);
                }
            );
    }, [v]);
    let P = C
        ? (e) => {
              e.stopPropagation(), e.preventDefault();
          }
        : y.onContextMenu;
    return (0, r.jsxs)('div', {
        className: T.wrapper,
        children: [
            M ? (0, r.jsx)(S, { onClose: v }) : null,
            (0, r.jsx)(g, {
                isObscured: L,
                src: t,
                children: (e) =>
                    (0, r.jsx)(
                        h.ZP,
                        {
                            src: t,
                            placeholder: a,
                            shouldLink: !1,
                            width: s,
                            height: l,
                            maxWidth: D,
                            maxHeight: b,
                            children: c,
                            animated: !e && u,
                            autoPlay: !e,
                            responsive: d,
                            srcIsAnimated: R,
                            onContextMenu: P,
                            ...y
                        },
                        t
                    )
            }),
            null == n || C
                ? null
                : (0, r.jsx)(A, {
                      src: n,
                      renderLinkComponent: f,
                      renderForwardComponent: p
                  })
        ]
    });
}
function O(e) {
    let { src: t, width: n, height: i, onClose: a, renderLinkComponent: l, renderForwardComponent: u, shouldHideMediaOptions: c = !1, obscure: d = !1, ..._ } = e,
        { width: h, height: I } = (0, E.zp)(n, i),
        m = o.tq && null != a,
        N = c
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : _.onContextMenu;
    return (0, r.jsxs)('div', {
        className: s()(T.wrapper, T.videoWrapper),
        children: [
            m ? (0, r.jsx)(S, { onClose: a }) : null,
            (0, r.jsx)(g, {
                hasMediaControls: !0,
                isObscured: d,
                src: t,
                children: (e) =>
                    (0, r.jsx)(
                        p.Z,
                        {
                            src: t,
                            width: n,
                            height: i,
                            maxWidth: h,
                            maxHeight: I,
                            renderLinkComponent: l,
                            volume: f.FC,
                            autoMute: f.rs,
                            onVolumeChange: f.jA,
                            onMute: f.Zj,
                            autoPlay: !e,
                            onContextMenu: N,
                            ..._
                        },
                        t
                    )
            }),
            c
                ? null
                : (0, r.jsx)(A, {
                      src: t,
                      renderLinkComponent: l,
                      renderForwardComponent: u
                  })
        ]
    });
}
