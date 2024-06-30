n.d(t, {
    z: function () {
        return i;
    }
});
var r = n(182823);
function i(e) {
    let t, n = (0, r.zL)(e, { labelable: !0 });
    return ('vertical' === e.orientation && (t = 'vertical'), 'hr' !== e.elementType) ? {
        separatorProps: {
            ...n,
            role: 'separator',
            'aria-orientation': t
        }
    } : { separatorProps: n };
}
