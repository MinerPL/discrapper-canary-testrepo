"use strict";
s.r(t), s.d(t, {
  ChannelSettingsPermissionsNotice: function() {
    return G
  },
  default: function() {
    return K
  }
}), s("724458"), s("653041"), s("411104");
var l = s("735250"),
  a = s("470079"),
  n = s("392711"),
  i = s.n(n),
  r = s("149765"),
  o = s("442837"),
  d = s("780384"),
  u = s("481060"),
  c = s("668781"),
  h = s("493683"),
  m = s("741361"),
  E = s("668390"),
  f = s("144991"),
  g = s("852860"),
  S = s("911969"),
  T = s("410030"),
  N = s("607070"),
  _ = s("146085"),
  p = s("598077"),
  C = s("277053"),
  x = s("388610"),
  M = s("271383"),
  I = s("430824"),
  R = s("496675"),
  A = s("594174"),
  O = s("568987"),
  L = s("442313"),
  v = s("823379"),
  j = s("892880"),
  D = s("63063"),
  y = s("5192"),
  F = s("233608"),
  b = s("700785"),
  P = s("51144"),
  w = s("257017"),
  U = s("981631"),
  H = s("689938"),
  B = s("686543");
let G = o.default.connectStores([C.default, x.default], () => {
  let e = x.default.getChannel();
  return {
    submitting: C.default.formState === U.FormStates.SUBMITTING,
    onReset() {
      (0, m.init)()
    },
    onSave() {
      if (null == e) return;
      let t = C.default.editedPermissionIds.reduce((e, t) => {
        let s = C.default.getPermissionOverwrite(t);
        return null != s && e.push(s), e
      }, []);
      (0, m.savePermissionUpdates)(e.id, t)
    }
  }
})(g.default);

function V(e) {
  let {
    overwrite: t
  } = e, s = (0, o.useStateFromStores)([C.default], () => C.default.channel), a = (0, o.useStateFromStores)([I.default], () => null != s ? I.default.getGuild(s.getGuildId()) : null), n = (0, o.useStateFromStores)([I.default], () => null != a ? I.default.getRoles(a.id) : void 0);
  if (null == s || null == a || null == t) return null;
  let {
    guild_id: i,
    id: d
  } = s, {
    id: E
  } = t, g = () => {
    var e;
    if (null == I.default.getGuild(i) || null == n) return "";
    let t = n[E],
      s = A.default.getUser(E),
      l = null !== (e = null == s ? void 0 : s.username) && void 0 !== e ? e : "";
    return null != t ? t.name : l
  }, T = (e, l) => {
    if ("boolean" == typeof l) throw Error("Unexpected boolean action");
    let {
      allow: a,
      deny: n
    } = t;
    switch (n = r.remove(n, e), a = r.remove(a, e), l) {
      case "ALLOW":
        a = r.add(a, e);
        break;
      case "DENY":
        n = r.add(n, e)
    }
    if (R.default.can(e, s, {
        [E]: {
          ...t,
          allow: a,
          deny: n
        }
      }))(0, m.updatePermission)(s, E, a, n);
    else {
      let e;
      if (t.type === S.PermissionOverwriteType.MEMBER) {
        let s = A.default.getUser(t.id);
        null != s && (e = P.default.getName(s))
      } else if (t.type === S.PermissionOverwriteType.ROLE) {
        let l = I.default.getGuild(s.getGuildId());
        if (null != l) {
          let s = I.default.getRole(l.id, t.id);
          null != s && (e = s.name)
        }
      }
      w.showPermissionLockoutModal(e)
    }
  }, N = () => {
    let e = g();
    c.default.show({
      title: H.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
      body: H.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
        name: e
      }),
      cancelText: H.default.Messages.CANCEL,
      onConfirm: () => h.default.clearPermissionOverwrite(d, E)
    })
  }, p = e => {
    let t = R.default.can(U.Permissions.ADMINISTRATOR, a) || R.default.can(U.Permissions.MANAGE_ROLES, s, void 0, void 0, !0);
    return s.isGuildStageVoice() && _.STAGE_CHANNEL_DISABLED_PERMISSIONS.has(e) ? H.default.Messages.STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION : !((!r.equals(e, U.Permissions.MANAGE_ROLES) || t) && (null == e || R.default.can(e, a) || t)) && H.default.Messages.HELP_MISSING_PERMISSION
  }, x = E === i, M = s.isForumLikeChannel() && r.has(t.deny, U.Permissions.SEND_MESSAGES), O = r.has(t.deny, U.Permissions.SEND_MESSAGES), v = r.has(t.deny, U.Permissions.READ_MESSAGE_HISTORY), j = F.default.generateChannelPermissionSpec(i, s, x, {
    createPostsDisabled: M,
    sendMessagesDisabled: O,
    readMessageHistoryDisabled: v
  });
  return (0, l.jsxs)(L.default.Content, {
    className: B.layoutStyle,
    children: [j.map((e, s) => (0, l.jsx)(f.default, {
      spec: e,
      allow: t.allow,
      deny: t.deny,
      onChange: T,
      permissionRender: p,
      className: B.permissionsForm
    }, s)), i === E ? null : (0, l.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      color: u.Button.Colors.RED,
      onClick: N,
      children: H.default.Messages.REMOVE_ROLE_OR_USER.format({
        name: g()
      })
    })]
  })
}

