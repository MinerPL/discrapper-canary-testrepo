"use strict";
n(47120);
var r = n(735250),
  i = n(470079),
  l = n(120356),
  s = n.n(l),
  a = n(481060),
  o = n(393238),
  u = n(605236),
  c = n(311715),
  d = n(466111),
  f = n(921944),
  v = n(689938),
  h = n(255372);
t.Z = i.forwardRef(function(e, t) {
  let {
    body: n,
    header: l,
    artClassName: C,
    headerClassName: Z,
    contentClassName: N,
    tryItText: p,
    dismissText: m,
    onTryFeature: E,
    onClose: I,
    className: g,
    inlineArt: H = !1,
    isPremiumFeature: L = !1,
    shouldUseHorizontalButtons: x = !1,
    showGIFTag: A = !1,
    dismissibleContent: R,
    position: w = "top",
    align: _ = "center",
    art: V,
    isPremiumEarlyAccess: M = !1,
    maxWidth: j = 280
  } = e, T = x ? a.Button.Sizes.LARGE : a.Button.Sizes.MAX, [D, S] = i.useState(!1), {
    ref: O,
    width: P
  } = (0, o.Z)();

  function W(e) {
    (0, u.EW)(R, {
      dismissAction: e
    })
  }
  return i.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = O.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !D && n > j && S(!0)
  }, [D, P, O, j]), i.useEffect(() => {
    (0, u.kk)(R)
  }, [R]), (0, r.jsx)("div", {
    className: g,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: s()(h.content, N, {
        [h.contentNoArt]: null == C || H,
        [h.contentPremium]: L || M
      }),
      children: [(0, r.jsxs)("div", {
        className: s()(C, H ? h.artInline : h.artAbsolute),
        children: [A && (0, r.jsx)(c.Z, {
          className: h.gifTag
        }), V]
      }), (0, r.jsxs)("div", {
        className: h.body,
        children: [(0, r.jsxs)(a.Heading, {
          className: s()(L ? h.headerWithPremiumIcon : h.header, Z),
          variant: "heading-md/bold",
          color: "always-white",
          children: [L && !M ? (0, r.jsx)(d.Z, {
            className: h.premiumIcon
          }) : null, M ? (0, r.jsxs)(a.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: h.earlyAccessBadgeContainer,
            children: [(0, r.jsx)(d.Z, {
              className: h.earlyAccessIcon
            }), (0, r.jsx)("span", {
              className: h.earlyAccessText,
              children: v.Z.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
            })]
          }) : null, l]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: O,
        className: D || !x ? h.buttonContainerVertical : h.buttonContainerHorizontal,
        children: null != E ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.Button, {
            className: h.button,
            size: T,
            onClick: e => {
              null == I || I(e), E(e), W(f.L.PRIMARY)
            },
            color: L || M ? a.Button.Colors.BRAND_INVERTED : a.Button.Colors.WHITE,
            children: null != p ? p : v.Z.Messages.EDUCATION_NEW_FEATURE_TRY_IT
          }), (0, r.jsx)(a.Button, {
            className: h.button,
            size: T,
            onClick: e => {
              null == I || I(e), W(f.L.DISMISS)
            },
            color: L || M ? a.Button.Colors.WHITE : a.Button.Colors.BRAND,
            look: L || M ? a.Button.Looks.LINK : a.Button.Looks.FILLED,
            children: null != m ? m : v.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS
          })]
        }) : (0, r.jsx)(a.Button, {
          className: h.button,
          size: a.Button.Sizes.MAX,
          onClick: e => {
            null == I || I(e), W(f.L.PRIMARY)
          },
          color: a.Button.Colors.WHITE,
          children: v.Z.Messages.EDUCATION_NEW_FEATURE_CONFIRM
        })
      }), (0, r.jsx)("div", {
        className: s()(h.pointer, {
          [h.bottomPointer]: "top" === w,
          [h.centerLeftPointer]: "right" === w && "center" === _,
          [h.topLeftPointer]: "right" === w && "top" === _
        })
      })]
    })
  })
})