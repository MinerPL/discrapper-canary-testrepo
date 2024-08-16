n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(406877);
function r(e) {
    let { guildId: t, productId: n, attachmentId: r, ...l } = e,
        { isLoading: o, downloadAttachment: c } = (0, s.Z)(t, n);
    return (0, i.jsx)(a.Button, {
        ...l,
        submitting: o,
        onClick: function () {
            c(r);
        }
    });
}