function k(e) {
  let {
    guildId: t,
    channelId: s,
    user: a
  } = e, n = a.getAvatarURL(t, 32), i = y.default.getNickname(t, s, a), r = P.default.useUserTag(a), o = null, d = null;
  return o = null != i ? i : a.hasAvatarForGuild(t) ? a.username : r, (null != i || a.hasAvatarForGuild(t)) && (d = (0, l.jsxs)("div", {
    className: B.userRowSubText,
    children: [a.hasAvatarForGuild(t) ? (0, l.jsx)(u.Avatar, {
      className: B.userRowSubAvatar,
      size: u.AvatarSizes.SIZE_16,
      src: a.getAvatarURL(void 0, 16),
      "aria-label": a.username
    }) : null, (0, l.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: r
    })]
  })), (0, l.jsxs)("div", {
    className: B.inline,
    children: [(0, l.jsx)(u.Avatar, {
      size: u.AvatarSizes.SIZE_32,
      src: n,
      "aria-label": a.username,
      className: B.userRowAvatar
    }), (0, l.jsxs)("div", {
      className: B.userRowText,
      children: [(0, l.jsx)(u.Text, {
        className: B.userRowText,
        variant: "text-md/normal",
        children: o
      }), d]
    })]
  })
}

function W(e) {
  return "object" == typeof e && null != e && "colorString" in e && "name" in e
}

