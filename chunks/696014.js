n.d(t, {
    s: function () {
        return o;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(702749);
function o() {
    let [e, t] = a.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: a.memo(function (e) {
            let { showAll: n = !1, className: a, children: s, lineClamp: o = 2 } = e;
            return (0, i.jsx)('div', {
                ref: (e) => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1);
                },
                className: r()(l.lineClamp, a),
                style: n
                    ? void 0
                    : {
                          lineClamp: o,
                          WebkitLineClamp: o
                      },
                children: s
            });
        })
    };
}
