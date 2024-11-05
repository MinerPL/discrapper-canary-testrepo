t.d(e, {
    Z: function () {
        return a;
    }
});
var l = t(200651);
t(192379);
var i = t(794295),
    r = t(388032),
    o = t(130685);
function a(n) {
    let { termsOfServiceUrl: e, privacyPolicyUrl: t } = n;
    return null == e && null == t
        ? null
        : (0, l.jsxs)('span', {
              className: o.text,
              children: [
                  null != e &&
                      (0, l.jsx)(i.Z, {
                          href: e,
                          children: r.intl.string(r.t['8S0kcH'])
                      }),
                  null != e &&
                      null != t &&
                      (0, l.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != t &&
                      (0, l.jsx)(i.Z, {
                          href: t,
                          children: r.intl.string(r.t.ZpyeCg)
                      })
              ]
          });
}
