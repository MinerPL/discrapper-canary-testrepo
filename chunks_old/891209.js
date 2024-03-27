"use strict";
l.r(t), l.d(t, {
  DeveloperShelfControls: function() {
    return u
  }
});
var i = l("37983");
l("884691");
var a = l("65597"),
  n = l("77078"),
  s = l("810567"),
  r = l("898065"),
  o = l("84460"),
  c = l("782340"),
  d = l("557427");

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
      className: d.checkbox,
      value: t,
      onClick: r.toggleUseActivityUrlOverride,
      children: (0, i.jsx)(n.Text, {
        variant: "text-md/semibold",
        children: c.default.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
      })
    }), (0, i.jsx)(n.FormItem, {
      className: d.urlOverride,
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