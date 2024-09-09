n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(106351),
    l = n(399606),
    u = n(507274),
    c = n(481060),
    d = n(541716),
    _ = n(752305),
    E = n(893718),
    f = n(210887),
    h = n(131704),
    p = n(823379),
    I = n(5192),
    m = n(51144),
    T = n(785717),
    S = n(448197),
    g = n(698305),
    A = n(825801),
    N = n(228168),
    O = n(689938),
    R = n(227795);
let v = (0, h.kt)({
        id: '1',
        type: o.d.DM
    }),
    C = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case N.n_.ACTIVITY:
                let a = O.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({ username: n });
                return '> -# *'.concat(a, '*\n').concat(t);
            case N.n_.AVATAR:
                let s = O.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: n });
                return '> -# *'.concat(s, '*\n').concat(t);
            case N.n_.STATUS:
                let o = O.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: n });
                return null != i ? '> -# *'.concat(o, '*').concat('\n > '.concat(i), '\n').concat(t) : '> -# *'.concat(o, '*\n').concat(t);
            default:
                (0, p.vE)(r);
        }
    },
    y = (e) => {
        switch (e) {
            case N.n_.ACTIVITY:
                return O.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
            case N.n_.AVATAR:
                return O.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
            case N.n_.STATUS:
                return O.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
            default:
                (0, p.vE)(e);
        }
    };
function L(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: h, sourceDetails: p, onInteraction: O, setPopoutRef: L, modalKey: D, setInteractionToastShown: b, setInteractionSent: M, setIsReplyInteraction: P, onClose: U } = e,
        { trackUserProfileAction: w } = (0, T.KZ)(),
        x = (0, l.e7)([f.Z], () => f.Z.theme),
        { sendReply: G } = (0, S.Q)(h),
        [k, B] = i.useState(''),
        [F, V] = i.useState((0, _.JM)(k)),
        H = i.useRef(!1),
        Z = i.useRef(null);
    i.useEffect(() => {
        null == L || L(null == Z ? void 0 : Z.current);
    }, [Z, L]);
    let Y = async (e) => {
            if (null == e) return;
            w({ action: G });
            let n = C({
                input: e,
                username: m.ZP.getName(t),
                sourceType: h,
                sourceDetails: p
            });
            P(!0), M(!1), b(!0);
            try {
                await (0, g.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReactReplyBar',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            M(!0),
                setTimeout(() => {
                    b(!1);
                }, A._);
        },
        j = {
            [R.biteSize]: o === N.y0.BITE_SIZE,
            [R.panel]: o === N.y0.PANEL
        },
        W = {
            [R.status]: h === N.n_.STATUS,
            [R.avatar]: h === N.n_.AVATAR
        };
    return (0, r.jsx)(u.V, {
        ref: Z,
        children: (0, r.jsx)(c.ThemeProvider, {
            theme: x,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: s()(R.container, j, W, e),
                    children: (0, r.jsx)(E.Z, {
                        parentModalKey: D,
                        emojiPickerCloseOnModalOuterClick: !0,
                        innerClassName: R.inner,
                        editorClassName: R.editor,
                        type: d.I.USER_PROFILE_REPLY,
                        placeholder: y(h).format({ username: I.ZP.getName(n, a, t) }),
                        channel: v,
                        textValue: k,
                        richValue: F,
                        onChange: (e, t, n) => {
                            if (t !== k) B(t), V(n);
                        },
                        focused: H.current,
                        onFocus: () => {
                            H.current = !0;
                        },
                        onBlur: (e) => {
                            var t;
                            if (null === (t = Z.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) {
                                H.current = !1;
                                return;
                            }
                            null !== Z.current &&
                                ((H.current = !1),
                                null == O ||
                                    O({
                                        interactionType: null,
                                        interactionSourceType: null
                                    }),
                                null == U || U());
                        },
                        onSubmit: async (e) => {
                            let { value: t } = e;
                            try {
                                return (
                                    await Y(t.trim()),
                                    null == O ||
                                        O({
                                            interactionType: null,
                                            interactionSourceType: null
                                        }),
                                    null == U || U(),
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
        })
    });
}
