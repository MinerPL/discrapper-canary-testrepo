var r = n(470079), i = n(844303), a = n(846822), o = n(827622), s = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
t.Z = (0, a.I)(function (e) {
    var t = e.color, n = e.style, a = e.onClick, l = void 0 === a ? function () {
        } : a, u = e.onHover, c = e.title, d = void 0 === c ? t : c, _ = e.children, E = e.focus, f = e.focusStyle, h = 'transparent' === t, p = (0, i.default)({
            default: {
                swatch: s({
                    background: t,
                    height: '100%',
                    width: '100%',
                    cursor: 'pointer',
                    position: 'relative',
                    outline: 'none'
                }, n, E ? void 0 === f ? {} : f : {})
            }
        }), m = {};
    return u && (m.onMouseOver = function (e) {
        return u(t, e);
    }), r.createElement('div', s({
        style: p.swatch,
        onClick: function (e) {
            return l(t, e);
        },
        title: d,
        tabIndex: 0,
        onKeyDown: function (e) {
            return 13 === e.keyCode && l(t, e);
        }
    }, m), _, h && r.createElement(o.Z, {
        borderRadius: p.swatch.borderRadius,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
    }));
});
