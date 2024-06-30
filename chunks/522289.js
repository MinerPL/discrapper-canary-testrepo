n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(392711), s = n.n(o), l = n(481060), u = n(346656), c = n(706730);
function d(e) {
    let {
        className: t,
        maxGuilds: n,
        guilds: i,
        onFocus: o,
        onClick: d,
        size: _ = u.Z.Sizes.SMALLER,
        hideOverflowCount: E = !1,
        disableGuildNameTooltip: f = !1
    } = e;
    return i.length <= 0 ? null : (0, r.jsx)('div', {
        className: a()(t, c.avatars),
        children: function () {
            let e = s()(i).take(n).map(e => {
                    let t = e.name;
                    return f ? (0, r.jsx)('div', {
                        className: c.avatar,
                        children: (0, r.jsx)(u.Z, {
                            guild: e,
                            onClick: d,
                            size: _,
                            showTooltip: !1
                        })
                    }) : (0, r.jsx)(l.TooltipContainer, {
                        text: t,
                        className: c.avatar,
                        children: (0, r.jsx)(u.Z, {
                            guild: e,
                            onClick: d,
                            size: _
                        })
                    }, e.id);
                }).value(), t = i.length - n;
            return t > 0 && !E && (e[e.length - 1] = (0, r.jsxs)(l.Button, {
                className: a()(c.avatar, c.overflow),
                onFocus: o,
                onClick: e => null == d ? void 0 : d(e),
                look: l.Button.Looks.BLANK,
                size: l.Button.Sizes.NONE,
                children: [
                    '+',
                    t + 1
                ]
            })), e;
        }()
    });
}
