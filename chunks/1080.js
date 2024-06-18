"use strict";
t.d(s, {
  Z: function() {
    return B
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t.n(r),
  c = t(399606),
  d = t(481060),
  u = t(239091),
  E = t(749210),
  _ = t(479531),
  I = t(110924),
  T = t(410030),
  N = t(367907),
  m = t(906732),
  S = t(733026),
  h = t(246946),
  g = t(594174),
  x = t(695464),
  C = t(154921),
  R = t(626135),
  L = t(136015),
  O = t(51144),
  A = t(434404),
  p = t(999382),
  M = t(84613),
  f = t(740903),
  v = t(981631),
  D = t(689938),
  Z = t(409353);

function j(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function U(e) {
  var s;
  let {
    transitionState: t,
    guild: l,
    user: a,
    ban: r,
    hideDiscriminator: o,
    onClose: c
  } = e, [u, I] = i.useState(!1), [T, S] = i.useState(null), {
    analyticsLocations: h
  } = (0, m.ZP)(), g = null !== (s = null == h ? void 0 : h[0]) && void 0 !== s ? s : null;
  async function x() {
    if (null != l) {
      S(null), I(!0);
      try {
        await E.Z.unbanUser(l.id, a.id), c(), R.default.track(v.rMx.GUILD_BAN_REMOVED, {
          ...(0, N.hH)(l.id),
          target_user_id: a.id,
          reason: r.reason,
          location: g
        })
      } catch (e) {
        S(new _.Z(e)), I(!1)
      }
    }
  }
  return (0, n.jsxs)(d.ModalRoot, {
    className: Z.bannedUserModal,
    transitionState: t,
    children: [(0, n.jsxs)(d.ModalHeader, {
      className: Z.header,
      separator: !1,
      children: [(0, n.jsx)(C.Z, {
        size: C.Z.Sizes.SIZE_24,
        className: Z.userUsername,
        children: O.ZP.getUserTag(a, {
          mode: "username",
          identifiable: o ? "never" : "always"
        })
      }), o || a.isPomelo() ? null : (0, n.jsxs)(C.Z, {
        size: C.Z.Sizes.SIZE_24,
        className: Z.userDiscrim,
        children: ["#", a.discriminator]
      })]
    }), (0, n.jsxs)(d.ModalContent, {
      className: Z.content,
      children: [(0, n.jsx)(d.Text, {
        className: Z.reasonHeader,
        variant: "text-xs/normal",
        children: D.Z.Messages.BAN_REASON
      }), (0, n.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: null != r.reason && "" !== r.reason ? r.reason : D.Z.Messages.NO_BAN_REASON
      }), null != T ? (0, n.jsx)(d.Text, {
        className: Z.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: T.getAnyErrorMessage()
      }) : null]
    }), (0, n.jsxs)(d.ModalFooter, {
      className: Z.footer,
      children: [(0, n.jsx)(d.Button, {
        onClick: x,
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.RED,
        submitting: u,
        children: D.Z.Messages.REVOKE_BAN
      }), (0, n.jsx)(d.Button, {
        onClick: c,
        children: D.Z.Messages.DONE
      })]
    })]
  })
}
class G extends i.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: s,
      guild: t
    } = this.props, i = O.ZP.getGlobalName(e);
    return (0, n.jsxs)(d.Clickable, {
      className: a()(Z.bannedUser),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, n.jsx)(d.Avatar, {
        src: e.getAvatarURL(null == t ? void 0 : t.id, 40),
        "aria-label": e.username,
        size: d.AvatarSizes.SIZE_40,
        className: Z.bannedUserAvatar
      }), (0, n.jsxs)("div", {
        className: Z.username,
        children: [O.ZP.getUserTag(e, {
          mode: "username",
          identifiable: s ? "never" : "always"
        }), !s && !e.isPomelo() && (0, n.jsxs)("span", {
          className: Z.discrim,
          children: ["#", e.discriminator]
        }), e.isPomelo() && (0, n.jsxs)("span", {
          className: Z.discrim,
          children: ["(", i, ")"]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), j(this, "handleShowModal", () => {
      let {
        guild: e,
        user: s,
        hideDiscriminator: t,
        ban: i
      } = this.props;
      (0, d.openModal)(l => (0, n.jsx)(U, {
        ...l,
        guild: e,
        user: s,
        ban: i,
        hideDiscriminator: t
      }))
    }), j(this, "handleContextMenu", e => {
      (0, u.jW)(e, async () => {
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
let P = i.forwardRef(function(e, s) {
  let {
    guild: t,
    sortedBans: l,
    bans: a
  } = e, r = (0, c.e7)([h.Z], () => h.Z.hidePersonalInformation, []), o = i.useCallback(e => {
    var s;
    if (null == a && 0 === e) return 60;
    let t = l[e],
      n = null == a ? void 0 : a.get(null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : "");
    return null == t || null == n ? 0 : 60
  }, [a, l]), u = i.useCallback(e => {
    var s;
    if (null == a && 0 === e) return (0, n.jsx)(d.Spinner, {
      className: Z.spinner,
      type: d.Spinner.Type.SPINNING_CIRCLE
    }, "spinner");
    let i = l[e],
      o = null == a ? void 0 : a.get(null !== (s = null == i ? void 0 : i.id) && void 0 !== s ? s : "");
    if (null != i && null != o) return (0, n.jsx)(G, {
      user: i,
      ban: o,
      hideDiscriminator: r,
      guild: t
    }, i.id)
  }, [a, t, l, r]);
  return (0, n.jsx)(x.Z, {
    role: "listbox",
    listPadding: [8, 8, 8, 8],
    rowCount: l.length,
    rowHeight: o,
    renderRow: u,
    ref: s
  })
});

function b(e) {
  let {
    guildId: s,
    storedSearchQuery: t
  } = e, [l, a] = i.useState(null != t ? t : ""), [r, o] = i.useState(!1), c = i.useCallback(() => {
    A.Z.setSection(v.pNK.SAFETY), (0, M.K)(f.u.DM_AND_SPAM_PROTECTION)
  }, []), u = i.useCallback(e => {
    a(e), 0 === e.trim().length && A.Z.setSearchQuery(e)
  }, []), _ = i.useCallback(() => {
    a(""), A.Z.setSearchQuery("")
  }, []), I = i.useCallback(async () => {
    if (0 === l.trim().length) {
      A.Z.setSearchQuery(l), o(!1);
      return
    }
    if (!r) try {
      o(!0);
      let [e, t] = (0, S.C)(l), n = e[0];
      A.Z.setSearchQuery(l), await E.Z.searchGuildBans(s, n, t), o(!1)
    } catch (e) {
      o(!1)
    }
  }, [s, r, l]), T = i.useCallback(e => {
    "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), I())
  }, [I]);
  return (0, n.jsxs)(d.FormSection, {
    tag: d.FormTitleTags.H1,
    title: D.Z.Messages.BANS_HEADER_NEW,
    children: [(0, n.jsx)("div", {
      className: Z.settingsHeader,
      children: (0, n.jsx)(d.FormText, {
        type: d.FormTextTypes.DESCRIPTION,
        className: Z.description,
        children: D.Z.Messages.BANS_HINT.format({
          onModerationClick: c
        })
      })
    }), (0, n.jsxs)("div", {
      className: Z.bansSearchContainer,
      children: [(0, n.jsx)(d.SearchBar, {
        className: Z.searchBar,
        query: null != l ? l : "",
        placeholder: D.Z.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
        "aria-label": D.Z.Messages.BANS_SEARCH_PLACEHOLDER_NEW,
        onChange: u,
        onKeyDown: T,
        onClear: _,
        size: d.SearchBar.Sizes.MEDIUM,
        isLoading: r
      }), (0, n.jsx)(d.Button, {
        color: d.Button.Colors.BRAND,
        onClick: I,
        size: d.Button.Sizes.SMALL,
        disabled: r,
        submitting: r,
        className: Z.searchButton,
        children: D.Z.Messages.SEARCH
      })]
    })]
  }, "bans-header")
}

function B() {
  var e, s;
  let {
    guild: l,
    searchQuery: u
  } = (0, c.e7)([p.Z], () => p.Z.getProps(), [], r.isEqual), _ = null != u && u.trim().length > 0, N = (0, I.Z)(_), m = _ !== N, [h] = (0, c.e7)([p.Z], () => p.Z.getBans(), [], L.Q), x = null !== (e = null == h ? void 0 : h.size) && void 0 !== e ? e : 0, C = (0, T.ZP)(), R = null !== (s = null == l ? void 0 : l.id) && void 0 !== s ? s : v.lds, O = i.useRef(null), A = i.useCallback(e => null == e || 0 === e.length ? e => null != e : s => {
    if (null == s || 0 === e.trim().length) return !1;
    let [
      [t], n
    ] = (0, S.C)(e);
    return !!n.includes(s.id) || null != t && (!!(s.username.toLowerCase().includes(t.toLowerCase()) || null != s.globalName && s.globalName.toLowerCase().includes(t.toLowerCase())) || !1)
  }, []), M = i.useCallback((e, s, t) => {
    if (null == e || 0 === t) return [];
    let n = [];
    for (let t of e.keys()) {
      let e = g.default.getUser(t);
      null != e && A(s)(e) && n.push(e)
    }
    return n
  }, [A]), f = i.useMemo(() => M(h, u, x), [h, M, u, x]), j = null != h, U = f.length % 1e3 == 0 && f.length > 0 && j, G = 0 === f.length, [B, y] = i.useState({
    currentPage: 1,
    pageSize: 100
  });
  i.useEffect(() => {
    m && 1 !== B.currentPage && y(e => ({
      ...e,
      currentPage: 1
    }))
  }, [m, B.currentPage]);
  let F = i.useCallback(e => {
      E.Z.fetchGuildBansBatch(R, 1e3, e)
    }, [R]),
    w = i.useMemo(() => o().chunk(f, B.pageSize), [B.pageSize, f]),
    k = i.useCallback(e => {
      var s, t, n;
      if (null === (s = O.current) || void 0 === s || s.scrollToSectionTop(0), (e + 1) * B.pageSize > f.length && U && !_ && (H.current = null !== (n = null === (t = f[f.length - 1]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null, F(H.current)), null != w[e - 1] || !!U) y(s => ({
        ...s,
        currentPage: e
      }))
    }, [B.pageSize, f, U, w, F, _]),
    H = i.useRef(null);
  i.useEffect(() => {
    F(H.current)
  }, [F]);
  let V = i.useMemo(() => {
    var e;
    return null !== (e = w[B.currentPage - 1]) && void 0 !== e ? e : []
  }, [w, B.currentPage]);
  return null == l ? null : (0, n.jsxs)("div", {
    className: a()(Z.container),
    children: [(0, n.jsx)(b, {
      guildId: R,
      storedSearchQuery: u
    }), (0, n.jsxs)("div", {
      className: a()(Z.scrollerContainer),
      children: [!G && (0, n.jsx)(P, {
        guild: l,
        bans: h,
        sortedBans: V,
        ref: O
      }), !U && G && (0, n.jsxs)(d.EmptyState, {
        theme: C,
        className: Z.emptyState,
        children: [(0, n.jsx)(d.EmptyStateImage, {
          darkSrc: t(532747),
          lightSrc: t(433466),
          width: 256,
          height: 212
        }), (0, n.jsx)(d.EmptyStateText, {
          note: D.Z.Messages.BANS_NO_USERS_BANNED,
          style: {
            maxWidth: 300
          },
          children: D.Z.Messages.NO_BANS
        })]
      })]
    }), (0, n.jsx)("div", {
      className: a()(Z.__invalid_paginationContainer),
      children: (0, n.jsx)(d.Paginator, {
        className: a()(Z.paginationInput),
        totalCount: f.length + (U ? B.pageSize : 0),
        pageSize: B.pageSize,
        currentPage: B.currentPage,
        onPageChange: k,
        maxVisiblePages: 9
      })
    })]
  })
}