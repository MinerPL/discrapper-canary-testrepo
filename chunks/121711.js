n(47120);
var i = n(735250),
    a = n(470079),
    s = n(990547),
    r = n(481060),
    l = n(410030),
    o = n(213609),
    c = n(252618),
    d = n(979233),
    u = n(175307),
    _ = n(374939),
    h = n(611928),
    E = n(791734),
    m = n(63063),
    I = n(113434),
    g = n(471985),
    p = n(710914),
    T = n(906739),
    S = n(452081),
    f = n(46140),
    C = n(981631),
    N = n(689938),
    A = n(296561);
t.Z = function (e) {
    let {} = e,
        t = (0, g.Z)(f.dr.QUEST_HOME_DESKTOP),
        { tabs: v, selectedTab: Z, onSelectTab: L } = (0, S.z)(),
        { onScroll: O, scrollPosition: R } = (0, d.M)(),
        x = (0, l.ZP)(),
        { quests: b, isFetchingCurrentQuests: P } = (0, I.bA)(Z),
        M = (0, T.Z)(),
        D = null;
    if (window.location.hash.length > 0) {
        let e = window.location.hash.slice(1);
        for (let t of b)
            if (t.id === e) {
                D = e;
                break;
            }
    }
    a.useEffect(() => {
        (0, o.h)({
            name: s.ImpressionNames.QUEST_HOME,
            type: s.ImpressionTypes.VIEW
        });
    }, []);
    let y = a.useCallback(() => {
        window.open(m.Z.getArticleURL(C.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, c.Tt)({ location: N.Z.Messages.QUESTS });
    let j = a.useMemo(() => ({ backgroundImage: 'url('.concat(M, ')') }), [M]);
    return t
        ? (0, i.jsxs)('div', {
              className: A.container,
              children: [
                  (0, i.jsxs)(h.ZP, {
                      children: [
                          (0, i.jsx)('div', { className: A.dragRegion }),
                          (0, i.jsx)(h.z6, { scrollPosition: R }),
                          (0, i.jsx)(h.aV, { icon: r.QuestsIcon }),
                          (0, i.jsx)(E.Z, {
                              tabs: v,
                              selectedTab: Z,
                              onTabSelect: L
                          })
                      ]
                  }),
                  (0, i.jsx)(_.Z, {
                      title: N.Z.Messages.QUESTS_HOME_HERO_TITLE,
                      description: N.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
                      onScroll: O,
                      button: (0, i.jsx)(u.u, {
                          text: N.Z.Messages.LEARN_MORE,
                          onClick: y
                      }),
                      bannerClassName: A.bannerContainer,
                      bannerBackground: (0, i.jsx)('div', {
                          className: A.bannerImage,
                          style: j,
                          children: (0, i.jsx)('div', { className: A.bannerGradient })
                      }),
                      children:
                          P && 0 === b.length
                              ? (0, i.jsx)(r.Spinner, { className: A.spinner })
                              : 0 === b.length && Z === I.e5.CLAIMED
                                ? (0, i.jsxs)(r.EmptyState, {
                                      theme: x,
                                      children: [
                                          (0, i.jsx)(r.EmptyStateImage, {
                                              lightSrc: n(979770),
                                              darkSrc: n(138715),
                                              width: 415,
                                              height: 200
                                          }),
                                          (0, i.jsx)(r.EmptyStateText, { note: N.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({ onClick: () => L(I.e5.ALL) }) })
                                      ]
                                  })
                                : (0, i.jsx)('div', {
                                      className: A.gridContainer,
                                      children: (0, i.jsx)(p.Z, {
                                          quests: b,
                                          selectedQuestId: D
                                      })
                                  })
                  })
              ]
          })
        : null;
};
