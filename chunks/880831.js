n.d(t, {
    Z: function () {
        return L;
    },
    z: function () {
        return R;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(392711), o = n(920906), c = n(442837), u = n(481060), d = n(570140), h = n(475179), p = n(904245), m = n(372900), _ = n(905405), f = n(937889), E = n(739566), C = n(378233), g = n(419922), I = n(375954), x = n(699516), T = n(512665), N = n(768581), v = n(70956), S = n(823379), Z = n(792125), A = n(981631), M = n(768760), b = n(275953);
let R = 10 * v.Z.Millis.SECOND;
function j(e) {
    var t;
    let {message: n} = e, l = (0, c.e7)([x.Z], () => x.Z.isBlockedForMessage(n)), r = (0, E.Uj)(n), o = a.useContext(m.Z), [d, I] = a.useState(!1), v = (0, _.p)(), S = a.useCallback(e => {
            if ('A' !== e.target.nodeName)
                h.Z.updateChatOpen(n.channel_id, !0), p.Z.jumpToMessage({
                    channelId: n.channel_id,
                    messageId: n.id,
                    flash: !0
                });
        }, [
            n.channel_id,
            n.id
        ]), Z = null != n.content && '' !== n.content ? (0, f.ZP)(n, {
            isInteracting: d,
            shouldFilterKeywords: v
        }).content : null, {
            contentPlaceholder: A,
            renderedContent: R,
            trailingIcon: j,
            leadingIcon: L
        } = (0, T.f)(n, Z, l, b.messageContent, {
            trailingIconClass: b.messageContentTrailingIcon,
            leadingIconClass: b.messageContentLeadingIcon,
            iconSize: M.WW
        }), P = (0, C.cv)(n), O = P.length > 0 ? P.map(e => (0, i.jsx)(g.ZP, {
            className: b.sticker,
            size: 128,
            sticker: e,
            isInteracting: d
        }, e.id)) : null;
    return (0, i.jsxs)(u.Clickable, {
        className: b.toast,
        onMouseEnter: () => {
            I(!0);
        },
        onMouseLeave: () => {
            I(!1);
        },
        onClick: S,
        children: [
            (0, i.jsxs)('div', {
                className: s()(b.messageContentWrapper, { [b.mentioned]: n.mentioned }),
                children: [
                    null != O ? null : L,
                    null !== (t = null != R ? R : O) && void 0 !== t ? t : (0, i.jsx)('span', { children: A }),
                    null != O ? null : j
                ]
            }),
            (0, i.jsx)('img', {
                alt: '',
                src: (null == r ? void 0 : r.guildMemberAvatar) != null && null != o ? (0, N.JM)({
                    guildId: o,
                    userId: n.author.id,
                    avatar: r.guildMemberAvatar
                }) : n.author.getAvatarURL(o, 32),
                className: b.avatar
            })
        ]
    });
}
function L(e) {
    let {
            channelId: t,
            className: n
        } = e, [l, u] = a.useState(!1), {
            toastsHidden: h,
            toastMessages: p
        } = function (e) {
            var t;
            let {
                    channelId: n,
                    isFrozen: i,
                    count: l,
                    lingerMs: s
                } = e, [r, o] = a.useState([]), [u, h] = a.useState(!1), p = a.useRef(null), m = a.useRef(), _ = a.useCallback(() => {
                    o([]), h(!0);
                }, []);
            a.useEffect(() => {
                function e(e) {
                    let {
                        channelId: t,
                        message: i
                    } = e;
                    if (t === n && i.type !== A.uaV.STAGE_START && i.type !== A.uaV.STAGE_END && i.type !== A.uaV.STAGE_TOPIC && i.type !== A.uaV.STAGE_SPEAKER && i.type !== A.uaV.STAGE_RAISE_HAND)
                        clearTimeout(m.current), m.current = setTimeout(_, s), o(e => [
                            ...e,
                            i.id
                        ]);
                }
                return d.Z.subscribe('MESSAGE_CREATE', e), () => {
                    d.Z.unsubscribe('MESSAGE_CREATE', e);
                };
            }, [
                n,
                _,
                l,
                s
            ]), a.useEffect(() => () => {
                clearTimeout(m.current);
            }, []), a.useEffect(() => {
                r.length > 3 && o(e => {
                    let t = e.length - 3;
                    return [...e.slice(t)];
                });
            }, [r]), i && null == p.current ? p.current = r : !i && null != p.current && (p.current = null);
            let f = null !== (t = p.current) && void 0 !== t ? t : r;
            return {
                toastsHidden: u,
                toastMessages: (0, c.Wu)([I.Z], () => f.map(e => I.Z.getMessage(n, e)), [
                    n,
                    f
                ]).filter(S.lm)
            };
        }({
            channelId: t,
            isFrozen: l,
            count: 3,
            lingerMs: R
        }), m = a.useRef({}), [_, f] = a.useState({}), E = a.useCallback((e, t) => {
            null == t ? delete m.current[e] : m.current[e] = t;
        }, []);
    a.useLayoutEffect(() => {
        let e = {}, t = 0;
        for (let i of p) {
            var n;
            let a = null !== (n = m.current[i.id]) && void 0 !== n ? n : 0;
            e[i.id] = t, t += a + 8;
        }
        !(0, r.isEqual)(e, _) && f(e);
    }, [p]);
    let C = p.map(e => ({
            message: e,
            height: m.current[e.id],
            y: _[e.id]
        })), g = (0, o.useTransition)(C, {
            keys: e => e.message.id,
            from: () => ({ opacity: 0 }),
            enter: e => {
                let {y: t} = e;
                return {
                    opacity: 1,
                    translateY: t
                };
            },
            update: e => {
                let {y: t} = e;
                return { translateY: t };
            },
            leave: e => {
                let {
                    height: t,
                    y: n
                } = e;
                return {
                    opacity: 0,
                    translateY: h ? n : -(null != t ? t : 0) - 8,
                    pointerEvents: 'none'
                };
            }
        });
    return (0, i.jsx)('div', {
        className: s()(n, (0, Z.Q)(A.BRd.DARK)),
        onMouseEnter: () => {
            u(!0);
        },
        onMouseLeave: () => {
            u(!1);
        },
        children: g((e, t) => (0, i.jsx)(o.animated.div, {
            ref: e => E(t.message.id, null != e ? e.offsetHeight : null),
            className: b.toastWrapper,
            style: e,
            children: (0, i.jsx)(j, { message: t.message })
        }))
    });
}