function Y(e) {
  let {
    guild: t,
    channel: s,
    permissionOverwrites: a,
    onClose: n,
    onSelect: r,
    position: d
  } = e, u = (0, o.useStateFromStores)([I.default], () => I.default.getRoles(t.id)), c = (0, o.useStateFromStores)([M.default], () => M.default.getMemberIds(t.id));
  return (0, l.jsx)(O.default, {
    label: H.default.Messages.OVERWRITE_AUTOCOMPLETE_LABEL,
    placeholder: H.default.Messages.OVERWRITE_AUTOCOMPLETE_PLACEHOLDER,
    "aria-label": H.default.Messages.OVERWRITE_AUTOCOMPLETE_A11Y_LABEL,
    sections: [H.default.Messages.ROLES, H.default.Messages.MEMBERS],
    onRenderResult: e => {
      if (W(e)) {
        let t;
        return null != e.colorString && (t = {
          color: e.colorString
        }), (0, l.jsx)("span", {
          style: t,
          children: e.name
        })
      }
      if (e instanceof p.default) return (0, l.jsx)(k, {
        guildId: t.id,
        channelId: s.id,
        user: e
      })
    },
    onFilterResults: (e, t) => 0 === t ? i()(u).filter(t => null == a[t.id] && e(t.name)).sortBy(e => -e.position).value() : i()(c).map(A.default.getUser).filter(v.isNotNullish).filter(e => !e.isClyde()).filter(t => null == a[t.id] && e(t.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value(),
    onQueryChange: e => {
      j.default.requestMembers(t.id, e, 20)
    },
    onSelect: e => {
      null != e && (W(e) ? r(e.id, S.PermissionOverwriteType.ROLE) : e instanceof p.default && r(e.id, S.PermissionOverwriteType.MEMBER))
    },
    onClose: n,
    position: d
  })
}

function z() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: n
  } = (0, o.useStateFromStoresObject)([C.default], () => C.default), r = null == e ? void 0 : e.getGuildId(), {
    guild: c,
    guildRoles: f
  } = (0, o.useStateFromStoresObject)([I.default], () => {
    let e = null != r ? I.default.getGuild(r) : void 0,
      t = null != e ? I.default.getRoles(e.id) : void 0;
    return {
      guild: e,
      guildRoles: t
    }
  }, [r]), g = (0, T.default)(), _ = (0, o.useStateFromStores)([N.default], () => N.default.roleStyle);
  if (null == c || null == f || null == e || null == t) return null;
  let p = s => {
      let {
        position: a,
        closePopout: n
      } = s;
      return (0, l.jsx)(Y, {
        guild: c,
        channel: e,
        permissionOverwrites: t,
        position: null != a ? a : "bottom",
        onSelect: x,
        onClose: n
      })
    },
    x = (t, s) => {
      h.default.updatePermissionOverwrite(e.id, {
        id: t,
        type: s,
        allow: b.NONE,
        deny: b.NONE
      }).then(() => (0, m.selectPermission)(t))
    };
  null != t && null == t[c.id] && (t[c.id] = b.makeEveryoneOverwrite(c.id));
  let M = i()(t).filter(e => e.type === S.PermissionOverwriteType.ROLE).map(e => f[e.id]).filter(v.isNotNullish).sortBy(e => -e.position).map(e => (0, l.jsx)(E.default, {
      theme: g,
      roleStyle: _,
      id: e.id,
      role: e,
      guild: c,
      color: e.colorString,
      "aria-label": e.name,
      children: e.name
    }, "".concat(n, "-").concat(e.id))).value(),
    R = i()(t).filter(e => e.type === S.PermissionOverwriteType.MEMBER).map(e => A.default.getUser(e.id)).filter(v.isNotNullish).sortBy(e => e.username.toLowerCase()).map(e => {
      let t = e.getAvatarURL(c.id, 24);
      return (0, l.jsx)(E.default, {
        id: e.id,
        guild: c,
        theme: g,
        roleStyle: _,
        "aria-label": P.default.getUserTag(e, {
          decoration: "never"
        }),
        children: (0, l.jsxs)("div", {
          className: B.inline,
          children: [(0, l.jsx)(u.Avatar, {
            size: u.AvatarSizes.SIZE_20,
            src: t,
            "aria-label": e.username,
            className: B.xsmallAvatar
          }), (0, l.jsx)("span", {
            className: B.username,
            children: P.default.getUserTag(e)
          })]
        })
      }, "".concat(n, "-").concat(e.id))
    }).value();
  return (0, l.jsx)(L.default.Sidebar, {
    className: B.layoutStyle,
    scrollable: !0,
    children: (0, l.jsxs)(u.TabBar, {
      onItemSelect: m.selectPermission,
      selectedItem: n,
      orientation: "vertical",
      children: [(() => {
        let e = (0, d.isThemeDark)(g) ? s("521715") : s("299603");
        return (0, l.jsx)(u.Popout, {
          renderPopout: p,
          position: "bottom",
          autoInvert: !1,
          children: t => (0, l.jsx)(u.TabBar.Header, {
            ...t,
            children: (0, l.jsxs)("div", {
              className: B.sidebarHeaderDefault,
              children: [(0, l.jsxs)("span", {
                children: [H.default.Messages.ROLES, "/", H.default.Messages.MEMBERS]
              }), (0, l.jsx)("img", {
                alt: "",
                className: B.sidebarHeader,
                src: e
              })]
            })
          })
        })
      })(), M, R, (0, l.jsxs)(a.Fragment, {
        children: [(0, l.jsx)(u.TabBar.Separator, {
          style: {
            marginTop: 20,
            marginBottom: 14
          }
        }), (0, l.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          children: (0, l.jsx)(u.Anchor, {
            href: D.default.getArticleURL(U.HelpdeskArticles.PERMISSIONS_TUTORIAL),
            target: "_blank",
            children: H.default.Messages.PERMISSION_HELPDESK
          })
        })]
      })]
    })
  })
}

function K() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: s
  } = (0, o.useStateFromStoresObject)([C.default], () => C.default);
  if (null == (0, o.useStateFromStores)([I.default], () => null != e ? I.default.getGuild(e.getGuildId()) : null) || null == e || null == t || null == s) return null;
  let a = t[s];
  return (0, l.jsxs)(L.default, {
    className: B.container,
    children: [(0, l.jsx)(z, {}), (0, l.jsx)(V, {
      overwrite: a
    })]
  })
}