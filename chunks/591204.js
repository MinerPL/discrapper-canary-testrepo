t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var l = t(481060), a = t(895924), r = t(176412), s = t(689938);
function o(e) {
    let {
            channel: n,
            application: t,
            sectionName: o,
            disabled: c,
            commandName: u
        } = e, {
            onActivityItemSelected: d,
            buttonColor: m,
            buttonText: p
        } = (0, r.P)(n, t, a.Vh.APP_LAUNCHER_APPLICATION_VIEW, o);
    return (0, i.jsx)(l.Button, {
        type: 'submit',
        size: l.ButtonSizes.MEDIUM,
        color: m,
        disabled: c,
        onClick: d,
        'aria-label': s.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
            buttonText: null != u ? u : p,
            applicationName: t.name
        }),
        children: null != u ? u : p
    });
}
