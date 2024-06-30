t.d(n, {
    L: function () {
        return l;
    }
});
var o = t(735250);
t(470079);
var r = t(409813), a = t(443650), i = t(464797), c = t(950806);
function s(e) {
    let {onClose: n} = e, {guildProductListing: t} = (0, i._)();
    return (0, o.jsx)(a.Z, {
        guildProductListing: t,
        className: c.header,
        onClose: n
    });
}
let l = (e, n, t) => t === r.h8.CONFIRM ? null : (0, o.jsx)(s, { onClose: () => n(!1) });
