n.d(t, {
    R: function () {
        return c;
    },
    g: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(112831),
    o = n(87859);
let l = {
        DEFAULT: 'default',
        INPUT_PLACEHOLDER: 'placeholder',
        DESCRIPTION: 'description',
        LABEL_BOLD: 'labelBold',
        LABEL_SELECTED: 'labelSelected',
        LABEL_DESCRIPTOR: 'labelDescriptor',
        ERROR: 'error',
        SUCCESS: 'success'
    },
    u = {
        DEFAULT: 'modeDefault',
        DISABLED: 'modeDisabled',
        SELECTABLE: 'modeSelectable'
    };
function c(e) {
    let { type: t = l.DEFAULT, className: n, disabled: i, selectable: c, children: d, style: _, ...E } = e,
        f = u.DEFAULT;
    return (
        i ? (f = u.DISABLED) : c && (f = u.SELECTABLE),
        (0, r.jsx)(s.Z, {
            className: a()(o[t], n, o[f]),
            style: _,
            ...E,
            children: d
        })
    );
}
c.Types = l;
