"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("424973"), n("222007");
var l = n("37983"),
  i = n("884691"),
  u = n("414456"),
  a = n.n(u),
  r = n("446674"),
  d = n("551042"),
  s = n("77078"),
  o = n("450911"),
  c = n("87657"),
  E = n("812204"),
  f = n("685665"),
  C = n("679653"),
  _ = n("419830"),
  A = n("123561"),
  T = n("144491"),
  S = n("161778"),
  h = n("233069"),
  I = n("27618"),
  L = n("18494"),
  N = n("162771"),
  g = n("843823"),
  D = n("697218"),
  U = n("941886"),
  R = n("810567"),
  p = n("904276"),
  v = n("875436"),
  O = n("449008"),
  P = n("6468"),
  m = n("16002"),
  G = n("782340"),
  x = n("372015"),
  H = n("855143"),
  M = n("934516");

function y(e) {
  let {
    channel: t,
    ChannelIcon: n,
    selected: i,
    onClick: u
  } = e, a = (0, C.default)(t);
  return (0, l.jsxs)(s.Clickable, {
    className: x.channelRow,
    onClick: () => u(t.id),
    children: [i ? (0, l.jsx)(v.default, {
      className: x.radioIcon
    }) : (0, l.jsx)(p.default, {
      className: x.radioIcon
    }), (0, l.jsx)(n, {
      className: x.icon,
      width: 16,
      height: 16
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "interactive-active",
      children: a
    })]
  })
}

function w(e) {
  let {
    guildId: t,
    selectedChannelId: n,
    onSelectChannelId: u
  } = e, d = (0, r.useStateFromStores)([L.default], () => L.default.getChannelId()), {
    guildChannels: o
  } = (0, r.useStateFromStoresObject)([A.default], () => A.default.getGuildWithoutChangingCommunityRows(t)), c = i.useMemo(() => {
    let e = [];
    return o.forEachChannel(t => {
      !1 !== (0, P.canAttachClipsToChannel)(t.id) && ((0, h.isGuildSelectableChannelType)(t.type) || (0, h.isGuildVocalChannelType)(t.type)) && e.push(t)
    }), e.sort((e, t) => e.id === d ? -1 : t.id === d ? 1 : 0)
  }, [o, d]);
  return 0 === c.length ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: a(x.divider, x.bottomDivider)
    }), (0, l.jsx)(s.Text, {
      variant: "eyebrow",
      color: "interactive-normal",
      className: x.contentPadding,
      children: G.default.Messages.CLIP_SHARE_SELECT_CHANNEL
    }), (0, l.jsx)(s.List, {
      sections: [c.length],
      sectionHeight: 0,
      renderRow: e => {
        let {
          section: t,
          row: i
        } = e;
        if (t > 0) return null;
        let a = c[i],
          r = (0, _.getChannelIconComponent)(a);
        return null == r ? null : (0, l.jsx)(y, {
          channel: a,
          ChannelIcon: r,
          selected: n === a.id,
          onClick: u
        }, a.id)
      },
      rowHeight: (e, t) => {
        if (e > 0) return 0;
        let n = c[t];
        return null != n ? 56 : 0
      },
      renderSection: () => null,
      className: a(x.channelList, x.contentPadding),
      fade: !0
    })]
  })
}

