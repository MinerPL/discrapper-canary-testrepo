l.d(n, {
    Z: function () {
        return R;
    },
    k: function () {
        return S;
    }
}),
    l(789020);
var a = l(735250),
    i = l(470079),
    r = l(442837),
    t = l(481060),
    s = l(933557),
    d = l(471445),
    o = l(905362),
    c = l(353093),
    u = l(979264),
    h = l(937111),
    m = l(592125),
    g = l(271383),
    C = l(430824),
    x = l(496675),
    f = l(186523),
    I = l(768581),
    v = l(630388),
    _ = l(526120),
    Z = l(563534),
    N = l(846121),
    j = l(305762),
    p = l(981631),
    b = l(308083),
    E = l(372897),
    M = l(689938),
    A = l(591294);
function S(e) {
    let { title: n, emojiId: l, emojiName: i, icon: r, completed: s, Icon: d, ...o } = e,
        c = 'channel' === o.variant ? o.channelId : null,
        u = 'static' === o.variant ? o.subtitle : o.channelName,
        h =
            null != c
                ? I.ZP.getNewMemberActionIconURL({
                      channelId: c,
                      icon: r
                  })
                : null;
    return (0, a.jsxs)('div', {
        className: A.action,
        children: [
            null != h
                ? (0, a.jsx)('img', {
                      src: h,
                      className: A.icon,
                      width: 32,
                      height: 32,
                      alt: '',
                      'aria-hidden': !0
                  })
                : (0, a.jsx)(j.Z, {
                      emojiId: l,
                      emojiName: i,
                      size: j.R.LARGE,
                      defaultComponent: (0, a.jsx)('div', {
                          className: A.channelIconContainer,
                          children: (0, a.jsx)(d, {
                              className: A.channelIcon,
                              color: 'currentColor'
                          })
                      })
                  }),
            (0, a.jsxs)('div', {
                className: A.actionInfo,
                children: [
                    (0, a.jsx)(t.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n
                    }),
                    null != u
                        ? (0, a.jsx)(t.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: u
                          })
                        : null
                ]
            }),
            s
                ? (0, a.jsx)(t.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: '#fff',
                      className: A.checkCircleCompleted
                  })
                : (0, a.jsx)(f.Z, {
                      className: A.checkCircle,
                      width: 24,
                      height: 24
                  })
        ]
    });
}
function T(e) {
    var n;
    let { action: l, completed: o } = e,
        { channelId: c, title: u, emoji: h, icon: g } = l,
        { id: C, name: f } = null != h ? h : {},
        I = (0, r.e7)([m.Z], () => m.Z.getChannel(c)),
        v = (0, s.ZP)(I, !0),
        Z = (0, r.e7)([x.Z], () => x.Z.can(p.Plq.VIEW_CHANNEL, I)),
        N = i.useCallback(() => {
            if (null == I) return null;
            (0, _.gp)(I.guild_id, I.id);
        }, [I]);
    if (null == I || !Z) return null;
    let j = null !== (n = (0, d.KS)(I)) && void 0 !== n ? n : t.TextIcon;
    return (0, a.jsx)(t.Clickable, {
        className: A.clickableAction,
        onClick: N,
        children: (0, a.jsx)(S, {
            variant: 'channel',
            channelId: c,
            title: u,
            channelName: v,
            emojiId: C,
            emojiName: f,
            icon: g,
            completed: o,
            Icon: j
        })
    });
}
function R(e) {
    var n;
    let { guildId: l } = e,
        s = (0, r.e7)([Z.Z], () => Z.Z.getNewMemberActions(l), [l]),
        d = (0, r.e7)([N.Z], () => N.Z.getCompletedActions(l)),
        m = (0, r.e7)([g.ZP], () => g.ZP.getSelfMember(l)),
        x = (0, r.e7)([C.Z], () => C.Z.getGuild(l)),
        f = null != x ? (0, c.ky)(x.id, null === (n = x.clan) || void 0 === n ? void 0 : n.badge, b.NC.SIZE_16) : null,
        I = (0, r.e7)([h.Z], () => h.Z.getRequest(l));
    i.useEffect(() => {
        var e;
        null == d && (null == m ? void 0 : m.flags) != null && (0, v.yE)(null !== (e = m.flags) && void 0 !== e ? e : 0, E.q.STARTED_HOME_ACTIONS) && (0, _.Fg)(l);
    }, [d, l, null == m ? void 0 : m.flags]);
    let j = i.useCallback(() => {
        null != x && null != x.rulesChannelId && (0, _.gp)(x.id, x.rulesChannelId);
    }, [x]);
    return null == m || null == s || 0 === s.length
        ? null
        : (0, a.jsxs)('div', {
              className: A.container,
              children: [
                  (0, a.jsx)(t.Heading, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: M.Z.Messages.GET_STARTED
                  }),
                  (null == x ? void 0 : x.hasFeature(p.oNc.CLAN)) &&
                      null != f &&
                      (0, a.jsx)(t.Clickable, {
                          className: A.clickableAction,
                          onClick: () => (0, o.CK)(l, null == I ? void 0 : I.joinRequestId),
                          children: (0, a.jsxs)('div', {
                              className: A.action,
                              children: [
                                  (0, a.jsx)('div', {
                                      className: A.tagIconContainer,
                                      children: (0, a.jsx)(u.KQ, {
                                          src: f,
                                          size: b.NC.SIZE_16
                                      })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: A.actionInfo,
                                      children: (0, a.jsx)(t.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: M.Z.Messages.RAPIDASH_ONBOARDING_ACTION_ITEM
                                      })
                                  })
                              ]
                          })
                      }),
                  s.map((e) =>
                      (0, a.jsx)(
                          T,
                          {
                              action: e,
                              completed: (null == d ? void 0 : d[e.channelId]) === !0,
                              guildId: l
                          },
                          e.channelId
                      )
                  ),
                  (null == x ? void 0 : x.rulesChannelId) != null &&
                      (0, a.jsxs)(t.Clickable, {
                          className: A.action,
                          onClick: j,
                          children: [
                              (0, a.jsx)('div', {
                                  className: A.rulesIconContainer,
                                  children: (0, a.jsx)(t.BookCheckIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: A.rulesIcon
                                  })
                              }),
                              (0, a.jsx)('div', {
                                  className: A.actionInfo,
                                  children: (0, a.jsx)(t.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: M.Z.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
                                  })
                              })
                          ]
                      })
              ]
          });
}
