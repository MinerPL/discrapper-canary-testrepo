n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var o = n(735250),
    i = n(470079),
    a = n(442837),
    l = n(749280),
    r = n(481060),
    c = n(166459),
    d = n(911969),
    u = n(476326),
    m = n(827498),
    s = n(555573),
    p = n(213459),
    _ = n(998698),
    E = n(895924),
    g = n(581364),
    M = n(667204),
    x = n(873387),
    C = n(809090),
    A = n(147391),
    I = n(978983),
    h = n(592125),
    f = n(703558),
    N = n(430824),
    v = n(626135),
    y = n(585483),
    b = n(619895),
    P = n(844439),
    S = n(981631),
    T = n(689938),
    O = n(834033);
function R(e) {
    let { toggleShowMenu: t, showMenu: n, className: c, channelId: d, imageUrl: u, mimeType: m } = e,
        s = (0, a.e7)([h.Z], () => h.Z.getChannel(d)),
        { Component: p, events: _, play: E } = (0, l.w)(),
        [g, M] = i.useState(!1);
    return null == s
        ? null
        : (!g && E(),
          (0, o.jsx)(r.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, o.jsx)(U, {
                      onClose: t,
                      channel: s,
                      imageUrl: u,
                      mimeType: m
                  });
              },
              position: 'right',
              align: 'top',
              animation: r.Popout.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, o.jsx)(r.Tooltip, {
                      text: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                      children: (e) =>
                          (0, o.jsx)(r.Clickable, {
                              ...e,
                              className: c,
                              focusProps: { offset: 2 },
                              onClick: t,
                              onMouseEnter: () => {
                                  M(!0), _.onMouseEnter();
                              },
                              onMouseLeave: _.onMouseLeave,
                              'aria-label': T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                              children: (0, o.jsx)(p, {
                                  size: 'sm',
                                  color: 'currentColor',
                                  className: O.buttonIcon
                              })
                          })
                  });
              }
          }));
}
function U(e) {
    let { onSelect: t, onClose: n, channel: l, imageUrl: h, mimeType: R } = e,
        U = (0, a.e7)([N.Z], () => N.Z.getGuild(l.guild_id)),
        { fetchState: Z, imageRecCommandContexts: F } = (0, b.hR)({ channelId: l.id }),
        k = Z === P.M.FETCHING,
        w = (0, x.g)(l),
        j = (0, p.PL)(!0, !0),
        D = (0, p.LD)(l.guild_id, !0);
    i.useEffect(() => {
        (Z === P.M.ERROR || (Z === P.M.FETCHED && 0 === F.length)) && n();
    }, [Z, F.length, n]),
        i.useEffect(() => {
            var e, t;
            if (!k && 0 !== F.length)
                v.default.track(S.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == l ? void 0 : l.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : '',
                    application_ids: [...F.map((e) => Number(e.command.applicationId))],
                    command_ids: [...F.map((e) => Number(e.command.id))]
                });
        }, [F, l, k]);
    let L = i.useCallback(
            async (e) => {
                let t = await fetch(h),
                    n = await t.arrayBuffer(),
                    o = R.join('/'),
                    i = new File([n], 'image'.concat((0, b.Qm)({ contentType: o })), { type: o });
                c.Z.setFile({
                    channelId: l.id,
                    id: e,
                    file: {
                        id: e,
                        file: i,
                        platform: u.ow.WEB
                    },
                    draftType: f.d.SlashCommand
                });
            },
            [h, l.id, R]
        ),
        G = i.useCallback(
            async (e, t, n) => {
                var o, i;
                if (!w) return;
                let a = b.Id[e.id],
                    r = e.applicationId,
                    c = (null === (o = j.result) || void 0 === o ? void 0 : o.sections[r]) != null,
                    u = (null === (i = D.result) || void 0 === i ? void 0 : i.sections[r]) != null;
                await L(a.imageOption),
                    null != _.Z.getActiveCommand(l.id) &&
                        s.Po({
                            channelId: l.id,
                            command: null,
                            section: null
                        }),
                    c || u || p.ZP.queryInstallOnDemandApp(e.applicationId, l.id),
                    s.Po({
                        channelId: l.id,
                        command: e,
                        section: t,
                        location: n,
                        source: m._b.TEXT,
                        initialValues: {
                            [a.imageOption]: {
                                type: d.jw.ATTACHMENT,
                                name: a.imageOption,
                                value: 'image'
                            }
                        },
                        commandOrigin: n === E.Vh.IMAGE_RECS_SUBMENU ? E.bB.IMAGE_RECS_SUBMENU : E.bB.IMAGE_RECS_MENU
                    }),
                    y.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
            },
            [l.id, L, w, j, D]
        ),
        H = i.useCallback(
            async (e, t) => {
                var n, o;
                let i = e.applicationId,
                    a = (null === (n = j.result) || void 0 === n ? void 0 : n.sections[i]) != null,
                    r = (null === (o = D.result) || void 0 === o ? void 0 : o.sections[i]) != null;
                a || r || p.ZP.queryInstallOnDemandApp(e.applicationId, l.id);
                let c = await (0, A.L)({
                    applicationId: i,
                    userIndexState: j,
                    guildIndexState: D,
                    location: t,
                    source: m._b.TEXT
                });
                if (
                    ((0, g.qJ)({
                        command: e,
                        location: t,
                        source: m._b.TEXT
                    }),
                    c)
                ) {
                    let n = b.Id[e.id],
                        o = n.additionalOptions;
                    await L(n.imageOption),
                        await (0, M.Z)({
                            command: { ...e },
                            optionValues: {
                                [n.imageOption]: [
                                    {
                                        text: 'image',
                                        type: 'text'
                                    }
                                ],
                                ...(null == o ? {} : o[Math.floor(Math.random() * o.length)])
                            },
                            context: {
                                channel: l,
                                guild: U
                            },
                            commandOrigin: t === E.Vh.IMAGE_RECS_SUBMENU ? E.bB.IMAGE_RECS_SUBMENU : E.bB.IMAGE_RECS_MENU
                        });
                }
            },
            [l, U, j, D, L]
        );
    return (0, o.jsxs)(r.Menu, {
        onSelect: t,
        navId: 'image-context-commands-popout',
        onClose: n,
        'aria-label': T.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
        children: [
            (0, o.jsx)(
                r.MenuItem,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, o.jsx)(r.Text, {
                            className: O.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, o.jsx)(r.MenuSeparator, {}),
            k
                ? (0, o.jsx)(
                      r.MenuItem,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, o.jsx)(I.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, o.jsx)(o.Fragment, {
                      children: F.map((e) => {
                          var t;
                          let n = null != b.Id[e.command.id].additionalOptions,
                              i = b.Id[e.command.id].onlyAllowEdit;
                          return (0, o.jsx)(
                              r.MenuItem,
                              {
                                  id: e.command.id,
                                  action: () => {
                                      i ? G(e.command, e.section, E.Vh.IMAGE_RECS_MENU) : H(e.command, E.Vh.IMAGE_RECS_MENU);
                                  },
                                  label: null !== (t = b.Id[e.command.id].overrideCommandName) && void 0 !== t ? t : e.command.displayName,
                                  subtext: e.command.displayDescription,
                                  subtextLineClamp: 1,
                                  icon: i ? r.PencilIcon : n ? void 0 : r.SendMessageIcon,
                                  iconLeft: () =>
                                      (0, o.jsx)(C.Z, {
                                          channel: l,
                                          section: e.section,
                                          width: 32,
                                          height: 32,
                                          isSquircle: !0,
                                          selectable: !1
                                      }),
                                  iconLeftSize: 'lg',
                                  showImageFirst: !0,
                                  disabled: !w && i,
                                  children:
                                      n && !i
                                          ? (0, o.jsxs)(o.Fragment, {
                                                children: [
                                                    (0, o.jsx)(
                                                        r.MenuItem,
                                                        {
                                                            id: ''.concat(e.command.id, '-send'),
                                                            label: T.Z.Messages.APP_IMAGE_REC_MENU_SEND_LABEL,
                                                            subtext: T.Z.Messages.APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                                            action: () => H(e.command, E.Vh.IMAGE_RECS_SUBMENU),
                                                            icon: r.SendMessageIcon
                                                        },
                                                        ''.concat(e.command.id, '-send')
                                                    ),
                                                    (0, o.jsx)(
                                                        r.MenuItem,
                                                        {
                                                            id: ''.concat(e.command.id, '-edit'),
                                                            label: T.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                                            subtext: T.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                                            action: () => G(e.command, e.section, E.Vh.IMAGE_RECS_SUBMENU),
                                                            icon: r.PencilIcon,
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
