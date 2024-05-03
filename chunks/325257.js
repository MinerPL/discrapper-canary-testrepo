"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("942389"),
  o = n("924826"),
  u = n("399606"),
  d = n("846519"),
  c = n("481060"),
  f = n("493683"),
  h = n("239091"),
  p = n("153867"),
  m = n("35225"),
  C = n("703656"),
  g = n("769654"),
  E = n("271383"),
  _ = n("771845"),
  S = n("880080"),
  I = n("26290"),
  N = n("15434"),
  T = n("727258"),
  A = n("249792"),
  L = n("40153"),
  v = n("593618"),
  x = n("252686"),
  R = n("682662"),
  M = n("674552"),
  O = n("981631"),
  y = n("689938"),
  D = n("263");
let b = {
  analyticsSource: {
    page: O.AnalyticsPages.GUILD_CHANNEL,
    section: O.AnalyticsSections.CHANNEL_LIST,
    object: O.AnalyticsObjects.CHANNEL
  }
};

function j(e, t) {
  (0, h.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("24267"), n.e("33053"), n.e("49146"), n.e("75475"), n.e("58227"), n.e("85093"), n.e("85552"), n.e("43502"), n.e("67582"), n.e("69760"), n.e("33213"), n.e("19255")]).then(n.bind(n, "545135"));
    return n => (0, l.jsx)(e, {
      ...n,
      guild: t
    })
  })
}
t.default = a.memo(function(e) {
  var t, n, s, h, P;
  let {
    guildNode: G,
    setRef: U,
    onDragStart: w,
    onDragEnd: F,
    route: B,
    guild: V,
    animatable: H,
    selected: k = !1,
    unread: Y = !1,
    mediaState: K,
    unavailable: W = !1,
    badge: z = 0,
    contextMenu: Z = j,
    draggable: X = !1,
    sorting: Q = !1,
    preloadOnClick: q = !0,
    guildJoinRequestStatus: J
  } = e, {
    id: $,
    parentId: ee
  } = G, et = null !== (t = e.upperBadge) && void 0 !== t ? t : W ? (0, M.renderUnavailableBadge)() : null != K ? (0, M.renderMediaBadge)(K) : void 0, en = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
  null == en && z > 0 ? en = null !== (s = (0, M.renderMentionBadge)(z)) && void 0 !== s ? s : void 0 : null == en && null != J && (en = null !== (h = (0, M.renderGuildJoinRequestBadge)({
    guildJoinRequestStatus: J
  })) && void 0 !== h ? h : void 0);
  let el = null !== (P = e.lowerBadgeWidth) && void 0 !== P ? P : (0, I.getBadgeWidthForValue)(z),
    [{
      dragging: ea
    }, es] = (0, r.useDrag)({
      type: T.GuildsNodeType.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == w || w()
      }), {
        type: G.type,
        nodeId: G.id
      }),
      end() {
        null == F || F(), (0, p.saveGuildFolders)(_.default.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ei = (0, o.useTreeItem)(null != $ ? $ : O.EMPTY_STRING_SNOWFLAKE_ID),
    [er, eo] = a.useState(!1),
    eu = !Q && er,
    [ed, ec] = a.useState(!1),
    [ef, eh] = a.useState(!1),
    [ep] = a.useState(() => new d.DelayedCall(70, () => eh(!0)));
  a.useEffect(() => () => ep.cancel(), [ep]);
  let em = a.useCallback(() => {
      if (null != B) {
        (0, C.transitionTo)(B, {
          state: b
        });
        return
      }(0, g.transitionToGuild)($, {
        state: b
      })
    }, [$, B]),
    eC = a.useCallback(() => {
      if (null != B || null == V || W || !q) return;
      let e = (0, m.getChannelIdForGuildTransition)(V.id);
      null != e && f.default.preload(V.id, e)
    }, [B, V, W, q]),
    eg = (0, u.useStateFromStores)([E.default], () => E.default.isCurrentUserGuest($)),
    eE = a.useCallback(e => {
      null != V && !eg && Z(e, V)
    }, [V, Z, eg]),
    e_ = a.useCallback(e => {
      if ("ArrowLeft" === e.key && null != ee) {
        var t;
        null === (t = document.querySelector("[aria-owns=folder-items-".concat(ee, "]"))) || void 0 === t || t.focus()
      }
    }, [ee]),
    eS = a.useCallback(e => {
      if (e) {
        ep.delay();
        return
      }
      ep.cancel(), eh(!1)
    }, [ep]),
    eI = a.useCallback(e => {
      null == U || U($, e)
    }, [$, U]);
  if (null == V) return null;
  let eN = ef || ed ? (0, l.jsx)(A.default, {
      guild: V,
      show: ef,
      active: k,
      onAnimationStart: function() {
        ec(ef)
      },
      onAnimationRest: function() {
        ef || ec(!1)
      }
    }) : (0, l.jsx)(N.default, {
      ariaLabel: y.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
        guildName: V.toString(),
        mentions: z
      }),
      name: V.toString(),
      onClick: em,
      onMouseEnter: function() {
        Q || eo(!0)
      },
      onMouseLeave: function() {
        Q || eo(!1)
      },
      onMouseDown: eC,
      onContextMenu: eE,
      onKeyDown: e_,
      icon: V.getIconURL(96, eu && H),
      selected: k || eu,
      ...ei,
      role: "treeitem"
    }),
    eT = ea ? (0, l.jsx)(L.PlaceholderDropTarget, {
      children: (0, l.jsx)(x.default, {})
    }) : (0, l.jsx)("div", {
      ref: X ? es : void 0,
      "data-dnd-name": V.toString(),
      className: i()(D.blobContainer, {
        [D.sorting]: Q,
        [D.wobble]: ef,
        [D.selected]: ef || k
      }),
      children: (0, l.jsx)(c.BlobMask, {
        selected: ef || k || eu,
        upperBadge: et,
        lowerBadge: en,
        lowerBadgeWidth: el,
        children: eN
      })
    });
  return (0, l.jsxs)(R.ListItem, {
    ref: eI,
    children: [(0, l.jsx)(S.default, {
      hovered: !ea && eu,
      selected: !ea && k,
      unread: !ea && Y,
      className: D.pill
    }), (0, l.jsx)(v.default, {
      guild: V,
      disabled: Q,
      isDragging: ea,
      children: eT
    }), X ? (0, l.jsx)(L.default, {
      name: V.name,
      targetNode: G,
      onDragOverChanged: eS
    }) : null]
  })
})