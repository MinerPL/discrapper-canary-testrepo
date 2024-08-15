n.d(t, {
  Z: function() {
return c;
  }
}), n(47120);
var a = n(735250),
  i = n(470079),
  l = n(481060),
  s = n(911969),
  r = n(689938),
  o = n(661337);

function c(e) {
  let {
name: t,
labelType: n,
collapsed: c = !1,
showTooltip: d = !1
  } = e, u = n === s.ww.NEW ? r.Z.Messages.NEW : r.Z.Messages.UPDATED, g = n === s.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge, [v, m] = i.useState(c ? '' : u);
  if (i.useEffect(() => {
  c ? m('') : n === s.ww.NEW ? m(r.Z.Messages.NEW) : n === s.ww.UPDATED && m(r.Z.Messages.UPDATED);
}, [
  c,
  n
]), n === s.ww.NONE)
return null;
  let p = (0, a.jsx)(l.TextBadge, {
className: g,
disableColor: !0,
text: (0, a.jsx)('span', {
  children: v
})
  });
  if (!d)
return p;
  let f = r.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
activity: t
  });
  return (0, a.jsx)(l.TooltipContainer, {
text: f,
tooltipContentClassName: o.tooltip,
children: p
  });
}