"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  }
}), i("47120");
var l = i("735250"),
  n = i("470079"),
  a = i("481060"),
  d = i("911969"),
  u = i("26290"),
  o = i("689938"),
  r = i("340697");

function c(e) {
  let {
    name: t,
    labelType: i,
    collapsed: c = !1,
    showTooltip: s = !1
  } = e, f = i === d.EmbeddedActivityLabelTypes.NEW ? o.default.Messages.NEW : o.default.Messages.UPDATED, p = i === d.EmbeddedActivityLabelTypes.NEW ? r.activityNewBadge : r.activityUpdatedBadge, [v, m] = n.useState(c ? "" : f);
  if (n.useEffect(() => {
      c ? m("") : i === d.EmbeddedActivityLabelTypes.NEW ? m(o.default.Messages.NEW) : i === d.EmbeddedActivityLabelTypes.UPDATED && m(o.default.Messages.UPDATED)
    }, [c, i]), i === d.EmbeddedActivityLabelTypes.NONE) return null;
  let A = (0, l.jsx)(u.TextBadge, {
    className: p,
    disableColor: !0,
    text: (0, l.jsx)("span", {
      children: v
    })
  });
  if (!s) return A;
  let E = o.default.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
    activity: t
  });
  return (0, l.jsx)(a.TooltipContainer, {
    text: E,
    tooltipContentClassName: r.tooltip,
    children: A
  })
}