t.d(s, {
    Z: function () {
        return p;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(704215),
    l = t(780384),
    c = t(481060),
    d = t(37234),
    _ = t(410030),
    E = t(605236),
    u = t(626135),
    I = t(617136),
    T = t(497505),
    S = t(471985),
    N = t(341907),
    C = t(906739),
    m = t(46140),
    A = t(981631),
    O = t(689938),
    g = t(74242),
    h = t(66094);
function p() {
    let e = (0, S.Z)(m.dr.USER_SETTINGS_GIFT_INVENTORY),
        s = (0, C.Z)(),
        t = (0, l.wj)((0, _.ZP)()),
        i = a.useMemo(() => ({ backgroundImage: 'url('.concat(s, ')') }), [s]),
        p = a.useCallback(() => {
            (0, d.xf)(),
                (0, N.navigateToQuestHome)(m.dr.USER_SETTINGS_GIFT_INVENTORY),
                u.default.track(A.rMx.QUEST_CONTENT_CLICKED, {
                    cta_name: I.jZ.VIEW_QUESTS,
                    ...(0, I.mH)(T.jn.QUEST_HOME_MOVE_CALLOUT)
                });
        }, []);
    return (a.useCallback(() => {
        (0, E.EW)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
    }, []),
    e)
        ? ((0, E.un)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME),
          (0, n.jsxs)('div', {
              className: r()(g.container),
              style: i,
              children: [
                  !1,
                  (0, n.jsxs)('div', {
                      className: g.textContainer,
                      children: [
                          (0, n.jsxs)('div', {
                              className: g.headerContainer,
                              children: [
                                  (0, n.jsx)('img', {
                                      alt: '',
                                      src: h,
                                      className: g.icon
                                  }),
                                  (0, n.jsx)(c.Heading, {
                                      variant: 'heading-lg/bold',
                                      color: 'always-white',
                                      children: O.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_TITLE
                                  })
                              ]
                          }),
                          (0, n.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: O.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_DESCRIPTION_V2
                          }),
                          (0, n.jsx)(c.Button, {
                              size: 'large',
                              color: t ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                              className: g.button,
                              onClick: p,
                              innerClassName: g.innerButton,
                              children: (0, n.jsx)(c.Text, {
                                  variant: 'text-md/medium',
                                  color: t ? 'always-white' : 'text-normal',
                                  children: O.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON
                              })
                          })
                      ]
                  })
              ]
          }))
        : null;
}
