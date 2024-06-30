n.d(s, {
    Z: function () {
        return C;
    }
});
var a = n(735250), E = n(470079), t = n(120356), _ = n.n(t), l = n(481060), i = n(285952), d = n(539379), T = n(109983), M = n(834891), L = n(689938), r = n(318597);
function o(e) {
    let {
            guildTemplate: s,
            onClick: n,
            autoFocus: t
        } = e, _ = E.useCallback(() => {
            n(s);
        }, [
            s,
            n
        ]);
    return (0, a.jsx)(T.Z, {
        icon: d.M[s.id],
        message: s.label,
        onClick: _,
        autoFocus: t
    });
}
function C(e) {
    let {
            className: s,
            isNewUser: n,
            onClose: E,
            onChooseTemplate: t,
            onJoin: d
        } = e, T = (0, M.E)();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                direction: i.Z.Direction.VERTICAL,
                className: r.header,
                separator: !1,
                children: [
                    (0, a.jsx)(l.Heading, {
                        className: r.title,
                        variant: 'heading-xl/semibold',
                        children: n ? L.Z.Messages.NUF_DESKTOP_TEMPLATES_TITLE : L.Z.Messages.GUILD_CREATE_TITLE
                    }),
                    (0, a.jsx)(l.Text, {
                        className: r.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: L.Z.Messages.NUF_DESKTOP_TEMPLATES_SUBTITLE
                    }),
                    null != E && (0, a.jsx)(l.ModalCloseButton, {
                        className: r.closeButton,
                        onClick: E
                    })
                ]
            }),
            (0, a.jsxs)(l.ModalContent, {
                className: _()(r.templatesList, s),
                paddingFix: !1,
                children: [
                    (0, a.jsx)(o, {
                        guildTemplate: T[M.l.CREATE],
                        onClick: t,
                        autoFocus: !0
                    }),
                    (0, a.jsx)(l.Text, {
                        className: r.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: L.Z.Messages.GUILD_TEMPLATE_SELECTOR_OPTION_HEADER
                    }),
                    (0, a.jsx)(o, {
                        guildTemplate: T[M.l.GAMING],
                        onClick: t
                    }),
                    (0, a.jsx)(o, {
                        guildTemplate: T[M.l.SCHOOL_CLUB],
                        onClick: t
                    }),
                    (0, a.jsx)(o, {
                        guildTemplate: T[M.l.STUDY],
                        onClick: t
                    }),
                    (0, a.jsx)(o, {
                        guildTemplate: T[M.l.FRIENDS],
                        onClick: t
                    }),
                    (0, a.jsx)(o, {
                        guildTemplate: T[M.l.CREATORS],
                        onClick: t
                    }),
                    (0, a.jsx)(o, {
                        guildTemplate: T[M.l.LOCAL_COMMUNITY],
                        onClick: t
                    })
                ]
            }),
            null != d && (0, a.jsxs)(l.ModalFooter, {
                className: r.footer,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: 'heading-lg/semibold',
                        className: r.footerTitle,
                        children: L.Z.Messages.NUF_HAVE_AN_INVITE_ALREADY
                    }),
                    (0, a.jsx)(l.Button, {
                        className: r.footerButton,
                        color: l.Button.Colors.PRIMARY,
                        onClick: d,
                        children: L.Z.Messages.JOIN_SERVER_TITLE
                    })
                ]
            })
        ]
    });
}
