n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(430742),
    d = n(144144),
    u = n(738619),
    h = n(561472),
    p = n(607070),
    m = n(100527),
    f = n(906732),
    g = n(541716),
    C = n(752305),
    x = n(893718),
    v = n(303628),
    _ = n(313201),
    I = n(967128),
    E = n(665149),
    b = n(294218),
    N = n(913663),
    Z = n(268350),
    T = n(695346),
    S = n(592125),
    j = n(703558),
    A = n(375954),
    y = n(496675),
    P = n(117530),
    M = n(459273),
    R = n(838440),
    L = n(127654),
    k = n(241309),
    O = n(928477),
    D = n(456077),
    w = n(488131),
    B = n(602034),
    U = n(981631),
    H = n(388032),
    G = n(796232),
    F = n(966319);
let V = g.I.THREAD_CREATION;
function z(e) {
    let { parentChannelId: t, parentMessageId: n, location: l } = e,
        a = (0, s.e7)([S.Z], () => S.Z.getChannel(t)),
        { analyticsLocations: r } = (0, f.ZP)(m.Z.CREATE_THREAD);
    return null == a
        ? null
        : (0, i.jsx)(f.Gt, {
              value: r,
              children: (0, i.jsx)(M.I3, {
                  children: (0, i.jsxs)('section', {
                      'aria-label': H.intl.string(H.t.rBIGBA),
                      className: G.container,
                      children: [
                          (0, i.jsx)(h.Z, {
                              channel: a,
                              draftType: j.d.FirstThreadMessage
                          }),
                          (0, i.jsxs)(E.ZP, {
                              toolbar: (0, i.jsx)(E.ZP.Icon, {
                                  icon: o.XSmallIcon,
                                  tooltip: H.intl.string(H.t.cpT0Cg),
                                  onClick: () => (0, w.NK)(t)
                              }),
                              children: [
                                  (0, i.jsx)(E.ZP.Icon, {
                                      icon: o.ThreadIcon,
                                      disabled: !0,
                                      'aria-label': H.intl.string(H.t['7Xm5QE'])
                                  }),
                                  (0, i.jsx)(E.ZP.Title, { children: H.intl.string(H.t['4WNcpq']) })
                              ]
                          }),
                          (0, i.jsx)(W, {
                              parentChannel: a,
                              parentMessageId: n,
                              location: l
                          })
                      ]
                  })
              })
          });
}
function W(e) {
    let { parentChannel: t, parentMessageId: n, location: a } = e,
        d = (0, s.e7)([p.Z], () => p.Z.messageGroupSpacing),
        h = (function () {
            let e = l.useContext(M.oo);
            return l.useCallback(() => {
                e.bumpDispatchPriority();
            }, [e]);
        })(),
        {
            threadSettings: m,
            setThreadSettings: f,
            updateThreadSettings: g
        } = (function (e, t) {
            let [n, i] = l.useState({}),
                a = l.useCallback(
                    (n) => {
                        i((e) => ({
                            ...e,
                            ...n
                        })),
                            c.Z.changeThreadSettings(e.id, {
                                ...n,
                                parentMessageId: t
                            });
                    },
                    [e.id, t]
                );
            return {
                threadSettings: n,
                setThreadSettings: i,
                updateThreadSettings: a
            };
        })(t, n),
        { textAreaState: x, setTextAreaState: v } = (function (e, t) {
            let [n, i] = l.useState((0, C.H2)());
            return (
                l.useEffect(() => {
                    function n(n) {
                        var l;
                        let a = j.Z.getDraft(e.id, j.d.FirstThreadMessage);
                        (0 === a.length || !0 === n) && i((0, C.eK)(a)), t(null !== (l = j.Z.getThreadSettings(e.id)) && void 0 !== l ? l : {});
                    }
                    return (
                        n(!0),
                        j.Z.addChangeListener(n),
                        () => {
                            j.Z.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: i
                }
            );
        })(t, f),
        _ = (0, O.vH)(t),
        {
            nameError: E,
            messageError: b,
            submit: T,
            submitting: S
        } = (function (e) {
            let { parentChannel: t, parentMessageId: n, threadSettings: i, privateThreadMode: a, textAreaState: r, location: s } = e,
                [o, c] = l.useState(null),
                [d, u] = l.useState(null),
                [h, p] = l.useState(!1),
                m = (0, B.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: a,
                    location: s,
                    onThreadCreated: w.ok,
                    useDefaultThreadName: !0
                });
            return {
                nameError: o,
                messageError: d,
                submit: l.useCallback(
                    async (e, l, a) => {
                        var s, o, d;
                        if (h)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                        p(!0), null == e && (e = r.textValue), (e = e.trim()), (null == l || 0 === l.length) && (l = null === (s = N.Z.getStickerPreview(t.id, V.drafts.type)) || void 0 === s ? void 0 : s.map((e) => e.id)), (null == a || 0 === a.length) && (a = P.Z.getUploads(t.id, j.d.FirstThreadMessage));
                        let f = null !== (o = i.name) && void 0 !== o ? o : '',
                            g = null == n && 0 === f.length,
                            C = '' === e && (null == l || 0 === l.length) && 0 === a.length;
                        if ((c(g ? (0, k.V_)() : null), u(C ? (0, k.T4)() : null), g || C))
                            return (
                                p(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        if (null == n) {
                            let { valid: n } = await (0, R.v)({
                                content: e,
                                stickers: l,
                                uploads: a,
                                type: V,
                                channel: t
                            });
                            if (!n)
                                return (
                                    p(!1),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    }
                                );
                        }
                        try {
                            await m(e, l, a);
                        } catch (e) {
                            return (
                                (null === (d = e.body) || void 0 === d ? void 0 : d.code) === U.evJ.AUTOMOD_TITLE_BLOCKED && c((0, k.Gx)(e.body, t)),
                                p(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        }
                        return (
                            (0, Z.qB)(t.id, V.drafts.type),
                            p(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    },
                    [m, r.textValue, i.name, n, t, h]
                ),
                submitting: h
            };
        })({
            parentChannel: t,
            parentMessageId: n,
            threadSettings: m,
            privateThreadMode: _,
            textAreaState: x,
            location: a
        }),
        A = (0, O.oD)(m, _) ? o.ThreadLockIcon : o.ThreadIcon;
    return (0, i.jsx)('div', {
        className: G.chat,
        onMouseDown: h,
        onFocus: h,
        children: (0, i.jsx)('div', {
            className: r()(G.messagesWrapper, 'group-spacing-'.concat(d)),
            children: (0, i.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), T();
                },
                className: G.form,
                children: [
                    (0, i.jsx)(o.Scroller, {
                        className: G.scroller,
                        fade: !0,
                        children: (0, i.jsxs)('div', {
                            className: G.scrollerInner,
                            children: [
                                (0, i.jsxs)(I.ZP, {
                                    channelId: 'create-thread-null',
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: F.iconWrapper,
                                            children: (0, i.jsx)(A, { className: F.icon })
                                        }),
                                        (0, i.jsx)(Y, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: m,
                                            updateThreadSettings: g,
                                            error: E,
                                            disabled: S
                                        }),
                                        t.type === U.d4z.GUILD_TEXT
                                            ? (0, i.jsx)(K, {
                                                  startedFromMessage: null != n,
                                                  threadSettings: m,
                                                  updateThreadSettings: g,
                                                  privateThreadMode: _
                                              })
                                            : null
                                    ]
                                }),
                                (0, i.jsx)(X, {
                                    parentChannel: t,
                                    parentMessageId: n
                                })
                            ]
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: G.submitContainer,
                        children: [
                            (0, i.jsx)(q, {
                                parentChannel: t,
                                textAreaState: x,
                                setTextAreaState: v,
                                submit: T,
                                error: b
                            }),
                            (0, i.jsx)(u.Z, {
                                channel: t,
                                isThreadCreation: !0
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function K(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: l, privateThreadMode: a } = e,
        s = (0, O.oD)(n, a),
        c = (0, i.jsx)('div', {
            className: G.privateThreadFormTitle,
            children: (0, i.jsx)('span', {
                className: G.privateThreadFormTitleText,
                children: H.intl.string(H.t.F1zyvb)
            })
        }),
        d = (0, i.jsx)(o.Checkbox, {
            className: r()(G.checkbox),
            type: o.Checkbox.Types.INVERTED,
            disabled: a === O.Jw.PrivateOnly,
            value: s,
            onChange: (e, t) => l({ isPrivate: t }),
            children: (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: H.intl.string(H.t.TRPp3t)
            })
        });
    return t || a === O.Jw.Disabled
        ? null
        : (0, i.jsxs)(o.FormSection, {
              title: c,
              className: G.formSection,
              children: [
                  d,
                  s
                      ? (0, i.jsx)(o.Text, {
                            className: G.privateThreadDescription,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: H.intl.string(H.t.EWXyc3)
                        })
                      : null
              ]
          });
}
function Y(e) {
    var t;
    let { parentChannel: n, parentMessageId: l, threadSettings: a, updateThreadSettings: r, error: s, disabled: c } = e,
        u = null !== (t = a.name) && void 0 !== t ? t : '',
        h = (0, k.Op)(s, { content: u }),
        p = (0, O.Od)(n, l),
        m = null != l,
        f = (0, _.Dt)();
    return (0, i.jsx)(o.FormSection, {
        tag: 'label',
        htmlFor: f,
        title: H.intl.string(H.t.j3XWjI) + (m ? ' (Optional)' : ''),
        className: G.formSection,
        children: (0, i.jsx)(o.TextInput, {
            value: u,
            id: f,
            placeholder: '' !== p ? p : H.intl.string(H.t['Nb2/RE']),
            maxLength: U.HN8,
            onChange: (e) => {
                r({ name: (0, D.Z)(e, !1) }), '' !== e ? d.Z.startTyping(n.id) : d.Z.stopTyping(n.id);
            },
            onBlur: () => {
                let e = (0, D.Z)(u, !0);
                e !== u && r({ name: e });
            },
            error: h,
            disabled: c
        })
    });
}
function q(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: a, submit: u, error: h } = e,
        [p, m] = l.useState(!0),
        f = l.useCallback(() => m(!0), []),
        g = l.useCallback(() => m(!1), []),
        C = l.useCallback(
            (e, n, i) => {
                c.Z.saveDraft(t.id, n, j.d.FirstThreadMessage),
                    a(
                        (e) => (
                            '' !== n && e.textValue !== n ? d.Z.startTyping(t.id) : '' === n && d.Z.stopTyping(t.id),
                            {
                                textValue: n,
                                richValue: i
                            }
                        )
                    );
            },
            [t.id, a]
        ),
        _ = l.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return u(t, i, n);
            },
            [u]
        );
    (0, M.yp)({
        event: U.CkL.TEXTAREA_FOCUS,
        handler: f
    }),
        (0, M.yp)({
            event: U.CkL.TEXTAREA_BLUR,
            handler: g
        });
    let I = (0, s.e7)([y.Z], () => y.Z.can(U.Plq.ATTACH_FILES, t)),
        E = (0, k.Op)(h, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Z, {
                channelId: t.id,
                type: V,
                canAttachFiles: I
            }),
            (0, i.jsx)('div', {
                className: G.starterMessageError,
                children: (0, i.jsx)(o.InputError, { error: E })
            }),
            (0, i.jsx)(x.Z, {
                type: V,
                channel: t,
                placeholder: H.intl.string(H.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: p,
                className: G.channelTextArea,
                innerClassName: r()(G.channelTextAreaInner, { [G.channelTextAreaInnerError]: null != E }),
                onFocus: f,
                onBlur: g,
                onChange: C,
                onSubmit: _,
                promptToUpload: L.d
            })
        ]
    });
}
function X(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        l = (0, s.e7)([A.Z], () => (null == n ? null : A.Z.getMessage(t.id, n))),
        a = T.jU.useSetting();
    return null != l
        ? (0, i.jsx)(b.Z, {
              className: G.messagePreview,
              message: l,
              channel: t,
              compact: a,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0
          })
        : null;
}
