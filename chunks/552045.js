var s = n(735250);
n(470079);
var a = n(481060),
    r = n(785681),
    i = n(841409),
    l = n(880257),
    o = n(631885),
    c = n(568671),
    d = n(292352),
    _ = n(689938),
    u = n(31778),
    E = n(633488),
    T = n(361848);
let I = () => {
    let e = (0, o.mq)(d.ne.ACTIVE),
        t = (0, l.Z)(),
        { handleTabChange: n } = (0, i.Z)();
    return (0, o.VM)() || (t && e.length > 0)
        ? null
        : (0, s.jsx)('div', {
              className: u.button,
              children: t
                  ? (0, s.jsx)(a.Button, {
                        fullWidth: !1,
                        size: a.ButtonSizes.LARGE,
                        onClick: () => n(d.dG.REQUESTS),
                        children: _.Z.Messages.GET_STARTED
                    })
                  : (0, s.jsx)(c.Z, {})
          });
};
t.Z = () => {
    let e = (0, l.Z)(),
        t = (0, r.o)(_.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_TEEN, _.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_PARENT),
        n = (0, r.o)(_.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_TEEN.format({ articleLink: 'https://support.discord.com/hc/articles/14155060633623' }), _.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_PARENT.format({ articleLink: 'https://support.discord.com/hc/articles/14155043715735' }));
    return (0, s.jsxs)('div', {
        className: u.container,
        children: [
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsx)('div', {
                        children: (0, s.jsxs)('div', {
                            className: u.headerText,
                            children: [
                                (0, s.jsx)(a.Heading, {
                                    variant: 'heading-xl/medium',
                                    children: (0, s.jsx)(a.HeadingLevel, { children: t })
                                }),
                                (0, s.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: n
                                })
                            ]
                        })
                    }),
                    (0, s.jsx)(I, {})
                ]
            }),
            (0, s.jsx)('div', {
                className: u.headerImage,
                children: (0, s.jsx)('img', {
                    src: e ? E : T,
                    alt: _.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
                })
            })
        ]
    });
};
