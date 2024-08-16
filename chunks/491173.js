var r = n(735250),
    i = n(470079),
    a = n(477690),
    s = n(481060),
    o = n(880949),
    l = n(806966),
    u = n(65029),
    c = n(430824),
    d = n(624138),
    _ = n(926491),
    E = n(373228),
    f = n(378233),
    h = n(419922),
    p = n(689938),
    m = n(471902);
let I = (0, d.Mg)(a.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    T = (0, d.Mg)(a.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    g = (e) => {
        let t = null,
            n = null;
        if ((!(0, f.jl)(e) && !(0, f.J8)(e)) || (0, f.J8)(e)) {
            let i = c.Z.getGuild(e.guild_id);
            null != i && ((t = p.Z.Messages.STICKER_FROM_SOURCE.format({ source: i.name })), (n = (0, r.jsx)(o.Z, { guild: i })));
        } else if ((0, f.jl)(e)) {
            let i = _.Z.getStickerPack(e.pack_id);
            null != i &&
                ((t = p.Z.Messages.STICKER_FROM_SOURCE.format({ source: i.name })),
                (n = (0, r.jsx)(h.ZP, {
                    size: T,
                    sticker: (0, f.Zt)(i),
                    disableAnimation: !0
                })));
        }
        return {
            title: t,
            graphic: n
        };
    },
    S = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = l.ZN.useStore((e) => e.inspectedExpressionPosition),
            a = i.useMemo(() => {
                var e;
                let { rowIndex: r, columnIndex: i } = n,
                    a = null === (e = t[r]) || void 0 === e ? void 0 : e[i];
                return (null == a ? void 0 : a.type) === E.al.CREATE_STICKER
                    ? {
                          guild_id: a.guild_id,
                          name: a.name
                      }
                    : (null == a ? void 0 : a.type) !== E.al.STICKER
                      ? null
                      : a.sticker;
            }, [t, n]);
        if (null == a) return null;
        let { graphic: o, title: c } = g(a),
            d =
                (0, f.jl)(a) || (0, f.J8)(a)
                    ? (0, r.jsx)(h.ZP, {
                          isInteracting: !0,
                          size: I,
                          sticker: a,
                          disableAnimation: !0
                      })
                    : (0, r.jsx)('div', {
                          className: m.iconWrapper,
                          children: (0, r.jsx)(s.PlusSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: m.icon
                          })
                      });
        return (0, r.jsx)(u.Z, {
            graphicPrimary: d,
            graphicSecondary: o,
            titlePrimary: a.name,
            titleSecondary: (0, f.jl)(a) || (0, f.J8)(a) ? c : null
        });
    });
t.Z = S;
