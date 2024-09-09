l.d(t, {
    Z: function () {
        return m;
    }
});
var n = l(735250),
    a = l(470079),
    o = l(120356),
    s = l.n(o),
    i = l(481060),
    r = l(994463),
    C = l(472596),
    c = l(918192),
    d = l(689938),
    u = l(788770);
function m(e) {
    let { searchState: t } = e,
        l = a.useMemo(
            () => ({
                [C.po.LOADING]: null,
                [C.po.SUCCESS_STILL_INDEXING]: {
                    icon: (0, n.jsx)(r.Z, {}),
                    message: d.Z.Messages.SEARCH_GUILD_STILL_INDEXING
                },
                [C.po.SUCCESS_EMPTY]: {
                    icon: (0, n.jsx)(c.Z, {}),
                    message: d.Z.Messages.MEMBER_SAFETY_TABLE_NO_RESULTS
                },
                [C.po.SUCCESS_FULL]: null
            }),
            []
        )[t];
    return null == l
        ? null
        : (0, n.jsxs)('div', {
              className: s()(u.noResultsContainer),
              children: [
                  (0, n.jsx)('div', {
                      className: s()(u.__invalid_noResultsIconContainer),
                      children: l.icon
                  }),
                  (0, n.jsx)(i.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: l.message
                  })
              ]
          });
}
