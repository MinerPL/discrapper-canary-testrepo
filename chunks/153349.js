"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("512722"),
  d = n.n(u),
  c = n("442837"),
  f = n("481060"),
  h = n("239091"),
  m = n("99690"),
  p = n("58540"),
  E = n("484459"),
  C = n("103575"),
  g = n("271383"),
  S = n("496675"),
  _ = n("158776"),
  T = n("465670"),
  I = n("372662"),
  A = n("740624"),
  N = n("502568"),
  v = n("471253"),
  x = n("431328"),
  M = n("145834"),
  R = n("590415"),
  y = n("614173"),
  L = n("618896"),
  O = n("231338"),
  j = n("689938"),
  P = n("460498");
let D = i.memo(function(e) {
    let {
      toggleRequestToSpeakSidebar: t,
      chatOpen: n
    } = e, a = (0, s.jsx)(N.default.Icon, {
      icon: T.default,
      tooltip: j.default.Messages.CLOSE,
      onClick: t
    });
    return (0, s.jsxs)(N.default, {
      toolbar: a,
      className: o()(P.headerContainer, {
        [P.chatOpen]: n
      }),
      children: [(0, s.jsx)(N.default.Icon, {
        icon: A.default,
        disabled: !0,
        "aria-label": j.default.Messages.REQUEST_TO_SPEAK_AREA_TITLE
      }), (0, s.jsx)(N.default.Title, {
        children: j.default.Messages.REQUEST_TO_SPEAK_AREA_TITLE
      })]
    })
  }),
  b = i.memo(function(e) {
    let {
      channel: t,
      participant: a,
      tempDisableOnInit: l = !1
    } = e, [r, u] = i.useState(l);
    i.useEffect(() => {
      if (!r) return;
      let e = setTimeout(() => u(!1), 1e3);
      return () => clearTimeout(e)
    }, []);
    let S = t.getGuildId();
    d()(null != S, "Channel cannot be guildless");
    let {
      isMobile: A,
      status: N
    } = (0, c.useStateFromStoresObject)([_.default], () => ({
      isMobile: _.default.isMobileOnline(a.user.id),
      status: _.default.getStatus(a.user.id, S)
    })), x = (0, c.useStateFromStores)([g.default], () => g.default.getMember(S, a.user.id)), y = i.useMemo(() => ({
      [S]: [a.user.id]
    }), [S, a.user.id]);
    (0, p.useSubscribeGuildMembers)(y);
    let L = a.rtsState === R.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;

    function O() {
      (0, v.setUserSuppress)(t, a.user.id, !1)
    }

    function D() {
      (0, v.setUserSuppress)(t, a.user.id, !0)
    }
    let b = e => {
      (0, h.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("36441"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
        return n => (0, s.jsx)(e, {
          ...n,
          user: a.user,
          guildId: S,
          channel: t,
          showMediaItems: !0
        })
      })
    };
    return (0, s.jsxs)("div", {
      className: P.participantRowContainer,
      children: [(0, s.jsx)(f.Popout, {
        preload: () => (0, E.default)(a.user.id, a.user.getAvatarURL(t.guild_id, 80), {
          guildId: t.guild_id,
          channelId: t.id
        }),
        renderPopout: e => (0, s.jsx)(C.default, {
          ...e,
          location: "RequestToSpeakSidebar",
          userId: a.user.id,
          guildId: S,
          channelId: t.id
        }),
        position: "left",
        spacing: 16,
        children: e => {
          var t;
          return (0, s.jsxs)(f.Clickable, {
            className: P.participantMemberContainer,
            onContextMenu: b,
            ...e,
            children: [(0, s.jsx)(m.default, {
              size: f.AvatarSizes.SIZE_40,
              className: P.participantAvatar,
              user: a.user,
              isMobile: A,
              status: N
            }), (0, s.jsxs)("div", {
              className: P.participantTextContainer,
              children: [(0, s.jsx)(f.NameWithRole, {
                name: a.userNick,
                color: null !== (t = null == x ? void 0 : x.colorString) && void 0 !== t ? t : void 0,
                className: P.participantName
              }), (0, s.jsx)(f.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: (0, M.participantMemberInfo)(a)
              })]
            })]
          })
        }
      }), (0, s.jsx)(f.Tooltip, {
        text: L ? j.default.Messages.REQUEST_TO_SPEAK_INVITATION_SEND : j.default.Messages.REQUEST_TO_SPEAK_ACCEPT,
        children: e => (0, s.jsx)(f.Button, {
          ...e,
          innerClassName: P.buttonContainer,
          look: f.Button.Looks.BLANK,
          size: f.Button.Sizes.NONE,
          onClick: O,
          disabled: L || r,
          children: (0, s.jsx)(I.default, {
            width: 16,
            height: 16
          })
        })
      }), (0, s.jsx)(f.Tooltip, {
        text: j.default.Messages.REQUEST_TO_SPEAK_DECLINE,
        children: e => (0, s.jsx)(f.Button, {
          ...e,
          innerClassName: o()(P.buttonContainer, P.buttonMargin),
          look: f.Button.Looks.BLANK,
          size: f.Button.Sizes.NONE,
          onClick: D,
          children: (0, s.jsx)(T.default, {
            width: 16,
            height: 16
          })
        })
      })]
    })
  }),
  U = i.memo(function(e) {
    let {
      channel: t
    } = e, [n, a] = (0, y.useRequestToSpeakPermission)(t.id);
    return (0, s.jsx)(f.FormSwitch, {
      className: P.toggle,
      onChange: a,
      value: n,
      children: j.default.Messages.MODERATOR_ALLOW_EVERYONE_RAISE_HAND
    })
  }),
  F = i.memo(function() {
    return (0, s.jsxs)("div", {
      className: P.emptyStateContainer,
      children: [(0, s.jsx)(L.default, {}), (0, s.jsx)(f.Text, {
        className: P.emptyStateTitle,
        variant: "text-lg/semibold",
        color: "header-primary",
        children: j.default.Messages.REQUEST_TO_SPEAK_EMPTY_LIST_TITLE
      }), (0, s.jsx)(f.Text, {
        className: P.emptyStateBody,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: j.default.Messages.REQUEST_TO_SPEAK_EMPTY_LIST_BODY
      })]
    })
  });

