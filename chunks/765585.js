"use strict";
n.r(t), n("47120");
var l = n("735250"),
  r = n("470079"),
  s = n("803997"),
  a = n.n(s),
  i = n("481060"),
  u = n("393238"),
  o = n("605236"),
  c = n("311715"),
  d = n("466111"),
  f = n("921944"),
  C = n("689938"),
  h = n("162335");
t.default = r.forwardRef(function(e, t) {
  let {
    body: n,
    header: s,
    artClassName: v,
    headerClassName: p,
    contentClassName: m,
    tryItText: N,
    dismissText: I,
    onTryFeature: g,
    onClose: E,
    className: H,
    inlineArt: x = !1,
    isPremiumFeature: L = !1,
    shouldUseHorizontalButtons: T = !1,
    showGIFTag: w = !1,
    dismissibleContent: D,
    position: R = "top",
    align: A = "center",
    art: V,
    isPremiumEarlyAccess: M = !1,
    maxWidth: S = 280
  } = e, j = T ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX, [_, y] = r.useState(!1), {
    ref: O,
    width: P
  } = (0, u.default)();

  function k(e) {
    (0, o.markDismissibleContentAsDismissed)(D, {
      dismissAction: e
    })
  }
  return r.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = O.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !_ && n > S && y(!0)
  }, [_, P, O, S]), r.useEffect(() => {
    (0, o.requestMarkDismissibleContentAsShown)(D)
  }, [D]), (0, l.jsx)("div", {
    className: H,
    ref: t,
    children: (0, l.jsxs)("div", {
      className: a()(h.content, m, {
        [h.contentNoArt]: null == v || x,
        [h.contentPremium]: L || M
      }),
      children: [(0, l.jsxs)("div", {
        className: a()(v, x ? h.artInline : h.artAbsolute),
        children: [w && (0, l.jsx)(c.default, {
          className: h.gifTag
        }), V]
      }), (0, l.jsxs)("div", {
        className: h.body,
        children: [(0, l.jsxs)(i.Heading, {
          className: a()(L ? h.headerWithPremiumIcon : h.header, p),
          variant: "heading-md/bold",
          color: "always-white",
          children: [L && !M ? (0, l.jsx)(d.default, {
            className: h.premiumIcon
          }) : null, M ? (0, l.jsxs)(i.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: h.earlyAccessBadgeContainer,
            children: [(0, l.jsx)(d.default, {
              className: h.earlyAccessIcon
            }), (0, l.jsx)("span", {
              className: h.earlyAccessText,
              children: C.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
            })]
          }) : null, s]
        }), null == n ? null : "string" == typeof n ? (0, l.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, l.jsx)("div", {
        ref: O,
        className: _ || !T ? h.buttonContainerVertical : h.buttonContainerHorizontal,
        children: null != g ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(i.Button, {
            className: h.button,
            size: j,
            onClick: e => {
              null == E || E(e), g(e), k(f.ContentDismissActionType.PRIMARY)
            },
            color: L || M ? i.Button.Colors.BRAND : i.Button.Colors.WHITE,
            look: L || M ? i.Button.Looks.INVERTED : i.Button.Looks.FILLED,
            children: null != N ? N : C.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
          }), (0, l.jsx)(i.Button, {
            className: h.button,
            size: j,
            onClick: e => {
              null == E || E(e), k(f.ContentDismissActionType.DISMISS)
            },
            color: L || M ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
            look: L || M ? i.Button.Looks.LINK : i.Button.Looks.FILLED,
            children: null != I ? I : C.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
          })]
        }) : (0, l.jsx)(i.Button, {
          className: h.button,
          size: i.Button.Sizes.MAX,
          onClick: e => {
            null == E || E(e), k(f.ContentDismissActionType.PRIMARY)
          },
          color: i.Button.Colors.WHITE,
          children: C.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
        })
      }), (0, l.jsx)("div", {
        className: a()(h.pointer, {
          [h.bottomPointer]: "top" === R,
          [h.centerLeftPointer]: "right" === R && "center" === A,
          [h.topLeftPointer]: "right" === R && "top" === A
        })
      })]
    })
  })
})