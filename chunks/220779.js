n.d(t, {
    A7: function () {
        return S;
    },
    dE: function () {
        return N;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(410030), u = n(541716), c = n(752305), d = n(893718), _ = n(931651), E = n(131704), f = n(401227), h = n(142550), p = n(981631), m = n(689938), I = n(142544);
let T = (0, E.kt)({
        id: '1',
        type: p.d4z.DM
    }), g = i.forwardRef(function (e, t) {
        let {
                placeholder: n,
                headerText: i,
                onEnter: a,
                showPopout: u,
                children: c,
                body: d,
                hide: _
            } = e, E = (0, l.ZP)();
        return (0, r.jsx)(s.Popout, {
            align: 'right',
            position: 'bottom',
            shouldShow: u,
            disablePointerEvents: !1,
            renderPopout: () => (0, r.jsx)('div', {
                className: o()([
                    I.reply,
                    'theme-'.concat(E)
                ]),
                ref: t,
                children: (0, r.jsx)(s.FocusLock, {
                    containerRef: t,
                    children: (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/bold',
                                className: I.replyHeader,
                                children: null != i ? i : m.Z.Messages.CHAT
                            }),
                            d,
                            (0, r.jsx)(S, {
                                onEnter: e => {
                                    a(e), _();
                                },
                                placeholder: null != n ? n : m.Z.Messages.CHAT
                            })
                        ]
                    })
                })
            }),
            children: () => c
        });
    });
function S(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: a,
            showEmojiButton: s = !1,
            renderAttachButton: l,
            autoFocus: _ = !0,
            onFocus: E,
            channel: f,
            className: p
        } = e, [m, g] = i.useState(''), [S, A] = i.useState((0, c.JM)('')), N = () => {
            g(''), A((0, c.JM)(''));
        }, v = u.I.ATOMIC_REACTOR_REPLY_INPUT, O = i.useRef(null);
    return (0, r.jsx)(d.Z, {
        ref: O,
        placeholder: t,
        editorClassName: p,
        className: o()(I.replyInput, p),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: h.z,
        channel: null != f ? f : T,
        onChange: (e, t, n) => {
            g(t), A(n);
        },
        type: s ? {
            ...v,
            emojis: { button: !0 }
        } : v,
        textValue: m,
        richValue: S,
        onSubmit: e => {
            let {value: t} = e;
            return t.length > h.z ? Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            }) : (n(t), N(), Promise.resolve({
                shouldClear: !0,
                shouldRefocus: !1
            }));
        },
        setEditorRef: a,
        focused: _,
        onFocus: E,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == O.current)
                return 'top';
            let e = O.current.getBoundingClientRect(), t = window.innerHeight;
            return e.top < t / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: l
    });
}
let A = (e, t) => {
        i.useEffect(() => {
            let n = t => {
                    'Escape' === t.key && e();
                }, r = n => {
                    var r;
                    null != n.target && !(null == t ? void 0 : null === (r = t.current) || void 0 === r ? void 0 : r.contains(null == n ? void 0 : n.target)) && e();
                };
            return document.addEventListener('keydown', n), document.addEventListener('mousedown', r), () => {
                document.removeEventListener('keydown', n), document.removeEventListener('mousedown', r);
            };
        }, [
            e,
            t
        ]);
    }, N = e => {
        let {
                onSelectEmoji: t,
                onClick: n
            } = e, a = (0, l.ZP)(), [o, u] = i.useState(!1), c = i.useRef(null);
        return A(() => u(!1), c), (0, r.jsx)(s.Popout, {
            align: 'right',
            position: 'top',
            shouldShow: o,
            disablePointerEvents: !1,
            renderPopout: () => (0, r.jsx)('div', {
                className: 'theme-'.concat(a),
                ref: c,
                children: (0, r.jsx)(_.$, {
                    messageId: p.lds,
                    channel: T,
                    closePopout: () => {
                        u(!1);
                    },
                    onSelectEmoji: (e, n, r) => {
                        null != e && (t(e, n, r), u(!1));
                    }
                })
            }),
            children: () => (0, r.jsx)(s.Tooltip, {
                text: m.Z.Messages.ADD_REACTION,
                children: e => (0, r.jsx)('div', {
                    ...e,
                    className: I.reaction,
                    children: (0, r.jsx)(f.Z, {
                        active: !1,
                        tabIndex: 0,
                        onClick: () => {
                            null == n || n(), u(!0);
                        }
                    })
                })
            })
        });
    };
t.ZP = e => {
    let {
            onInteraction: t,
            showReact: n = !0,
            showReply: a = !0,
            popoutProps: l = {}
        } = e, {
            replyHeaderText: u,
            replyPlaceholder: c,
            popoutBody: d
        } = l, [_, E] = i.useState(!1), f = i.useRef(null);
    return A(() => E(!1), f), (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: I.reactions,
            children: [
                n && (0, r.jsx)(N, {
                    onSelectEmoji: e => {
                        null != e && t({
                            interactionType: h.L.ReactSubmit,
                            emoji: e,
                            reply: null
                        });
                    },
                    onClick: () => {
                        t({
                            interactionType: h.L.ReactBegin,
                            emoji: null,
                            reply: null
                        }), E(!1);
                    }
                }),
                a && (0, r.jsx)(g, {
                    hide: () => E(!1),
                    ref: f,
                    headerText: u,
                    placeholder: c,
                    showPopout: _,
                    body: d,
                    onEnter: e => {
                        t({
                            interactionType: h.L.ReplySubmit,
                            emoji: null,
                            reply: e
                        });
                    },
                    children: (0, r.jsx)(s.Tooltip, {
                        text: m.Z.Messages.MESSAGE_ACTION_REPLY,
                        children: e => (0, r.jsx)('button', {
                            ...e,
                            className: o()(I.reaction, I.emojiButton),
                            onClick: () => {
                                t({
                                    interactionType: h.L.ReplyBegin,
                                    emoji: null,
                                    reply: null
                                }), E(!0);
                            },
                            children: (0, r.jsx)(s.ArrowAngleLeftUpIcon, {})
                        })
                    })
                })
            ]
        })
    });
};
