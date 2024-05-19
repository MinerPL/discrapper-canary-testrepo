"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("442837"),
  s = n("481060"),
  o = n("570140"),
  l = n("605236"),
  u = n("837741"),
  d = n("804545"),
  _ = n("587446"),
  c = n("996073"),
  E = n("153124"),
  I = n("327943"),
  T = n("997945"),
  f = n("401460"),
  S = n("441319"),
  h = n("921944"),
  A = n("526761"),
  m = n("689938"),
  N = n("401728");

function p(e) {
  let {
    className: t,
    disabled: n,
    renderCTAButtons: p
  } = e, [O, C] = (0, a.useStateFromStoresArray)([I.default], () => [I.default.getCurrentDesktopIcon(), I.default.isEditorOpen]), R = r.useRef(null);
  (0, c.default)(R, A.AppearanceScrollPositions.CUSTOM_APP_ICONS);
  let g = (0, E.useUID)(),
    L = (0, s.useRadioGroup)({
      orientation: "horizontal",
      labelledBy: g
    }),
    v = e => {
      o.default.dispatch({
        type: "APP_ICON_UPDATED",
        id: e
      });
      let t = T.NewAppIconsDCMap.get(e);
      null != t && (0, l.markDismissibleContentAsDismissed)(t, {
        dismissAction: h.ContentDismissActionType.TAKE_ACTION
      })
    },
    D = "AppIconSelectionGroup",
    {
      enabled: M
    } = (0, u.useBrandRefreshPerksExperiment)({
      location: D
    }),
    {
      enabled: y
    } = (0, d.usePrideMonthPerksExperiment)({
      location: D
    }),
    P = (e, t) => {
      let n = !1;
      switch (t) {
        case T.PremiumAppIconIds.BLURPLE_TWILIGHT:
          n = M;
          break;
        case T.PremiumAppIconIds.IN_RAINBOWS:
        case T.PremiumAppIconIds.MIDNIGHT_PRISM:
        case T.PremiumAppIconIds.COLOR_WAVE:
          n = y;
          break;
        default:
          n = !0
      }
      return n && !0 !== e
    },
    U = r.useMemo(() => e => {
      let t = T.NewAppIconsDCMap.get(e),
        i = null != t && !(0, l.isDismissibleContentDismissed)(t);
      return n && i && setTimeout(() => (0, l.markDismissibleContentAsDismissed)(t, {
        dismissAction: h.ContentDismissActionType.AUTO_DISMISS
      }), 5e3), i
    }, [n]);
  return (0, i.jsx)("div", {
    ref: R,
    children: (0, i.jsx)("div", {
      ...L,
      className: N.__invalid_container,
      children: (0, i.jsxs)("div", {
        className: t,
        children: [(0, i.jsxs)("div", {
          className: N.header,
          children: [(0, i.jsxs)("div", {
            className: N.headings,
            children: [C ? null : (0, i.jsxs)("div", {
              className: N.title,
              children: [(0, i.jsx)(s.Heading, {
                variant: "text-md/medium",
                children: m.default.Messages.APP_ICON_SETTINGS_TITLE
              }), (0, i.jsx)(_.default, {
                className: N.premiumIcon
              })]
            }), (0, i.jsx)(s.Heading, {
              variant: "text-sm/normal",
              children: m.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
            })]
          }), null == p ? void 0 : p()]
        }), (0, i.jsx)("div", {
          className: N.presets,
          children: S.ICONS.filter(e => {
            let {
              isHidden: t,
              id: n
            } = e;
            return P(t, n)
          }).map((e, t) => (0, i.jsx)(f.default, {
            icon: e,
            isSelected: O === e.id,
            onSelect: e => v(e),
            disabled: n,
            tabIndex: 0 !== t || n ? void 0 : 0,
            isNew: U(e.id)
          }, e.id))
        })]
      })
    })
  })
}