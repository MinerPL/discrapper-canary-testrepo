n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(475413),
    a = n(955418),
    o = n(388032),
    s = n(200669);
function l(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: l } = e;
    return n
        ? (0, r.jsx)('footer', {
              className: s.footer,
              children:
                  !l &&
                  (0, r.jsx)(i.tG, {
                      text: o.intl.string(o.t.hZkfwc),
                      fullWidth: !0
                  })
          })
        : (0, r.jsx)('footer', {
              inert: '',
              className: s.footer,
              children: (0, r.jsx)(a.Z, { user: t })
          });
}
