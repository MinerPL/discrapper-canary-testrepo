"use strict";
l.r(t), l.d(t, {
  DeveloperShelfControls: function() {
    return u
  }
});
var i = l("735250");
l("470079");
var a = l("399606"),
  n = l("481060"),
  s = l("6048"),
  r = l("337682"),
  o = l("115130"),
  c = l("689938"),
  d = l("757879");

function u() {
  let {
    activityUrlOverride: e,
    useActivityUrlOverride: t,
    filter: l
  } = (0, a.useStateFromStoresObject)([o.default], () => ({
    activityUrlOverride: o.default.getActivityUrlOverride(),
    useActivityUrlOverride: o.default.getUseActivityUrlOverride(),
    filter: o.default.getFilter()
  }), []);
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)(n.Checkbox, {
      type: n.Checkbox.Types.INVERTED,
      className: d.__invalid_checkbox,
      value: t,
      onClick: r.toggleUseActivityUrlOverride,
      children: (0, i.jsx)(n.Text, {
        variant: "text-md/semibold",
        children: c.default.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
      })
    }), (0, i.jsx)(n.FormItem, {
      className: d.__invalid_urlOverride,
      title: c.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
      children: (0, i.jsx)(n.TextInput, {
        disabled: !t,
        value: null != e ? e : void 0,
        onChange: r.setActivityUrlOverride,
        placeholder: "http://localhost:3000"
      })
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)(s.default, {
        className: d.searchBar,
        query: l,
        onChange: r.updateFilter,
        onClear: function() {
          r.updateFilter("")
        }
      })
    })]
  })
}