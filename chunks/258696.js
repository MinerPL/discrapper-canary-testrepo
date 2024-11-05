n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(873546),
    s = n(442837),
    o = n(911969),
    l = n(607070),
    u = n(998698),
    c = n(211242),
    d = n(540059),
    f = n(276444),
    _ = n(646476),
    h = n(599659),
    p = n(963198),
    m = n(913663),
    g = n(117530),
    E = n(594174),
    v = n(74538),
    I = n(94161),
    S = n(9277),
    T = n(58995),
    b = n(897291),
    y = n(764794),
    A = n(241553),
    N = n(319417),
    C = n(728386),
    R = n(474936),
    O = n(703130);
function D(e) {
    let { disabled: t, channel: n } = e,
        { enabled: a } = _.ZP.useExperiment({ location: 'dc120b_1' }, { autoTrackExposure: !1 }),
        s = (0, _.rK)();
    i.useEffect(() => {
        s && _.ZP.trackExposure({ location: 'dc120b_2' });
    }, [s]);
    let { enabled: o } = h.O.useExperiment({ location: 'gift-button' }),
        l = a && s;
    return o
        ? (0, r.jsx)(T.Z, {
              disabled: t,
              channel: n
          })
        : l
          ? (0, r.jsx)(A.Z, {
                disabled: t,
                channel: n
            })
          : (0, r.jsx)(b.Z, {
                disabled: t,
                channel: n
            });
}
t.Z = i.memo(function (e) {
    var t, n, i, _, h, T, b, A;
    let { type: L, disabled: x, channel: w, handleSubmit: M, isEmpty: P, showAllButtons: k } = e,
        U = (0, s.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        G = (0, s.e7)([m.Z], () => m.Z.getStickerPreview(w.id, L.drafts.type)),
        B = null != G && G.length > 0,
        Z = (0, s.e7)([g.Z], () => g.Z.getUploads(w.id, L.drafts.type)),
        { activeCommand: F, activeCommandOption: V } = (0, s.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(w.id),
            activeCommandOption: u.Z.getActiveOption(w.id)
        })),
        { paymentsBlocked: j } = c.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        H = [],
        { enabled: Y } = p.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        W = E.default.getCurrentUser(),
        K = null !== (_ = (0, s.e7)([f.Z], () => (Y && v.ZP.isPremiumExactly(W, R.p9.TIER_2) ? f.Z.getReferralsRemaining() : 0))) && void 0 !== _ ? _ : 0,
        z = (0, s.e7)([f.Z], () => {
            if (!w.isDM() || void 0 === w.recipients || w.recipients.length > 1 || !Y) return !1;
            let e = w.recipients[0];
            return f.Z.getSentUserIds().includes(e);
        }),
        q = (0, s.e7)([E.default], () => (!w.isDM() || void 0 === w.recipients || w.recipients.length > 1 ? null : E.default.getUser(w.recipients[0]))),
        [Q, X] = (0, s.Wu)([f.Z], () => {
            let e = [!1, !1];
            if (!w.isDM() || void 0 === w.recipients || w.recipients.length > 1 || null == q || q.bot) return e;
            let t = z || K > 0,
                n = f.Z.getRecipientEligibility(q.id);
            return [Y && t && n, n];
        }),
        J = (0, d.Q)('ChannelTextAreaButtons');
    return (!a.tq &&
        (w.isDM() &&
            (null === (h = L.gifts) || void 0 === h ? void 0 : h.button) != null &&
            null == F &&
            (v.ZP.isPremiumExactly(W, R.p9.TIER_2) && X && p.Z.trackExposure({ location: 'dc120b_5' }),
            Q &&
                H.push(
                    (0, r.jsx)(
                        y.Z,
                        {
                            disabled: x,
                            referralsRemaining: K,
                            channel: w,
                            isResending: z
                        },
                        'referral'
                    )
                )),
        (null === (T = L.gifts) || void 0 === T ? void 0 : T.button) != null &&
            null == F &&
            !j &&
            (null == q || v.ZP.isPremiumEligible(q)) &&
            H.push(
                (0, r.jsx)(
                    D,
                    {
                        disabled: x,
                        channel: w
                    },
                    'gift'
                )
            ),
        (null === (b = L.gifs) || void 0 === b ? void 0 : b.button) != null &&
            null == F &&
            k &&
            H.push(
                (0, r.jsx)(
                    S.Z,
                    {
                        disabled: x,
                        type: L
                    },
                    'gif'
                )
            ),
        (null === (A = L.stickers) || void 0 === A ? void 0 : A.button) != null &&
            null == F &&
            k &&
            H.push(
                (0, r.jsx)(
                    C.Z,
                    {
                        disabled: x,
                        type: L
                    },
                    'sticker'
                )
            )),
    (null === (t = L.emojis) || void 0 === t ? void 0 : t.button) != null &&
        (null == F || (null != V && V.type !== o.jw.ATTACHMENT)) &&
        H.push(
            (0, r.jsx)(
                I.Z,
                {
                    disabled: x,
                    type: L
                },
                'emoji'
            )
        ),
    (null === (n = L.submit) || void 0 === n ? void 0 : n.button) != null &&
        ((null === (i = L.submit) || void 0 === i ? void 0 : i.ignorePreference) || U) &&
        H.push(
            (0, r.jsx)(
                N.Z,
                {
                    onClick: M,
                    disabled: x || (0 === Z.length && P && !B)
                },
                'submit'
            )
        ),
    0 === H.length)
        ? null
        : (J && H.push((0, r.jsx)('div', { id: 'visual-refresh-app-launcher-portal' }, 'app')),
          (0, r.jsx)('div', {
              className: O.buttons,
              children: H
          }));
});
