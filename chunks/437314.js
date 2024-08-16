n.d(t, {
    j: function () {
        return i;
    }
}),
    n(411104),
    n(47120);
var i,
    a = n(735250),
    s = n(470079),
    r = n(748780),
    l = n(442837),
    o = n(481060),
    c = n(210887),
    d = n(981631),
    u = n(689938),
    _ = n(188960);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
(i || (i = {})).SECTION_NO_RESULTS = 'SECTION_NO_RESULTS';
let h = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(900933),
            darkSrc: n(67764),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, a.jsxs)(s.Fragment, {
                    children: [
                        (0, a.jsx)(o.EmptyStateText, { note: u.Z.Messages.FRIENDS_EMPTY_STATE_ALL }),
                        (0, a.jsx)(o.Button, {
                            className: _.button,
                            onClick: e,
                            children: u.Z.Messages.ADD_FRIEND
                        })
                    ]
                })
        },
        SECTION_ONLINE: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, a.jsx)(o.EmptyStateText, { note: u.Z.Messages.FRIENDS_EMPTY_STATE_ONLINE })
        },
        SECTION_BLOCKED: {
            lightSrc: n(459505),
            darkSrc: n(356634),
            width: 433,
            height: 232,
            renderContent: () => (0, a.jsx)(o.EmptyStateText, { note: u.Z.Messages.FRIENDS_EMPTY_STATE_BLOCKED })
        },
        SECTION_PENDING: {
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: () => (0, a.jsx)(o.EmptyStateText, { note: u.Z.Messages.FRIENDS_EMPTY_STATE_PENDING })
        },
        SECTION_SUGGESTIONS: {
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: () => (0, a.jsx)(o.EmptyStateText, { note: u.Z.Messages.FRIENDS_EMPTY_STATE_SUGGESTIONS })
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, a.jsx)(o.EmptyStateText, { note: u.Z.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND })
        }
    }),
    m = (e) => {
        let { theme: t } = e,
            n = u.Z.Messages.FRIENDS_EMPTY_STATE_ALL,
            i = h.SECTION_ALL;
        return (0, a.jsx)(s.Fragment, {
            children: (0, a.jsxs)(o.EmptyState, {
                theme: t,
                children: [
                    (0, a.jsx)(o.EmptyStateImage, {
                        width: i.width,
                        height: i.height,
                        lightSrc: i.lightSrc,
                        darkSrc: i.darkSrc
                    }),
                    (0, a.jsx)(o.EmptyStateText, { note: n })
                ]
            })
        });
    };
class I extends s.PureComponent {
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            i = { opacity: this.state.opacity },
            s = (function (e) {
                switch (e) {
                    case d.pJs.ADD_FRIEND:
                    case d.pJs.ALL:
                        return h.SECTION_ALL;
                    case d.pJs.ONLINE:
                        return h.SECTION_ONLINE;
                    case d.pJs.PENDING:
                        return h.SECTION_PENDING;
                    case d.pJs.SUGGESTIONS:
                        return h.SECTION_SUGGESTIONS;
                    case d.pJs.BLOCKED:
                        return h.SECTION_BLOCKED;
                    case 'SECTION_NO_RESULTS':
                        return h.SECTION_NO_RESULTS;
                    default:
                        throw Error('FriendsEmptyState: Invalid empty state');
                }
            })(e);
        return e === d.pJs.ADD_FRIEND
            ? (0, a.jsx)(r.Z.div, {
                  className: _.friendsEmpty,
                  style: i,
                  children: (0, a.jsx)(m, { theme: n })
              })
            : (0, a.jsx)(r.Z.div, {
                  className: _.friendsEmpty,
                  style: i,
                  children: (0, a.jsxs)(o.EmptyState, {
                      theme: n,
                      children: [
                          (0, a.jsx)(o.EmptyStateImage, {
                              width: s.width,
                              height: s.height,
                              lightSrc: s.lightSrc,
                              darkSrc: s.darkSrc
                          }),
                          s.renderContent(t)
                      ]
                  })
              });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', { opacity: new r.Z.Value(1) }),
            E(this, 'componentWillEnter', (e) => {
                this.state.opacity.setValue(0),
                    r.Z.timing(this.state.opacity, {
                        toValue: 1,
                        duration: 250
                    }).start(e);
            }),
            E(this, 'componentWillLeave', (e) => {
                r.Z.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 250
                }).start(e);
            });
    }
}
t.Z = l.ZP.connectStores([c.Z], () => ({ theme: c.Z.theme }), { forwardRef: !0 })(I);
