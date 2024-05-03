"use strict";
n.r(t), n("47120"), n("757143");
var u = n("735250"),
  r = n("470079"),
  a = n("481060"),
  s = n("239091"),
  l = n("230711"),
  i = n("493544"),
  o = n("108843"),
  d = n("100527"),
  c = n("906732"),
  f = n("386506"),
  S = n("366953"),
  E = n("361695"),
  M = n("606669"),
  T = n("53432"),
  m = n("74869"),
  p = n("828064"),
  I = n("308512"),
  h = n("594791"),
  g = n("393431"),
  _ = n("981631"),
  C = n("689938");
t.default = (0, o.default)(function(e) {
  let {
    webBuildOverride: t,
    onSelect: n
  } = e, [o, d] = r.useState(!1), x = (0, p.default)(), v = (0, I.default)(), R = (0, T.default)(), j = (0, M.default)(), b = (0, g.default)(), A = (0, h.default)(), L = (0, m.default)(), {
    analyticsLocations: O
  } = (0, c.default)(), N = r.useMemo(() => (0, S.getRecentBuildOverrides)(), []);
  async function y() {
    try {
      d(!0), await (0, f.clearBuildOverride)(), window.location.reload(!0)
    } catch (e) {
      d(!1)
    }
  }
  let k = e => {
      switch (e) {
        case _.UserSettingsSections.GAMES:
          return x;
        case _.UserSettingsSections.STREAMER_MODE:
          return v;
        case _.UserSettingsSections.APPEARANCE:
          return R;
        case _.UserSettingsSections.ACCESSIBILITY:
          return j;
        case _.UserSettingsSections.VOICE:
          return b;
        case _.UserSettingsSections.TEXT:
          return A;
        case _.UserSettingsSections.EXPERIMENTS:
          return L;
        default:
          return null
      }
    },
    G = (0, E.default)().filter(e => {
      let {
        section: t
      } = e;
      return t !== i.SectionTypes.HEADER && t !== i.SectionTypes.CUSTOM && t !== i.SectionTypes.DIVIDER && "logout" !== t
    }).filter(e => null == e.predicate || e.predicate());
  return (0, u.jsx)(c.AnalyticsLocationProvider, {
    value: O,
    children: (0, u.jsxs)(a.Menu, {
      navId: "user-settings-cog",
      onClose: s.closeContextMenu,
      "aria-label": C.default.Messages.USER_SETTINGS_ACTIONS_MENU_LABEL,
      onSelect: n,
      children: [G.map(e => {
        let {
          section: t,
          label: n,
          onClick: r
        } = e, s = t.replace(/\W/gi, "_");
        return (0, u.jsx)(a.MenuItem, {
          id: s,
          label: n,
          action: () => null != r ? r() : function(e, t) {
            let n = Object.values(_.UserSettingsSections).filter(t => t === e)[0];
            null != n && l.default.open(n, void 0, {
              analyticsLocations: t
            })
          }(t, O),
          children: k(t)
        }, s)
      }), e.user.isStaff() && N.length > 0 ? (0, u.jsx)(a.MenuItem, {
        label: "Build overrides",
        id: "build_overrides",
        children: (0, u.jsx)(a.MenuGroup, {
          children: N.map(e => (0, u.jsx)(a.MenuRadioItem, {
            id: "input-".concat(e.payload),
            group: "build_overrides",
            label: e.id,
            checked: (null == t ? void 0 : t.id) === e.id,
            action: async () => {
              if ((null == t ? void 0 : t.id) !== e.id) 200 === (await (0, f.applyPublicBuildOverride)(e.payload)).status && window.location.reload(!0)
            }
          }, "input-".concat(e.payload)))
        })
      }) : null, null != t ? (0, u.jsx)(a.MenuGroup, {
        children: (0, u.jsx)(a.MenuItem, {
          id: "clear-build-override",
          disabled: o,
          label: C.default.Messages.CLEAR_BUILD_OVERRIDE,
          action: y,
          color: "danger"
        })
      }) : null]
    })
  })
}, [d.default.CONTEXT_MENU, d.default.USER_SETTINGS_MENU])