n(47120);
var r = n(735250),
    i = n(470079),
    a = n(481060),
    s = n(367907),
    o = n(434404),
    l = n(138201),
    u = n(430824),
    c = n(981631),
    d = n(689938);
t.Z = (e) => {
    let { guildId: t, reportId: n } = e,
        [_, E] = i.useState(!1),
        f = u.Z.getGuild(t),
        h = null != f;
    i.useEffect(() => {
        E(!h);
    }, [h]);
    let p = i.useCallback(() => {
        E(!0),
            s.ZP.trackWithMetadata(c.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n
            }),
            o.Z.leaveGuild(t);
    }, [t, n]);
    return null == f
        ? null
        : (0, r.jsx)(l.Z, {
              title: d.Z.Messages.IAR_UPSELLS_LEAVE_SERVER_TITLE,
              description: d.Z.Messages.IAR_UPSELLS_LEAVE_SERVER_DESCRIPTION.format({ guildName: null == f ? void 0 : f.name }),
              buttonText: _ ? d.Z.Messages.IAR_UPSELLS_LEFT_SERVER_BUTTON : d.Z.Messages.IAR_UPSELLS_LEAVE_SERVER_BUTTON,
              buttonDisabled: _,
              buttonColor: a.Button.Colors.RED,
              onButtonPress: () => {
                  (0, a.openModal)((e) =>
                      (0, r.jsx)(a.ConfirmModal, {
                          header: d.Z.Messages.LEAVE_SERVER_TITLE.format({ name: f.name }),
                          confirmText: d.Z.Messages.LEAVE_SERVER,
                          cancelText: d.Z.Messages.CANCEL,
                          onConfirm: p,
                          ...e,
                          children: (0, r.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              children: d.Z.Messages.LEAVE_SERVER_BODY.format({ name: f.name })
                          })
                      })
                  );
              }
          });
};
