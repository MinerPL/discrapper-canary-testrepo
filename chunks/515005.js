"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n(468194),
  u = n(481060),
  _ = n(239091),
  d = n(2052),
  c = n(691251),
  E = n(729285),
  I = n(626135),
  T = n(285651),
  h = n(373228),
  S = n(378233),
  f = n(419922),
  N = n(490095),
  A = n(981631),
  m = n(689938),
  O = n(318142);
let R = (0, l.Mg)(O.__invalid_stickerPickerPreviewDimensions),
  C = (0, l.Mg)(O.__invalid_stickerPickerPreviewPadding),
  p = r.memo(function(e) {
    let {
      isDisplayingIndividualStickers: t = !1,
      preferAnimation: s = !0,
      getStickerItemProps: l,
      getStickerRowProps: p,
      gutterWidth: g,
      inspectedStickerPosition: L,
      isScrolling: v,
      isUsingKeyboardNavigation: D,
      onInspect: M,
      onSelect: P,
      rowIndex: y,
      stickerClassName: U,
      stickerDescriptors: b,
      stickerPadding: G = C,
      stickerSize: w = R,
      ownedStickerPacks: k,
      enlargeOnInteraction: B = !1,
      channel: x,
      currentUser: V,
      checkSendability: Z = !0
    } = e, {
      location: H
    } = (0, d.O)(), F = w + 2 * G, Y = r.useMemo(() => ({
      gridColumnGap: g,
      gridTemplateColumns: "repeat(auto-fill, ".concat(F, "px)"),
      height: F,
      paddingRight: t ? void 0 : F
    }), [t, g, F]), j = r.useMemo(() => ({
      width: w,
      height: w,
      padding: G
    }), [G, w]);
    return (0, i.jsx)("div", {
      className: O.row,
      style: Y,
      ...null == p ? void 0 : p(y),
      children: b.map(e => {
        var d;
        let R = e.visibleRowIndex === (null == L ? void 0 : L.rowIndex) && e.columnIndex === (null == L ? void 0 : L.columnIndex),
          C = e.type === h.al.STICKER && B && R,
          p = (0, a.throttle)(() => {
            (null == v ? void 0 : v.current) !== !0 && (null == D ? void 0 : D.current) !== !0 && !R && (null == M || M(e))
          }, 250),
          {
            ref: g,
            tabIndex: b,
            onFocus: G,
            ...F
          } = null !== (d = null == l ? void 0 : l(e.columnIndex, y)) && void 0 !== d ? d : {};
        switch (e.type) {
          case h.al.CREATE_STICKER:
            return (0, i.jsx)("div", {
              ...F,
              children: (0, i.jsxs)(u.Clickable, {
                "aria-label": e.name,
                className: o()(O.createSticker, U, {
                  [O.createInspected]: R
                }),
                innerRef: g,
                tabIndex: b,
                onFocus: null != G ? G : p,
                onMouseMove: p,
                onClick: () => {
                  e.type === h.al.CREATE_STICKER && (I.default.track(A.rMx.OPEN_MODAL, {
                    type: A.jXE.CREATE_STICKER_MODAL,
                    location: H
                  }), (0, u.openModalLazy)(async () => {
                    let {
                      default: t
                    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("93626"), n.e("84482")]).then(n.bind(n, 136735));
                    return n => (0, i.jsx)(t, {
                      guildId: e.guild_id,
                      ...n
                    })
                  }))
                },
                style: j,
                children: [!B && (0, i.jsx)("div", {
                  className: O.inspectedIndicator
                }), (0, i.jsx)("div", {
                  className: O.iconWrapper,
                  children: (0, i.jsx)(E.Z, {
                    className: O.icon
                  })
                }), (0, i.jsx)(u.Text, {
                  color: "interactive-active",
                  variant: "text-xs/normal",
                  children: m.Z.Messages.STICKER_PICKER_CREATE_STICKER
                })]
              })
            }, e.guild_id);
          case h.al.STICKER: {
            let a = t && null != k && (0, S.jl)(e.sticker) && !k.has(e.sticker.pack_id);
            return (0, r.createElement)("div", {
              ...F,
              key: e.sticker.id
            }, (0, i.jsxs)(u.Clickable, {
              className: o()(O.sticker, U, {
                [O.stickerInspected]: R
              }),
              innerRef: g,
              tabIndex: b,
              onFocus: null != G ? G : p,
              onMouseMove: p,
              onClick: t => {
                (null == v ? void 0 : v.current) !== !0 && (null == D ? void 0 : D.current) !== !0 && (null == P || P(e, t))
              },
              onContextMenu: e => {
                (0, _.jW)(e, async () => {
                  let {
                    default: e
                  } = await n.e("39010").then(n.bind(n, 269254));
                  return t => (0, i.jsx)(e, {
                    ...t
                  })
                })
              },
              style: j,
              "data-type": c.S.STICKER,
              "data-id": e.sticker.id,
              children: [(0, i.jsx)(u.HiddenVisually, {
                children: (0, f.Co)(e.sticker)
              }), (0, i.jsxs)("div", {
                "aria-hidden": !0,
                children: [!B && (0, i.jsx)("div", {
                  className: O.inspectedIndicator
                }), (0, i.jsx)(f.ZP, {
                  className: o()(O.stickerNode, {
                    [O.stickerNodeDimmed]: B && !R && null != L && -1 !== L.rowIndex && -1 !== L.columnIndex,
                    [O.stickerNodeHidden]: C,
                    [O.stickerUnsendable]: Z && !(0, T.kl)(e.sticker, V, x)
                  }),
                  disableAnimation: !R && !s,
                  enlargeOnInteraction: B,
                  isInteracting: R,
                  maskAsset: R,
                  sticker: e.sticker,
                  size: w
                }), a ? (0, i.jsx)(N.Z, {
                  size: 20
                }) : null]
              })]
            }))
          }
        }
      })
    })
  });
t.Z = p