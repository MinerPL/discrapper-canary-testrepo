o.d(t, {
    C: function () {
        return l;
    },
    L: function () {
        return r;
    }
});
var n = o(873546),
    a = o(464179),
    s = o(981631);
let r = (e) => ([s.HeQ.CARD, s.HeQ.VENMO].includes(e.type) && 'US' === e.country ? (n.tq ? a.ZP.Layouts.SETTINGS_US_MOBILE : a.ZP.Layouts.SETTINGS_US) : e.type === s.HeQ.CARD && 'US' !== e.country ? (n.tq ? a.ZP.Layouts.SETTINGS_INTL_MOBILE : a.ZP.Layouts.SETTINGS_INTL) : n.tq ? a.ZP.Layouts.SETTINGS_INTL_NO_NAME_MOBILE : a.ZP.Layouts.SETTINGS_INTL_NO_NAME),
    l = n.tq ? a.ZP.Layouts.SETTINGS_US_MOBILE : a.ZP.Layouts.SETTINGS_US;
