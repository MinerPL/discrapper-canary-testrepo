"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("653041"), n("47120");
var l = n("735250"),
  i = n("470079"),
  a = n("120356"),
  u = n.n(a),
  r = n("442837"),
  d = n("952265"),
  E = n("481060"),
  o = n("493683"),
  s = n("700582"),
  _ = n("100527"),
  c = n("906732"),
  C = n("933557"),
  S = n("471445"),
  T = n("734307"),
  A = n("359110"),
  I = n("210887"),
  f = n("131704"),
  L = n("699516"),
  D = n("944486"),
  N = n("914010"),
  h = n("800599"),
  U = n("594174"),
  R = n("186095"),
  g = n("6048"),
  P = n("186523"),
  m = n("553826"),
  O = n("823379"),
  G = n("407316"),
  p = n("937784"),
  H = n("689938"),
  x = n("948935"),
  M = n("138715"),
  v = n("979770");

function j(e) {
  let {
    channel: t,
    ChannelIcon: n,
    selected: i,
    onClick: a
  } = e, u = (0, C.default)(t);
  return (0, l.jsxs)(E.Clickable, {
    className: x.channelRow,
    onClick: () => a(t.id),
    children: [i ? (0, l.jsx)(m.default, {
      className: x.radioIcon
    }) : (0, l.jsx)(P.default, {
      className: x.radioIcon
    }), (0, l.jsx)(n, {
      className: x.icon,
      width: 16,
      height: 16
    }), (0, l.jsx)(E.Text, {
      variant: "text-md/medium",
      color: "interactive-active",
      children: u
    })]
  })
}

function y(e) {
  let {
    guildId: t,
    selectedChannelId: n,
    onSelectChannelId: a
  } = e, d = (0, r.useStateFromStores)([D.default], () => D.default.getChannelId()), {
    guildChannels: o
  } = (0, r.useStateFromStoresObject)([T.default], () => T.default.getGuildWithoutChangingCommunityRows(t)), s = i.useMemo(() => {
    let e = [];
    return o.forEachChannel(t => {
      !1 !== (0, G.canAttachClipsToChannel)(t.id) && ((0, f.isGuildSelectableChannelType)(t.type) || (0, f.isGuildVocalChannelType)(t.type)) && e.push(t)
    }), e.sort((e, t) => e.id === d ? -1 : t.id === d ? 1 : 0)
  }, [o, d]);
  return 0 === s.length ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: u()(x.divider, x.bottomDivider)
    }), (0, l.jsx)(E.Text, {
      variant: "eyebrow",
      color: "interactive-normal",
      className: x.contentPadding,
      children: H.default.Messages.CLIP_SHARE_SELECT_CHANNEL
    }), (0, l.jsx)(E.List, {
      sections: [s.length],
      sectionHeight: 0,
      renderRow: e => {
        let {
          section: t,
          row: i
        } = e;
        if (t > 0) return null;
        let u = s[i],
          r = (0, S.getChannelIconComponent)(u);
        return null == r ? null : (0, l.jsx)(j, {
          channel: u,
          ChannelIcon: r,
          selected: n === u.id,
          onClick: a
        }, u.id)
      },
      rowHeight: (e, t) => e > 0 ? 0 : null != s[t] ? 56 : 0,
      renderSection: () => null,
      className: u()(x.channelList, x.contentPadding),
      fade: !0
    })]
  })
}

