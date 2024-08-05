n.d(t, {
  Z: function() {
return c;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(481060),
  l = n(911969),
  r = n(689938),
  o = n(758183);

function c(e) {
  let {
name: t,
labelType: n,
collapsed: c = !1,
showTooltip: u = !1
  } = e, d = n === l.ww.NEW ? r.Z.Messages.NEW : r.Z.Messages.UPDATED, h = n === l.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge, [p, m] = a.useState(c ? '' : d);
  if (a.useEffect(() => {
  c ? m('') : n === l.ww.NEW ? m(r.Z.Messages.NEW) : n === l.ww.UPDATED && m(r.Z.Messages.UPDATED);
}, [
  c,
  n
]), n === l.ww.NONE)
return null;
  let _ = (0, i.jsx)(s.TextBadge, {
className: h,
disableColor: !0,
text: (0, i.jsx)('span', {
  children: p
})
  });
  if (!u)
return _;
  let f = r.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
activity: t
  });
  return (0, i.jsx)(s.TooltipContainer, {
text: f,
tooltipContentClassName: o.tooltip,
children: _
  });
}