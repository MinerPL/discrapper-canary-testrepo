n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var s = n(120356), a = n.n(s), r = n(481060), l = n(969832), o = n(572004), c = n(51144), d = n(785717), u = n(689938), _ = n(194609);
function E(e) {
    let {
            user: t,
            isHovering: n
        } = e, {trackUserProfileAction: s} = (0, d.KZ)();
    return o.wS ? (0, i.jsx)(l.o, {
        className: a()(_.copiable, { [_.visible]: n }),
        copyValue: c.ZP.getUserTag(t, {
            decoration: 'never',
            identifiable: 'always'
        }),
        copyTooltip: u.Z.Messages.COPY_USERNAME,
        'aria-label': u.Z.Messages.COPY_USERNAME,
        copyTooltipDelay: 0,
        disableCopy: !1,
        showCopyIcon: !1,
        onCopy: () => s({ action: 'COPY_USERNAME' }),
        children: (0, i.jsx)(r.CopyIcon, {
            size: 'xs',
            color: 'currentColor'
        })
    }) : null;
}
