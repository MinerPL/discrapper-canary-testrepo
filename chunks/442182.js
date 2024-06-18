"use strict";
t.d(s, {
  ZP: function() {
    return B
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(239091),
  d = t(479531),
  u = t(58540),
  E = t(100527),
  _ = t(906732),
  I = t(484459),
  T = t(103575),
  N = t(594174),
  m = t(474333),
  S = t(696202),
  h = t(158010),
  g = t(626135),
  x = t(243730),
  C = t(434404),
  R = t(946724),
  L = t(130341),
  O = t(95242),
  A = t(420966),
  p = t(566476),
  M = t(203377),
  f = t(981631),
  v = t(689938),
  D = t(245660),
  Z = t(585512);
async function j(e, s, t) {
  let i = e.roles.filter(e => e !== t);
  try {
    await C.Z.updateMemberRoles(s, e.id, i, [], [t])
  } catch (s) {
    let e = new d.Z(s);
    (0, o.openModal)(s => (0, n.jsx)(o.ConfirmModal, {
      ...s,
      header: v.Z.Messages.ERROR_GENERIC_TITLE,
      confirmText: v.Z.Messages.OKAY,
      confirmButtonColor: o.Button.Colors.BRAND,
      children: (0, n.jsx)(o.Text, {
        color: "text-normal",
        variant: "text-md/normal",
        children: e.getAnyErrorMessage()
      })
    }))
  }
}

function U(e) {
  let {
    member: s,
    guildId: l,
    roleId: r,
    locked: d
  } = e, E = i.useMemo(() => ({
    [l]: [s.id]
  }), [l, s.id]);

  function _(e) {
    if (e.stopPropagation(), !d) {
      if (e.shiftKey) {
        j(s, l, r);
        return
      }! function(e, s, t) {
        let i = R.Z.getRole(t);
        (0, o.openModal)(l => (0, n.jsxs)(o.ConfirmModal, {
          ...l,
          header: v.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
          confirmText: v.Z.Messages.REMOVE,
          cancelText: v.Z.Messages.CANCEL,
          onConfirm: () => j(e, s, t),
          children: [(0, n.jsx)(o.Text, {
            color: "text-normal",
            variant: "text-md/normal",
            children: v.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_BODY.format({
              username: e.name,
              roleName: null == i ? void 0 : i.name
            })
          }), (0, n.jsx)(o.Text, {
            className: D.removeTip,
            color: "text-muted",
            variant: "text-md/normal",
            children: v.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TIP
          })]
        }))
      }(s, l, r)
    }
  }

  function m(e) {
    let i = N.default.getUser(s.id);
    if (null != i)(0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("79695"), t.e("32006"), t.e("12435"), t.e("51068")]).then(t.bind(t, 415118));
      return s => (0, n.jsx)(e, {
        ...s,
        user: i,
        guildId: l,
        showChatItems: !1
      })
    })
  }
  return (0, u.$)(E), (0, n.jsx)("div", {
    className: Z.contentWidth,
    children: (0, n.jsx)(o.Popout, {
      renderPopout: e => (0, n.jsx)(T.Z, {
        location: "GuildSettingsRolesEditMembers",
        guildId: l,
        userId: s.id,
        roleId: r,
        ...e
      }),
      position: "left",
      preload: () => (0, I.W)(s.id, s.avatarURL, {
        guildId: l
      }),
      children: e => (0, n.jsxs)(o.Clickable, {
        ...e,
        className: D.memberRow,
        onContextMenu: m,
        children: [(0, n.jsx)(p.Z, {
          className: D.memberDetails,
          avatarURL: s.avatarURL,
          name: s.name,
          bot: s.bot,
          verifiedBot: s.verifiedBot,
          userTag: s.userTag
        }), (0, n.jsx)("div", {
          className: D.removeButtonContainer,
          children: (0, n.jsx)(o.Tooltip, {
            text: d ? v.Z.Messages.ROLE_REMOVE_MEMBER_MANAGED : v.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
            position: "top",
            children: e => (0, n.jsx)(o.Clickable, {
              ...e,
              className: a()(D.removeButton, {
                [D.removeButtonDisabled]: d
              }),
              onClick: _,
              children: (0, n.jsx)(S.Z, {
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

function G(e) {
  let {
    handleAddClick: s,
    locked: t
  } = e;
  return (0, n.jsx)("div", {
    className: Z.contentWidth,
    children: (0, n.jsxs)("div", {
      className: a()(D.memberRow, D.emptyRowContainer),
      children: [(0, n.jsx)(h.Z, {}), (0, n.jsx)(o.Text, {
        className: D.emptyRowText,
        variant: "text-sm/semibold",
        color: "text-muted",
        children: v.Z.Messages.ROLE_EDIT_MEMBERS_NO_SEARCH_RESULTS.format({
          addMembersHook: function(e, i) {
            return t ? null : (0, n.jsx)(o.Anchor, {
              onClick: s,
              children: e
            }, i)
          }
        })
      })]
    })
  })
}

function P(e) {
  let {
    guildId: s,
    roleId: t,
    query: l,
    headerHeight: a,
    locked: r,
    onScroll: c,
    roleMembers: d,
    handleAddClick: u
  } = e, {
    analyticsLocations: I
  } = (0, _.ZP)(E.Z.MEMBER_LIST), T = i.useMemo(() => l.trim().toLowerCase(), [l]);
  (0, L.rY)(s, T);
  let N = i.useMemo(() => d.filter(e => (0, L.eg)(T, e)), [d, T]),
    m = i.useMemo(() => N.sort((e, s) => e.name.localeCompare(s.name)), [N]);
  return (0, n.jsx)(_.Gt, {
    value: I,
    children: (0, n.jsx)(o.ListAuto, {
      className: D.list,
      sections: [Math.max(N.length, 1)],
      sectionHeight: a,
      renderSection: () => (0, n.jsx)("div", {
        style: {
          height: a
        }
      }, "section"),
      style: {
        scrollPaddingTop: a
      },
      rowHeight: 40,
      renderRow: function(e) {
        let {
          row: i
        } = e;
        if (0 === m.length) return (0, n.jsx)(G, {
          handleAddClick: u,
          locked: r
        }, "empty");
        let l = m[i];
        return (0, n.jsx)(U, {
          member: l,
          guildId: s,
          roleId: t,
          locked: r
        }, l.id)
      },
      onScroll: c
    })
  })
}

function b(e) {
  let {
    query: s,
    setQuery: t,
    locked: i,
    handleAddClick: l
  } = e;
  return (0, n.jsxs)("div", {
    className: D.searchContainer,
    children: [(0, n.jsx)(o.SearchBar, {
      size: o.SearchBar.Sizes.MEDIUM,
      query: s,
      onChange: t,
      onClear: () => t(""),
      placeholder: v.Z.Messages.SEARCH_MEMBERS,
      "aria-label": v.Z.Messages.SEARCH_MEMBERS
    }), (0, n.jsx)(o.Button, {
      className: D.addButton,
      size: o.Button.Sizes.SMALL,
      onClick: l,
      disabled: i,
      children: v.Z.Messages.ROLE_ADD_MEMBERS_BUTTON
    })]
  })
}

function B(e) {
  let {
    guild: s,
    role: l,
    locked: c,
    setSelectedSection: d
  } = e, [u, E] = i.useState(""), {
    headerHeight: _,
    headerRef: I
  } = (0, O.Z)(0), {
    scrolledToTop: T,
    handleScroll: N
  } = (0, A.V)(), S = l.managed || c, h = (0, L.e)(s.id, l.id), C = (0, r.e7)([x.Z], () => {
    var e, t;
    return null !== (t = null === (e = x.Z.getRoleMemberCount(s.id)) || void 0 === e ? void 0 : e[l.id]) && void 0 !== t ? t : 0
  }) > h.length, R = () => {
    g.default.track(f.rMx.OPEN_MODAL, {
      type: "Add Role Members",
      location_page: "Role Settings",
      location_section: "Members"
    }), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("7590"), t.e("15968")]).then(t.bind(t, 24722));
      return t => (0, n.jsx)(e, {
        ...t,
        roleId: l.id,
        guildId: s.id
      })
    })
  };
  return (0, n.jsxs)("div", {
    className: D.container,
    children: [(0, n.jsx)("div", {
      className: D.headerContainer,
      ref: I,
      children: (0, n.jsx)("div", {
        className: Z.contentWidth,
        children: (0, n.jsxs)("div", {
          className: a()(Z.header, {
            [Z.stickyHeaderElevated]: !T
          }),
          children: [(0, n.jsx)(A.Z, {
            guild: s,
            role: l,
            selectedSection: M.ZI.MEMBERS,
            setSelectedSection: d
          }), (0, n.jsx)(b, {
            query: u,
            setQuery: E,
            locked: S,
            handleAddClick: R
          }), C ? (0, n.jsx)(m.Z, {
            className: D.searchWarning,
            messageType: m.Q.INFO,
            children: v.Z.Messages.ROLE_EDIT_MEMBERS_MISSING
          }) : null]
        })
      })
    }), (0, n.jsx)(P, {
      headerHeight: _ + 8,
      query: u,
      guildId: s.id,
      roleId: l.id,
      locked: S,
      onScroll: N,
      roleMembers: h,
      handleAddClick: R
    })]
  })
}