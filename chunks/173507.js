t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(735250);
t(470079);
var r = t(481060), a = t(695346), i = t(981631);
function s(e, n) {
    a.qF.getSetting() ? (0, r.openModalLazy)(async () => {
        let {default: n} = await Promise.all([
            t.e('5528'),
            t.e('90723')
        ]).then(t.bind(t, 601572));
        return t => (0, l.jsx)(n, {
            ...t,
            onEnable: e,
            videoEnabled: !1
        });
    }, {
        modalKey: 'camera-preview',
        contextKey: n === i.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
    }) : null == e || e();
}
