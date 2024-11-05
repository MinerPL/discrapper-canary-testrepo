n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(100621),
    l = n(481060),
    s = n(532490),
    o = n(620929),
    c = n(388032),
    d = n(837275);
function u(e) {
    let { guildId: t, signed: n, setSigned: u, sidebarWidth: h, windowWidth: m, transition: p, brandPrimaryColor: g } = e,
        f = r.useMemo(() => (m - h) / 2, [h, m]);
    return null == p
        ? (0, i.jsx)('div', {
              className: d.sidebarContent,
              children: (0, i.jsx)('div', {
                  className: d.charterScrollContainer,
                  children: (0, i.jsx)(o.Z, {
                      guildId: t,
                      canSignCharter: null != u,
                      signed: n,
                      onSignCharter: (e) => (null == u ? void 0 : u(e)),
                      signHintPosition: s.p.RIGHT,
                      primaryColor: g,
                      className: d.charterScroll,
                      fullHeight: !0,
                      showDisclaimer: !0
                  })
              })
          })
        : (0, i.jsxs)('div', {
              className: d.sidebarContent,
              children: [
                  p(
                      (e, t) =>
                          t &&
                          (0, i.jsx)(a.animated.div, {
                              className: d.sidebarLeftDecorationContainer,
                              style: {
                                  opacity: e.opacity,
                                  transform: e.opacity.to([0, 1], [40, 0]).to((e) => 'translateY('.concat(e, 'px)')),
                                  width: f
                              },
                              children: (0, i.jsxs)('div', {
                                  className: d.sidebarLeftDecoration,
                                  style: { width: f },
                                  children: [
                                      (0, i.jsx)(l.Heading, {
                                          variant: 'heading-xxl/medium',
                                          className: d.header,
                                          children: c.intl.string(c.t.PAYPxM)
                                      }),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: c.intl.string(c.t.GKxdeX)
                                      })
                                  ]
                              })
                          })
                  ),
                  (0, i.jsx)('div', {
                      className: d.charterScrollContainer,
                      children: (0, i.jsx)(o.Z, {
                          guildId: t,
                          canSignCharter: null != u,
                          signed: n,
                          onSignCharter: (e) => (null == u ? void 0 : u(e)),
                          signHintPosition: s.p.RIGHT,
                          primaryColor: g,
                          className: d.charterScroll,
                          fullHeight: !0,
                          showDisclaimer: !0
                      })
                  })
              ]
          });
}
