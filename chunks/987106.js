l.d(n, {
    Z: function () {
        return N;
    }
});
var t = l(735250);
l(470079);
var r = l(120356),
    i = l.n(r),
    a = l(392711),
    u = l(481060),
    s = l(239091),
    o = l(596454),
    c = l(911969),
    d = l(574399),
    m = l(572004),
    f = l(49012),
    p = l(970184),
    E = l(280501),
    v = l(689938),
    C = l(880609);
function h(e) {
    let { url: n, onSelect: l } = e;
    return m.wS && null != n
        ? (0, t.jsx)(u.Menu, {
              navId: 'component-button',
              onClose: s.Zy,
              'aria-label': v.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: l,
              children: (0, t.jsx)(u.MenuGroup, {
                  children: (0, t.jsx)(u.MenuItem, {
                      id: 'copy',
                      label: v.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function N(e) {
    let n;
    let { label: l, style: r, disabled: m, emoji: v, url: N, skuId: T } = e,
        { executeStateUpdate: _, visualState: x, isDisabled: I } = (0, p.Ee)(e),
        S = (0, d.I)(T),
        g = null != T && r === c.ZJ.PREMIUM,
        O = g && (null == S ? void 0 : S.disabled),
        Z = g ? (null == S ? void 0 : S.label) : l,
        j = null != v,
        L = null != Z && Z.length > 0,
        A = r === c.ZJ.LINK && null != N && N.length > 0,
        R = x === E.gH.LOADING || (g && null == S);
    return (
        (n = A
            ? () => {
                  (0, f.q)({
                      href: null != N ? N : '',
                      shouldConfirm: !0
                  });
              }
            : g
              ? null != S && !1 === S.disabled
                  ? S.onClick
                  : a.noop
              : () => _()),
        (0, t.jsxs)(u.Button, {
            color: (function (e) {
                switch (e) {
                    case c.ZJ.PRIMARY:
                    case c.ZJ.PREMIUM:
                        return u.Button.Colors.BRAND;
                    case c.ZJ.SUCCESS:
                        return u.Button.Colors.GREEN;
                    case c.ZJ.DESTRUCTIVE:
                        return u.Button.Colors.RED;
                    default:
                        return u.Button.Colors.PRIMARY;
                }
            })(r),
            size: u.Button.Sizes.SMALL,
            disabled: m || x === E.gH.DISABLED || I || O,
            onClick: n,
            onContextMenu: (e) => {
                A &&
                    (0, s.vq)(e, (e) =>
                        (0, t.jsx)(h, {
                            ...e,
                            url: N
                        })
                    );
            },
            role: A ? 'link' : 'button',
            children: [
                (0, t.jsxs)('div', {
                    className: i()(C.content, {
                        [C.hidden]: R,
                        [C.premium]: g
                    }),
                    'aria-hidden': R,
                    children: [
                        g
                            ? (0, t.jsx)('div', {
                                  className: C.shopIcon,
                                  children: (0, t.jsx)(u.ShopIcon, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        j
                            ? (0, t.jsx)(o.Z, {
                                  className: i()({ [C.textEmoji]: L }),
                                  src: v.src,
                                  emojiId: v.id,
                                  emojiName: v.name,
                                  animated: v.animated
                              })
                            : null,
                        L
                            ? (0, t.jsx)('div', {
                                  className: C.label,
                                  children: Z
                              })
                            : null,
                        A
                            ? (0, t.jsx)(u.WindowLaunchIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: C.launchIcon
                              })
                            : null
                    ]
                }),
                R
                    ? (0, t.jsx)('div', {
                          className: C.loading,
                          children: (0, t.jsx)(u.Dots, {
                              dotRadius: 3.5,
                              themed: !0
                          })
                      })
                    : null
            ]
        })
    );
}
