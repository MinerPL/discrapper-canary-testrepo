n.d(t, {
    M: function () {
        return l;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(921349), o = n(563040), s = n(905214);
function l(e) {
    let {
            value: t,
            onChange: n,
            hideValue: l,
            disabled: u = !1
        } = e, c = i.useRef(null), d = i.useMemo(() => new o.tR(), []), [_, E] = i.useState('');
    function f(e) {
        null != t && n((0, o.rK)(t, d.selectValue(e)));
    }
    return (0, r.jsx)(a.V, {
        ref: c,
        className: s.select,
        options: d.getOptions(_),
        value: l ? void 0 : d.lookupByValue(t),
        onChange: f,
        isDisabled: u,
        onSearchChange: E,
        onKeyDown: function (e) {
            if ('Enter' === e.key) {
                let e = (0, o.tj)(t, _);
                if (null != e) {
                    var n;
                    f(e), null === (n = c.current) || void 0 === n || n.close();
                }
            }
        }
    });
}
