n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(689938),
    l = n(480855);
function u(e) {
    let t,
        { className: n, src: i, unicodeEmoji: u, name: c, size: d = 20, enableTooltip: _ = !0, enableHeight: E = !0, onClick: f } = e;
    if (null == i && null == u) return null;
    return (0, r.jsx)(s.TooltipContainer, {
        text: c,
        'aria-label': !1,
        shouldShow: _,
        element: 'span',
        children:
            ((t = (0, r.jsx)('img', {
                alt: '',
                'aria-label': o.Z.Messages.ROLE_ICON_ALT_TEXT.format({ name: c }),
                className: a()(l.roleIcon, n, { [l.clickable]: null != f }),
                height: E ? d : void 0,
                src: i,
                width: d
            })),
            (null != u &&
                (t = (0, r.jsx)('img', {
                    alt: '',
                    'aria-label': u.allNamesString,
                    className: a()(l.roleIcon, n, { [l.clickable]: null != f }),
                    height: E ? d : void 0,
                    src: u.url,
                    width: d
                })),
            null == f)
                ? (0, r.jsx)(s.FocusRing, {
                      offset: { left: 5 },
                      children: t
                  })
                : (0, r.jsx)(s.Clickable, {
                      onClick: f,
                      tag: 'span',
                      focusProps: { offset: { left: 5 } },
                      children: t
                  }))
    });
}
