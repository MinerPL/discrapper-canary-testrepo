"use strict";
t.d(s, {
  Z: function() {
    return P
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t(442837),
  c = t(481060),
  d = t(239091),
  u = t(749210),
  E = t(493544),
  _ = t(479531),
  I = t(210887),
  T = t(246946),
  N = t(594174),
  m = t(154921),
  S = t(251625),
  h = t(226951),
  g = t(51144),
  x = t(434404),
  C = t(372454),
  R = t(999382),
  L = t(84613),
  O = t(740903),
  A = t(1080),
  p = t(981631),
  M = t(689938),
  f = t(939056),
  v = t(164149);

function D(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function Z(e) {
  let {
    transitionState: s,
    guild: t,
    user: l,
    ban: a,
    hideDiscriminator: r,
    onClose: o
  } = e, [d, E] = i.useState(!1), [I, T] = i.useState(null);
  async function N() {
    if (null != t) {
      T(null), E(!0);
      try {
        await u.Z.unbanUser(t.id, l.id), o()
      } catch (e) {
        T(new _.Z(e)), E(!1)
      }
    }
  }
  return (0, n.jsxs)(c.ModalRoot, {
    className: f.bannedUserModal,
    transitionState: s,
    children: [(0, n.jsxs)(c.ModalHeader, {
      className: f.header,
      separator: !1,
      children: [(0, n.jsx)(m.Z, {
        size: m.Z.Sizes.SIZE_24,
        className: f.userUsername,
        children: g.ZP.getUserTag(l, {
          mode: "username",
          identifiable: r ? "never" : "always"
        })
      }), r || l.isPomelo() ? null : (0, n.jsxs)(m.Z, {
        size: m.Z.Sizes.SIZE_24,
        className: f.userDiscrim,
        children: ["#", l.discriminator]
      })]
    }), (0, n.jsxs)(c.ModalContent, {
      className: f.content,
      children: [(0, n.jsx)(c.Text, {
        className: f.reasonHeader,
        variant: "text-xs/normal",
        children: M.Z.Messages.BAN_REASON
      }), (0, n.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: null != a.reason && "" !== a.reason ? a.reason : M.Z.Messages.NO_BAN_REASON
      }), null != I ? (0, n.jsx)(c.Text, {
        className: f.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: I.getAnyErrorMessage()
      }) : null]
    }), (0, n.jsxs)(c.ModalFooter, {
      className: f.footer,
      children: [(0, n.jsx)(c.Button, {
        onClick: N,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.RED,
        submitting: d,
        children: M.Z.Messages.REVOKE_BAN
      }), (0, n.jsx)(c.Button, {
        onClick: o,
        children: M.Z.Messages.DONE
      })]
    })]
  })
}
class j extends i.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: s,
      guild: t
    } = this.props;
    return (0, n.jsxs)(c.Clickable, {
      className: a()(f.bannedUser, v.card),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, n.jsx)(c.Avatar, {
        src: e.getAvatarURL(null == t ? void 0 : t.id, 40),
        "aria-label": e.username,
        size: c.AvatarSizes.SIZE_40,
        className: f.bannedUserAvatar
      }), (0, n.jsxs)("div", {
        className: f.username,
        children: [g.ZP.getUserTag(e, {
          mode: "username",
          identifiable: s ? "never" : "always"
        }), !s && !e.isPomelo() && (0, n.jsxs)("span", {
          className: f.discrim,
          children: ["#", e.discriminator]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), D(this, "handleShowModal", () => {
      let {
        guild: e,
        user: s,
        hideDiscriminator: t,
        ban: i
      } = this.props;
      (0, c.openModal)(l => (0, n.jsx)(Z, {
        ...l,
        guild: e,
        user: s,
        ban: i,
        hideDiscriminator: t
      }))
    }), D(this, "handleContextMenu", e => {
      (0, d.jW)(e, async () => {
        let {
          default: e
        } = await t.e("23835").then(t.bind(t, 768079));
        return s => (0, n.jsx)(e, {
          ...s,
          user: this.props.user
        })
      })
    })
  }
}
class U extends i.PureComponent {
  makeFilter(e) {
    if (null == e || 0 === e.length) return e => null != e;
    {
      let s = RegExp("^".concat(h.Z.escape(e)), "i");
      return t => null != t && (t.id === e || s.test(t.username))
    }
  }
  render() {
    let {
      bans: e,
      guild: s,
      searchQuery: t
    } = this.props;
    if (null == s) return null;
    let i = this.getSortedBans(e, t);
    return (0, n.jsx)(E.Xi, {
      sections: [Math.max(1, i.length)],
      sectionHeight: this.getSectionHeight,
      renderSection: this.renderSection,
      rowHeight: this.getRowHeight,
      renderRow: this.renderRow
    })
  }
  handleModerationClick() {
    x.Z.setSection(p.pNK.SAFETY), (0, L.K)(O.u.DM_AND_SPAM_PROTECTION)
  }
  handleQueryChange(e) {
    x.Z.setSearchQuery(e)
  }
  handleQueryClear() {
    x.Z.setSearchQuery("")
  }
  constructor(...e) {
    super(...e), D(this, "getSortedBans", (0, S.oH)((e, s) => {
      if (null == e) return [];
      let t = this.makeFilter(s),
        n = [];
      for (let s of e.keys()) {
        let e = N.default.getUser(s);
        null != e && t(e) && n.push(e)
      }
      return n.sort((e, s) => e.username.localeCompare(s.username))
    })), D(this, "getRowHeight", (e, s) => {
      var t;
      if (e > 0) return 0;
      let {
        bans: n,
        searchQuery: i
      } = this.props, l = this.getSortedBans(n, i);
      if (0 === l.length && 1 === s) return 56;
      let a = l[s],
        r = null == n ? void 0 : n.get(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : "");
      return null == a || null == r ? 0 : 56
    }), D(this, "renderRow", e => {
      var s;
      let {
        section: t,
        row: i
      } = e, {
        bans: l,
        streamerMode: a,
        guild: r,
        searchQuery: o
      } = this.props;
      if (t > 0) return null;
      if (null == l && 0 === i) return (0, n.jsx)(c.Spinner, {
        className: f.spinner,
        type: c.Spinner.Type.SPINNING_CIRCLE
      }, "spinner");
      let d = this.getSortedBans(l, o)[i],
        u = null == l ? void 0 : l.get(null !== (s = null == d ? void 0 : d.id) && void 0 !== s ? s : "");
      if (null != d && null != u) return (0, n.jsx)(j, {
        user: d,
        ban: u,
        hideDiscriminator: a,
        guild: r
      }, d.id)
    }), D(this, "getSectionHeight", e => {
      if (e > 0) return 0;
      let {
        bans: s
      } = this.props;
      return null == s ? 462 : 120
    }), D(this, "renderSection", () => {
      var e;
      let s;
      let {
        bans: i,
        theme: l,
        searchQuery: a
      } = this.props;
      null == i ? s = null : (null == i ? void 0 : i.size) === 0 && (s = (0, n.jsxs)(c.EmptyState, {
        theme: l,
        className: f.emptyState,
        children: [(0, n.jsx)(c.EmptyStateImage, {
          darkSrc: t(532747),
          lightSrc: t(433466),
          width: 256,
          height: 212
        }), (0, n.jsx)(c.EmptyStateText, {
          note: M.Z.Messages.BANS_NO_USERS_BANNED,
          style: {
            maxWidth: 300
          },
          children: M.Z.Messages.NO_BANS
        })]
      }));
      let r = null !== (e = null == i ? void 0 : i.size) && void 0 !== e ? e : 0;
      return (0, n.jsxs)(c.FormSection, {
        tag: c.FormTitleTags.H1,
        title: M.Z.Messages.BANS_HEADER.format({
          bans: r
        }),
        children: [(0, n.jsxs)("div", {
          className: f.settingsHeader,
          children: [(0, n.jsx)(c.FormText, {
            type: c.FormTextTypes.DESCRIPTION,
            className: f.description,
            children: M.Z.Messages.BANS_HINT.format({
              onModerationClick: this.handleModerationClick
            })
          }), null == s && (0, n.jsx)(c.SearchBar, {
            className: f.searchBar,
            query: null != a ? a : "",
            placeholder: M.Z.Messages.BANS_SEARCH_PLACEHOLDER,
            "aria-label": M.Z.Messages.BANS_SEARCH_PLACEHOLDER,
            onChange: this.handleQueryChange,
            onClear: this.handleQueryClear
          })]
        }), (0, n.jsx)(c.FormDivider, {
          style: {
            marginBottom: -1
          }
        }), s]
      }, "bans-header")
    })
  }
}
let G = o.ZP.connectStores([R.Z, I.Z, T.Z], () => {
  let {
    bans: e,
    guild: s,
    searchQuery: t
  } = R.Z.getProps();
  return {
    searchQuery: null != t ? t : "",
    bans: e,
    guild: s,
    theme: I.Z.theme,
    streamerMode: T.Z.hidePersonalInformation
  }
})(U);

function P() {
  var e;
  let {
    guild: s
  } = (0, o.e7)([R.Z], () => R.Z.getProps(), [], r.isEqual), {
    enabled: t
  } = C.T.useExperiment({
    guildId: null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : p.lds,
    location: "4d6318_1"
  }, {
    autoTrackExposure: !0
  });
  return t ? (0, n.jsx)(A.Z, {}) : (0, n.jsx)(G, {})
}