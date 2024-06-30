n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(406877);
function l(e) {
    let {
            guildId: t,
            productId: n,
            attachmentId: l,
            ...r
        } = e, {
            isLoading: o,
            downloadAttachment: c
        } = (0, s.Z)(t, n);
    return (0, i.jsx)(a.Button, {
        ...r,
        submitting: o,
        onClick: function () {
            c(l);
        }
    });
}
