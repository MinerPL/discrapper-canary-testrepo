t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    i = t.n(s),
    o = t(793030),
    l = t(481060),
    c = t(383895),
    d = t(689938),
    u = t(51527),
    _ = t(268236);
function E(e) {
    let { entries: n, viewId: t, officialGuildId: s, onClose: E } = e,
        m = n.length > 7,
        [I, A] = r.useState(!1),
        p = r.useMemo(() => n.slice(0, m && !I ? 6 : void 0), [n, m, I]);
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(o.X6, {
                className: u.sectionHeader,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: d.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB
            }),
            0 === n.length
                ? (0, a.jsx)(o.xv, {
                      variant: 'text-xs/semibold',
                      color: 'text-primary',
                      className: _.emptyState,
                      children: d.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)('div', {
                              className: i()(_.friends, { [_.fadedEntries]: m && !I }),
                              children: (0, a.jsx)('div', {
                                  className: u.column,
                                  children: p.map((e) =>
                                      (0, a.jsx)(
                                          c.Z,
                                          {
                                              entry: e,
                                              viewId: t,
                                              onClose: E,
                                              officialGuildId: s
                                          },
                                          e.id
                                      )
                                  )
                              })
                          }),
                          m &&
                              !I &&
                              (0, a.jsxs)(l.Clickable, {
                                  className: _.expandEntriesButton,
                                  onClick: () => A(!0),
                                  children: [
                                      (0, a.jsx)(o.xv, {
                                          variant: 'text-xs/semibold',
                                          color: 'interactive-normal',
                                          children: d.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES
                                      }),
                                      (0, a.jsx)(l.ChevronSmallDownIcon, { size: 'xs' })
                                  ]
                              })
                      ]
                  })
        ]
    });
}
