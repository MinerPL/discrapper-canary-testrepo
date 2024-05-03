"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("239091"),
  u = s("479531"),
  c = s("58540"),
  E = s("100527"),
  _ = s("906732"),
  I = s("484459"),
  T = s("103575"),
  S = s("594174"),
  f = s("474333"),
  m = s("6048"),
  N = s("696202"),
  g = s("158010"),
  h = s("626135"),
  C = s("243730"),
  R = s("434404"),
  x = s("946724"),
  L = s("130341"),
  O = s("95242"),
  A = s("420966"),
  p = s("566476"),
  M = s("203377"),
  D = s("981631"),
  v = s("689938"),
  G = s("183223"),
  j = s("635163");
async function U(e, t, s) {
  let l = e.roles.filter(e => e !== s);
  try {
    await R.default.updateMemberRoles(t, e.id, l, [], [s])
  } catch (t) {
    let e = new u.default(t);
    (0, o.openModal)(t => (0, a.jsx)(o.ConfirmModal, {
      ...t,
      header: v.default.Messages.ERROR_GENERIC_TITLE,
      confirmText: v.default.Messages.OKAY,
      confirmButtonColor: o.Button.Colors.BRAND,
      children: (0, a.jsx)(o.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: e.getAnyErrorMessage()
      })
    }))
  }
}

function P(e) {
  let {
    member: t,
    guildId: n,
    roleId: r,
    locked: u
  } = e, E = l.useMemo(() => ({
    [n]: [t.id]
  }), [n, t.id]);

  function _(e) {
    if (e.stopPropagation(), !u) {
      if (e.shiftKey) {
        U(t, n, r);
        return
      }! function(e, t, s) {
        let l = x.default.getRole(s);
        (0, o.openModal)(n => (0, a.jsxs)(o.ConfirmModal, {
          ...n,
          header: v.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
          confirmText: v.default.Messages.REMOVE,
          cancelText: v.default.Messages.CANCEL,
          onConfirm: () => U(e, t, s),
          children: [(0, a.jsx)(o.Text, {
            color: "text-normal",
            variant: "text-md/normal",
            children: v.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_BODY.format({
              username: e.name,
              roleName: null == l ? void 0 : l.name
            })
          }), (0, a.jsx)(o.Text, {
            className: G.removeTip,
            color: "text-muted",
            variant: "text-md/normal",
            children: v.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TIP
          })]
        }))
      }(t, n, r)
    }
  }

  function f(e) {
    let l = S.default.getUser(t.id);
    null != l && (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("79695"), s.e("1502"), s.e("12435"), s.e("51068")]).then(s.bind(s, "415118"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: l,
        guildId: n,
        showChatItems: !1
      })
    })
  }
  return (0, c.useSubscribeGuildMembers)(E), (0, a.jsx)("div", {
    className: j.contentWidth,
    children: (0, a.jsx)(o.Popout, {
      renderPopout: e => (0, a.jsx)(T.default, {
        location: "GuildSettingsRolesEditMembers",
        guildId: n,
        userId: t.id,
        roleId: r,
        ...e
      }),
      position: "left",
      preload: () => (0, I.maybeFetchUserProfileForPopout)(t.id, t.avatarURL, {
        guildId: n
      }),
      children: e => (0, a.jsxs)(o.Clickable, {
        ...e,
        className: G.memberRow,
        onContextMenu: f,
        children: [(0, a.jsx)(p.default, {
          className: G.memberDetails,
          avatarURL: t.avatarURL,
          name: t.name,
          bot: t.bot,
          verifiedBot: t.verifiedBot,
          userTag: t.userTag
        }), (0, a.jsx)("div", {
          className: G.removeButtonContainer,
          children: (0, a.jsx)(o.Tooltip, {
            text: u ? v.default.Messages.ROLE_REMOVE_MEMBER_MANAGED : v.default.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
            position: "top",
            children: e => (0, a.jsx)(o.Clickable, {
              ...e,
              className: i()(G.removeButton, {
                [G.removeButtonDisabled]: u
              }),
              onClick: _,
              children: (0, a.jsx)(N.default, {
                width: 16,
                height: 16
              })
            })
          })
        })]
      })
    })
  })
}

function b(e) {
  let {
    handleAddClick: t,
    locked: s
  } = e;
  return (0, a.jsx)("div", {
    className: j.contentWidth,
    children: (0, a.jsxs)("div", {
      className: i()(G.memberRow, G.emptyRowContainer),
      children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(o.Text, {
        className: G.emptyRowText,
        variant: "text-sm/semibold",
        color: "text-muted",
        children: v.default.Messages.ROLE_EDIT_MEMBERS_NO_SEARCH_RESULTS.format({
          addMembersHook: function(e, l) {
            return s ? null : (0, a.jsx)(o.Anchor, {
              onClick: t,
              children: e
            }, l)
          }
        })
      })]
    })
  })
}

