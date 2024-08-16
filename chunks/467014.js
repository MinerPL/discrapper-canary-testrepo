n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(433355),
    o = n(189432),
    c = n(356778),
    u = n(776767),
    d = n(50493),
    h = n(689938),
    m = n(446926);
function p(e) {
    let { userId: t, guildId: n } = e,
        p = (0, s.e7)([r.ZP], () => r.ZP.getGuildSidebarState(n), [n]),
        { messagesCount: _, linksCount: f, mediaCount: E } = (0, c.P2)(t, n),
        g = new Intl.NumberFormat(h.Z.getLocale()).format(_),
        C = new Intl.NumberFormat(h.Z.getLocale()).format(f),
        I = new Intl.NumberFormat(h.Z.getLocale()).format(E),
        x = a.useCallback(
            async (e) => {
                if (null == p) return;
                let i = (0, c.Ow)(t, e);
                await (0, o.r)(n, t, p.baseChannelId, {
                    modViewPanel: d.k.MESSAGE_HISTORY,
                    additionalSearchQuery: i
                });
            },
            [n, p, t]
        );
    return (0, i.jsx)(l.FormItem, {
        title: h.Z.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_MESSAGE_ACTIVITY_TITLE,
        titleClassName: m.infoTitle,
        children: (0, i.jsxs)(u.WM, {
            children: [
                (0, i.jsx)(u._2, {
                    icon: (0, i.jsx)(l.ChatIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.Z.Messages.MESSAGES
                    }),
                    description:
                        _ === c.II
                            ? (0, i.jsx)(l.Spinner, {
                                  type: l.SpinnerTypes.SPINNING_CIRCLE,
                                  className: m.loadingSpinner
                              })
                            : (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: g
                              }),
                    onNavigate: _ > 0 ? () => x(c.mw.MESSAGES) : void 0
                }),
                (0, i.jsx)(u._2, {
                    icon: (0, i.jsx)(l.LinkIcon, {
                        size: 'custom',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.Z.Messages.QUICKSEARCH_LINKS
                    }),
                    description:
                        f === c.II
                            ? (0, i.jsx)(l.Spinner, {
                                  type: l.SpinnerTypes.SPINNING_CIRCLE,
                                  className: m.loadingSpinner
                              })
                            : (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: C
                              }),
                    onNavigate: f > 0 ? () => x(c.mw.LINKS) : void 0
                }),
                (0, i.jsx)(u._2, {
                    icon: (0, i.jsx)(l.ImagesIcon, {
                        size: 'custom',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.Z.Messages.QUICKSEARCH_MEDIA
                    }),
                    description:
                        E === c.II
                            ? (0, i.jsx)(l.Spinner, {
                                  type: l.SpinnerTypes.SPINNING_CIRCLE,
                                  className: m.loadingSpinner
                              })
                            : (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: I
                              }),
                    onNavigate: E > 0 ? () => x(c.mw.MEDIA) : void 0
                })
            ]
        })
    });
}
