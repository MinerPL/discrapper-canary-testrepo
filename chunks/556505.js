n.d(t, {
    Z: function () {
        return c;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(481060), s = n(911969), r = n(689938), o = n(732436);
function c(e) {
    let {
            name: t,
            labelType: n,
            collapsed: c = !1,
            showTooltip: u = !1
        } = e, d = n === s.ww.NEW ? r.Z.Messages.NEW : r.Z.Messages.UPDATED, h = n === s.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge, [p, m] = a.useState(c ? '' : d);
    if (a.useEffect(() => {
            c ? m('') : n === s.ww.NEW ? m(r.Z.Messages.NEW) : n === s.ww.UPDATED && m(r.Z.Messages.UPDATED);
        }, [
            c,
            n
        ]), n === s.ww.NONE)
        return null;
    let _ = (0, i.jsx)(l.TextBadge, {
        className: h,
        disableColor: !0,
        text: (0, i.jsx)('span', { children: p })
    });
    if (!u)
        return _;
    let f = r.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({ activity: t });
    return (0, i.jsx)(l.TooltipContainer, {
        text: f,
        tooltipContentClassName: o.tooltip,
        children: _
    });
}
