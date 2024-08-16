a(47120);
var l,
    n,
    s = a(735250),
    i = a(470079),
    o = a(120356),
    r = a.n(o),
    c = a(913527),
    d = a.n(c),
    u = a(442837),
    m = a(846519),
    p = a(212605),
    C = a(481060),
    v = a(100527),
    h = a(906732),
    x = a(70097),
    g = a(237617),
    L = a(318374),
    f = a(717680),
    E = a(594174),
    N = a(962399),
    S = a(626135),
    I = a(823379),
    Z = a(709054),
    _ = a(39604),
    j = a(572720),
    M = a(981631),
    T = a(689938),
    b = a(496947),
    k = a(906998);
((n = l || (l = {})).DELETE = 'delete'), (n.EDIT = 'edit'), (n.SHARE = 'share');
function P(e) {
    let { clip: t, isNew: a, videoRef: l } = e,
        n = 0 === t.length,
        [o, r] = i.useMemo(() => {
            let e = t.length,
                a = !1,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
            return null != l && 1000 * l < t.length && ((e = 1000 * l), (a = !0)), [a, d().duration(e)];
        }, [t.length, t.editMetadata]),
        c = ''.concat(r.seconds()).padStart(2, '0');
    return (0, s.jsxs)('div', {
        className: b.clipThumbContainer,
        children: [
            (0, s.jsx)(R, {
                clip: t,
                videoRef: l
            }),
            (0, s.jsxs)('div', {
                className: b.clipBadges,
                children: [
                    n &&
                        (0, s.jsx)('div', {
                            className: b.clipProcessingBadge,
                            children: (0, s.jsx)(C.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: T.Z.Messages.CLIPS_PROCESSING_BADGE
                            })
                        }),
                    !n &&
                        a &&
                        (0, s.jsxs)(C.Text, {
                            className: b.clipNewBadge,
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: [
                                (0, s.jsx)(C.SparklesIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: b.newIcon
                                }),
                                T.Z.Messages.NEW.toUpperCase()
                            ]
                        }),
                    !n &&
                        (0, s.jsxs)('div', {
                            className: b.clipDurationBadge,
                            children: [
                                o ? (0, s.jsx)(N.Z, { className: b.clipDurationEditIcon }) : null,
                                (0, s.jsx)(C.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: ''.concat(r.minutes(), ':').concat(c)
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
function y(e) {
    var t;
    let { clip: a, focused: l, onFocus: n } = e,
        [o, c] = i.useState(a.name),
        d = !a.name,
        [u, m] = i.useState(!1),
        [v, h] = i.useState(null !== (t = a.name) && void 0 !== t ? t : ''),
        [x, g] = i.useState(!1),
        L = async () => {
            g(!0), await (0, _.Tm)(a.id, { name: '' === v ? void 0 : v }), g(!1), m(!1);
        };
    return (i.useEffect(() => {
        if (o !== a.name) {
            var e;
            c(a.name), h(null !== (e = a.name) && void 0 !== e ? e : '');
        }
    }, [a.name, o]),
    u)
        ? (0, s.jsx)(C.TextInput, {
              inputClassName: r()(k['heading-lg/medium'], b.clipTitleInput),
              onClick: (e) => e.stopPropagation(),
              value: v,
              autoFocus: !0,
              onKeyDown: (e) => {
                  'Enter' === e.key && L();
              },
              disabled: x,
              onChange: h,
              onBlur: L
          })
        : (0, s.jsxs)(C.Clickable, {
              className: b.clipTitleInputPlaceholder,
              onFocus: n,
              onClick: (e) => {
                  e.stopPropagation(), m(!0);
              },
              children: [
                  d
                      ? (0, s.jsx)(C.Heading, {
                            className: b.clipTitle,
                            color: 'text-muted',
                            variant: 'heading-lg/medium',
                            children: T.Z.Messages.CLIPS_ADD_A_TITLE
                        })
                      : (0, s.jsx)(C.Heading, {
                            className: b.clipTitle,
                            color: 'text-normal',
                            variant: 'heading-lg/medium',
                            children: a.name
                        }),
                  l &&
                      (0, s.jsx)(C.PencilIcon, {
                          size: 'custom',
                          'aria-label': T.Z.Messages.EDIT,
                          color: C.tokens.colors.TEXT_MUTED,
                          height: p.Z.sm,
                          width: p.Z.sm,
                          className: b.clipTitleIcon
                      })
              ]
          });
}
function R(e) {
    let { clip: t, videoRef: a } = e,
        l = (0, j.l)(t);
    return 0 === t.length
        ? (0, s.jsx)(C.Spinner, {
              type: C.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: b.clipThumb
          })
        : null != l
          ? (0, s.jsx)(x.Z, {
                preload: 'metadata',
                muted: !0,
                poster: t.thumbnail,
                src: l,
                loop: !0,
                className: b.clipThumb,
                ref: a
            })
          : (0, s.jsx)('img', {
                alt: '',
                src: t.thumbnail,
                className: b.clipThumb
            });
}
function D(e) {
    let { clip: t, exporting: a, actionsDisabled: l, onBeforeDelete: n, onDelete: o, onEdit: r, onShare: c, onBlur: d } = e,
        u = (0, f.Z)(),
        m = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (n(), (0, _.sS)(t.filepath)) : o(t, n), S.default.track(M.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'delete' });
            },
            [o, n, t]
        ),
        p = i.useCallback(
            (e) => {
                e.stopPropagation(), r(t), S.default.track(M.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'edit' });
            },
            [r, t]
        ),
        v = i.useCallback(
            (e) => {
                e.stopPropagation(), c(t), S.default.track(M.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'share' });
            },
            [c, t]
        );
    return (0, s.jsxs)('div', {
        className: b.buttonContainer,
        children: [
            null != o &&
                (0, s.jsx)(C.Tooltip, {
                    text: T.Z.Messages.DELETE,
                    children: (e) =>
                        (0, s.jsx)(C.Button, {
                            ...e,
                            disabled: l,
                            color: u ? C.Button.Colors.RED : C.Button.Colors.PRIMARY,
                            onClick: m,
                            className: b.button,
                            size: C.Button.Sizes.NONE,
                            look: C.Button.Looks.FILLED,
                            children: (0, s.jsx)(C.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: b.miniIcon
                            })
                        })
                }),
            (0, s.jsx)(C.Tooltip, {
                text: T.Z.Messages.EDIT,
                children: (e) =>
                    (0, s.jsx)(C.Button, {
                        ...e,
                        disabled: l,
                        color: C.Button.Colors.PRIMARY,
                        onClick: p,
                        className: b.button,
                        size: C.Button.Sizes.NONE,
                        look: C.Button.Looks.FILLED,
                        children: (0, s.jsx)(N.Z, { className: b.miniIcon })
                    })
            }),
            (0, s.jsx)(C.Tooltip, {
                text: T.Z.Messages.SHARE,
                children: (e) => {
                    let { onBlur: t, ...n } = e;
                    return (0, s.jsx)(C.Button, {
                        ...n,
                        disabled: l && !a,
                        submitting: a,
                        color: C.Button.Colors.BRAND,
                        onBlur: (e) => {
                            d(e), null == t || t();
                        },
                        onClick: v,
                        className: b.button,
                        size: C.Button.Sizes.NONE,
                        look: C.Button.Looks.FILLED,
                        children: (0, s.jsx)(C.ShareIcon, {
                            size: 'lg',
                            color: 'currentColor',
                            className: b.miniIcon
                        })
                    });
                }
            })
        ]
    });
}
t.Z = function (e) {
    var t, a, l;
    let { clip: n, exporting: o, actionsDisabled: c, isNew: d, onDelete: p, onEdit: x, onShare: f } = e,
        N = (0, u.Wu)([E.default], () => n.users.map((e) => E.default.getUser(e)).filter(I.lm)),
        { analyticsLocations: _ } = (0, h.ZP)(v.Z.CLIPS_GALLERY_ITEM),
        [j, k] = i.useState(!1),
        R = i.useRef(null),
        A = (0, g.Z)(null !== (l = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0),
        B = i.useRef(
            new m.sW(500, () => {
                var e;
                let t = R.current;
                null != t && t.paused && ((t.currentTime = A.current), null === (e = R.current) || void 0 === e || e.play());
            })
        ),
        H = i.useCallback(() => {
            let e = R.current;
            null != e && (e.pause(), (e.src = ''));
        }, []),
        w = i.useCallback(() => {
            var e;
            k(!0), null === (e = B.current) || void 0 === e || e.delay();
        }, []),
        V = i.useCallback(() => {
            var e, t, a;
            k(!1);
            let l = R.current;
            null === (e = B.current) || void 0 === e || e.cancel(), null != l && (l.pause(), (l.currentTime = null !== (a = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0));
        }, [null === (a = n.editMetadata) || void 0 === a ? void 0 : a.start]),
        O = i.useCallback(
            (e) => {
                var t, a;
                (null === (a = e.relatedTarget) || void 0 === a ? void 0 : null === (t = a.parentElement) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && V();
            },
            [V]
        ),
        z = new Date(Z.default.extractTimestamp(n.id)),
        F = z.toLocaleDateString(),
        G = z.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        }),
        Y = ''.concat(F, ' \u2022 ').concat(G);
    return (0, s.jsx)(h.Gt, {
        value: _,
        children: (0, s.jsxs)(C.ClickableContainer, {
            'aria-disabled': c,
            'aria-label': T.Z.Messages.EDIT,
            onClick: c
                ? void 0
                : () => {
                      x(n), S.default.track(M.rMx.CLIP_GALLERY_CARD_CLICKED);
                  },
            className: r()(b.clipItem, { [b.disabled]: c }),
            onBlur: O,
            onFocus: w,
            onMouseOver: w,
            onMouseLeave: V,
            children: [
                (0, s.jsx)(P, {
                    clip: n,
                    isNew: d,
                    videoRef: R
                }),
                (0, s.jsxs)('div', {
                    className: b.clipFooter,
                    children: [
                        (0, s.jsx)(y, {
                            clip: n,
                            focused: j,
                            onFocus: w
                        }),
                        (0, s.jsx)(C.Text, {
                            className: b.clipMetadata,
                            color: 'text-normal',
                            variant: 'text-md/medium',
                            children: n.applicationName
                        }),
                        (0, s.jsx)(C.Text, {
                            className: b.clipMetadata,
                            color: 'text-normal',
                            variant: 'text-md/medium',
                            children: Y
                        }),
                        (0, s.jsxs)('div', {
                            className: b.usersAndDelete,
                            children: [
                                (0, s.jsx)(L.Z, {
                                    maxUsers: 4,
                                    users: N,
                                    onFocus: (e) => {
                                        var t, a, l, n;
                                        let s = e.relatedTarget,
                                            i = null === (a = e.currentTarget.parentElement) || void 0 === a ? void 0 : null === (t = a.parentElement) || void 0 === t ? void 0 : t.parentElement;
                                        if ((null == s ? void 0 : s.parentElement) !== i) (null == s ? void 0 : null === (n = s.parentElement) || void 0 === n ? void 0 : null === (l = n.parentElement) || void 0 === l ? void 0 : l.parentElement) !== i && w();
                                    }
                                }),
                                j &&
                                    (0, s.jsx)(D, {
                                        clip: n,
                                        actionsDisabled: c,
                                        exporting: o,
                                        onBeforeDelete: H,
                                        onDelete: p,
                                        onEdit: x,
                                        onShare: f,
                                        onBlur: (e) => {
                                            var t;
                                            (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && V();
                                        }
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