function w(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    chatOpen: a
  } = e, l = (0, x.useSortedRequestToSpeakParticipants)(t.id), i = [(0, c.useStateFromStores)([S.default], () => S.default.can(O.Permissions.MANAGE_CHANNELS, t) || S.default.can(O.Permissions.MANAGE_ROLES, t)) ? 1 : 0, Math.max(1, l.length)];
  return (0, s.jsxs)("div", {
    className: o()(P.container, {
      [P.chatOpen]: a
    }),
    children: [(0, s.jsx)(D, {
      toggleRequestToSpeakSidebar: n,
      chatOpen: a
    }), (0, s.jsx)(f.List, {
      className: P.contentContainer,
      sections: i,
      sectionHeight: function(e) {
        if (1 === e) return 40;
        return 0
      },
      rowHeight: function(e) {
        switch (e) {
          case 0:
            return 66;
          case 1:
            if (0 === l.length) return 178;
            return 48
        }
        return 0
      },
      renderRow: function(e) {
        let {
          section: n,
          row: a
        } = e;
        switch (n) {
          case 0:
            return (0, s.jsx)(U, {
              channel: t
            }, "rts-toggle");
          case 1: {
            if (0 === l.length) return (0, s.jsx)(F, {}, "participants-empty");
            let e = l[a];
            return (0, s.jsx)(b, {
              channel: t,
              participant: e,
              tempDisableOnInit: !0
            }, e.id)
          }
        }
        return null
      },
      renderSection: function(e) {
        let {
          section: t
        } = e;
        if (1 === t) return (0, s.jsx)(f.Text, {
          className: P.listTitle,
          variant: "text-xs/bold",
          color: "header-secondary",
          children: l.length > 0 ? j.default.Messages.REQUEST_TO_SPEAK_LIST_TITLE.format({
            numHands: l.length
          }) : j.default.Messages.REQUEST_TO_SPEAK_AREA_TITLE
        }, "participants-section");
        return null
      }
    })]
  })
}(l = a || (a = {}))[l.TOGGLE_REQUEST_TO_SPEAK = 0] = "TOGGLE_REQUEST_TO_SPEAK", l[l.PARTICIPANTS = 1] = "PARTICIPANTS"