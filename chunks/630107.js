n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var s = n(735250),
    a = n(470079),
    i = n(873546),
    r = n(442837),
    l = n(481060),
    o = n(830064),
    c = n(388905),
    u = n(625128),
    d = n(362762),
    p = n(703656),
    m = n(626135),
    x = n(981631),
    _ = n(186901),
    b = n(689938),
    N = n(309687),
    E = n(821744);
r.ZP.initialize();
let g = i.tq || i.Em;
function h(e) {
    let { match: t } = e,
        n = (0, r.e7)([d.Z], () => d.Z.getState('quests')),
        i = t.params.questId;
    if (
        (a.useEffect(() => {
            if (!g)
                null == n
                    ? (m.default.track(x.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT, { quest_id: i }),
                      u.Z.openNativeAppModal('quests', x.Etm.DEEP_LINK, {
                          type: _.jE.QUEST_HOME,
                          params: { questId: i }
                      }))
                    : n === x.kEZ.OPEN_FAIL && (0, p.dL)(x.Z5c.QUEST_HOME);
        }, [n, i]),
        g)
    )
        return (0, s.jsxs)('div', {
            className: N.mobileWebContainer,
            children: [
                (0, s.jsx)('img', {
                    src: E,
                    alt: '',
                    className: N.mobileWebImage
                }),
                (0, s.jsx)(l.Heading, {
                    variant: 'display-lg',
                    color: 'text-brand',
                    children: b.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
                }),
                (0, s.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    className: N.mobileWebCopy,
                    children: b.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE_QUEST_HOME
                })
            ]
        });
    let h = null == n || n === x.kEZ.OPENING || n === x.kEZ.OPEN_FAIL;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.Z, {
                className: N.backgroundArtwork,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, s.jsx)('div', {
                className: N.container,
                children: (0, s.jsx)(c.ZP, {
                    children: h
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [(0, s.jsx)(c.Dx, { children: b.Z.Messages.APP_OPENING }), (0, s.jsx)(c.Hh, {})]
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(c.Dx, {
                                      className: N.appOpenedTitle,
                                      children: b.Z.Messages.APP_OPENED_TITLE
                                  }),
                                  (0, s.jsx)(c.DK, { children: b.Z.Messages.DEEPLINK_BROWSER_APP_OPENED })
                              ]
                          })
                })
            })
        ]
    });
}
