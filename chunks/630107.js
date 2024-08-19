t.r(n),
    t.d(n, {
        default: function () {
            return h;
        }
    });
var a = t(735250),
    s = t(470079),
    i = t(873546),
    r = t(442837),
    l = t(481060),
    o = t(830064),
    c = t(388905),
    u = t(625128),
    d = t(362762),
    p = t(703656),
    m = t(626135),
    x = t(471985),
    _ = t(46140),
    b = t(981631),
    E = t(186901),
    N = t(689938),
    g = t(309687),
    I = t(821744);
r.ZP.initialize();
let f = i.tq || i.Em;
function h(e) {
    let { match: n } = e,
        t = (0, r.e7)([d.Z], () => d.Z.getState('quests')),
        i = n.params.questId,
        h = (0, x.Z)(_.dr.CODED_LINK);
    if (
        (s.useEffect(() => {
            if (!f)
                null == t
                    ? (m.default.track(b.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT, { quest_id: i }),
                      u.Z.openNativeAppModal('quests', b.Etm.DEEP_LINK, {
                          type: E.jE.QUEST_HOME,
                          params: { questId: i }
                      }))
                    : t === b.kEZ.OPEN_FAIL && (0, p.dL)(b.Z5c.QUEST_HOME);
        }, [t, i]),
        f)
    )
        return (0, a.jsxs)('div', {
            className: g.mobileWebContainer,
            children: [
                (0, a.jsx)('img', {
                    src: I,
                    alt: '',
                    className: g.mobileWebImage
                }),
                (0, a.jsx)(l.Heading, {
                    variant: 'display-lg',
                    color: 'text-brand',
                    children: N.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
                }),
                (0, a.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    className: g.mobileWebCopy,
                    children: h ? N.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE_QUEST_HOME : N.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE
                })
            ]
        });
    let j = null == t || t === b.kEZ.OPENING || t === b.kEZ.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.Z, {
                className: g.backgroundArtwork,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)('div', {
                className: g.container,
                children: (0, a.jsx)(c.ZP, {
                    children: j
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(c.Dx, { children: N.Z.Messages.APP_OPENING }), (0, a.jsx)(c.Hh, {})]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(c.Dx, {
                                      className: g.appOpenedTitle,
                                      children: N.Z.Messages.APP_OPENED_TITLE
                                  }),
                                  (0, a.jsx)(c.DK, { children: N.Z.Messages.DEEPLINK_BROWSER_APP_OPENED })
                              ]
                          })
                })
            })
        ]
    });
}