function F(e) {
  let {
    friends: t,
    searchQuery: n,
    disabled: u,
    onShareClip: d
  } = e, o = i.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), E = (0, r.useStateFromStores)([S.default], () => S.default.theme);
  return 0 === o.length ? (0, l.jsxs)(U.default, {
    theme: E,
    className: x.emptyStateContainer,
    children: [(0, l.jsx)(U.default.Image, {
      width: 415,
      height: 75,
      lightSrc: M,
      darkSrc: H
    }), (0, l.jsx)(U.default.Text, {
      note: G.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
    })]
  }) : (0, l.jsx)(s.List, {
    sections: [o.length],
    sectionHeight: 0,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let i = o[n],
        a = o[n].username;
      return (0, l.jsxs)("div", {
        className: x.userRow,
        children: [(0, l.jsx)(c.default, {
          user: i
        }), (0, l.jsx)(s.Text, {
          className: x.username,
          variant: "text-md/normal",
          children: a
        }), (0, l.jsx)(s.Button, {
          disabled: u,
          onClick: () => d(i.id),
          className: x.friendShareButton,
          look: s.ButtonLooks.OUTLINED,
          size: s.ButtonSizes.SMALL,
          color: s.ButtonColors.BRAND,
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: G.default.Messages.SHARE
          })
        })]
      }, i.id)
    },
    rowHeight: (e, t) => {
      if (e > 0) return 0;
      let n = o[t];
      return null != n ? 52 : 0
    },
    renderSection: () => null,
    className: a(x.friendsList, x.contentPadding),
    fade: !0
  })
}

function j(e) {
  let {
    clip: t,
    editMetadata: n,
    transitionState: u,
    onClose: c
  } = e, [C, _] = i.useState(""), [A, S] = i.useState(!1), [h, L] = i.useState(null), U = (0, r.useStateFromStoresArray)([I.default], () => I.default.getFriendIDs()), p = (0, r.useStateFromStoresArray)([g.default, D.default], () => U.map(e => D.default.getUser(e)).filter(O.isNotNullish).sort((e, t) => {
    var n, l, i, u;
    return (null !== (i = null === (n = g.default.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== i ? i : 0) - (null !== (u = null === (l = g.default.getUserAffinity(e.id)) || void 0 === l ? void 0 : l.affinity) && void 0 !== u ? u : 0)
  }), [U]), v = (0, r.useStateFromStores)([N.default], () => N.default.getGuildId()), {
    analyticsLocations: P
  } = (0, f.default)(E.default.CLIPS_SHARE_MODAL);
  async function H(e) {
    let l = null != e ? e : h;
    if (null != l) {
      S(!0);
      try {
        await (0, m.shareClip)(t, {
          channelId: l,
          editMetadata: n,
          analyticsLocations: P
        }), null == e && (0, T.transitionToChannel)(l), d.closeAllModals()
      } catch (e) {} finally {
        S(!1)
      }
    }
  }
  async function M(e) {
    let t = await o.default.openPrivateChannel(e);
    await H(t)
  }
  return (0, l.jsxs)(s.ModalRoot, {
    size: s.ModalSize.SMALL,
    transitionState: u,
    children: [(0, l.jsx)(s.Heading, {
      className: a(x.title, x.contentPadding),
      variant: "heading-lg/semibold",
      color: "interactive-active",
      children: G.default.Messages.CLIP_SHARE_MODAL_TITLE
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      className: a(x.subtitle, x.contentPadding),
      children: G.default.Messages.CLIP_SHARE_MODAL_SUBTITLE
    }), (0, l.jsx)(R.default, {
      className: x.searchBar,
      query: C,
      onChange: _,
      size: R.default.Sizes.MEDIUM,
      onClear: function() {
        _("")
      },
      placeholder: G.default.Messages.INVITE_SEARCH_FOR_FRIENDS
    }), (0, l.jsx)("div", {
      className: a(x.divider, x.topDivider)
    }), (0, l.jsx)(F, {
      searchQuery: C,
      friends: p,
      onShareClip: M,
      disabled: A
    }), null != v && (0, l.jsx)(w, {
      guildId: v,
      selectedChannelId: h,
      onSelectChannelId: L
    }), (0, l.jsxs)(s.ModalFooter, {
      children: [(0, l.jsx)(s.Button, {
        disabled: null == h,
        submitting: A,
        color: s.Button.Colors.BRAND,
        onClick: () => H(),
        children: G.default.Messages.CLIPS_EDIT_SHARE_CLIP
      }), (0, l.jsx)(s.Button, {
        submitting: A,
        look: s.ButtonLooks.LINK,
        onClick: c,
        color: s.ButtonColors.PRIMARY,
        children: G.default.Messages.BACK
      })]
    })]
  })
}