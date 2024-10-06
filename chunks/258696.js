n(47120), n(653041);
var r = n(735250),
    i = n(470079),
    a = n(873546),
    s = n(442837),
    o = n(911969),
    l = n(607070),
    u = n(998698),
    c = n(211242),
    d = n(276444),
    _ = n(646476),
    E = n(599659),
    f = n(963198),
    h = n(913663),
    p = n(117530),
    I = n(594174),
    m = n(74538),
    T = n(94161),
    S = n(9277),
    g = n(58995),
    A = n(897291),
    N = n(764794),
    O = n(241553),
    R = n(319417),
    v = n(728386),
    C = n(474936),
    L = n(933283);
function y(e) {
    let { disabled: t, channel: n } = e,
        { enabled: a } = _.ZP.useExperiment({ location: 'dc120b_1' }, { autoTrackExposure: !1 }),
        s = (0, _.rK)();
    i.useEffect(() => {
        s && _.ZP.trackExposure({ location: 'dc120b_2' });
    }, [s]);
    let { enabled: o } = E.O.useExperiment({ location: 'gift-button' }),
        l = a && s;
    return o
        ? (0, r.jsx)(g.Z, {
              disabled: t,
              channel: n
          })
        : l
          ? (0, r.jsx)(O.Z, {
                disabled: t,
                channel: n
            })
          : (0, r.jsx)(A.Z, {
                disabled: t,
                channel: n
            });
}
t.Z = i.memo(function (e) {
    var t, n, i, _, E, g, A, O;
    let { type: D, disabled: b, channel: M, handleSubmit: P, isEmpty: U, showAllButtons: w } = e,
        x = (0, s.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        G = (0, s.e7)([h.Z], () => h.Z.getStickerPreview(M.id, D.drafts.type)),
        k = null != G && G.length > 0,
        B = (0, s.e7)([p.Z], () => p.Z.getUploads(M.id, D.drafts.type)),
        { activeCommand: F, activeCommandOption: V } = (0, s.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(M.id),
            activeCommandOption: u.Z.getActiveOption(M.id)
        })),
        { paymentsBlocked: H } = c.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        Z = [],
        { enabled: Y } = f.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        j = I.default.getCurrentUser(),
        W = null !== (_ = (0, s.e7)([d.Z], () => (Y && m.ZP.isPremiumExactly(j, C.p9.TIER_2) ? d.Z.getReferralsRemaining() : 0))) && void 0 !== _ ? _ : 0,
        K = (0, s.e7)([d.Z], () => {
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || !Y) return !1;
            let e = M.recipients[0];
            return d.Z.getSentUserIds().includes(e);
        }),
        z = (0, s.e7)([I.default], () => (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 ? null : I.default.getUser(M.recipients[0]))),
        [q, Q] = (0, s.Wu)([d.Z], () => {
            let e = [!1, !1];
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || null == z || z.bot) return e;
            let t = K || W > 0,
                n = d.Z.getRecipientEligibility(z.id);
            return [Y && t && n, n];
        });
    return (!a.tq &&
        (M.isDM() &&
            (null === (E = D.gifts) || void 0 === E ? void 0 : E.button) != null &&
            null == F &&
            (m.ZP.isPremiumExactly(j, C.p9.TIER_2) && Q && f.Z.trackExposure({ location: 'dc120b_5' }),
            q &&
                Z.push(
                    (0, r.jsx)(
                        N.Z,
                        {
                            disabled: b,
                            referralsRemaining: W,
                            channel: M,
                            isResending: K
                        },
                        'referral'
                    )
                )),
        (null === (g = D.gifts) || void 0 === g ? void 0 : g.button) != null &&
            null == F &&
            !H &&
            (null == z || m.ZP.isPremiumEligible(z)) &&
            Z.push(
                (0, r.jsx)(
                    y,
                    {
                        disabled: b,
                        channel: M
                    },
                    'gift'
                )
            ),
        (null === (A = D.gifs) || void 0 === A ? void 0 : A.button) != null &&
            null == F &&
            w &&
            Z.push(
                (0, r.jsx)(
                    S.Z,
                    {
                        disabled: b,
                        type: D
                    },
                    'gif'
                )
            ),
        (null === (O = D.stickers) || void 0 === O ? void 0 : O.button) != null &&
            null == F &&
            w &&
            Z.push(
                (0, r.jsx)(
                    v.Z,
                    {
                        disabled: b,
                        type: D
                    },
                    'sticker'
                )
            )),
    (null === (t = D.emojis) || void 0 === t ? void 0 : t.button) != null &&
        (null == F || (null != V && V.type !== o.jw.ATTACHMENT)) &&
        Z.push(
            (0, r.jsx)(
                T.Z,
                {
                    disabled: b,
                    type: D
                },
                'emoji'
            )
        ),
    (null === (n = D.submit) || void 0 === n ? void 0 : n.button) != null &&
        ((null === (i = D.submit) || void 0 === i ? void 0 : i.ignorePreference) || x) &&
        Z.push(
            (0, r.jsx)(
                R.Z,
                {
                    onClick: P,
                    disabled: b || (0 === B.length && U && !k)
                },
                'submit'
            )
        ),
    0 === Z.length)
        ? null
        : (0, r.jsx)('div', {
              className: L.buttons,
              children: Z
          });
});
