n.d(t, { Z: () => S });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(367907),
    u = n(739566),
    d = n(623292),
    f = n(703656),
    _ = n(665906),
    p = n(488131),
    h = n(375954),
    m = n(962293),
    g = n(981631),
    E = n(388032),
    b = n(453091);
let y = 2,
    v = 10;
function O(e, t) {
    let n = e.id,
        r = t.id;
    return (0, s.e7)(
        [h.Z],
        () => {
            let e = r;
            for (let t = 0; t < v; t++) {
                let r = h.Z.getMessage(n, e);
                if ((null == r ? void 0 : r.type) !== g.uaV.REPLY || null == r.messageReference) return t;
                e = r.messageReference.message_id;
            }
            return v;
        },
        [n, r]
    );
}
function I(e) {
    let { channel: t, message: n, replyChainLength: o } = e;
    function a() {
        (0, d.A6)(t.id), (0, p.R6)(t, n, 'Reply Chain Nudge');
    }
    let s = i.useRef(o);
    return (
        i.useEffect(() => {
            s.current = o;
        }),
        i.useEffect(() => {
            (0, c.yw)(g.rMx.THREAD_NUDGE_SHOWN, {
                type: 'Reply Chain ('.concat(y + 1, ')'),
                reply_chain_length: s.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            });
        }, [t]),
        (0, r.jsxs)(l.P3F, {
            onClick: a,
            className: b.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [
                (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: b.text,
                    variant: 'text-sm/normal',
                    children: E.NW.format(E.t.B3V0FB, { count: Math.min(v, o + 1) })
                }),
                (0, r.jsx)(l.Text, {
                    color: 'text-link',
                    className: b.createThreadButton,
                    variant: 'text-sm/semibold',
                    children: E.NW.string(E.t.rBIGBA)
                })
            ]
        })
    );
}
function S(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: o, shouldMention: s, showMentionToggle: c } = t,
        { nick: p, colorString: h, colorRoleName: v } = (0, u.ZP)(o),
        S = O(i, o),
        T = (0, _.NE)(i, o),
        N = n.showThreadPromptOnReply && S >= y && T,
        A = () => (0, f.uL)(g.Z5c.CHANNEL(i.getGuildId(), i.id, o.id));
    function C(e) {
        e.stopPropagation(), (0, d.qx)(i.id, !s);
    }
    function R(e) {
        e.stopPropagation(), (0, d.A6)(i.id);
    }
    return (0, r.jsx)('div', {
        className: b.clipContainer,
        children: (0, r.jsxs)('div', {
            className: b.container,
            children: [
                (0, r.jsxs)('div', {
                    className: b.replyBar,
                    children: [
                        (0, r.jsx)(l.P3F, {
                            onClick: A,
                            focusProps: {
                                offset: {
                                    top: -8,
                                    right: -4,
                                    bottom: -8,
                                    left: -4
                                }
                            },
                            children: (0, r.jsx)(l.Text, {
                                color: 'header-secondary',
                                className: a()(b.text, b.replyLabel),
                                variant: 'text-sm/normal',
                                children: E.NW.format(E.t['8E4Gxc'], {
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            l.PUh,
                                            {
                                                className: b.name,
                                                name: p,
                                                color: h,
                                                roleName: v
                                            },
                                            t
                                        )
                                })
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: b.actions,
                            children: [
                                c &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.ua7, {
                                                text: s ? E.NW.string(E.t.DH2o6e) : E.NW.string(E.t.utGGIS),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n, onFocus: i, onBlur: o } = e;
                                                    return (0, r.jsx)(l.P3F, {
                                                        role: 'switch',
                                                        'aria-checked': s,
                                                        onClick: C,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        onFocus: i,
                                                        onBlur: o,
                                                        children: (0, r.jsxs)(l.Text, {
                                                            variant: 'text-sm/bold',
                                                            color: s ? 'text-link' : 'text-muted',
                                                            className: b.mentionButton,
                                                            children: [
                                                                (0, r.jsx)(l.lOy, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    'aria-label': E.NW.string(E.t.P8tvKC),
                                                                    className: b.mentionIcon
                                                                }),
                                                                s ? E.NW.string(E.t.p9jC2t) : E.NW.string(E.t.U7f3bG)
                                                            ]
                                                        })
                                                    });
                                                }
                                            }),
                                            (0, r.jsx)('div', {
                                                className: b.separator,
                                                'aria-hidden': !0
                                            })
                                        ]
                                    }),
                                (0, r.jsx)(m.B, { onClick: R })
                            ]
                        })
                    ]
                }),
                N &&
                    (0, r.jsx)(I, {
                        channel: i,
                        message: o,
                        replyChainLength: S
                    })
            ]
        })
    });
}
