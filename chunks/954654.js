l.d(n, {
    ZP: function () {
        return _;
    },
    xX: function () {
        return x;
    }
});
var t = l(735250);
l(470079);
var r = l(120356),
    i = l.n(r),
    a = l(911969),
    u = l(970184),
    s = l(987106),
    o = l(927057),
    c = l(574597),
    d = l(378975),
    m = l(413991),
    f = l(12067),
    p = l(676149),
    E = l(861529),
    v = l(770009),
    C = l(889515),
    h = l(751319);
function x(e) {
    return e.map((e, n) =>
        (function (e, n) {
            switch (e.type) {
                case a.re.ACTION_ROW:
                    return (0, t.jsx)(
                        C.Z,
                        {
                            ...e,
                            renderComponents: x
                        },
                        n
                    );
                case a.re.BUTTON:
                    return (0, t.jsx)(s.Z, { ...e }, n);
                case a.re.STRING_SELECT:
                    return (0, t.jsx)(d.Z, { ...e }, n);
                case a.re.CHANNEL_SELECT:
                    return (0, t.jsx)(o.Z, { ...e }, n);
                case a.re.USER_SELECT:
                case a.re.ROLE_SELECT:
                case a.re.MENTIONABLE_SELECT:
                    return (0, t.jsx)(c.Z, { ...e }, n);
                case a.re.INPUT_TEXT:
                    return (0, t.jsx)(m.Z, { ...e }, n);
                case a.re.TEXT:
                    return (0, t.jsx)(E.Z, { ...e }, n);
                case a.re.MEDIA_GALLERY:
                    return (0, t.jsx)(f.Z, { ...e }, n);
                case a.re.SEPARATOR:
                    return (0, t.jsx)(p.Z, { ...e }, n);
                case a.re.CONTENT_INVENTORY_ENTRY:
                    return (0, t.jsx)(v.Z, { ...e }, n);
            }
        })(e, n.toString())
    );
}
function _(e) {
    let { message: n } = e,
        { components: l } = n;
    return 0 === l.length
        ? null
        : (0, t.jsx)('div', {
              className: i()([h.container, { [h.containerUikit]: n.isUIKitComponents() }]),
              children: (0, t.jsx)(u.Il, {
                  message: n,
                  children: x(l)
              })
          });
}
