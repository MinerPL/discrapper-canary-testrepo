t.d(e, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(481060), l = t(58642), r = t(626135), d = t(630388), s = t(981631), u = t(689938);
function c(n) {
    return null == n ? null : (0, i.jsx)(a.MenuCheckboxItem, {
        id: 'on-overlay',
        label: u.Z.Messages.APPLICATION_CONTEXT_MENU_TOGGLE_OVERLAY_DISABLE,
        action: function () {
            if (null == n)
                return;
            let e = (0, d.x9)(n.getFlags(), s.eHb.OVERLAY_DISABLED);
            l.h(n.id, n.branchId, e), r.default.track(s.rMx.APPLICATION_SETTINGS_UPDATED, {
                overlay_disabled: (0, d.yE)(e, s.eHb.OVERLAY_DISABLED),
                ...n.getAnalyticsData()
            });
        },
        checked: n.hasFlag(s.eHb.OVERLAY_DISABLED)
    });
}
