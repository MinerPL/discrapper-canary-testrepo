n.d(t, {
    Z: function () {
        return y;
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
    E = n(823379),
    f = n(5192),
    h = n(51144),
    p = n(785717),
    I = n(448197),
    m = n(698305),
    T = n(510659),
    S = n(825801),
    g = n(652853),
    A = n(228168),
    N = n(420212),
    O = n(689938),
    R = n(639899);
let v = (0, _.kt)({
        id: '1',
        type: o.d.DM
    }),
    C = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case A.n_.ACTIVITY:
                let a = O.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({ username: n });
                return ''.concat(S.jd).concat(a, '*\n').concat(t);
            case A.n_.AVATAR:
                let s = O.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: n });
                return ''.concat(S.jd).concat(s, '*\n').concat(t);
            case A.n_.STATUS:
                let o = O.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: n });
                return null != i ? ''.concat(S.jd).concat(o, '*').concat('\n> '.concat(i), '\n').concat(t) : ''.concat(S.jd).concat(o, '*\n').concat(t);
            default:
                (0, E.vE)(r);
        }
    },
    L = (e) => {
        switch (e) {
            case A.n_.ACTIVITY:
                return O.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
            case A.n_.AVATAR:
                return O.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
            case A.n_.STATUS:
                return O.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
            default:
                (0, E.vE)(e);
        }
    };
function y(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: _, sourceDetails: E, setPopoutRef: O, modalKey: y, onClose: D } = e,
        { trackUserProfileAction: b } = (0, p.KZ)(),
        { sendReply: M } = (0, I.Q)(_),
        { resetInteraction: P, setInteractionToastShown: U, setInteractionTypeSent: w } = (0, T.Xo)(),
        { primaryColor: x } = (0, g.z)(),
        [G, k] = i.useState(''),
        [B, F] = i.useState((0, c.JM)(G)),
        V = i.useRef(!1),
        H = i.useRef(null),
        Z = i.useCallback(
            (e) => {
                e.key === N.vn.ESCAPE && (e.stopPropagation(), P());
            },
            [P]
        );
    i.useEffect(() => {
        null == O || O(null == H ? void 0 : H.current);
    }, [H, O]);
    let Y = async (e) => {
            if (null == e) return;
            b({ action: M });
            let n = C({
                input: e,
                username: h.ZP.getName(t),
                sourceType: _,
                sourceDetails: E
            });
            w(null), U(!0);
            try {
                await (0, m.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReactReplyBar',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            w(A.P.REPLY),
                setTimeout(() => {
                    U(!1);
                }, S._1);
        },
        j = {
            [R.biteSize]: o === A.y0.BITE_SIZE,
            [R.panel]: o === A.y0.PANEL
        },
        W = {
            [R.status]: _ === A.n_.STATUS,
            [R.avatar]: _ === A.n_.AVATAR
        };
    return (0, r.jsx)(l.V, {
        ref: H,
        onKeyDown: Z,
        children: (0, r.jsx)('div', {
            className: s()(R.container, j, W, { [R.customProfileTheme]: null != x }),
            children: (0, r.jsx)(d.Z, {
                parentModalKey: y,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: R.inner,
                editorClassName: R.editor,
                type: u.I.USER_PROFILE_REPLY,
                placeholder: L(_).format({ username: f.ZP.getName(n, a, t) }),
                channel: v,
                textValue: G,
                richValue: B,
                onChange: (e, t, n) => {
                    if (t !== G) k(t), F(n);
                },
                focused: V.current,
                onFocus: () => {
                    V.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length)
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    try {
                        return (
                            await Y(n),
                            P(),
                            null == D || D(),
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
