n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(106351),
    l = n(507274),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    f = n(131704),
    _ = n(823379),
    h = n(5192),
    p = n(51144),
    m = n(785717),
    g = n(448197),
    E = n(698305),
    v = n(510659),
    I = n(810097),
    S = n(652853),
    T = n(228168),
    b = n(420212),
    y = n(388032),
    A = n(639899);
let N = (0, f.kt)({
        id: '1',
        type: o.d.DM
    }),
    C = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case T.n_.ACTIVITY:
                let a = y.intl.formatToPlainString(y.t.WmvMCg, { username: n });
                return ''.concat(I.jd).concat(a, '*\n').concat(t);
            case T.n_.AVATAR:
                let s = y.intl.formatToPlainString(y.t.lpaBsL, { username: n });
                return ''.concat(I.jd).concat(s, '*\n').concat(t);
            case T.n_.STATUS:
                let o = y.intl.formatToPlainString(y.t.lFXgFR, { username: n });
                return null != i ? ''.concat(I.jd).concat(o, '*').concat('\n> '.concat(i), '\n').concat(t) : ''.concat(I.jd).concat(o, '*\n').concat(t);
            default:
                (0, _.vE)(r);
        }
    },
    R = (e) => {
        switch (e) {
            case T.n_.ACTIVITY:
                return y.t.Qn081N;
            case T.n_.AVATAR:
                return y.t.xGNPFB;
            case T.n_.STATUS:
                return y.t.g9BTCA;
            default:
                (0, _.vE)(e);
        }
    };
function O(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: f, sourceDetails: _, setPopoutRef: I, modalKey: O, onClose: D } = e,
        { trackUserProfileAction: L } = (0, m.KZ)(),
        { sendReply: x } = (0, g.Q)(f),
        { resetInteraction: w, setInteractionToast: M } = (0, v.Xo)(),
        { primaryColor: P } = (0, S.z)(),
        [k, U] = i.useState(''),
        [G, B] = i.useState((0, c.JM)(k)),
        Z = i.useRef(!1),
        F = i.useRef(null),
        V = i.useCallback(
            (e) => {
                e.key === b.vn.ESCAPE && (e.stopPropagation(), w());
            },
            [w]
        );
    i.useEffect(() => {
        null == I || I(null == F ? void 0 : F.current);
    }, [F, I]);
    let j = async (e) => {
            if (null == e) return;
            L({ action: x });
            let n = C({
                input: e,
                username: p.ZP.getName(t),
                sourceType: f,
                sourceDetails: _
            });
            M(null);
            try {
                await (0, E.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReplyPopout',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            M(T.P.REPLY);
        },
        H = {
            [A.biteSize]: o === T.y0.BITE_SIZE,
            [A.panel]: o === T.y0.PANEL,
            [A.fullSize]: o === T.y0.FULL_SIZE
        },
        Y = {
            [A.status]: f === T.n_.STATUS,
            [A.avatar]: f === T.n_.AVATAR,
            [A.activity]: f === T.n_.ACTIVITY
        };
    return (0, r.jsx)(l.V, {
        ref: F,
        onKeyDown: V,
        children: (0, r.jsx)('div', {
            className: s()(A.container, H, Y, { [A.customProfileTheme]: null != P }),
            children: (0, r.jsx)(d.Z, {
                parentModalKey: O,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: A.inner,
                editorClassName: A.editor,
                type: u.I.USER_PROFILE_REPLY,
                placeholder: y.intl.formatToPlainString(R(f), { username: h.ZP.getName(n, a, t) }),
                channel: N,
                textValue: k,
                richValue: G,
                onChange: (e, t, n) => {
                    if (t !== k) U(t), B(n);
                },
                focused: Z.current,
                onFocus: () => {
                    Z.current = !0;
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
                            await j(n),
                            w(),
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
