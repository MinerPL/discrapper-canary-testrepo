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
    o = n(106351),
    l = n(507274),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    _ = n(131704),
    E = n(699516),
    f = n(823379),
    h = n(5192),
    p = n(51144),
    m = n(785717),
    I = n(790286),
    T = n(485216),
    g = n(825801),
    S = n(228168),
    A = n(689938),
    N = n(227795);
let v = (0, _.kt)({
        id: '1',
        type: o.d.DM
    }),
    O = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case S.n_.ACTIVITY:
                let a = A.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({ username: n });
                return '> -# *'.concat(a, '*\n').concat(t);
            case S.n_.AVATAR:
                let s = A.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: n });
                return '> -# *'.concat(s, '*\n').concat(t);
            case S.n_.STATUS:
                let o = A.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: n });
                return null != i ? '> -# *'.concat(o, '*').concat('\n > '.concat(i), '\n').concat(t) : '> -# *'.concat(o, '*\n').concat(t);
            default:
                (0, f.vE)(r);
        }
    },
    R = (e) => {
        switch (e) {
            case S.n_.ACTIVITY:
                return A.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
            case S.n_.AVATAR:
                return A.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
            case S.n_.STATUS:
                return A.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
            default:
                (0, f.vE)(e);
        }
    };
function C(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: _, sourceDetails: f, onInteraction: A, setPopoutRef: C, modalKey: y, setInteractionToastShown: D, setInteractionSent: L, setIsReplyInteraction: b, onClose: M } = e,
        { trackUserProfileAction: P } = (0, m.KZ)(),
        { sendReply: U } = (0, I.Q)(_),
        [w, x] = i.useState(''),
        [G, k] = i.useState((0, c.JM)(w)),
        B = i.useRef(!1),
        F = i.useRef(null);
    i.useEffect(() => {
        null == C || C(null == F ? void 0 : F.current);
    }, [F, C]);
    let V = async (e) => {
            var n;
            if (null == e) return;
            P({ action: U });
            let r = O({
                input: e,
                username: null !== (n = E.Z.getNickname(t.id)) && void 0 !== n ? n : p.ZP.getName(t),
                sourceType: _,
                sourceDetails: f
            });
            b(!0),
                L(!1),
                D(!0),
                await (0, T.Z)({
                    userId: t.id,
                    content: r,
                    location: 'UserProfileReplyPopout',
                    openChannel: !1,
                    whenReady: !1
                }),
                L(!0),
                setTimeout(() => {
                    D(!1);
                }, g._);
        },
        H = {
            [N.biteSize]: o === S.y0.BITE_SIZE,
            [N.panel]: o === S.y0.PANEL
        },
        Z = {
            [N.status]: _ === S.n_.STATUS,
            [N.avatar]: _ === S.n_.AVATAR
        };
    return (0, r.jsx)(l.V, {
        ref: F,
        children: (0, r.jsx)('div', {
            className: s()(N.container, H, Z),
            children: (0, r.jsx)(d.Z, {
                parentModalKey: y,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: N.inner,
                editorClassName: N.editor,
                type: u.I.USER_PROFILE_REPLY,
                placeholder: R(_).format({ username: h.ZP.getName(n, a, t) }),
                channel: v,
                textValue: w,
                richValue: G,
                onChange: (e, t, n) => {
                    if (t !== w) x(t), k(n);
                },
                focused: B.current,
                onFocus: () => {
                    B.current = !0;
                },
                onBlur: (e) => {
                    var t;
                    if (null === (t = F.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) {
                        B.current = !1;
                        return;
                    }
                    null !== F.current &&
                        ((B.current = !1),
                        null == A ||
                            A({
                                interactionType: null,
                                interactionSourceType: null
                            }),
                        null == M || M());
                },
                onSubmit: async (e) => {
                    let { value: t } = e;
                    try {
                        return (
                            await V(t.trim()),
                            null == A ||
                                A({
                                    interactionType: null,
                                    interactionSourceType: null
                                }),
                            null == M || M(),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch {
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    }
                }
            })
        })
    });
}
