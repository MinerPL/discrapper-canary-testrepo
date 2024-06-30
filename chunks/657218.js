n.d(t, {
    Z: function () {
        return W;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(442837), o = n(481060), c = n(430742), u = n(144144), d = n(738619), h = n(561472), p = n(607070), m = n(100527), _ = n(906732), f = n(541716), E = n(752305), C = n(893718), g = n(303628), I = n(967128), x = n(294218), T = n(913663), N = n(268350), v = n(695346), S = n(592125), Z = n(703558), A = n(375954), M = n(496675), b = n(117530), R = n(153124), j = n(502568), L = n(459273), P = n(838440), O = n(127654), y = n(241309), D = n(928477), k = n(456077), U = n(488131), w = n(602034), B = n(981631), H = n(689938), G = n(71417), V = n(971055);
let F = f.I.THREAD_CREATION;
function W(e) {
    let {
            parentChannelId: t,
            parentMessageId: n,
            location: a
        } = e, l = (0, r.e7)([S.Z], () => S.Z.getChannel(t)), {analyticsLocations: s} = (0, _.ZP)(m.Z.CREATE_THREAD);
    return null == l ? null : (0, i.jsx)(_.Gt, {
        value: s,
        children: (0, i.jsx)(L.I3, {
            children: (0, i.jsxs)('section', {
                'aria-label': H.Z.Messages.CREATE_THREAD,
                className: G.container,
                children: [
                    (0, i.jsx)(h.Z, {
                        channel: l,
                        draftType: Z.d.FirstThreadMessage
                    }),
                    (0, i.jsxs)(j.ZP, {
                        toolbar: (0, i.jsx)(j.ZP.Icon, {
                            icon: o.CloseSmallIcon,
                            tooltip: H.Z.Messages.CLOSE,
                            onClick: () => (0, U.NK)(t)
                        }),
                        children: [
                            (0, i.jsx)(j.ZP.Icon, {
                                icon: o.ThreadIcon,
                                disabled: !0,
                                'aria-label': H.Z.Messages.THREAD
                            }),
                            (0, i.jsx)(j.ZP.Title, { children: H.Z.Messages.NEW_THREAD })
                        ]
                    }),
                    (0, i.jsx)(z, {
                        parentChannel: l,
                        parentMessageId: n,
                        location: a
                    })
                ]
            })
        })
    });
}
function z(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            location: l
        } = e, u = (0, r.e7)([p.Z], () => p.Z.messageGroupSpacing), h = function () {
            let e = a.useContext(L.oo);
            return a.useCallback(() => {
                e.bumpDispatchPriority();
            }, [e]);
        }(), {
            threadSettings: m,
            setThreadSettings: _,
            updateThreadSettings: f
        } = function (e, t) {
            let [n, i] = a.useState({}), l = a.useCallback(n => {
                    i(e => ({
                        ...e,
                        ...n
                    })), c.Z.changeThreadSettings(e.id, {
                        ...n,
                        parentMessageId: t
                    });
                }, [
                    e.id,
                    t
                ]);
            return {
                threadSettings: n,
                setThreadSettings: i,
                updateThreadSettings: l
            };
        }(t, n), {
            textAreaState: C,
            setTextAreaState: g
        } = function (e, t) {
            let [n, i] = a.useState((0, E.H2)());
            return a.useEffect(() => {
                function n(n) {
                    var a;
                    let l = Z.Z.getDraft(e.id, Z.d.FirstThreadMessage);
                    (0 === l.length || !0 === n) && i((0, E.eK)(l)), t(null !== (a = Z.Z.getThreadSettings(e.id)) && void 0 !== a ? a : {});
                }
                return n(!0), Z.Z.addChangeListener(n), () => {
                    Z.Z.removeChangeListener(n);
                };
            }, [
                e.id,
                t
            ]), {
                textAreaState: n,
                setTextAreaState: i
            };
        }(t, _), x = (0, D.vH)(t), {
            nameError: v,
            messageError: S,
            submit: A
        } = function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    textAreaState: s,
                    location: r
                } = e, [o, c] = a.useState(null), [u, d] = a.useState(null), h = (0, w.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: r,
                    onThreadCreated: U.ok,
                    useDefaultThreadName: !0
                });
            return {
                nameError: o,
                messageError: u,
                submit: a.useCallback(async (e, a, l) => {
                    var r, o, u;
                    null == e && (e = s.textValue), e = e.trim(), (null == a || 0 === a.length) && (a = null === (r = T.Z.getStickerPreview(t.id, F.drafts.type)) || void 0 === r ? void 0 : r.map(e => e.id)), (null == l || 0 === l.length) && (l = b.Z.getUploads(t.id, Z.d.FirstThreadMessage));
                    let p = null !== (o = i.name) && void 0 !== o ? o : '', m = null == n && 0 === p.length, _ = '' === e && (null == a || 0 === a.length) && 0 === l.length;
                    if (c(m ? (0, y.V_)() : null), d(_ ? (0, y.T4)() : null), m || _)
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                    if (null == n) {
                        let {valid: n} = await (0, P.v)({
                            content: e,
                            stickers: a,
                            uploads: l,
                            type: F,
                            channel: t
                        });
                        if (!n)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                    }
                    try {
                        await h(e, a, l);
                    } catch (e) {
                        return (null === (u = e.body) || void 0 === u ? void 0 : u.code) === B.evJ.AUTOMOD_TITLE_BLOCKED && c((0, y.Gx)(e.body, t)), {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                    }
                    return (0, N.qB)(t.id, F.drafts.type), {
                        shouldClear: !0,
                        shouldRefocus: !1
                    };
                }, [
                    h,
                    s.textValue,
                    i.name,
                    n,
                    t
                ])
            };
        }({
            parentChannel: t,
            parentMessageId: n,
            threadSettings: m,
            privateThreadMode: x,
            textAreaState: C,
            location: l
        }), M = (0, D.oD)(m, x) ? o.ThreadLockIcon : o.ThreadIcon;
    return (0, i.jsx)('div', {
        className: G.chat,
        onMouseDown: h,
        onFocus: h,
        children: (0, i.jsx)('div', {
            className: s()(G.messagesWrapper, 'group-spacing-'.concat(u)),
            children: (0, i.jsxs)('form', {
                onSubmit: e => {
                    e.preventDefault(), A();
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
                                            className: V.iconWrapper,
                                            children: (0, i.jsx)(M, { className: V.icon })
                                        }),
                                        (0, i.jsx)(K, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: m,
                                            updateThreadSettings: f,
                                            error: v
                                        }),
                                        t.type === B.d4z.GUILD_TEXT ? (0, i.jsx)(Y, {
                                            startedFromMessage: null != n,
                                            threadSettings: m,
                                            updateThreadSettings: f,
                                            privateThreadMode: x
                                        }) : null
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
                                textAreaState: C,
                                setTextAreaState: g,
                                submit: A,
                                error: S
                            }),
                            (0, i.jsx)(d.Z, {
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
function Y(e) {
    let {
            startedFromMessage: t,
            threadSettings: n,
            updateThreadSettings: a,
            privateThreadMode: l
        } = e, r = (0, D.oD)(n, l), c = (0, i.jsx)('div', {
            className: G.privateThreadFormTitle,
            children: (0, i.jsx)('span', {
                className: G.privateThreadFormTitleText,
                children: H.Z.Messages.PRIVATE_THREAD
            })
        }), u = (0, i.jsx)(o.Checkbox, {
            className: s()(G.checkbox),
            type: o.Checkbox.Types.INVERTED,
            disabled: l === D.Jw.PrivateOnly,
            value: r,
            onChange: (e, t) => a({ isPrivate: t }),
            children: (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: H.Z.Messages.FORM_THREAD_PRIVATE_THREAD_SECTION_LABEL
            })
        });
    return t || l === D.Jw.Disabled ? null : (0, i.jsxs)(o.FormSection, {
        title: c,
        className: G.formSection,
        children: [
            u,
            r ? (0, i.jsx)(o.Text, {
                className: G.privateThreadDescription,
                variant: 'text-xs/normal',
                color: 'header-secondary',
                children: H.Z.Messages.FORM_THREAD_PRIVATE_THREAD_DESCRIPTION
            }) : null
        ]
    });
}
function K(e) {
    var t;
    let {
            parentChannel: n,
            parentMessageId: a,
            threadSettings: l,
            updateThreadSettings: s,
            error: r
        } = e, c = null !== (t = l.name) && void 0 !== t ? t : '', d = (0, y.Op)(r, { content: c }), h = (0, D.Od)(n, a), p = null != a, m = (0, R.Dt)();
    return (0, i.jsx)(o.FormSection, {
        tag: 'label',
        htmlFor: m,
        title: H.Z.Messages.THREAD_NAME + (p ? ' (Optional)' : ''),
        className: G.formSection,
        children: (0, i.jsx)(o.TextInput, {
            value: c,
            id: m,
            placeholder: '' !== h ? h : H.Z.Messages.FORM_THREAD_NAME_PLACEHOLDER,
            maxLength: B.HN8,
            onChange: e => {
                s({ name: (0, k.Z)(e, !1) }), '' !== e ? u.Z.startTyping(n.id) : u.Z.stopTyping(n.id);
            },
            onBlur: () => {
                let e = (0, k.Z)(c, !0);
                e !== c && s({ name: e });
            },
            error: d
        })
    });
}
function q(e) {
    let {
            parentChannel: t,
            textAreaState: n,
            setTextAreaState: l,
            submit: d,
            error: h
        } = e, [p, m] = a.useState(!0), _ = a.useCallback(() => m(!0), []), f = a.useCallback(() => m(!1), []), E = a.useCallback((e, n, i) => {
            c.Z.saveDraft(t.id, n, Z.d.FirstThreadMessage), l(e => ('' !== n && e.textValue !== n ? u.Z.startTyping(t.id) : '' === n && u.Z.stopTyping(t.id), {
                textValue: n,
                richValue: i
            }));
        }, [
            t.id,
            l
        ]), I = a.useCallback(e => {
            let {
                value: t,
                uploads: n,
                stickers: i
            } = e;
            return d(t, i, n);
        }, [d]);
    (0, L.yp)({
        event: B.CkL.TEXTAREA_FOCUS,
        handler: _
    }), (0, L.yp)({
        event: B.CkL.TEXTAREA_BLUR,
        handler: f
    });
    let x = (0, r.e7)([M.Z], () => M.Z.can(B.Plq.ATTACH_FILES, t)), T = (0, y.Op)(h, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.Z, {
                channelId: t.id,
                type: F,
                canAttachFiles: x
            }),
            (0, i.jsx)('div', {
                className: G.starterMessageError,
                children: (0, i.jsx)(o.InputError, { error: T })
            }),
            (0, i.jsx)(C.Z, {
                type: F,
                channel: t,
                placeholder: H.Z.Messages.FORM_THREAD_STARTER_MESSAGE_PLACEHOLDER,
                textValue: n.textValue,
                richValue: n.richValue,
                focused: p,
                className: G.channelTextArea,
                innerClassName: s()(G.channelTextAreaInner, { [G.channelTextAreaInnerError]: null != T }),
                onFocus: _,
                onBlur: f,
                onChange: E,
                onSubmit: I,
                promptToUpload: O.d
            })
        ]
    });
}
function X(e) {
    let {
            parentChannel: t,
            parentMessageId: n
        } = e, a = (0, r.e7)([A.Z], () => null == n ? null : A.Z.getMessage(t.id, n)), l = v.jU.useSetting();
    return null != a ? (0, i.jsx)(x.Z, {
        className: G.messagePreview,
        message: a,
        channel: t,
        compact: l,
        renderThreadAccessory: !1,
        trackAnnouncementViews: !0
    }) : null;
}
