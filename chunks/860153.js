t.d(n, {
    Z: function () {
        return _;
    }
});
var r = t(200651),
    i = t(192379),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    s = t(481060),
    u = t(700582),
    c = t(372900),
    d = t(318713),
    m = t(123145),
    h = t(592125),
    f = t(231338),
    p = t(182763);
let g = i.memo(function (e) {
    let { message: n } = e,
        t = (0, o.e7)([h.Z], () => h.Z.getChannel(n.channel_id));
    return null == t
        ? null
        : (0, r.jsx)('div', {
              className: p.messageContents,
              children: (0, r.jsxs)(c.Z.Provider, {
                  value: t.guild_id,
                  children: [
                      (0, r.jsx)(u.Z, { user: n.author }),
                      (0, r.jsx)('div', {
                          children: (0, r.jsx)(m.Z, {
                              message: n,
                              channel: t
                          })
                      }),
                      (0, r.jsx)(d.Z, {
                          timestamp: n.timestamp,
                          className: p.timestamp
                      })
                  ]
              })
          });
});
function _(e) {
    var n;
    let { item: t, onClose: i } = e,
        l = null === (n = t.sourceMetadata) || void 0 === n ? void 0 : n.message;
    return (0, r.jsx)(s.ThemeProvider, {
        theme: f.BR.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(p.topBar, e),
                children: [
                    (0, r.jsx)(s.Button, {
                        look: s.ButtonLooks.BLANK,
                        color: s.ButtonColors.CUSTOM,
                        size: s.ButtonSizes.ICON,
                        className: p.closeButton,
                        onClick: i,
                        children: (0, r.jsx)(s.XLargeIcon, {})
                    }),
                    null != l && (0, r.jsx)(g, { message: l })
                ]
            })
    });
}
