s.r(a),
    s.d(a, {
        default: function () {
            return E;
        }
    });
var t = s(735250),
    o = s(470079),
    n = s(481060),
    l = s(442837),
    i = s(194359),
    c = s(906732),
    d = s(321488),
    r = s(417183),
    u = s(170245),
    m = s(735778),
    p = s(171368),
    h = s(974042),
    _ = s(626135),
    C = s(981631),
    N = s(689938),
    g = s(570828);
function x(e) {
    let { user: a, status: s } = e,
        l = o.useContext(_.AnalyticsContext),
        { analyticsLocations: m } = (0, c.ZP)(),
        h = (e) => {
            e.stopPropagation(), i.Z.cancelFriendRequest(a.id, { location: 'Spam requests modal' });
        },
        x = (e) => {
            e.stopPropagation(),
                i.Z.addRelationship({
                    userId: a.id,
                    context: { location: 'Spam requests modal' }
                });
        },
        E = s === C.Skl.OFFLINE ? C.Skl.UNKNOWN : s;
    return (0, t.jsx)('div', {
        className: g.spamRequest,
        children: (0, t.jsx)(r.Z, {
            isFocused: !1,
            user: a,
            className: g.listItem,
            activeClassName: g.active,
            onClick: () =>
                (0, p.openUserProfileModal)({
                    userId: a.id,
                    sourceAnalyticsLocations: m,
                    analyticsLocation: l.location
                }),
            children: (e) =>
                (0, t.jsxs)('div', {
                    className: g.listItemContents,
                    children: [
                        (0, t.jsx)(u.Z, {
                            user: a,
                            hovered: e,
                            status: E,
                            subText: a.username,
                            className: g.userInfo
                        }),
                        (0, t.jsxs)('div', {
                            className: g.actions,
                            children: [
                                (0, t.jsx)(d.Z, {
                                    icon: n.CheckmarkLargeIcon,
                                    actionType: d.Z.ActionTypes.ACCEPT,
                                    tooltip: N.Z.Messages.FRIEND_REQUEST_ACCEPT,
                                    onClick: x,
                                    shouldHighlight: e
                                }),
                                (0, t.jsx)(d.Z, {
                                    icon: n.XSmallIcon,
                                    actionType: d.Z.ActionTypes.DENY,
                                    tooltip: N.Z.Messages.FRIEND_REQUEST_IGNORE,
                                    onClick: h,
                                    shouldHighlight: e
                                })
                            ]
                        })
                    ]
                })
        })
    });
}
function E(e) {
    let { transitionState: a, onClose: s } = e,
        { rows: c } = (0, l.cj)([h.ZP], () => h.ZP.getState()),
        d = c.filter(C.pJs.SPAM),
        r = d.length;
    return (o.useEffect(() => {
        0 === r && s();
    }, [r, s]),
    (0, m.A)({ location: 'friend_request_spam_inbox' }))
        ? (0, t.jsxs)(n.ModalRoot, {
              transitionState: a,
              className: g.modal,
              children: [
                  (0, t.jsxs)(n.ModalHeader, {
                      separator: !1,
                      children: [
                          (0, t.jsx)(n.Heading, {
                              variant: 'heading-lg/bold',
                              className: g.heading,
                              children: N.Z.Messages.FRIEND_REQUESTS_SPAM_REQUESTS
                          }),
                          (0, t.jsx)(n.ModalCloseButton, {
                              onClick: s,
                              className: g.closeButton
                          })
                      ]
                  }),
                  (0, t.jsx)(n.ModalContent, {
                      className: g.modalContent,
                      children: d.map((e) =>
                          (0, o.createElement)(x, {
                              ...e,
                              isFocused: !1,
                              key: e.key
                          })
                      )
                  }),
                  r > 1 &&
                      (0, t.jsx)('div', {
                          className: g.modalFooter,
                          children: (0, t.jsx)(n.Button, {
                              className: g.clearAllButton,
                              onClick: () => {
                                  i.Z.clearPendingSpam(), s();
                              },
                              children: N.Z.Messages.CLEAR_ALL
                          })
                      })
              ]
          })
        : null;
}
