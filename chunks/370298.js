n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(735250),
    o = n(470079),
    a = n(442837),
    l = n(481060),
    r = n(166459),
    d = n(911969),
    c = n(476326),
    m = n(827498),
    u = n(555573),
    s = n(213459),
    p = n(998698),
    _ = n(895924),
    E = n(581364),
    g = n(667204),
    x = n(873387),
    M = n(147391),
    A = n(978983),
    I = n(592125),
    C = n(703558),
    h = n(430824),
    f = n(626135),
    N = n(585483),
    P = n(619895),
    y = n(844439),
    b = n(981631),
    v = n(689938),
    T = n(834033);
function O(e) {
    let { toggleShowMenu: t, showMenu: n, className: o, channelId: r, imageUrl: d, mimeType: c } = e,
        m = (0, a.e7)([I.Z], () => I.Z.getChannel(r));
    return null == m
        ? null
        : (0, i.jsx)(l.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(R, {
                      onClose: t,
                      channel: m,
                      imageUrl: d,
                      mimeType: c
                  });
              },
              position: 'right',
              align: 'top',
              animation: l.Popout.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, i.jsx)(l.Tooltip, {
                      text: v.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                      children: (e) =>
                          (0, i.jsx)(l.Clickable, {
                              ...e,
                              className: o,
                              focusProps: { offset: 2 },
                              onClick: t,
                              'aria-label': v.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                              children: (0, i.jsx)(l.AppsIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              })
                          })
                  });
              }
          });
}
function R(e) {
    let { onSelect: t, onClose: n, channel: I, imageUrl: O, mimeType: R } = e,
        S = (0, a.e7)([h.Z], () => h.Z.getGuild(I.guild_id)),
        { fetchState: U, imageRecCommandContexts: Z } = (0, P.hR)({ channelId: I.id }),
        F = U === y.M.FETCHING,
        w = (0, x.g)(I),
        D = (0, s.PL)(!0, !0),
        j = (0, s.LD)(I.guild_id, !0);
    o.useEffect(() => {
        (U === y.M.ERROR || (U === y.M.FETCHED && 0 === Z.length)) && n();
    }, [U, Z.length, n]),
        o.useEffect(() => {
            var e, t;
            if (!F && 0 !== Z.length)
                f.default.track(b.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == I ? void 0 : I.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : '',
                    application_ids: [...Z.map((e) => Number(e.application.id))],
                    command_ids: [...Z.map((e) => Number(e.command.id))]
                });
        }, [Z, I, F]);
    let k = o.useCallback(
            async (e) => {
                let t = await fetch(O),
                    n = await t.arrayBuffer(),
                    i = R.join('/'),
                    o = new File([n], 'image'.concat((0, P.Qm)({ contentType: i })), { type: i });
                r.Z.setFile({
                    channelId: I.id,
                    id: e,
                    file: {
                        id: e,
                        file: o,
                        platform: c.ow.WEB
                    },
                    draftType: C.d.SlashCommand
                });
            },
            [O, I.id, R]
        ),
        L = o.useCallback(
            async (e, t, n) => {
                var i, o, a, l;
                if (!w) return;
                let r = P.Id[e.id],
                    c = e.applicationId,
                    E = (null === (i = D.result) || void 0 === i ? void 0 : i.sections[c]) != null,
                    g = (null === (o = j.result) || void 0 === o ? void 0 : o.sections[c]) != null;
                await k(r.imageOption),
                    null != p.Z.getActiveCommand(I.id) &&
                        u.Po({
                            channelId: I.id,
                            command: null,
                            section: null
                        });
                let x = {
                    type: _.Qi.APPLICATION,
                    id: t.id,
                    icon: t.icon,
                    name: null !== (l = null == t ? void 0 : null === (a = t.bot) || void 0 === a ? void 0 : a.username) && void 0 !== l ? l : t.name,
                    application: t
                };
                E || g || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id),
                    u.Po({
                        channelId: I.id,
                        command: e,
                        section: x,
                        location: n,
                        source: m._b.TEXT,
                        initialValues: {
                            [r.imageOption]: {
                                type: d.jw.ATTACHMENT,
                                name: r.imageOption,
                                value: 'image'
                            }
                        },
                        commandOrigin: _.bB.APPLICATION_LAUNCHER
                    }),
                    N.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: I.id });
            },
            [I.id, k, w, D, j]
        ),
        H = o.useCallback(
            async (e, t) => {
                var n, i;
                let o = e.applicationId,
                    a = (null === (n = D.result) || void 0 === n ? void 0 : n.sections[o]) != null,
                    l = (null === (i = j.result) || void 0 === i ? void 0 : i.sections[o]) != null;
                a || l || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id);
                let r = await (0, M.L)({
                    applicationId: o,
                    userIndexState: D,
                    guildIndexState: j,
                    location: t,
                    source: m._b.TEXT
                });
                if (
                    ((0, E.qJ)({
                        command: e,
                        location: t,
                        source: m._b.TEXT
                    }),
                    r)
                ) {
                    let t = P.Id[e.id],
                        n = t.additionalOptions;
                    await k(t.imageOption),
                        await (0, g.Z)({
                            command: { ...e },
                            optionValues: {
                                [t.imageOption]: [
                                    {
                                        text: 'image',
                                        type: 'text'
                                    }
                                ],
                                ...(null == n ? {} : n[Math.floor(Math.random() * n.length)])
                            },
                            context: {
                                channel: I,
                                guild: S
                            },
                            commandOrigin: _.bB.IMAGE_RECS_MENU
                        });
                }
            },
            [I, S, D, j, k]
        );
    return (0, i.jsxs)(l.Menu, {
        onSelect: t,
        navId: 'image-context-commands-popout',
        onClose: n,
        'aria-label': v.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
        children: [
            (0, i.jsx)(
                l.MenuItem,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, i.jsx)(l.Text, {
                            className: T.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: v.Z.Messages.APP_IMAGE_REC_MENU_HEADER
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, i.jsx)(l.MenuSeparator, {}),
            F
                ? (0, i.jsx)(
                      l.MenuItem,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, i.jsx)(A.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, i.jsx)(i.Fragment, {
                      children: Z.map((e) => {
                          var t;
                          let n = null != P.Id[e.command.id].additionalOptions,
                              o = P.Id[e.command.id].onlyAllowEdit;
                          return (0, i.jsx)(
                              l.MenuItem,
                              {
                                  id: e.command.id,
                                  action: () => {
                                      o ? L(e.command, e.application, _.Vh.IMAGE_RECS_MENU) : H(e.command, _.Vh.IMAGE_RECS_MENU);
                                  },
                                  label: null !== (t = P.Id[e.command.id].overrideCommandName) && void 0 !== t ? t : e.command.name,
                                  subtext: e.command.description,
                                  subtextLineClamp: 1,
                                  icon: o ? l.PencilIcon : n ? void 0 : l.SendMessageIcon,
                                  imageUrl: e.applicationImageURL,
                                  imageClassName: T.appIcon,
                                  showImageFirst: !0,
                                  disabled: !w && o,
                                  children:
                                      n && !o
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(
                                                        l.MenuItem,
                                                        {
                                                            id: ''.concat(e.command.id, '-send'),
                                                            label: v.Z.Messages.APP_IMAGE_REC_MENU_SEND_LABEL,
                                                            subtext: v.Z.Messages.APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                                            action: () => H(e.command, _.Vh.IMAGE_RECS_SUBMENU),
                                                            icon: l.SendMessageIcon
                                                        },
                                                        ''.concat(e.command.id, '-send')
                                                    ),
                                                    (0, i.jsx)(
                                                        l.MenuItem,
                                                        {
                                                            id: ''.concat(e.command.id, '-edit'),
                                                            label: v.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                                            subtext: v.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                                            action: () => L(e.command, e.application, _.Vh.IMAGE_RECS_SUBMENU),
                                                            icon: l.PencilIcon,
                                                            disabled: !w
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
