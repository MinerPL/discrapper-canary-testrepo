t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(47120),
    t(653041);
var i = t(735250),
    a = t(470079),
    l = t(442837),
    o = t(749280),
    c = t(481060),
    d = t(166459),
    r = t(911969),
    u = t(476326),
    s = t(827498),
    m = t(555573),
    E = t(213459),
    _ = t(998698),
    p = t(895924),
    M = t(581364),
    C = t(667204),
    g = t(873387),
    A = t(809090),
    f = t(147391),
    I = t(583027),
    v = t(978983),
    h = t(592125),
    N = t(703558),
    S = t(430824),
    P = t(626135),
    R = t(585483),
    T = t(619895),
    O = t(844439),
    b = t(981631),
    U = t(689938),
    Z = t(973335);
function x(e) {
    let { toggleShowMenu: n, showMenu: t, className: d, channelId: r, imageUrl: u, mimeType: s } = e,
        m = (0, l.e7)([h.Z], () => h.Z.getChannel(r)),
        { Component: E, events: _, play: p } = (0, o.w)(),
        [M, C] = a.useState(!1);
    return null == m
        ? null
        : (!M && p(),
          (0, i.jsx)(c.Popout, {
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(y, {
                      onClose: n,
                      channel: m,
                      imageUrl: u,
                      mimeType: s
                  });
              },
              position: 'right',
              align: 'top',
              animation: c.Popout.Animation.NONE,
              onRequestClose: n,
              shouldShow: t,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(c.Tooltip, {
                      text: U.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                      children: (e) =>
                          (0, i.jsx)(c.Clickable, {
                              ...e,
                              className: d,
                              focusProps: { offset: 2 },
                              onClick: n,
                              onMouseEnter: () => {
                                  C(!0), _.onMouseEnter();
                              },
                              onMouseLeave: _.onMouseLeave,
                              'aria-label': U.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                              children: (0, i.jsx)(E, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor'
                              })
                          })
                  });
              }
          }));
}
function y(e) {
    let { onSelect: n, onClose: t, channel: o, imageUrl: h, mimeType: x } = e,
        y = (0, l.e7)([S.Z], () => S.Z.getGuild(o.guild_id)),
        { fetchState: w, imageRecCommandContexts: D } = (0, T.hR)({ channelId: o.id }),
        j = w === O.M.FETCHING,
        L = (0, g.g)(o),
        G = (0, E.PL)(!0, !0),
        F = (0, E.LD)(o.guild_id, !0);
    a.useEffect(() => {
        (w === O.M.ERROR || (w === O.M.FETCHED && 0 === D.length)) && t();
    }, [w, D.length, t]),
        a.useEffect(() => {
            var e, n;
            if (j || 0 === D.length) return;
            let t = [];
            D.forEach((e) => {
                t.push(Number(e.command.id)), null != e.overrideSendCommand && t.push(Number(e.overrideSendCommand.id));
            }),
                P.default.track(b.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == o ? void 0 : o.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : '',
                    application_ids: [...D.map((e) => Number(e.command.applicationId))],
                    command_ids: t
                });
        }, [D, o, j]);
    let H = a.useCallback(
            async (e) => {
                let n = await fetch(h),
                    t = await n.arrayBuffer(),
                    i = x.join('/'),
                    a = new File([t], 'image'.concat((0, T.Qm)({ contentType: i })), { type: i });
                d.Z.setFile({
                    channelId: o.id,
                    id: e,
                    file: {
                        id: e,
                        file: a,
                        platform: u.ow.WEB
                    },
                    draftType: N.d.SlashCommand
                });
            },
            [h, o.id, x]
        ),
        k = a.useCallback(
            async (e, n, t, i) => {
                var a, l;
                if (!L) return;
                let c = e.applicationId,
                    d = (null === (a = G.result) || void 0 === a ? void 0 : a.sections[c]) != null,
                    u = (null === (l = F.result) || void 0 === l ? void 0 : l.sections[c]) != null;
                await H(i),
                    null != _.Z.getActiveCommand(o.id) &&
                        m.Po({
                            channelId: o.id,
                            command: null,
                            section: null
                        }),
                    d || u || E.ZP.queryInstallOnDemandApp(e.applicationId, o.id),
                    m.Po({
                        channelId: o.id,
                        command: e,
                        section: n,
                        location: t,
                        source: s._b.TEXT,
                        initialValues: {
                            [i]: {
                                type: r.jw.ATTACHMENT,
                                name: i,
                                value: 'image'
                            }
                        },
                        commandOrigin: t === p.Vh.IMAGE_RECS_SUBMENU ? p.bB.IMAGE_RECS_SUBMENU : p.bB.IMAGE_RECS_MENU
                    }),
                    (0, I.Mo)({
                        command: e,
                        location: t,
                        sectionName: n.name
                    }),
                    R.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: o.id });
            },
            [o.id, H, L, G, F]
        ),
        B = a.useCallback(
            async (e, n, t) => {
                var i, a;
                let l = e.applicationId,
                    c = (null === (i = G.result) || void 0 === i ? void 0 : i.sections[l]) != null,
                    d = (null === (a = F.result) || void 0 === a ? void 0 : a.sections[l]) != null;
                c || d || E.ZP.queryInstallOnDemandApp(e.applicationId, o.id);
                let r = await (0, f.L)({
                    applicationId: l,
                    userIndexState: G,
                    guildIndexState: F,
                    location: n,
                    source: s._b.TEXT
                });
                (0, M.qJ)({
                    command: e,
                    location: n,
                    source: s._b.TEXT
                }),
                    r &&
                        (await H(t),
                        await (0, C.Z)({
                            command: { ...e },
                            optionValues: {
                                [t]: [
                                    {
                                        text: 'image',
                                        type: 'text'
                                    }
                                ]
                            },
                            context: {
                                channel: o,
                                guild: y
                            },
                            commandOrigin: n === p.Vh.IMAGE_RECS_SUBMENU ? p.bB.IMAGE_RECS_SUBMENU : p.bB.IMAGE_RECS_MENU
                        }));
            },
            [o, y, G, F, H]
        );
    return (0, i.jsxs)(c.Menu, {
        onSelect: n,
        navId: 'image-context-commands-popout',
        onClose: t,
        'aria-label': U.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
        children: [
            (0, i.jsx)(
                c.MenuItem,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, i.jsx)(c.Text, {
                            className: Z.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: U.Z.Messages.APP_IMAGE_REC_MENU_HEADER
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, i.jsx)(c.MenuSeparator, {}),
            j
                ? (0, i.jsx)(
                      c.MenuItem,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, i.jsx)(v.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, i.jsx)(i.Fragment, {
                      children: D.map((e) => {
                          let n = T.yJ[e.command.id],
                              t = e.overrideSendCommand,
                              a = n.overrideSendCommandInfo,
                              l = null != t && null != a,
                              d = n.onlyAllowEdit || (null != a && null == t);
                          return (0, i.jsx)(
                              c.MenuItem,
                              {
                                  id: e.command.id,
                                  action: () => {
                                      d ? k(e.command, e.section, p.Vh.IMAGE_RECS_MENU, n.imageOption) : B(l ? t : e.command, p.Vh.IMAGE_RECS_MENU, l ? a.imageOption : n.imageOption);
                                  },
                                  label: e.command.displayName,
                                  subtext: e.command.displayDescription,
                                  subtextLineClamp: 1,
                                  icon: d ? c.PencilIcon : l ? void 0 : c.SendMessageIcon,
                                  iconLeft: () =>
                                      (0, i.jsx)(A.Z, {
                                          channel: o,
                                          section: e.section,
                                          width: 32,
                                          height: 32,
                                          isSquircle: !0,
                                          selectable: !1
                                      }),
                                  iconLeftSize: 'lg',
                                  showImageFirst: !0,
                                  disabled: !L && d,
                                  children: l
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(
                                                    c.MenuItem,
                                                    {
                                                        id: ''.concat(e.command.id, '-send'),
                                                        label: U.Z.Messages.APP_IMAGE_REC_MENU_SEND_LABEL,
                                                        subtext: U.Z.Messages.APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                                        action: () => B(t, p.Vh.IMAGE_RECS_SUBMENU, a.imageOption),
                                                        icon: c.SendMessageIcon
                                                    },
                                                    ''.concat(e.command.id, '-send')
                                                ),
                                                (0, i.jsx)(
                                                    c.MenuItem,
                                                    {
                                                        id: ''.concat(e.command.id, '-edit'),
                                                        label: U.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                                        subtext: U.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                                        action: () => k(e.command, e.section, p.Vh.IMAGE_RECS_SUBMENU, n.imageOption),
                                                        icon: c.PencilIcon,
                                                        disabled: !L
                                                    },
                                                    ''.concat(e.command.id, '-edit')
                                                )
                                            ]
                                        })
                                      : null
                              },
                              e.command.id
                          );
                      })
                  })
        ]
    });
}
