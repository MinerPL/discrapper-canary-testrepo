n.d(t, {
    R: function () {
        return i;
    }
}),
    n(47120);
var i,
    s,
    a = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(481060),
    u = n(566898),
    d = n(259580),
    h = n(831864);
((s = i || (i = {}))[(s.MutualFriendsList = 0)] = 'MutualFriendsList'), (s[(s.MutualGuildList = 1)] = 'MutualGuildList');
t.Z = (e) => {
    let { header: t, children: n, itemType: i = 1, isLoadingHeader: s, isLoadingContents: r, loadingContentsCount: m = 0, className: p, onExpand: _, onHover: f, onFocus: E } = e,
        [g, C] = l.useState(!0),
        I = (0, a.jsx)('div', {
            className: h.iconWrapper,
            children: (0, a.jsx)(d.Z, { direction: g ? d.Z.Directions.RIGHT : d.Z.Directions.DOWN })
        });
    return (0, a.jsxs)('div', {
        className: p,
        children: [
            (0, a.jsx)(c.Button, {
                className: h.collapseBtn,
                innerClassName: h.collapseBtnContent,
                color: c.ButtonColors.CUSTOM,
                onMouseEnter: f,
                onFocus: E,
                onClick: () => {
                    C(!g), g && (null == _ || _());
                },
                children: s
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(u.ZT, {
                                  width: 34,
                                  opacity: 0.08
                              }),
                              (0, a.jsx)(u.ZT, {
                                  width: 135,
                                  opacity: 0.08
                              })
                          ]
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(c.Text, {
                                  variant: 'text-sm/medium',
                                  children: t
                              }),
                              I
                          ]
                      })
            }),
            (0, a.jsx)('ul', {
                className: o()(h.connectionList, { [h.isCollapsed]: g }),
                children: r
                    ? Array.from({ length: m }).map((e, t) =>
                          (0, a.jsxs)(
                              'div',
                              {
                                  className: o()({
                                      [h.mutualFriendItem]: 0 === i,
                                      [h.mutualGuildItem]: 1 === i
                                  }),
                                  children: [
                                      (0, a.jsx)(u.ZT, {
                                          width: 34,
                                          opacity: 0.08
                                      }),
                                      (0, a.jsx)(u.ZT, {
                                          width: 135,
                                          opacity: 0.08
                                      })
                                  ]
                              },
                              t
                          )
                      )
                    : n
            })
        ]
    });
};
