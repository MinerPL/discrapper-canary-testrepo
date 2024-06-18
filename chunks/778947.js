"use strict";
n.d(t, {
  CF: function() {
    return H
  },
  ZP: function() {
    return W
  },
  nD: function() {
    return F
  }
}), n(47120), n(653041), n(789020);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(873546),
  l = n(442837),
  u = n(481060),
  _ = n(100527),
  d = n(906732),
  c = n(366030),
  E = n(71619),
  I = n(340797),
  T = n(276554),
  h = n(453687),
  S = n(304176),
  f = n(98278),
  N = n(869765),
  A = n(243317),
  m = n(621853),
  O = n(484459),
  R = n(204197),
  C = n(740492),
  p = n(430824),
  g = n(496675),
  L = n(594174),
  v = n(789695),
  D = n(176278),
  M = n(768581),
  P = n(585483),
  y = n(630388),
  U = n(74538),
  b = n(534761),
  G = n(307187),
  w = n(750858),
  k = n(981631),
  B = n(689938),
  x = n(822545),
  V = n(255963);

function Z(e) {
  let {
    avatarSrc: t,
    avatarDecorationSrc: n,
    compact: r,
    onClick: s,
    onContextMenu: a,
    onMouseDown: l,
    onMouseEnter: u,
    onMouseLeave: _,
    onKeyDown: d,
    showCommunicationDisabledStyles: c = !1,
    className: E
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("img", {
      onClick: s,
      onContextMenu: a,
      onMouseDown: l,
      onKeyDown: d,
      onMouseEnter: u,
      onMouseLeave: _,
      src: t,
      "aria-hidden": !0,
      className: o()(E, x.avatar, {
        [x.compact]: r,
        [x.clickable]: null != s,
        [x.communicationDisabledOpacity]: c
      }),
      alt: " "
    }), null == n || r ? null : (0, i.jsx)("img", {
      className: x.avatarDecoration,
      src: n,
      alt: " ",
      "aria-hidden": !0
    })]
  })
}

function H(e, t, n) {
  let {
    message: r,
    channel: s,
    author: o,
    compact: a = !1,
    onContextMenu: l,
    showUsernamePopout: u,
    roleIcon: _,
    onClickUsername: d,
    onPopoutRequestClose: c
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(w.Z, {
      message: r,
      channel: s,
      author: o,
      compact: a,
      roleIcon: _,
      showPopout: u,
      renderPopout: t,
      onClick: d,
      onContextMenu: l,
      onPopoutRequestClose: c,
      decorations: n,
      renderRemixTag: !0
    }), a && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("i", {
        className: x.separator,
        children: ":"
      }), " "]
    })]
  })
}

function F(e) {
  let {
    message: t,
    avatar: n,
    username: r,
    usernameSpanId: s,
    usernameClassName: a,
    compact: l,
    showTimestamp: _,
    showTimestampOnHover: d,
    ariaLabelledBy: c,
    ariaDescribedBy: E,
    className: I,
    messageClassname: T,
    badges: S
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [!l && n, (0, i.jsxs)(u.H, {
      className: o()(x.header, I),
      "aria-describedby": E,
      "aria-labelledby": c,
      children: [_ && l && (0, i.jsx)(b.Z, {
        id: (0, h.Dv)(t),
        compact: !0,
        timestamp: t.timestamp,
        isVisibleOnlyOnHover: d,
        className: T,
        isInline: !1
      }), l && n, (0, i.jsx)("span", {
        id: s,
        className: a,
        children: r
      }), _ && !l && (0, i.jsx)(b.Z, {
        id: (0, h.Dv)(t),
        timestamp: t.timestamp,
        className: T
      }), null != S && S.length > 0 ? (0, i.jsx)("div", {
        className: x.badgesContainer,
        children: S
      }) : null]
    })]
  })
}
let Y = e => {
  !e && (0, f.z)()
};

