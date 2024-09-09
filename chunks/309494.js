n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(481060),
    l = n(320161),
    o = n(572004),
    c = n(51144),
    d = n(785717),
    u = n(475413),
    _ = n(689938),
    E = n(678855);
function h(e) {
    let { user: t, isHovering: n } = e,
        { trackUserProfileAction: a } = (0, d.KZ)();
    return o.wS
        ? (0, i.jsx)(l.Z, {
              text: _.Z.Messages.COPY_USERNAME,
              delay: 0,
              'aria-label': !1,
              copyValue: c.ZP.getUserTag(t, {
                  decoration: 'never',
                  identifiable: 'always'
              }),
              onCopy: () => a({ action: 'COPY_USERNAME' }),
              children: (e) =>
                  (0, i.jsx)(u.kF, {
                      ...e,
                      className: s()(E.hover, { [E.visible]: n }),
                      innerClassName: E.hover,
                      look: r.Button.Looks.BLANK,
                      size: r.Button.Sizes.NONE,
                      color: E.hoverColor,
                      themeColor: 'none',
                      grow: !1,
                      'aria-label': _.Z.Messages.COPY_USERNAME,
                      children: (0, i.jsx)(r.CopyIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
          })
        : null;
}
