n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(410030),
    r = n(113434),
    l = n(710914),
    o = n(689938),
    c = n(466836);
function d(e) {
    let { onSelectTab: t } = e,
        { quests: d, isFetchingCurrentQuests: u } = (0, r.bA)(r.e5.CLAIMED),
        _ = (0, s.ZP)();
    return 0 === d.length
        ? (0, i.jsxs)(a.EmptyState, {
              theme: _,
              children: [
                  (0, i.jsx)(a.EmptyStateImage, {
                      lightSrc: n(979770),
                      darkSrc: n(138715),
                      width: 415,
                      height: 200
                  }),
                  (0, i.jsx)(a.EmptyStateText, { note: o.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({ onClick: () => t(r.e5.ALL) }) })
              ]
          })
        : (0, i.jsx)('div', {
              className: c.gridContainer,
              children: (0, i.jsx)(l.Z, {
                  quests: d,
                  isFetching: u
              })
          });
}
