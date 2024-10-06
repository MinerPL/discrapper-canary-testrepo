t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    i = t.n(s),
    o = t(657707),
    l = t(793030),
    c = t(692547),
    d = t(481060),
    u = t(885006),
    _ = t(810568),
    E = t(221370),
    m = t(689938),
    I = t(51527),
    A = t(110367);
function p(e) {
    let { detectedGame: n, trackAction: t } = e,
        [s, p] = r.useState((null == n ? void 0 : n.summaryLocalized) != null),
        [g, f] = r.useState(!0),
        [T, O] = r.useState(!1),
        N = r.useRef(null),
        { width: R, height: h } = (0, u.Z)();
    return (r.useEffect(() => {
        let e = N.current;
        null != e && O(e.scrollHeight - e.clientHeight > 1);
    }, [N, R, h]),
    null == n.summary)
        ? null
        : (0, a.jsxs)('div', {
              className: i()(I.column, I.gapSm),
              children: [
                  null != n.summaryLocalized &&
                      (0, a.jsxs)('div', {
                          className: i()(I.row, I.gapSm),
                          children: [
                              (0, a.jsx)(o.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, a.jsx)(l.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: s ? m.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({ onShowOriginal: () => p(!1) }) : m.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({ onShowTranslated: () => p(!0) })
                              })
                          ]
                      }),
                  (0, a.jsx)(l.xv, {
                      ref: N,
                      lineClamp: g ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: s ? n.summaryLocalized : n.summary
                  }),
                  (T || !g) &&
                      (0, a.jsx)(d.Clickable, {
                          className: I.clickable,
                          onClick: () => {
                              t(g ? _.as.ShowMore : _.as.ShowLess), f(!g);
                          },
                          children: (0, a.jsx)(l.xv, {
                              variant: 'text-sm/semibold',
                              children: g ? m.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE : m.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS
                          })
                      }),
                  (0, a.jsx)(E.Z, {
                      className: A.platforms,
                      detectedGame: n
                  })
              ]
          });
}
