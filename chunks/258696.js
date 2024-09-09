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
    E = n(963198),
    f = n(913663),
    h = n(117530),
    p = n(594174),
    I = n(74538),
    m = n(94161),
    T = n(9277),
    S = n(897291),
    g = n(764794),
    A = n(241553),
    N = n(319417),
    O = n(728386),
    R = n(474936),
    v = n(305489);
function C(e) {
    let { disabled: t, channel: n } = e,
        { enabled: a } = _.ZP.useExperiment({ location: 'dc120b_1' }, { autoTrackExposure: !1 }),
        s = (0, _.rK)();
    return (
        i.useEffect(() => {
            s && _.ZP.trackExposure({ location: 'dc120b_2' });
        }, [s]),
        a && s
            ? (0, r.jsx)(A.Z, {
                  disabled: t,
                  channel: n
              })
            : (0, r.jsx)(S.Z, {
                  disabled: t,
                  channel: n
              })
    );
}
t.Z = i.memo(function (e) {
    var t, n, i, _, S, A, y, L;
    let { type: D, disabled: b, channel: M, handleSubmit: P, isEmpty: U, showAllButtons: w } = e,
        x = (0, s.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        G = (0, s.e7)([f.Z], () => f.Z.getStickerPreview(M.id, D.drafts.type)),
        k = null != G && G.length > 0,
        B = (0, s.e7)([h.Z], () => h.Z.getUploads(M.id, D.drafts.type)),
        { activeCommand: F, activeCommandOption: V } = (0, s.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(M.id),
            activeCommandOption: u.Z.getActiveOption(M.id)
        })),
        { paymentsBlocked: H } = c.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        Z = [],
        { enabled: Y } = E.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        j = p.default.getCurrentUser(),
        W = null !== (_ = (0, s.e7)([d.Z], () => (Y && I.ZP.isPremiumExactly(j, R.p9.TIER_2) ? d.Z.getReferralsRemaining() : 0))) && void 0 !== _ ? _ : 0,
        K = (0, s.e7)([d.Z], () => {
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || !Y) return !1;
            let e = M.recipients[0];
            return d.Z.getSentUserIds().includes(e);
        }),
        [z, q] = (0, s.Wu)([d.Z, p.default], () => {
            let e = [!1, !1];
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1) return e;
            let t = M.recipients[0],
                n = p.default.getUser(t);
            if (null == n || n.bot) return e;
            let r = K || W > 0,
                i = d.Z.getRecipientEligibility(t);
            return [Y && r && i, i];
        });
    return (!a.tq &&
        (M.isDM() &&
            (null === (S = D.gifts) || void 0 === S ? void 0 : S.button) != null &&
            null == F &&
            (I.ZP.isPremiumExactly(j, R.p9.TIER_2) && q && E.Z.trackExposure({ location: 'dc120b_5' }),
            z &&
                Z.push(
                    (0, r.jsx)(
                        g.Z,
                        {
                            disabled: b,
                            referralsRemaining: W,
                            channel: M,
                            isResending: K
                        },
                        'referral'
                    )
                )),
        (null === (A = D.gifts) || void 0 === A ? void 0 : A.button) != null &&
            null == F &&
            !H &&
            Z.push(
                (0, r.jsx)(
                    C,
                    {
                        disabled: b,
                        channel: M
                    },
                    'gift'
                )
            ),
        (null === (y = D.gifs) || void 0 === y ? void 0 : y.button) != null &&
            null == F &&
            w &&
            Z.push(
                (0, r.jsx)(
                    T.Z,
                    {
                        disabled: b,
                        type: D
                    },
                    'gif'
                )
            ),
        (null === (L = D.stickers) || void 0 === L ? void 0 : L.button) != null &&
            null == F &&
            w &&
            Z.push(
                (0, r.jsx)(
                    O.Z,
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
                m.Z,
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
                N.Z,
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
              className: v.buttons,
              children: Z
          });
});
