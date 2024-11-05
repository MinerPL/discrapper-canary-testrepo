n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    o = n(481060),
    l = n(422559),
    s = n(594045);
function c(e) {
    let { grantedPermissions: t, disabledPermissions: n, grantedPermissionsHeader: a, disabledPermissionsHeader: c, className: d } = e;
    return (0, i.jsxs)('div', {
        className: r()(s.list, d),
        children: [
            null != t && t.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != a
                              ? (0, i.jsx)(o.Heading, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: s.header,
                                    children: a
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: s.container,
                              children: t.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: s.permission,
                                          children: [
                                              (0, i.jsx)(o.CheckmarkLargeIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: s.check
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, l.wt)(e)
                                              })
                                          ]
                                      },
                                      e.toString()
                                  )
                              )
                          })
                      ]
                  })
                : null,
            null != n && n.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != c
                              ? (0, i.jsx)(o.Heading, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: s.header,
                                    children: c
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: s.container,
                              children: n.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: s.permission,
                                          children: [
                                              (0, i.jsx)(o.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: s.cross
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, l.wt)(e)
                                              })
                                          ]
                                      },
                                      e.toString()
                                  )
                              )
                          })
                      ]
                  })
                : null
        ]
    });
}
