"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("222007"), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("917351"),
  o = s("446674"),
  d = s("77078"),
  u = s("272030"),
  c = s("851387"),
  E = s("534291"),
  _ = s("599417"),
  I = s("161778"),
  T = s("102985"),
  S = s("697218"),
  f = s("941886"),
  m = s("810567"),
  N = s("258078"),
  g = s("117362"),
  h = s("655518"),
  C = s("158998"),
  R = s("592407"),
  x = s("468349"),
  L = s("900938"),
  O = s("431451"),
  A = s("772871"),
  p = s("318496"),
  M = s("49111"),
  D = s("782340"),
  v = s("993027"),
  G = s("685691");

function j(e) {
  let {
    transitionState: t,
    guild: s,
    user: n,
    ban: i,
    hideDiscriminator: r,
    onClose: o
  } = e, [u, E] = l.useState(!1), [I, T] = l.useState(null);
  async function S() {
    if (null != s) {
      T(null), E(!0);
      try {
        await c.default.unbanUser(s.id, n.id), o()
      } catch (e) {
        T(new _.default(e)), E(!1)
      }
    }
  }
  return (0, a.jsxs)(d.ModalRoot, {
    className: v.bannedUserModal,
    transitionState: t,
    children: [(0, a.jsxs)(d.ModalHeader, {
      className: v.header,
      separator: !1,
      children: [(0, a.jsx)(N.default, {
        size: N.default.Sizes.SIZE_24,
        className: v.userUsername,
        children: C.default.getUserTag(n, {
          mode: "username",
          identifiable: r ? "never" : "always"
        })
      }), r || n.isPomelo() ? null : (0, a.jsxs)(N.default, {
        size: N.default.Sizes.SIZE_24,
        className: v.userDiscrim,
        children: ["#", n.discriminator]
      })]
    }), (0, a.jsxs)(d.ModalContent, {
      className: v.content,
      children: [(0, a.jsx)(d.Text, {
        className: v.reasonHeader,
        variant: "text-xs/normal",
        children: D.default.Messages.BAN_REASON
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: null != i.reason && "" !== i.reason ? i.reason : D.default.Messages.NO_BAN_REASON
      }), null != I ? (0, a.jsx)(d.Text, {
        className: v.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: I.getAnyErrorMessage()
      }) : null]
    }), (0, a.jsxs)(d.ModalFooter, {
      className: v.footer,
      children: [(0, a.jsx)(d.Button, {
        onClick: S,
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.RED,
        submitting: u,
        children: D.default.Messages.REVOKE_BAN
      }), (0, a.jsx)(d.Button, {
        onClick: o,
        children: D.default.Messages.DONE
      })]
    })]
  })
}
class U extends l.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      guild: s
    } = this.props;
    return (0, a.jsxs)(d.Clickable, {
      className: i(v.bannedUser, G.card),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, a.jsx)(d.Avatar, {
        src: e.getAvatarURL(null == s ? void 0 : s.id, 40),
        "aria-label": e.username,
        size: d.AvatarSizes.SIZE_40,
        className: v.bannedUserAvatar
      }), (0, a.jsxs)("div", {
        className: v.username,
        children: [C.default.getUserTag(e, {
          mode: "username",
          identifiable: t ? "never" : "always"
        }), !t && !e.isPomelo() && (0, a.jsxs)("span", {
          className: v.discrim,
          children: ["#", e.discriminator]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleShowModal = () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: s,
        ban: l
      } = this.props;
      (0, d.openModal)(n => (0, a.jsx)(j, {
        ...n,
        guild: e,
        user: t,
        ban: l,
        hideDiscriminator: s
      }))
    }, this.handleContextMenu = e => {
      (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("590079").then(s.bind(s, "590079"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: this.props.user
        })
      })
    }
  }
}
class P extends l.PureComponent {
  makeFilter(e) {
    if (null == e || 0 === e.length) return e => null != e;
    {
      let t = RegExp("^".concat(h.default.escape(e)), "i");
      return s => null != s && (s.id === e || t.test(s.username))
    }
  }
  render() {
    let {
      bans: e,
      guild: t,
      searchQuery: s
    } = this.props;
    if (null == t) return null;
    let l = this.getSortedBans(e, s);
    return (0, a.jsx)(E.ListContentScroller, {
      sections: [Math.max(1, l.length)],
      sectionHeight: this.getSectionHeight,
      renderSection: this.renderSection,
      rowHeight: this.getRowHeight,
      renderRow: this.renderRow
    })
  }
  handleModerationClick() {
    R.default.setSection(M.GuildSettingsSections.SAFETY), (0, O.setSafetyPage)(A.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION)
  }
  handleQueryChange(e) {
    R.default.setSearchQuery(e)
  }
  handleQueryClear() {
    R.default.setSearchQuery("")
  }
  constructor(...e) {
    super(...e), this.getSortedBans = (0, g.cachedFunction)((e, t) => {
      if (null == e) return [];
      let s = this.makeFilter(t),
        a = [];
      for (let t of e.keys()) {
        let e = S.default.getUser(t);
        null != e && s(e) && a.push(e)
      }
      return a.sort((e, t) => e.username.localeCompare(t.username))
    }), this.getRowHeight = (e, t) => {
      var s;
      if (e > 0) return 0;
      let {
        bans: a,
        searchQuery: l
      } = this.props, n = this.getSortedBans(a, l);
      if (0 === n.length && 1 === t) return 56;
      let i = n[t],
        r = null == a ? void 0 : a.get(null !== (s = null == i ? void 0 : i.id) && void 0 !== s ? s : "");
      return null == i || null == r ? 0 : 56
    }, this.renderRow = e => {
      var t;
      let {
        section: s,
        row: l
      } = e, {
        bans: n,
        streamerMode: i,
        guild: r,
        searchQuery: o
      } = this.props;
      if (s > 0) return null;
      if (null == n && 0 === l) return (0, a.jsx)(d.Spinner, {
        className: v.spinner,
        type: d.Spinner.Type.SPINNING_CIRCLE
      }, "spinner");
      let u = this.getSortedBans(n, o),
        c = u[l],
        E = null == n ? void 0 : n.get(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : "");
      if (null != c && null != E) return (0, a.jsx)(U, {
        user: c,
        ban: E,
        hideDiscriminator: i,
        guild: r
      }, c.id)
    }, this.getSectionHeight = e => {
      if (e > 0) return 0;
      let {
        bans: t
      } = this.props;
      return null == t ? 462 : 120
    }, this.renderSection = () => {
      var e;
      let t;
      let {
        bans: l,
        theme: n,
        searchQuery: i
      } = this.props;
      null == l ? t = null : (null == l ? void 0 : l.size) === 0 && (t = (0, a.jsxs)(f.default, {
        theme: n,
        className: v.emptyState,
        children: [(0, a.jsx)(f.EmptyStateImage, {
          darkSrc: s("325911"),
          lightSrc: s("138147"),
          width: 256,
          height: 212
        }), (0, a.jsx)(f.EmptyStateText, {
          note: D.default.Messages.BANS_NO_USERS_BANNED,
          style: {
            maxWidth: 300
          },
          children: D.default.Messages.NO_BANS
        })]
      }));
      let r = null !== (e = null == l ? void 0 : l.size) && void 0 !== e ? e : 0;
      return (0, a.jsxs)(d.FormSection, {
        tag: d.FormTitleTags.H1,
        title: D.default.Messages.BANS_HEADER.format({
          bans: r
        }),
        children: [(0, a.jsxs)("div", {
          className: v.settingsHeader,
          children: [(0, a.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: v.description,
            children: D.default.Messages.BANS_HINT.format({
              onModerationClick: this.handleModerationClick
            })
          }), null == t && (0, a.jsx)(m.default, {
            className: v.searchBar,
            query: null != i ? i : "",
            placeholder: D.default.Messages.BANS_SEARCH_PLACEHOLDER,
            "aria-label": D.default.Messages.BANS_SEARCH_PLACEHOLDER,
            onChange: this.handleQueryChange,
            onClear: this.handleQueryClear
          })]
        }), (0, a.jsx)(d.FormDivider, {
          style: {
            marginBottom: -1
          }
        }), t]
      }, "bans-header")
    }
  }
}
let b = o.default.connectStores([L.default, I.default, T.default], () => {
  let {
    bans: e,
    guild: t,
    searchQuery: s
  } = L.default.getProps();
  return {
    searchQuery: null != s ? s : "",
    bans: e,
    guild: t,
    theme: I.default.theme,
    streamerMode: T.default.hidePersonalInformation
  }
})(P);

function B() {
  var e;
  let {
    guild: t
  } = (0, o.useStateFromStores)([L.default], () => L.default.getProps(), [], r.isEqual), {
    enabled: s
  } = x.GuildSettingsBansNewExperiment.useExperiment({
    guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : M.EMPTY_STRING_SNOWFLAKE_ID,
    location: "4d6318_1"
  }, {
    autoTrackExposure: !0
  });
  return s ? (0, a.jsx)(p.default, {}) : (0, a.jsx)(b, {})
}