function j(e) {
  let {
    currentUserIsPremium: t,
    author: n
  } = e, r = (0, l.e7)([m.Z], () => {
    var e;
    return null === (e = m.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince
  });
  return (0, i.jsx)(u.Tooltip, {
    tooltipClassName: x.nitroAuthorBadgeTootip,
    shouldShow: null != r,
    text: B.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: r
    }),
    onTooltipShow: () => (0, O.Z)(n.id),
    children: e => (0, i.jsx)(u.Clickable, {
      className: x.nitroAuthorBadgeContainer,
      onClick: () => Y(t),
      "aria-label": B.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({
        date: r
      }),
      children: (0, i.jsx)("img", {
        alt: "",
        className: x.nitroBadgeSvg,
        src: V,
        ...e
      })
    })
  })
}

function W(e) {
  let {
    message: t,
    repliedMessage: n,
    compact: s = !1,
    renderPopout: f,
    showTimestampOnHover: m,
    roleIcon: b,
    subscribeToGroupId: V,
    hideTimestamp: Y,
    className: W,
    channel: K
  } = e, z = r.useMemo(() => null != f ? e => f(e, t) : void 0, [f, t]), [, q] = (0, E.ZP)(t.author.id, e.guildId), X = (0, l.e7)([p.Z], () => p.Z.getGuild(e.guildId), [e.guildId]), Q = null != t.author && null != X && g.Z.canManageUser(k.Plq.MODERATE_MEMBERS, t.author, X), J = q && Q, $ = function(e) {
    var t, n;
    let {
      props: s,
      guildId: o,
      handleRenderPopout: c,
      showCommunicationDisabledStyles: E = !1,
      className: I
    } = e, {
      message: T,
      author: h,
      compact: S = !1,
      subscribeToGroupId: f,
      animate: N = !0,
      onContextMenu: A,
      onClickAvatar: m,
      onPopoutRequestClose: p,
      showAvatarPopout: g
    } = s, [L, v] = r.useState(!1), {
      analyticsLocations: D
    } = (0, d.ZP)(_.Z.AVATAR), y = (0, l.e7)([C.ZP], () => {
      var e;
      return null !== (e = s.displayCompactAvatars) && void 0 !== e ? e : C.ZP.displayCompactAvatars
    }), U = null != T.messageReference && null != T.webhookId && T.hasFlag(k.iLy.IS_CROSSPOST), b = T.author, {
      id: G
    } = b, w = S ? 32 : 80, {
      avatarSrc: B,
      avatarDecorationSrc: x,
      eventHandlers: V
    } = (0, R.Z)({
      user: b,
      guildId: o,
      size: w,
      animateOnHover: null != f ? !L : !N,
      showPending: !0
    }), H = T.isInteractionPlaceholder(), F = r.useMemo(() => {
      var e, t;
      return H && null == b.avatar && (null === (e = T.application) || void 0 === e ? void 0 : e.icon) != null ? null !== (t = M.ZP.getApplicationIconURL({
        id: T.application.id,
        icon: T.application.icon,
        size: w,
        fallbackAvatar: !1
      })) && void 0 !== t ? t : B : B
    }, [H, null === (t = T.application) || void 0 === t ? void 0 : t.icon, null === (n = T.application) || void 0 === n ? void 0 : n.id, b.avatar, w, B]);
    return (r.useEffect(() => {
      if (null != f) return P.S.subscribeKeyed(k.LPv.ANIMATE_CHAT_AVATAR, "".concat(f, ":").concat(G), v), () => void P.S.unsubscribeKeyed(k.LPv.ANIMATE_CHAT_AVATAR, "".concat(f, ":").concat(G), v)
    }, [G, f]), S && !y) ? void 0 : null != c && null != g ? (0, i.jsx)(d.Gt, {
      value: D,
      children: (0, i.jsx)(u.Popout, {
        preload: U ? void 0 : function() {
          return (0, O.W)(T.author.id, null != h.guildMemberAvatar && null != o ? M.ZP.getGuildMemberAvatarURLSimple({
            guildId: o,
            userId: T.author.id,
            avatar: h.guildMemberAvatar,
            size: 80
          }) : T.author.getAvatarURL(void 0, 80, !1), {
            guildId: o,
            channelId: T.channel_id
          })
        },
        renderPopout: c,
        shouldShow: g,
        position: a.tq ? "window_center" : "right",
        onRequestClose: p,
        children: e => Z({
          ...V,
          avatarSrc: F,
          avatarDecorationSrc: x,
          compact: S,
          onClick: m,
          onContextMenu: A,
          onMouseDown: e.onMouseDown,
          onKeyDown: e.onKeyDown,
          showCommunicationDisabledStyles: E,
          className: I
        })
      })
    }) : (0, i.jsx)(d.Gt, {
      value: D,
      children: Z({
        ...V,
        avatarSrc: F,
        avatarDecorationSrc: x,
        compact: S,
        onClick: m,
        onContextMenu: A,
        onMouseDown: void 0,
        onKeyDown: void 0,
        showCommunicationDisabledStyles: E,
        className: I
      })
    })
  }({
    props: e,
    guildId: e.guildId,
    handleRenderPopout: z,
    showCommunicationDisabledStyles: J
  }), ee = (0, l.e7)([C.ZP], () => {
    var t;
    return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : C.ZP.displayCompactAvatars
  }), et = (!s || ee) && null != b && null != X ? (0, i.jsx)(u.Popout, {
    animation: u.Popout.Animation.TRANSLATE,
    align: "center",
    autoInvert: !0,
    nudgeAlignIntoViewport: !0,
    position: "right",
    renderPopout: () => (0, i.jsx)(S.Z, {
      roleIcon: b,
      guild: X
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(D.Z, {
        ...b,
        className: x.roleIcon,
        onClick: t
      })
    }
  }, "role-icon-children") : (!s || ee) && null != b ? (0, i.jsx)(D.Z, {
    ...b,
    className: x.roleIcon
  }, "role-icon-children") : null, en = (0, G.x)({
    message: t,
    channel: K,
    user: null == t ? void 0 : t.author,
    compact: s,
    isRepliedMessage: !1
  }), ei = [], er = L.default.getCurrentUser(), es = U.ZP.isPremium(t.author), eo = U.ZP.isPremium(er), ea = null == K ? void 0 : K.isPrivate();
  (0, T.R)(null != b, "Message Username") && es && !s && !ea && ei.push((0, i.jsx)(j, {
    currentUserIsPremium: eo,
    author: t.author
  }, "nitro-author")), null != et && ei.push(et), null != X && ei.push((0, i.jsx)(I.Z, {
    guild: X,
    message: t
  }, "new-member")), null != K && null != X && ei.push((0, i.jsx)(c.Z, {
    guild: X,
    channel: K,
    userId: t.author.id,
    messageId: t.id
  }, "connections"));
  let el = [];
  (0, y.yE)(t.flags, k.iLy.SUPPRESS_NOTIFICATIONS) && el.push((0, i.jsx)(A.Z, {}, "suppress-notifications"));
  let eu = {};
  eu[w.a.SYSTEM_TAG] = en, eu[w.a.BADGES] = ei;
  let e_ = H(e, z, eu),
    ed = (0, h.XX)(t, V),
    ec = (0, h.Dv)(t),
    eE = Y ? "".concat(ed) : "".concat(ed, " ").concat(ec),
    eI = (null == n ? void 0 : n.state) === N.Y.LOADED ? (0, h.Gq)(t) : void 0;
  return (0, i.jsx)(F, {
    message: t,
    avatar: $,
    username: (0, i.jsxs)(i.Fragment, {
      children: [J && (0, i.jsx)(u.Tooltip, {
        text: B.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(v.Z, {
            ...e,
            width: 12,
            height: 12,
            className: s ? x.compactCommunicationDisabled : x.communicationDisabled
          }), (0, i.jsx)(u.HiddenVisually, {
            children: B.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
          })]
        })
      }), e_]
    }),
    usernameSpanId: (0, h.XX)(t, V),
    usernameClassName: o()(x.headerText, {
      [x.hasRoleIcon]: null != et,
      [x.hasBadges]: null != en || el.length > 0
    }),
    compact: s,
    showTimestamp: !0 !== Y,
    showTimestampOnHover: m,
    ariaLabelledBy: eE,
    ariaDescribedBy: eI,
    className: W,
    badges: el
  })
}