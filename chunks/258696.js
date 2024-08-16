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
    m = n(74538),
    I = n(94161),
    T = n(9277),
    g = n(897291),
    S = n(764794),
    A = n(241553),
    N = n(319417),
    v = n(728386),
    O = n(474936),
    R = n(305489);
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
            : (0, r.jsx)(g.Z, {
                  disabled: t,
                  channel: n
              })
    );
}
t.Z = i.memo(function (e) {
    var t, n, i, _, g, A, y, D;
    let { type: L, disabled: b, channel: M, handleSubmit: P, isEmpty: U } = e,
        w = (0, s.e7)([l.Z], () => l.Z.isSubmitButtonEnabled),
        x = (0, s.e7)([f.Z], () => f.Z.getStickerPreview(M.id, L.drafts.type)),
        G = null != x && x.length > 0,
        k = (0, s.e7)([h.Z], () => h.Z.getUploads(M.id, L.drafts.type)),
        { activeCommand: B, activeCommandOption: F } = (0, s.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(M.id),
            activeCommandOption: u.Z.getActiveOption(M.id)
        })),
        { paymentsBlocked: V } = c.Z.useExperiment({ location: 'dc120b_3' }, { autoTrackExposure: !1 }),
        H = [],
        { enabled: Z } = E.Z.getCurrentConfig({ location: 'dc120b_4' }, { autoTrackExposure: !1 }),
        Y = p.default.getCurrentUser(),
        j = null !== (_ = (0, s.e7)([d.Z], () => (Z && m.ZP.isPremiumExactly(Y, O.p9.TIER_2) ? d.Z.getReferralsRemaining() : 0))) && void 0 !== _ ? _ : 0,
        W = (0, s.e7)([d.Z], () => {
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || !Z) return !1;
            let e = M.recipients[0];
            return d.Z.getSentUserIds().includes(e);
        }),
        [K, z] = (0, s.Wu)([d.Z, p.default], () => {
            let e = [!1, !1];
            if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1) return e;
            let t = M.recipients[0],
                n = p.default.getUser(t);
            if (null == n || n.bot) return e;
            let r = W || j > 0,
                i = d.Z.getRecipientEligibility(t);
            return [Z && r && i, i];
        });
    return (!a.tq &&
        (M.isDM() &&
            (null === (g = L.gifts) || void 0 === g ? void 0 : g.button) != null &&
            null == B &&
            (m.ZP.isPremiumExactly(Y, O.p9.TIER_2) && z && E.Z.trackExposure({ location: 'dc120b_5' }),
            K &&
                H.push(
                    (0, r.jsx)(
                        S.Z,
                        {
                            disabled: b,
                            referralsRemaining: j,
                            channel: M,
                            isResending: W
                        },
                        'referral'
                    )
                )),
        (null === (A = L.gifts) || void 0 === A ? void 0 : A.button) != null &&
            null == B &&
            !V &&
            H.push(
                (0, r.jsx)(
                    C,
                    {
                        disabled: b,
                        channel: M
                    },
                    'gift'
                )
            ),
        (null === (y = L.gifs) || void 0 === y ? void 0 : y.button) != null &&
            null == B &&
            H.push(
                (0, r.jsx)(
                    T.Z,
                    {
                        disabled: b,
                        type: L
                    },
                    'gif'
                )
            ),
        (null === (D = L.stickers) || void 0 === D ? void 0 : D.button) != null &&
            null == B &&
            H.push(
                (0, r.jsx)(
                    v.Z,
                    {
                        disabled: b,
                        type: L
                    },
                    'sticker'
                )
            )),
    (null === (t = L.emojis) || void 0 === t ? void 0 : t.button) != null &&
        (null == B || (null != F && F.type !== o.jw.ATTACHMENT)) &&
        H.push(
            (0, r.jsx)(
                I.Z,
                {
                    disabled: b,
                    type: L
                },
                'emoji'
            )
        ),
    (null === (n = L.submit) || void 0 === n ? void 0 : n.button) != null &&
        ((null === (i = L.submit) || void 0 === i ? void 0 : i.ignorePreference) || w) &&
        H.push(
            (0, r.jsx)(
                N.Z,
                {
                    onClick: P,
                    disabled: b || (0 === k.length && U && !G)
                },
                'submit'
            )
        ),
    0 === H.length)
        ? null
        : (0, r.jsx)('div', {
              className: R.buttons,
              children: H
          });
});
