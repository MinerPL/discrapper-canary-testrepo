n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var a = n(735250),
    s = n(470079),
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
    N = n(901628),
    E = n(821744);
r.ZP.initialize();
let g = i.tq || i.Em;
function h(e) {
    let { match: t } = e,
        n = (0, r.e7)([d.Z], () => d.Z.getState('quests')),
        i = t.params.questId;
    if (
        (s.useEffect(() => {
            if (!g)
                null == n
                    ? (m.default.track(x.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT, { quest_id: i }),
                      u.Z.openNativeAppModal('quests', x.Etm.DEEP_LINK, {
                          type: _.jE.QUEST_HOME,
                          params: { questId: i }
                      }))
                    : n === x.kEZ.OPEN_FAIL &&
                      (0, p.dL)({
                          pathname: x.Z5c.QUEST_HOME,
                          hash: i
                      });
        }, [n, i]),
        g)
    )
        return (0, a.jsxs)('div', {
            className: N.mobileWebContainer,
            children: [
                (0, a.jsx)('img', {
                    src: E,
                    alt: '',
                    className: N.mobileWebImage
                }),
                (0, a.jsx)(l.Heading, {
                    variant: 'display-lg',
                    color: 'text-brand',
                    children: b.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
                }),
                (0, a.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    className: N.mobileWebCopy,
                    children: b.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE_QUEST_HOME
                })
            ]
        });
    let h = null == n || n === x.kEZ.OPENING || n === x.kEZ.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.Z, {
                className: N.backgroundArtwork,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)('div', {
                className: N.container,
                children: (0, a.jsx)(c.ZP, {
                    children: h
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(c.Dx, { children: b.Z.Messages.APP_OPENING }), (0, a.jsx)(c.Hh, {})]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(c.Dx, {
                                      className: N.appOpenedTitle,
                                      children: b.Z.Messages.APP_OPENED_TITLE
                                  }),
                                  (0, a.jsx)(c.DK, { children: b.Z.Messages.DEEPLINK_BROWSER_APP_OPENED })
                              ]
                          })
                })
            })
        ]
    });
}
