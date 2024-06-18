"use strict";
var i = n(735250),
  r = n(470079),
  s = n(477690),
  o = n(880949),
  a = n(806966),
  l = n(65029),
  u = n(430824),
  _ = n(729285),
  d = n(624138),
  c = n(926491),
  E = n(373228),
  I = n(378233),
  T = n(419922),
  h = n(689938),
  S = n(824620);
let f = (0, d.Mg)(s.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
  N = (0, d.Mg)(s.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
  A = e => {
    let t = null,
      n = null;
    if (!(0, I.jl)(e) && !(0, I.J8)(e) || (0, I.J8)(e)) {
      let r = u.Z.getGuild(e.guild_id);
      null != r && (t = h.Z.Messages.STICKER_FROM_SOURCE.format({
        source: r.name
      }), n = (0, i.jsx)(o.Z, {
        guild: r
      }))
    } else if ((0, I.jl)(e)) {
      let r = c.Z.getStickerPack(e.pack_id);
      null != r && (t = h.Z.Messages.STICKER_FROM_SOURCE.format({
        source: r.name
      }), n = (0, i.jsx)(T.ZP, {
        size: N,
        sticker: (0, I.Zt)(r),
        disableAnimation: !0
      }))
    }
    return {
      title: t,
      graphic: n
    }
  },
  m = r.memo(function(e) {
    let {
      stickersGrid: t
    } = e, n = a.ZN.useStore(e => e.inspectedExpressionPosition), s = r.useMemo(() => {
      var e;
      let {
        rowIndex: i,
        columnIndex: r
      } = n, s = null === (e = t[i]) || void 0 === e ? void 0 : e[r];
      return (null == s ? void 0 : s.type) === E.al.CREATE_STICKER ? {
        guild_id: s.guild_id,
        name: s.name
      } : (null == s ? void 0 : s.type) !== E.al.STICKER ? null : s.sticker
    }, [t, n]);
    if (null == s) return null;
    let {
      graphic: o,
      title: u
    } = A(s), d = (0, I.jl)(s) || (0, I.J8)(s) ? (0, i.jsx)(T.ZP, {
      isInteracting: !0,
      size: f,
      sticker: s,
      disableAnimation: !0
    }) : (0, i.jsx)("div", {
      className: S.iconWrapper,
      children: (0, i.jsx)(_.Z, {
        className: S.icon
      })
    });
    return (0, i.jsx)(l.Z, {
      graphicPrimary: d,
      graphicSecondary: o,
      titlePrimary: s.name,
      titleSecondary: (0, I.jl)(s) || (0, I.J8)(s) ? u : null
    })
  });
t.Z = m