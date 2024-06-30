n.d(t, {
    S: function () {
        return s;
    },
    T: function () {
        return l;
    }
});
var r = n(182823), i = n(470079), a = n(612001);
let o = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
};
function s(e = {}) {
    let {
            style: t,
            isFocusable: n
        } = e, [r, s] = (0, i.useState)(!1), {focusWithinProps: l} = (0, a.L_)({
            isDisabled: !n,
            onFocusWithinChange: e => s(e)
        }), u = (0, i.useMemo)(() => r ? t : t ? {
            ...o,
            ...t
        } : o, [r]);
    return {
        visuallyHiddenProps: {
            ...l,
            style: u
        }
    };
}
function l(e) {
    let {
            children: t,
            elementType: n = 'div',
            isFocusable: a,
            style: o,
            ...l
        } = e, {visuallyHiddenProps: u} = s(e);
    return i.createElement(n, (0, r.dG)(l, u), t);
}
