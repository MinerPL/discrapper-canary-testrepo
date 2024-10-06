n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(481060),
    c = n(239091),
    d = n(751688),
    _ = n(51144),
    E = n(711258);
function f(e) {
    let { users: t, maxUsers: a, guildId: o, channelId: f, className: h, avatarClassName: p, onClick: I, onFocus: m, size: T = u.AvatarSizes.SIZE_24, overflowCountVariant: S = 'text-xs/medium', overflowCountColor: g = 'interactive-normal', hideOverflowCount: A = !1, disableUsernameTooltip: N = !1, disableUserPopout: O = !1, onUserPopoutClosed: R } = e,
        [v, C] = i.useState(!1);
    function L() {
        return (0, r.jsx)(u.Dialog, {
            className: E.popoutWrapper,
            children: (0, r.jsx)(u.Scroller, {
                className: E.scroller,
                children: t.map((e) =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            user: e,
                            guildId: o,
                            channelId: f,
                            nick: _.ZP.getName(e),
                            disablePopout: 'function' == typeof O ? O(e.id) : O,
                            ignoreModalClicks: !0,
                            onPopoutClose: () => {
                                C(!1), null == R || R();
                            },
                            onContextMenu: (t) =>
                                (0, c.jW)(
                                    t,
                                    async () => {
                                        let { default: t } = await Promise.all([n.e('79695'), n.e('69220'), n.e('50261')]).then(n.bind(n, 881351));
                                        return (n) =>
                                            (0, r.jsx)(t, {
                                                ...n,
                                                user: e,
                                                guildId: o,
                                                channelId: f
                                            });
                                    },
                                    { onClose: () => C(!1) }
                                )
                        },
                        e.id
                    )
                )
            })
        });
    }
    return t.length <= 0
        ? null
        : (0, r.jsx)('div', {
              className: s()(h, E.avatars),
              children: (function () {
                  let e = l()(t)
                          .take(a)
                          .map((e) => {
                              let t = _.ZP.getName(e);
                              return N
                                  ? (0, r.jsx)(
                                        'div',
                                        {
                                            className: s()(E.avatar, p),
                                            children: (0, r.jsx)(u.Avatar, {
                                                src: e.getAvatarURL(o, 24),
                                                'aria-label': t,
                                                size: T
                                            })
                                        },
                                        e.id
                                    )
                                  : (0, r.jsx)(
                                        u.TooltipContainer,
                                        {
                                            text: t,
                                            className: s()(E.avatar, p),
                                            children: (0, r.jsx)(u.Avatar, {
                                                src: e.getAvatarURL(o, 24),
                                                'aria-label': t,
                                                size: T
                                            })
                                        },
                                        e.id
                                    );
                          })
                          .value(),
                      n = t.length - a;
                  return (
                      n > 0 &&
                          !A &&
                          (e[e.length - 1] = (0, r.jsx)(
                              u.Popout,
                              {
                                  renderPopout: L,
                                  shouldShow: v,
                                  position: 'bottom',
                                  onRequestClose: () => C(!1),
                                  children: () =>
                                      (0, r.jsx)(u.Button, {
                                          className: s()(E.avatar, E.overflow),
                                          onFocus: m,
                                          onClick: (e) => {
                                              null == I || I(e), C(!0);
                                          },
                                          look: u.Button.Looks.BLANK,
                                          size: u.Button.Sizes.NONE,
                                          children: (0, r.jsxs)(u.Text, {
                                              variant: S,
                                              color: g,
                                              children: ['+', n + 1]
                                          })
                                      })
                              },
                              'overflow'
                          )),
                      e
                  );
              })()
          });
}
