n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250), a = n(470079), l = n(442837), s = n(481060), r = n(433355), o = n(189432), c = n(356778), u = n(776767), d = n(50493), h = n(689938), p = n(332513);
function m(e) {
    let {
            userId: t,
            guildId: n
        } = e, m = (0, l.e7)([r.ZP], () => r.ZP.getGuildSidebarState(n), [n]), {
            messagesCount: _,
            linksCount: f,
            mediaCount: E
        } = (0, c.P2)(t, n), C = new Intl.NumberFormat(h.Z.getLocale()).format(_), g = new Intl.NumberFormat(h.Z.getLocale()).format(f), I = new Intl.NumberFormat(h.Z.getLocale()).format(E), x = a.useCallback(async e => {
            if (null == m)
                return;
            let i = (0, c.Ow)(t, e);
            await (0, o.r)(n, t, m.baseChannelId, {
                modViewPanel: d.k.MESSAGE_HISTORY,
                additionalSearchQuery: i
            });
        }, [
            n,
            m,
            t
        ]);
    return (0, i.jsx)(s.FormItem, {
        title: h.Z.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_MESSAGE_ACTIVITY_TITLE,
        titleClassName: p.infoTitle,
        children: (0, i.jsxs)(u.WM, {
            children: [
                (0, i.jsx)(u._2, {
                    icon: (0, i.jsx)(s.ChatIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.Z.Messages.MESSAGES
                    }),
                    description: _ === c.II ? (0, i.jsx)(s.Spinner, {
                        type: s.SpinnerTypes.SPINNING_CIRCLE,
                        className: p.loadingSpinner
                    }) : (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-normal',
                        children: C
                    }),
                    onNavigate: _ > 0 ? () => x(c.mw.MESSAGES) : void 0
                }),
                (0, i.jsx)(u._2, {
                    icon: (0, i.jsx)(s.LinkIcon, {
                        size: 'custom',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.Z.Messages.QUICKSEARCH_LINKS
                    }),
                    description: f === c.II ? (0, i.jsx)(s.Spinner, {
                        type: s.SpinnerTypes.SPINNING_CIRCLE,
                        className: p.loadingSpinner
                    }) : (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-normal',
                        children: g
                    }),
                    onNavigate: f > 0 ? () => x(c.mw.LINKS) : void 0
                }),
                (0, i.jsx)(u._2, {
                    icon: (0, i.jsx)(s.ImagesIcon, {
                        size: 'custom',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.Z.Messages.QUICKSEARCH_MEDIA
                    }),
                    description: E === c.II ? (0, i.jsx)(s.Spinner, {
                        type: s.SpinnerTypes.SPINNING_CIRCLE,
                        className: p.loadingSpinner
                    }) : (0, i.jsx)(s.Text, {
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
