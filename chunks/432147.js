n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(481060),
    o = n(239091),
    c = n(901461),
    u = n(592125),
    d = n(709054),
    _ = n(723774),
    E = n(144140),
    I = n(91159),
    m = n(576799),
    T = n(488131),
    h = n(981631),
    N = n(689938),
    f = n(384880);
function C(e) {
    let { message: t, compact: n } = e,
        a = (0, r.e7)([u.Z], () => u.Z.getChannel(d.default.castMessageIdAsChannelId(t.id)));
    return null == a
        ? null
        : (0, i.jsx)(p, {
              channel: a,
              compact: n,
              isSystemMessage: (0, c.Z)(t)
          });
}
function p(e) {
    let { channel: t, compact: a, isSystemMessage: c } = e,
        u = (0, r.e7)([E.Z], () => E.Z.getCount(t.id)),
        d = (function (e) {
            var t;
            let n = (0, r.e7)([E.Z], () => E.Z.getMostRecentMessage(e.id)),
                a = (0, r.e7)([E.Z], () => E.Z.getCount(e.id)),
                s = (0, I.Ok)(e);
            return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived)
                ? N.Z.Messages.NO_RECENT_THREAD_MESSAGES
                : null == a || 0 === a
                  ? N.Z.Messages.NO_THREAD_MESSAGES
                  : null == n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('span', { children: N.Z.Messages.NO_RECENT_THREAD_MESSAGES }),
                              (0, i.jsx)('span', {
                                  className: f.timestamp,
                                  children: (0, I.Ye)(s)
                              })
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(m.Z, {
                                  message: n,
                                  channel: e
                              }),
                              (0, i.jsx)('span', {
                                  className: f.timestamp,
                                  children: (0, I.Ye)(s)
                              })
                          ]
                      });
        })(t),
        C = null != u && u > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: s()(f.spine, {
                    [f.cozy]: !a,
                    [f.systemMessageSpine]: c
                })
            }),
            (0, i.jsx)(l.Clickable, {
                onClick: function (e) {
                    e.stopPropagation(), (0, T.ok)(t, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        i = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.which === h.yXg.SPACE || e.which === h.yXg.ENTER) && (e.preventDefault(), (n || i) && (0, T.ok)(t, i));
                },
                onContextMenu: function (e) {
                    (0, o.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('39285'), n.e('48800'), n.e('4985')]).then(n.bind(n, 422200));
                        return (n) =>
                            (0, i.jsx)(e, {
                                channel: t,
                                ...n
                            });
                    });
                },
                'aria-roledescription': N.Z.Messages.THREAD_MESSAGE_ROLE_DESCRIPTION,
                className: s()(f.container, { [f.systemMessageContainer]: c }),
                children: (0, i.jsxs)(l.BlockInteractions, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: f.topLine,
                            children: [
                                (0, i.jsx)(l.HiddenVisually, { children: N.Z.Messages.THREAD }),
                                (0, i.jsx)('span', {
                                    className: f.name,
                                    children: t.name
                                }),
                                (0, i.jsx)('span', {
                                    className: f.cta,
                                    'aria-hidden': !C,
                                    children: (0, _.WE)(u, t.id)
                                })
                            ]
                        }),
                        (0, i.jsx)('span', {
                            'aria-hidden': !0,
                            className: s()(f.bottomLine),
                            children: d
                        })
                    ]
                })
            })
        ]
    });
}
