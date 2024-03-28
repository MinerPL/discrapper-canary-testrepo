"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("735250"),
  a = l("470079"),
  s = l("481060"),
  i = l("139387"),
  r = l("726542"),
  o = l("434404"),
  d = l("486199"),
  u = l("13051"),
  c = l("653575");

function f(e) {
  let {
    integrations: t,
    editedIntegration: l,
    guild: f,
    platformType: m,
    labelText: I,
    descriptionText: T,
    helpText: N,
    canNavigate: E
  } = e, S = r.default.get(m), g = a.useCallback(async e => {
    E() && (await o.default.enableIntegration(f.id, e.type, e.id), i.default.startEditingIntegration(e.id))
  }, [E, f.id]), h = a.useCallback(e => {
    E() && (e.id === (null == l ? void 0 : l.id) && i.default.stopEditingIntegration(), o.default.disableIntegration(f.id, e.id))
  }, [E, l, f.id]), p = a.useCallback(e => {
    E() && (e === (null == l ? void 0 : l.id) ? i.default.stopEditingIntegration() : i.default.startEditingIntegration(e))
  }, [E, l]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d.default, {
      name: I,
      icon: null == S ? void 0 : S.icon.whiteSVG,
      iconBackgroundColor: null == S ? void 0 : S.color,
      iconClassName: c.platformIcon,
      description: T,
      isHeader: !0
    }), (0, n.jsx)(s.FormDivider, {
      className: c.headerDivider
    }), t.map(e => (0, n.jsx)(u.default, {
      integration: e,
      editedIntegration: l,
      guild: f,
      isExpanded: (null == l ? void 0 : l.id) === e.id,
      onEnable: g,
      onDisable: h,
      onToggleExpand: () => p(e.id)
    }, e.id)), (0, n.jsx)(s.Text, {
      className: c.helpText,
      color: "text-muted",
      variant: "text-sm/normal",
      children: N
    })]
  })
}