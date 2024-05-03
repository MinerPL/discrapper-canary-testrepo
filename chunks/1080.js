"use strict";
s.r(t), s.d(t, {
  default: function() {
    return H
  }
}), s("47120"), s("653041");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("392711"),
  o = s.n(r),
  d = s("399606"),
  u = s("481060"),
  c = s("239091"),
  E = s("749210"),
  _ = s("479531"),
  I = s("110924"),
  T = s("410030"),
  S = s("367907"),
  f = s("906732"),
  m = s("733026"),
  N = s("246946"),
  g = s("594174"),
  h = s("186095"),
  C = s("6048"),
  R = s("695464"),
  x = s("154921"),
  L = s("626135"),
  O = s("136015"),
  A = s("51144"),
  p = s("434404"),
  M = s("999382"),
  D = s("84613"),
  v = s("740903"),
  G = s("981631"),
  j = s("689938"),
  U = s("676230");

function P(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function b(e) {
  var t;
  let {
    transitionState: s,
    guild: n,
    user: i,
    ban: r,
    hideDiscriminator: o,
    onClose: d
  } = e, [c, I] = l.useState(!1), [T, m] = l.useState(null), {
    analyticsLocations: N
  } = (0, f.default)(), g = null !== (t = null == N ? void 0 : N[0]) && void 0 !== t ? t : null;
  async function h() {
    if (null != n) {
      m(null), I(!0);
      try {
        await E.default.unbanUser(n.id, i.id), d(), L.default.track(G.AnalyticEvents.GUILD_BAN_REMOVED, {
          ...(0, S.collectGuildAnalyticsMetadata)(n.id),
          target_user_id: i.id,
          reason: r.reason,
          location: g
        })
      } catch (e) {
        m(new _.default(e)), I(!1)
      }
    }
  }
  return (0, a.jsxs)(u.ModalRoot, {
    className: U.bannedUserModal,
    transitionState: s,
    children: [(0, a.jsxs)(u.ModalHeader, {
      className: U.header,
      separator: !1,
      children: [(0, a.jsx)(x.default, {
        size: x.default.Sizes.SIZE_24,
        className: U.userUsername,
        children: A.default.getUserTag(i, {
          mode: "username",
          identifiable: o ? "never" : "always"
        })
      }), o || i.isPomelo() ? null : (0, a.jsxs)(x.default, {
        size: x.default.Sizes.SIZE_24,
        className: U.userDiscrim,
        children: ["#", i.discriminator]
      })]
    }), (0, a.jsxs)(u.ModalContent, {
      className: U.content,
      children: [(0, a.jsx)(u.Text, {
        className: U.reasonHeader,
        variant: "text-xs/normal",
        children: j.default.Messages.BAN_REASON
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: null != r.reason && "" !== r.reason ? r.reason : j.default.Messages.NO_BAN_REASON
      }), null != T ? (0, a.jsx)(u.Text, {
        className: U.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: T.getAnyErrorMessage()
      }) : null]
    }), (0, a.jsxs)(u.ModalFooter, {
      className: U.footer,
      children: [(0, a.jsx)(u.Button, {
        onClick: h,
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.RED,
        submitting: c,
        children: j.default.Messages.REVOKE_BAN
      }), (0, a.jsx)(u.Button, {
        onClick: d,
        children: j.default.Messages.DONE
      })]
    })]
  })
}
class B extends l.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      guild: s
    } = this.props, l = A.default.getGlobalName(e);
    return (0, a.jsxs)(u.Clickable, {
      className: i()(U.bannedUser),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, a.jsx)(u.Avatar, {
        src: e.getAvatarURL(null == s ? void 0 : s.id, 40),
        "aria-label": e.username,
        size: u.AvatarSizes.SIZE_40,
        className: U.bannedUserAvatar
      }), (0, a.jsxs)("div", {
        className: U.username,
        children: [A.default.getUserTag(e, {
          mode: "username",
          identifiable: t ? "never" : "always"
        }), !t && !e.isPomelo() && (0, a.jsxs)("span", {
          className: U.discrim,
          children: ["#", e.discriminator]
        }), e.isPomelo() && (0, a.jsxs)("span", {
          className: U.discrim,
          children: ["(", l, ")"]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), P(this, "handleShowModal", () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: s,
        ban: l
      } = this.props;
      (0, u.openModal)(n => (0, a.jsx)(b, {
        ...n,
        guild: e,
        user: t,
        ban: l,
        hideDiscriminator: s
      }))
    }), P(this, "handleContextMenu", e => {
      (0, c.openContextMenuLazy)(e, async () => {
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
let y = l.forwardRef(function(e, t) {
  let {
    guild: s,
    sortedBans: n,
    bans: i
  } = e, r = (0, d.useStateFromStores)([N.default], () => N.default.hidePersonalInformation, []), o = l.useCallback(e => {
    var t;
    if (null == i && 0 === e) return 60;
    let s = n[e],
      a = null == i ? void 0 : i.get(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "");
    return null == s || null == a ? 0 : 60
  }, [i, n]), c = l.useCallback(e => {
    var t;
    if (null == i && 0 === e) return (0, a.jsx)(u.Spinner, {
      className: U.spinner,
      type: u.Spinner.Type.SPINNING_CIRCLE
    }, "spinner");
    let l = n[e],
      o = null == i ? void 0 : i.get(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "");
    if (null != l && null != o) return (0, a.jsx)(B, {
      user: l,
      ban: o,
      hideDiscriminator: r,
      guild: s
    }, l.id)
  }, [i, s, n, r]);
  return (0, a.jsx)(R.default, {
    role: "listbox",
    listPadding: [8, 8, 8, 8],
    rowCount: n.length,
    rowHeight: o,
    renderRow: c,
    ref: t
  })
});

function F(e) {
  let {
    guildId: t,
    storedSearchQuery: s
  } = e, [n, i] = l.useState(null != s ? s : ""), [r, o] = l.useState(!1), d = l.useCallback(() => {
    p.default.setSection(G.GuildSettingsSections.SAFETY), (0, D.setSafetyPage)(v.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION)
  }, []), c = l.useCallback(e => {
    i(e), 0 === e.trim().length && p.default.setSearchQuery(e)
  }, []), _ = l.useCallback(() => {
    i(""), p.default.setSearchQuery("")
  }, []), I = l.useCallback(async () => {
    if (0 === n.trim().length) {
      p.default.setSearchQuery(n), o(!1);
      return
    }
    if (!r) try {
      o(!0);
      let [e, s] = (0, m.splitQuery)(n), a = e[0];
      p.default.setSearchQuery(n), await E.default.searchGuildBans(t, a, s), o(!1)
    } catch (e) {
      o(!1)
    }
  }, [t, r, n]), T = l.useCallback(e => {
    "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), I())
  }, [I]);
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: j.default.Messages.BANS_HEADER_NEW,
    children: [(0, a.jsx)("div", {
      className: U.settingsHeader,
      children: (0, a.jsx)(u.FormText, {
        type: u.FormTextTypes.DESCRIPTION,
        className: U.description,
        children: j.default.Messages.BANS_HINT.format({
          onModerationClick: d
        })
      })
    }), (0, a.jsxs)("div", {
      className: U.bansSearchContainer,
      children: [(0, a.jsx)(C.default, {
        className: U.searchBar,
        query: null != n ? n : "",
        placeholder: j.default.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
        "aria-label": j.default.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
        onChange: c,
        onKeyDown: T,
        onClear: _,
        size: C.default.Sizes.MEDIUM,
        isLoading: r
      }), (0, a.jsx)(u.Button, {
        color: u.Button.Colors.BRAND,
        onClick: I,
        size: u.Button.Sizes.SMALL,
        disabled: r,
        submitting: r,
        className: U.searchButton,
        children: j.default.Messages.SEARCH
      })]
    })]
  }, "bans-header")
}

function H() {
  var e, t;
  let {
    guild: n,
    searchQuery: c
  } = (0, d.useStateFromStores)([M.default], () => M.default.getProps(), [], r.isEqual), _ = null != c && c.trim().length > 0, S = (0, I.default)(_), f = _ !== S, [N] = (0, d.useStateFromStores)([M.default], () => M.default.getBans(), [], O.isVersionEqual), C = null !== (e = null == N ? void 0 : N.size) && void 0 !== e ? e : 0, R = (0, T.default)(), x = null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : G.EMPTY_STRING_SNOWFLAKE_ID, L = l.useRef(null), A = l.useCallback(e => null == e || 0 === e.length ? e => null != e : t => {
    if (null == t || 0 === e.trim().length) return !1;
    let [
      [s], a
    ] = (0, m.splitQuery)(e);
    return !!a.includes(t.id) || null != s && (!!(t.username.toLowerCase().includes(s.toLowerCase()) || null != t.globalName && t.globalName.toLowerCase().includes(s.toLowerCase())) || !1)
  }, []), p = l.useCallback((e, t, s) => {
    if (null == e || 0 === s) return [];
    let a = [];
    for (let s of e.keys()) {
      let e = g.default.getUser(s);
      null != e && A(t)(e) && a.push(e)
    }
    return a
  }, [A]), D = l.useMemo(() => p(N, c, C), [N, p, c, C]), v = null != N, P = D.length % 1e3 == 0 && D.length > 0 && v, b = 0 === D.length, [B, H] = l.useState({
    currentPage: 1,
    pageSize: 100
  });
  l.useEffect(() => {
    f && 1 !== B.currentPage && H(e => ({
      ...e,
      currentPage: 1
    }))
  }, [f, B.currentPage]);
  let k = l.useCallback(e => {
      E.default.fetchGuildBansBatch(x, 1e3, e)
    }, [x]),
    w = l.useMemo(() => o().chunk(D, B.pageSize), [B.pageSize, D]),
    V = l.useCallback(e => {
      var t, s, a;
      null === (t = L.current) || void 0 === t || t.scrollToSectionTop(0), (e + 1) * B.pageSize > D.length && P && !_ && (Y.current = null !== (a = null === (s = D[D.length - 1]) || void 0 === s ? void 0 : s.id) && void 0 !== a ? a : null, k(Y.current)), (null != w[e - 1] || P) && H(t => ({
        ...t,
        currentPage: e
      }))
    }, [B.pageSize, D, P, w, k, _]),
    Y = l.useRef(null);
  l.useEffect(() => {
    k(Y.current)
  }, [k]);
  let W = l.useMemo(() => {
    var e;
    return null !== (e = w[B.currentPage - 1]) && void 0 !== e ? e : []
  }, [w, B.currentPage]);
  return null == n ? null : (0, a.jsxs)("div", {
    className: i()(U.container),
    children: [(0, a.jsx)(F, {
      guildId: x,
      storedSearchQuery: c
    }), (0, a.jsxs)("div", {
      className: i()(U.scrollerContainer),
      children: [!b && (0, a.jsx)(y, {
        guild: n,
        bans: N,
        sortedBans: W,
        ref: L
      }), !P && b && (0, a.jsxs)(h.default, {
        theme: R,
        className: U.emptyState,
        children: [(0, a.jsx)(h.EmptyStateImage, {
          darkSrc: s("532747"),
          lightSrc: s("433466"),
          width: 256,
          height: 212
        }), (0, a.jsx)(h.EmptyStateText, {
          note: j.default.Messages.BANS_NO_USERS_BANNED,
          style: {
            maxWidth: 300
          },
          children: j.default.Messages.NO_BANS
        })]
      })]
    }), (0, a.jsx)("div", {
      className: i()(U.__invalid_paginationContainer),
      children: (0, a.jsx)(u.Paginator, {
        className: i()(U.paginationInput),
        totalCount: D.length + (P ? B.pageSize : 0),
        pageSize: B.pageSize,
        currentPage: B.currentPage,
        onPageChange: V,
        maxVisiblePages: 9
      })
    })]
  })
}