function B(e) {
  let {
    guildId: t,
    roleId: s,
    query: n,
    headerHeight: i,
    locked: r,
    onScroll: d,
    roleMembers: u,
    handleAddClick: c
  } = e, {
    analyticsLocations: I
  } = (0, _.default)(E.default.MEMBER_LIST), T = l.useMemo(() => n.trim().toLowerCase(), [n]);
  (0, L.useQueryGuildMembers)(t, T);
  let S = l.useMemo(() => u.filter(e => (0, L.filterFullMembersByQuery)(T, e)), [u, T]),
    f = l.useMemo(() => S.sort((e, t) => e.name.localeCompare(t.name)), [S]);
  return (0, a.jsx)(_.AnalyticsLocationProvider, {
    value: I,
    children: (0, a.jsx)(o.ListAuto, {
      className: G.list,
      sections: [Math.max(S.length, 1)],
      sectionHeight: i,
      renderSection: () => (0, a.jsx)("div", {
        style: {
          height: i
        }
      }, "section"),
      style: {
        scrollPaddingTop: i
      },
      rowHeight: 40,
      renderRow: function(e) {
        let {
          row: l
        } = e;
        if (0 === f.length) return (0, a.jsx)(b, {
          handleAddClick: c,
          locked: r
        }, "empty");
        let n = f[l];
        return (0, a.jsx)(P, {
          member: n,
          guildId: t,
          roleId: s,
          locked: r
        }, n.id)
      },
      onScroll: d
    })
  })
}

function y(e) {
  let {
    query: t,
    setQuery: s,
    locked: l,
    handleAddClick: n
  } = e;
  return (0, a.jsxs)("div", {
    className: G.searchContainer,
    children: [(0, a.jsx)(m.default, {
      size: m.default.Sizes.MEDIUM,
      query: t,
      onChange: s,
      onClear: () => s(""),
      placeholder: v.default.Messages.SEARCH_MEMBERS,
      "aria-label": v.default.Messages.SEARCH_MEMBERS
    }), (0, a.jsx)(o.Button, {
      className: G.addButton,
      size: o.Button.Sizes.SMALL,
      onClick: n,
      disabled: l,
      children: v.default.Messages.ROLE_ADD_MEMBERS_BUTTON
    })]
  })
}

function F(e) {
  let {
    guild: t,
    role: n,
    locked: d,
    setSelectedSection: u
  } = e, [c, E] = l.useState(""), {
    headerHeight: _,
    headerRef: I
  } = (0, O.default)(0), {
    scrolledToTop: T,
    handleScroll: S
  } = (0, A.useScrolledToTop)(), m = n.managed || d, N = (0, L.useGuildRoleMembers)(t.id, n.id), g = (0, r.useStateFromStores)([C.default], () => {
    var e, s;
    return null !== (s = null === (e = C.default.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[n.id]) && void 0 !== s ? s : 0
  }) > N.length, R = () => {
    h.default.track(D.AnalyticEvents.OPEN_MODAL, {
      type: "Add Role Members",
      location_page: "Role Settings",
      location_section: "Members"
    }), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("7590"), s.e("15968")]).then(s.bind(s, "24722"));
      return s => (0, a.jsx)(e, {
        ...s,
        roleId: n.id,
        guildId: t.id
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: G.container,
    children: [(0, a.jsx)("div", {
      className: G.headerContainer,
      ref: I,
      children: (0, a.jsx)("div", {
        className: j.contentWidth,
        children: (0, a.jsxs)("div", {
          className: i()(j.header, {
            [j.stickyHeaderElevated]: !T
          }),
          children: [(0, a.jsx)(A.default, {
            guild: t,
            role: n,
            selectedSection: M.GuildSettingsRoleEditSections.MEMBERS,
            setSelectedSection: u
          }), (0, a.jsx)(y, {
            query: c,
            setQuery: E,
            locked: m,
            handleAddClick: R
          }), g ? (0, a.jsx)(f.default, {
            className: G.searchWarning,
            messageType: f.HelpMessageTypes.INFO,
            children: v.default.Messages.ROLE_EDIT_MEMBERS_MISSING
          }) : null]
        })
      })
    }), (0, a.jsx)(B, {
      headerHeight: _ + 8,
      query: c,
      guildId: t.id,
      roleId: n.id,
      locked: m,
      onScroll: S,
      roleMembers: N,
      handleAddClick: R
    })]
  })
}