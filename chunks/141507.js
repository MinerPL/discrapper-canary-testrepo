n.d(t, {
    k: function () {
        return b;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(780384),
    o = n(481060),
    l = n(607070),
    u = n(339085),
    c = n(906411),
    d = n(438332),
    _ = n(664437),
    E = n(806966),
    f = n(65029),
    h = n(210887),
    p = n(695346),
    I = n(430824),
    m = n(451478),
    T = n(768581),
    S = n(111846),
    g = n(392552),
    A = n(543241),
    N = n(199257),
    O = n(880949),
    R = n(784222),
    v = n(149203),
    C = n(689938),
    y = n(611540);
function L(e) {
    return 'animated' in e;
}
let D = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = L(t);
        return null != n && r ? C.Z.Messages.EMOJI_FROM_GUILD.format({ guildName: n.name }) : null;
    },
    b = i.memo(function (e) {
        let t,
            b,
            M,
            { className: P, emojiGrid: U, guildId: w, pickerIntention: x, channel: G } = e,
            { enabled: k } = g.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
            B = E.kJ.useStore((e) => e.inspectedExpressionPosition),
            F = i.useMemo(() => {
                var e;
                let { rowIndex: t, columnIndex: n } = B;
                return null === (e = U[t]) || void 0 === e ? void 0 : e[n];
            }, [U, B]);
        switch (null == F ? void 0 : F.type) {
            case R.ld.EMOJI:
                t = null == F ? void 0 : F.emoji;
                break;
            case R.ld.EXPAND_OR_COLLAPSE_EMOJIS:
                t = {
                    type: 'EXPAND_OR_COLLAPSE_EMOJI',
                    guildId: null == F ? void 0 : F.guildId,
                    allNamesString: null == F ? void 0 : F.name
                };
                break;
            case R.ld.CREATE_EMOJI:
            default:
                t = {
                    type: 'CREATE_EMOJI',
                    guildId: null == F ? void 0 : F.guildId,
                    allNamesString: null == F ? void 0 : F.name
                };
        }
        let V = (0, a.e7)([I.Z], () => (null !== t && t.type === c.B.GUILD ? I.Z.getGuild(t.guildId) : null), [t]),
            { useTransparentIcons: H } = S.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
            Z = (0, a.e7)([m.Z], () => m.Z.isFocused()),
            Y = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
            j = p.Yk.useSetting(),
            W = (0, A.C1)(w, L(t) ? t : null),
            K = (0, a.e7)([u.ZP], () => u.ZP.expandedSectionsByGuildIds),
            { newlyAddedEmojis: z } = (0, N.Z)(w, x),
            q = t.id,
            Q = (null == F ? void 0 : F.type) === R.ld.EMOJI ? F.subCategory : v.t0.NONE;
        if (
            (i.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= 250 &&
                        L(t) &&
                        Q !== v.t0.NONE &&
                        (Q === v.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === c.B.GUILD && (0, _.Zg)(t.guildId, z[0].id),
                        null != B.source &&
                            (0, A.Gn)({
                                emoji: t,
                                subCategory: Q,
                                position: F.columnIndex + 1,
                                newlyAddedHighlight: Q === v.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(w, q)
                            }));
                };
            }),
            null == t)
        )
            return null;
        let X = h.Z.theme;
        if (L(t)) {
            var $;
            let e =
                null != t.id
                    ? T.ZP.getEmojiURL({
                          id: t.id,
                          animated: j && t.animated,
                          size: 28
                      })
                    : t.url;
            b =
                '' === e
                    ? (0, r.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          className: y.glyphEmoji,
                          children: 'surrogates' in t ? t.surrogates : null
                      })
                    : (0, r.jsx)('img', {
                          alt: null !== ($ = t.allNamesString) && void 0 !== $ ? $ : '',
                          src: e,
                          className: y.emoji
                      });
        } else if ('CREATE_EMOJI' === t.type)
            b = (0, r.jsx)(o.CirclePlusIcon, {
                size: 'md',
                color: 'currentColor',
                className: y.icon,
                colorClass: y.icon
            });
        else if ('EXPAND_OR_COLLAPSE_EMOJI' === t.type) {
            let e = H ? n(187119) : n(137321),
                i = H ? n(39874) : n(233892),
                a = H ? n(853871) : n(942315),
                o = H ? n(63149) : n(636626);
            b = K.has(t.guildId)
                ? (0, r.jsx)('img', {
                      className: y.icon,
                      src: (0, s.wj)(X) ? a : o,
                      alt: ''
                  })
                : (0, r.jsx)('img', {
                      className: y.icon,
                      src: (0, s.wj)(X) ? e : i,
                      alt: ''
                  });
        }
        let J =
            null != V
                ? (0, r.jsx)(O.Z, {
                      className: y.__invalid_guildIcon,
                      guild: V,
                      shouldAnimate: !Y && Z
                  })
                : null;
        M = k && 'CREATE_EMOJI' === t.type ? C.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE_DESCRIPTION : 'EXPAND_OR_COLLAPSE_EMOJI' === t.type ? (K.has(t.guildId) ? C.Z.Messages.EMOJI_PICKER_COLLAPSE_EMOJI_SECTION : C.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION) : t.allNamesString;
        let ee =
            k && 'CREATE_EMOJI' === t.type
                ? C.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE
                : D({
                      inspectedEmoji: t,
                      channel: G,
                      guildId: w,
                      intention: x,
                      guild: V
                  });
        return (0, r.jsx)(f.Z, {
            className: P,
            graphicPrimary: b,
            graphicSecondary: J,
            titlePrimary: M,
            titleSecondary: ee,
            isFavorite: W,
            emojiSubCategory: Q
        });
    });
