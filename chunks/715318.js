t.d(n, {
    Z: function () {
        return c;
    }
});
var a = t(735250);
t(470079);
var r = t(481060),
    s = t(239091),
    o = t(299206),
    i = t(326103),
    l = t(689938);
function c(e) {
    let { applicationId: n, className: t } = e,
        c = (0, i.v)('GameProfileOverflowMenu'),
        d = (0, o.Z)({
            id: n,
            label: l.Z.Messages.COPY_ID_APPLICATION
        }),
        u = () => {},
        _ = c
            ? (0, a.jsxs)(r.MenuItem, {
                  id: 'game-profile-something-wrong',
                  label: l.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
                  children: [
                      (0, a.jsx)(r.MenuItem, {
                          id: 'game-profile-wrong-name',
                          label: l.Z.Messages.GAME_PROFILE_WRONG_GAME,
                          action: u
                      }),
                      (0, a.jsx)(r.MenuItem, {
                          id: 'game-profile-outdated-data',
                          label: l.Z.Messages.GAME_PROFILE_OUTDATED_DATA,
                          action: u
                      }),
                      (0, a.jsx)(r.MenuItem, {
                          id: 'game-profile-other-problem',
                          label: l.Z.Messages.GAME_PROFILE_OTHER_PROBLEM,
                          action: u
                      })
                  ]
              })
            : null;
    return null == d && null == _
        ? null
        : (0, a.jsx)(r.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, a.jsx)(r.Menu, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, s.Zy)(), n();
                      },
                      'aria-label': l.Z.Messages.GAME_PROFILE_VIEW_MORE,
                      onSelect: () => {},
                      children: (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(r.MenuGroup, { children: d }), (0, a.jsx)(r.MenuGroup, { children: _ })]
                      })
                  });
              },
              children: (e) =>
                  (0, a.jsx)(r.Tooltip, {
                      text: l.Z.Messages.MORE,
                      children: (n) =>
                          (0, a.jsx)(r.Clickable, {
                              className: t,
                              ...n,
                              ...e,
                              children: (0, a.jsx)(r.MoreHorizontalIcon, { size: 'xs' })
                          })
                  })
          });
}
