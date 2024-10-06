n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(212433),
    l = n(442837),
    u = n(846519),
    c = n(481060),
    d = n(788307),
    _ = n(607070),
    E = n(100527),
    f = n(906732),
    h = n(8454),
    p = n(314897),
    I = n(785717),
    m = n(481046),
    T = n(277085),
    S = n(228168),
    g = n(689938),
    A = n(393480);
let N = 'text-sm/medium',
    O = 36,
    R = 144;
function v(e) {
    var t;
    let { statusActivity: a, profileType: h, editEnabled: p, hasEntered: m = !0, animate: v = !0, onCloseProfile: C } = e,
        { analyticsLocations: L } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: y } = (0, I.KZ)(),
        D = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        [b] = i.useState(() => new u.V7()),
        [M, P] = i.useState(!0),
        U = i.useRef(null),
        w = i.useRef(null),
        x = i.useRef(null),
        G = i.useRef(null),
        { emoji: k, state: B } = null != a ? a : {},
        F = null != B && '' !== B ? B : null,
        V = null != F && F.length > 0,
        H = null != k,
        Z = H && !V,
        Y = H ? 1.25 : 0,
        j = 18 + Y,
        W = R + Y,
        K = O + Y,
        z = H || V,
        q = p && !z,
        Q = p && z,
        [X, $] = i.useState(Z),
        [J, ee] = i.useState(!Z),
        [et, en] = i.useState(!1),
        er = i.useRef(null);
    i.useLayoutEffect(() => {
        if (null == U.current || Z) return;
        let e = U.current.getBoundingClientRect().height;
        if (($(Z || e <= j), m)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = U.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : W,
                a = null !== (i = null === (n = x.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : K;
            ee(!Z && e > a), (w.current = e), (G.current = a);
        }
    }, [m, Z, j, W, K]);
    let [ei, ea] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(K, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    if ((i.useEffect(() => () => b.stop(), [b]), !z && !q)) return null;
    let es = (e) => {
            var t, n;
            if (!!J) {
                if (e) {
                    let e = Math.min(null !== (t = w.current) && void 0 !== t ? t : W, W);
                    ea({
                        maxHeight: ''.concat(e, 'px'),
                        delay: D ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: D ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = G.current) && void 0 !== n ? n : K, K);
                    ea({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (D) {
                    P(!e);
                    return;
                }
                b.start(e ? 300 : 150, () => {
                    P(!e);
                });
            }
        },
        eo = () =>
            H
                ? (0, r.jsx)(d.I, {
                      className: V ? A.statusEmojiInline : A.statusEmojiOnly,
                      emoji: k,
                      animate: v,
                      hideTooltip: !1,
                      tooltipDelay: S.vB
                  })
                : null,
        el = () =>
            V
                ? (0, r.jsx)(c.Text, {
                      variant: N,
                      className: A.statusText,
                      children: F
                  })
                : null,
        eu = () => {
            let e = s()(A.content, {
                [A.clamp]: M,
                [A.unclamp]: !M,
                [A.singleLineAlign]: X
            });
            return (0, r.jsxs)(o.animated.div, {
                style: ei,
                className: e,
                children: [eo(), el()]
            });
        },
        ec = () =>
            (0, r.jsxs)('div', {
                className: s()(A.content, A.clamp, A.placeholderWidth, { [A.panel]: h === S.y0.PANEL }),
                ref: x,
                children: [eo(), el()]
            }),
        ed = () =>
            (0, r.jsxs)('div', {
                className: s()(A.content, A.unclamp, A.placeholderWidth, A.incorporeal, { [A.panel]: h === S.y0.PANEL }),
                ref: U,
                children: [eo(), el()]
            }),
        e_ = () => {
            y({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == C || C(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: L
                        });
                });
        },
        eE = {
            [A.biteSize]: h === S.y0.BITE_SIZE,
            [A.fullSize]: h === S.y0.FULL_SIZE,
            [A.panel]: h === S.y0.PANEL
        },
        ef = s()(A.background, { [A.editable]: Q }),
        eh = s()({
            [A.statusBubbleShape]: (!V && H) || !X,
            [A.statusBubbleSingleLineWithTextShape]: (X && V) || q
        }),
        ep = s()(A.statusBubbleOuter, eE, eh, { [A.statusBubbleOuterAddStatusCursor]: q }),
        eI = s()(A.statusBubble, eh, {
            [A.statusBubbleEmojiOnlyPadding]: Z,
            [A.statusBubbleWithTextPadding]: V || q,
            [A.statusBubbleWithTextMinWidth]: V,
            [A.statusBubbleCopyStatusCursor]: z
        });
    return (0, r.jsx)(f.Gt, {
        value: L,
        children: (0, r.jsx)('div', {
            children: q
                ? (0, r.jsx)(c.Clickable, {
                      'aria-label': g.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL,
                      onClick: e_,
                      className: s()(A.visibleContainer, eE, ef),
                      focusProps: { ringClassName: eh },
                      children: (0, r.jsx)('div', {
                          className: ep,
                          children: (0, r.jsx)('span', {
                              className: eI,
                              children: (0, r.jsxs)('div', {
                                  className: A.content,
                                  children: [
                                      (0, r.jsx)(c.CirclePlusIcon, {
                                          className: A.addStatusIcon,
                                          colorClass: A.addStatusIconColor
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: N,
                                          className: A.addStatusPrompt,
                                          children: g.Z.Messages.USER_SETTINGS_ADD_STATUS
                                      })
                                  ]
                              })
                          })
                      })
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: s()(A.invisibleContainer, eE),
                              children: (0, r.jsx)('div', {
                                  className: ep,
                                  children: (0, r.jsxs)('span', {
                                      className: eI,
                                      children: [ec(), ed()]
                                  })
                              })
                          }),
                          (0, r.jsx)(c.FocusRing, {
                              ringClassName: eh,
                              children: (0, r.jsxs)('div', {
                                  ref: er,
                                  className: s()(A.visibleContainer, eE, ef),
                                  role: 'tooltip',
                                  'aria-label': g.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                                      emoji: null !== (t = null == k ? void 0 : k.name) && void 0 !== t ? t : '',
                                      status: B
                                  }),
                                  tabIndex: 0,
                                  onFocus: () => {
                                      en(!0), es(!0);
                                  },
                                  onBlur: (e) => {
                                      var t;
                                      !(null === (t = er.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && (en(!1), es(!1));
                                  },
                                  onMouseOver: () => {
                                      y({ action: 'HOVER_CUSTOM_STATUS' }), en(!0), es(!0);
                                  },
                                  onMouseLeave: () => {
                                      en(!1), es(!1);
                                  },
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: ep,
                                          children: (0, r.jsx)('span', {
                                              className: eI,
                                              children: eu()
                                          })
                                      }),
                                      Q &&
                                          (0, r.jsx)(T.Z, {
                                              isVisible: et,
                                              isExpandable: J,
                                              onCloseProfile: C
                                          })
                                  ]
                              })
                          })
                      ]
                  })
        })
    });
}
function C(e) {
    let { user: t, ...n } = e,
        i = (0, l.e7)([p.default], () => p.default.getId() === t.id),
        a = (0, h.Z)(t.id),
        { customStatusBubbleEditEnabled: s } = (0, m.K)({ location: 'UserProfileCustomStatusBubble' });
    return (0, r.jsx)(v, {
        editEnabled: s && i,
        statusActivity: a,
        ...n
    });
}
