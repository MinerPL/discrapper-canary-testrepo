var r = n(735250);
n(470079);
var i = n(481060),
    a = n(565138),
    s = n(592125),
    o = n(430824),
    l = n(689938),
    u = n(267434);
t.Z = (e) => {
    let { entry: t } = e,
        n = s.Z.getChannel(t.channelId);
    if (null == n) return null;
    let c = o.Z.getGuild(n.guild_id);
    return null == c
        ? null
        : (0, r.jsxs)('div', {
              className: u.container,
              children: [
                  (0, r.jsx)(i.Heading, {
                      className: u.header,
                      variant: 'heading-sm/semibold',
                      children: l.Z.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
                  }),
                  (0, r.jsxs)('div', {
                      className: u.guildContainer,
                      children: [
                          (0, r.jsxs)('div', {
                              className: u.hubInfo,
                              children: [
                                  (0, r.jsx)(a.Z, {
                                      guild: c,
                                      size: a.Z.Sizes.MINI,
                                      className: u.hubIcon
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: c.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.name
                          })
                      ]
                  })
              ]
          });
};