function F(e) {
  let {
    friends: t,
    searchQuery: n,
    disabled: a,
    onShareClip: d
  } = e, o = i.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), _ = (0, r.useStateFromStores)([I.default], () => I.default.theme);
  return 0 === o.length ? (0, l.jsxs)(R.default, {
    theme: _,
    className: x.emptyStateContainer,
    children: [(0, l.jsx)(R.default.Image, {
      width: 415,
      height: 75,
      lightSrc: v,
      darkSrc: M
    }), (0, l.jsx)(R.default.Text, {
      note: H.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
    })]
  }) : (0, l.jsx)(E.List, {
    sections: [o.length],
    sectionHeight: 0,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let i = o[n],
        u = o[n].username;
      return (0, l.jsxs)("div", {
        className: x.userRow,
        children: [(0, l.jsx)(s.default, {
          user: i
        }), (0, l.jsx)(E.Text, {
          className: x.username,
          variant: "text-md/normal",
          children: u
        }), (0, l.jsx)(E.Button, {
          disabled: a,
          onClick: () => d(i.id),
          className: x.__invalid_friendShareButton,
          look: E.ButtonLooks.OUTLINED,
          size: E.ButtonSizes.SMALL,
          color: E.ButtonColors.BRAND,
          children: (0, l.jsx)(E.Text, {
            variant: "text-sm/medium",
            children: H.default.Messages.SHARE
          })
        })]
      }, i.id)
    },
    rowHeight: (e, t) => e > 0 ? 0 : null != o[t] ? 52 : 0,
    renderSection: () => null,
    className: u()(x.friendsList, x.contentPadding),
    fade: !0
  })
}

function B(e) {
  let {
    clip: t,
    editMetadata: n,
    transitionState: a,
    onClose: s
  } = e, [C, S] = i.useState(""), [T, I] = i.useState(!1), [f, D] = i.useState(null), R = (0, r.useStateFromStoresArray)([L.default], () => L.default.getFriendIDs()), P = (0, r.useStateFromStoresArray)([h.default, U.default], () => R.map(e => U.default.getUser(e)).filter(O.isNotNullish).sort((e, t) => {
    var n, l, i, a;
    return (null !== (i = null === (n = h.default.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== i ? i : 0) - (null !== (a = null === (l = h.default.getUserAffinity(e.id)) || void 0 === l ? void 0 : l.affinity) && void 0 !== a ? a : 0)
  }), [R]), m = (0, r.useStateFromStores)([N.default], () => N.default.getGuildId()), {
    analyticsLocations: G
  } = (0, c.default)(_.default.CLIPS_SHARE_MODAL);
  async function M(e) {
    let l = null != e ? e : f;
    if (null != l) {
      I(!0);
      try {
        await (0, p.shareClip)(t, {
          channelId: l,
          editMetadata: n,
          analyticsLocations: G
        }), null == e && (0, A.transitionToChannel)(l), d.closeAllModals()
      } catch (e) {} finally {
        I(!1)
      }
    }
  }
  async function v(e) {
    let t = await o.default.openPrivateChannel(e);
    await M(t)
  }
  return (0, l.jsxs)(E.ModalRoot, {
    size: E.ModalSize.SMALL,
    transitionState: a,
    children: [(0, l.jsx)(E.Heading, {
      className: u()(x.title, x.contentPadding),
      variant: "heading-lg/semibold",
      color: "interactive-active",
      children: H.default.Messages.CLIP_SHARE_MODAL_TITLE
    }), (0, l.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      className: u()(x.subtitle, x.contentPadding),
      children: H.default.Messages.CLIP_SHARE_MODAL_SUBTITLE
    }), (0, l.jsx)(g.default, {
      className: x.searchBar,
      query: C,
      onChange: S,
      size: g.default.Sizes.MEDIUM,
      onClear: function() {
        S("")
      },
      placeholder: H.default.Messages.INVITE_SEARCH_FOR_FRIENDS
    }), (0, l.jsx)("div", {
      className: u()(x.divider, x.topDivider)
    }), (0, l.jsx)(F, {
      searchQuery: C,
      friends: P,
      onShareClip: v,
      disabled: T
    }), null != m && (0, l.jsx)(y, {
      guildId: m,
      selectedChannelId: f,
      onSelectChannelId: D
    }), (0, l.jsxs)(E.ModalFooter, {
      children: [(0, l.jsx)(E.Button, {
        disabled: null == f,
        submitting: T,
        color: E.Button.Colors.BRAND,
        onClick: () => M(),
        children: H.default.Messages.CLIPS_EDIT_SHARE_CLIP
      }), (0, l.jsx)(E.Button, {
        submitting: T,
        look: E.ButtonLooks.LINK,
        onClick: s,
        color: E.ButtonColors.PRIMARY,
        children: H.default.Messages.BACK
      })]
    })]
  })
}