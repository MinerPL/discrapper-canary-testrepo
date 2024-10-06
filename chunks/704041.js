n(47120);
var r = n(735250),
    i = n(470079),
    a = n(481060),
    s = n(114201),
    o = n(154658),
    l = n(370611),
    u = n(463031),
    c = n(231338),
    d = n(689938),
    _ = n(304818);
function E(e) {
    let { children: t } = e;
    return (0, r.jsx)(a.ThemeProvider, {
        theme: c.BR.DARK,
        children: (e) =>
            (0, r.jsx)('div', {
                'data-disable-adaptive-theme': !0,
                className: e,
                children: t
            })
    });
}
t.Z = (e) => {
    let { guildId: t, previewMode: n = !1 } = e,
        [c, f] = i.useState(n),
        h = i.useRef(null);
    return ((0, a.useFocusLock)(h), null == t)
        ? null
        : (0, r.jsx)(E, {
              children: (0, r.jsxs)('div', {
                  className: _.popout,
                  ref: h,
                  children: [
                      (0, r.jsxs)('div', {
                          className: _.content,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: _.header,
                                  children: [
                                      (0, r.jsx)(a.LeagueOfLegendsBrandIcon, { size: 'md' }),
                                      (0, r.jsx)(a.Spacer, {
                                          size: 8,
                                          horizontal: !0
                                      }),
                                      (0, r.jsx)(a.Heading, {
                                          variant: 'heading-sm/normal',
                                          className: _.leaderboardTitle,
                                          children: d.Z.Messages.LEADERBOARD_POPOUT_TITLE.format({
                                              leaderboardName: 'League of Legends',
                                              leaderboardNameHook: (e, t) =>
                                                  (0, r.jsx)(
                                                      a.Text,
                                                      {
                                                          variant: 'text-sm/medium',
                                                          className: _.leaderboardName,
                                                          children: e
                                                      },
                                                      t
                                                  )
                                          })
                                      }),
                                      (0, r.jsx)(s.Z, {})
                                  ]
                              }),
                              (0, r.jsx)(l.Z, {
                                  guildId: t,
                                  leaderboardId: u._,
                                  intervalOffset: 0,
                                  previewMode: c
                              }),
                              c
                                  ? null
                                  : (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)(o.Z, {
                                            className: _.previousChampion,
                                            guildId: t,
                                            leaderboardId: u._,
                                            intervalOffset: -1
                                        })
                                    })
                          ]
                      }),
                      c
                          ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(a.Clickable, {
                                    onClick: () => f(!1),
                                    children: (0, r.jsx)('div', {
                                        className: _.exitPreviewModeButton,
                                        children: (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/medium',
                                            className: _.exitPreviewModeText,
                                            children: d.Z.Messages.LEADERBOARD_POPOUT_PREVIEW_SHOW_FULL_LEADERBOARD
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
