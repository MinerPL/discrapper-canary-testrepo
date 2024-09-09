n.d(t, {
    I: function () {
        return I;
    }
});
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(442837),
    l = n(780384),
    c = n(481060),
    d = n(425493),
    u = n(410030),
    f = n(984370),
    p = n(594174),
    g = n(471731),
    C = n(486620),
    m = n(335131),
    _ = n(994896),
    h = n(689938),
    b = n(99065);
function x(e) {
    let { isLayer: t, onClose: n, isFullScreen: s = !1 } = e;
    return (0, a.jsxs)(f.Z, {
        className: o()(b.headerBar, { [b.fullscreenHeaderBar]: s }),
        innerClassname: b.shopLogoContainer,
        toolbar: s ? null : (0, a.jsx)(r.Fragment, {}),
        children: [
            (0, a.jsx)(C.Z, { className: b.shopLogo }),
            s &&
                (0, a.jsx)(d.Z, {
                    className: b.closeIcon,
                    closeAction: t ? m.DR : n,
                    keybind: 'ESC'
                })
        ]
    });
}
function I(e) {
    let { isFullScreen: t, isLayer: n, onClose: s, isCatalogView: C, handleTransition: I, transparent: E } = e,
        { newShopLogoEnabled: v } = (0, _.O)({ location: 'CollectiblesShop' }),
        L = (0, u.ZP)(),
        S = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        T = (null == S ? void 0 : S.isStaff()) || (null == S ? void 0 : S.isStaffPersonal()) || !1;
    return v
        ? (0, a.jsx)(x, {
              isLayer: n,
              onClose: s,
              isFullScreen: t
          })
        : (0, a.jsx)(c.ThemeProvider, {
              theme: L,
              children: (e) =>
                  (0, a.jsxs)(f.Z, {
                      className: o()(e, b.headerBar, {
                          [b.fullscreenHeaderBar]: t,
                          [b.headerBarRegularBackground]: !E,
                          [b.headerBarTransparentLightBackground]: E && !(0, l.wj)(L),
                          [b.headerBarTransparentDarkBackground]: E && (0, l.wj)(L)
                      }),
                      transparent: E,
                      toolbar: t || !T ? null : (0, a.jsx)(r.Fragment, {}),
                      children: [
                          (0, a.jsxs)(a.Fragment, {
                              children: [
                                  C &&
                                      null != I &&
                                      (0, a.jsx)(c.Clickable, {
                                          onClick: I,
                                          className: b.back,
                                          'aria-label': h.Z.Messages.BACK,
                                          children: (0, a.jsx)(c.ArrowLargeLeftIcon, {})
                                      }),
                                  (0, a.jsx)(g.Z, {
                                      color: E ? ((0, l.wj)(L) ? 'white' : 'black') : void 0,
                                      className: b.discordLogo
                                  })
                              ]
                          }),
                          (0, a.jsx)(f.Z.Title, { children: h.Z.Messages.COLLECTIBLES_SHOP }),
                          C &&
                              (0, a.jsx)(f.Z.Title, {
                                  className: b.shopAllHeader,
                                  children: h.Z.Messages.COLLECTIBLES_SHOP_ALL
                              }),
                          t &&
                              (0, a.jsx)(d.Z, {
                                  className: b.closeIcon,
                                  closeAction: n ? m.DR : s,
                                  keybind: 'ESC'
                              })
                      ]
                  })
          });
}
