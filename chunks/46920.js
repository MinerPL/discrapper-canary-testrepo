e.d(t, {
    Xd: function () {
        return f;
    },
    mv: function () {
        return g;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    c = e(692547),
    l = e(481060),
    s = e(239091),
    o = e(584511),
    a = e(118012),
    d = e(51144),
    u = e(88751),
    _ = e(930180),
    h = e(388032),
    m = e(578814);
let g = (n) => {
        let { channelId: t } = n,
            e = (0, _._d)(t);
        return 0 === e
            ? null
            : (0, i.jsxs)('div', {
                  className: m.blockedNotice,
                  children: [
                      (0, i.jsx)(l.DenyIcon, {
                          size: 'lg',
                          className: m.__invalid_blockedIcon,
                          color: c.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, i.jsx)(l.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: h.intl.format(h.t['6Tcdt7'], { number: e })
                      }),
                      (0, i.jsx)(l.Clickable, {
                          className: m.blockedButton,
                          onClick: (n) => {
                              (0, s.vq)(
                                  n,
                                  (n) =>
                                      (0, i.jsx)(p, {
                                          ...n,
                                          channelId: t
                                      }),
                                  {
                                      position: 'left',
                                      align: 'bottom'
                                  }
                              );
                          },
                          children: h.intl.string(h.t.rUEjBQ)
                      })
                  ]
              });
    },
    f = (n) => {
        let { user: t, showStatus: e, speaker: c, channelId: s } = n,
            _ = (0, r.e7)([u.ZP], () => u.ZP.isModerator(t.id, s)),
            g = null;
        return (
            e && (g = c ? h.intl.string(h.t.LqMmGx) : _ ? h.intl.string(h.t.GMZqSk) : h.intl.string(h.t.suRAp6)),
            (0, i.jsxs)('div', {
                className: m.user,
                children: [
                    (0, i.jsx)(
                        o.Z,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: l.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: c
                                ? () =>
                                      (0, i.jsx)(l.MicrophoneIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: m.icon
                                      })
                                : null
                        },
                        t.id
                    ),
                    (0, i.jsxs)('div', {
                        className: m.userInfo,
                        children: [
                            (0, i.jsxs)('div', {
                                className: m.username,
                                children: [
                                    (0, i.jsx)(a.Z, {
                                        size: e ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                        children: d.ZP.getName(t)
                                    }),
                                    (0, i.jsx)(a.Z, {
                                        size: e ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                        color: a.Z.Colors.HEADER_SECONDARY,
                                        children: '#'.concat(t.discriminator)
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: m.username,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-danger',
                                        children: h.intl.string(h.t['4bDptL'])
                                    }),
                                    (0, i.jsxs)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: [' ', '| ', g]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    p = (n) => {
        let { channelId: t } = n,
            e = (0, _.z)(t);
        return (0, i.jsx)(l.Scroller, {
            className: m.container,
            children: e.map((n) => {
                let { user: e } = n;
                return (0, i.jsx)(
                    f,
                    {
                        user: e,
                        channelId: t
                    },
                    e.id
                );
            })
        });
    };
