"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
  }
}), s("47120"), s("653041");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("392711"),
  o = s("442837"),
  d = s("481060"),
  u = s("239091"),
  c = s("749210"),
  E = s("493544"),
  _ = s("479531"),
  I = s("210887"),
  T = s("246946"),
  S = s("594174"),
  f = s("186095"),
  m = s("6048"),
  N = s("154921"),
  g = s("251625"),
  h = s("226951"),
  C = s("51144"),
  R = s("434404"),
  x = s("372454"),
  L = s("999382"),
  O = s("84613"),
  A = s("740903"),
  p = s("1080"),
  M = s("981631"),
  D = s("689938"),
  v = s("760739"),
  j = s("850169");

function G(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function U(e) {
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
class P extends l.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      guild: s
    } = this.props;
    return (0, a.jsxs)(d.Clickable, {
      className: i()(v.bannedUser, j.card),
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
    super(...e), G(this, "handleShowModal", () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: s,
        ban: l
      } = this.props;
      (0, d.openModal)(n => (0, a.jsx)(U, {
        ...n,
        guild: e,
        user: t,
        ban: l,
        hideDiscriminator: s
      }))
    }), G(this, "handleContextMenu", e => {
      (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.e("23835").then(s.bind(s, "768079"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: this.props.user
        })
      })
    })
  }
}
class b extends l.PureComponent {
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
    super(...e), G(this, "getSortedBans", (0, g.cachedFunction)((e, t) => {
      if (null == e) return [];
      let s = this.makeFilter(t),
        a = [];
      for (let t of e.keys()) {
        let e = S.default.getUser(t);
        null != e && s(e) && a.push(e)
      }
      return a.sort((e, t) => e.username.localeCompare(t.username))
    })), G(this, "getRowHeight", (e, t) => {
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
    }), G(this, "renderRow", e => {
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
      let u = this.getSortedBans(n, o)[l],
        c = null == n ? void 0 : n.get(null !== (t = null == u ? void 0 : u.id) && void 0 !== t ? t : "");
      if (null != u && null != c) return (0, a.jsx)(P, {
        user: u,
        ban: c,
        hideDiscriminator: i,
        guild: r
      }, u.id)
    }), G(this, "getSectionHeight", e => {
      if (e > 0) return 0;
      let {
        bans: t
      } = this.props;
      return null == t ? 462 : 120
    }), G(this, "renderSection", () => {
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
          darkSrc: s("532747"),
          lightSrc: s("433466"),
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
    })
  }
}
let B = o.default.connectStores([L.default, I.default, T.default], () => {
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
})(b);

function y() {
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
  return s ? (0, a.jsx)(p.default, {}) : (0, a.jsx)(B, {})
}