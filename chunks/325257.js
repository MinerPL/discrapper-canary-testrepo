"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("942389"),
  o = n("924826"),
  u = n("399606"),
  d = n("846519"),
  c = n("481060"),
  f = n("493683"),
  h = n("239091"),
  C = n("153867"),
  p = n("703656"),
  m = n("920440"),
  g = n("271383"),
  E = n("771845"),
  S = n("880080"),
  _ = n("26290"),
  I = n("15434"),
  N = n("727258"),
  T = n("249792"),
  A = n("40153"),
  L = n("593618"),
  v = n("252686"),
  x = n("682662"),
  R = n("674552"),
  M = n("981631"),
  O = n("689938"),
  y = n("814886");
let D = {
  analyticsSource: {
    page: M.AnalyticsPages.GUILD_CHANNEL,
    section: M.AnalyticsSections.CHANNEL_LIST,
    object: M.AnalyticsObjects.CHANNEL
  }
};

function b(e, t) {
  (0, h.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("24267"), n.e("33053"), n.e("51238"), n.e("75475"), n.e("85093"), n.e("16114"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("95003"), n.e("69760"), n.e("33213"), n.e("19255")]).then(n.bind(n, "545135"));
    return n => (0, l.jsx)(e, {
      ...n,
      guild: t
    })
  })
}
t.default = a.memo(function(e) {
  var t, n, s, h, j;
  let {
    guildNode: G,
    setRef: U,
    onDragStart: P,
    onDragEnd: w,
    route: F,
    guild: B,
    animatable: V,
    selected: H = !1,
    unread: k = !1,
    mediaState: Y,
    unavailable: K = !1,
    badge: W = 0,
    contextMenu: Z = b,
    draggable: z = !1,
    sorting: X = !1,
    preloadOnClick: Q = !0,
    guildJoinRequestStatus: q
  } = e, {
    id: J,
    parentId: $
  } = G, ee = null !== (t = e.upperBadge) && void 0 !== t ? t : K ? (0, R.renderUnavailableBadge)() : null != Y ? (0, R.renderMediaBadge)(Y) : void 0, et = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
  null == et && W > 0 ? et = null !== (s = (0, R.renderMentionBadge)(W)) && void 0 !== s ? s : void 0 : null == et && null != q && (et = null !== (h = (0, R.renderGuildJoinRequestBadge)({
    guildJoinRequestStatus: q
  })) && void 0 !== h ? h : void 0);
  let en = null !== (j = e.lowerBadgeWidth) && void 0 !== j ? j : (0, _.getBadgeWidthForValue)(W),
    [{
      dragging: el
    }, ea] = (0, r.useDrag)({
      type: N.GuildsNodeType.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == P || P()
      }), {
        type: G.type,
        nodeId: G.id
      }),
      end() {
        null == w || w(), (0, C.saveGuildFolders)(E.default.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    es = (0, o.useTreeItem)(null != J ? J : M.EMPTY_STRING_SNOWFLAKE_ID),
    [ei, er] = a.useState(!1),
    eo = !X && ei,
    [eu, ed] = a.useState(!1),
    [ec, ef] = a.useState(!1),
    [eh] = a.useState(() => new d.DelayedCall(70, () => ef(!0)));
  a.useEffect(() => () => eh.cancel(), [eh]);
  let eC = a.useCallback(() => {
      if (null != F) {
        (0, p.transitionTo)(F, {
          state: D
        });
        return
      }(0, m.transitionToGuild)(J, {
        state: D
      })
    }, [J, F]),
    ep = a.useCallback(() => {
      if (null != F || null == B || K || !Q) return;
      let e = (0, m.getChannelIdForGuildTransition)(B.id);
      null != e && f.default.preload(B.id, e)
    }, [F, B, K, Q]),
    em = (0, u.useStateFromStores)([g.default], () => g.default.isCurrentUserGuest(J)),
    eg = a.useCallback(e => {
      null != B && !em && Z(e, B)
    }, [B, Z, em]),
    eE = a.useCallback(e => {
      if ("ArrowLeft" === e.key && null != $) {
        var t;
        null === (t = document.querySelector("[aria-owns=folder-items-".concat($, "]"))) || void 0 === t || t.focus()
      }
    }, [$]),
    eS = a.useCallback(e => {
      if (e) {
        eh.delay();
        return
      }
      eh.cancel(), ef(!1)
    }, [eh]),
    e_ = a.useCallback(e => {
      null == U || U(J, e)
    }, [J, U]);
  if (null == B) return null;
  let eI = ec || eu ? (0, l.jsx)(T.default, {
      guild: B,
      show: ec,
      active: H,
      onAnimationStart: function() {
        ed(ec)
      },
      onAnimationRest: function() {
        ec || ed(!1)
      }
    }) : (0, l.jsx)(I.default, {
      ariaLabel: O.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
        guildName: B.toString(),
        mentions: W
      }),
      name: B.toString(),
      onClick: eC,
      onMouseEnter: function() {
        X || er(!0)
      },
      onMouseLeave: function() {
        X || er(!1)
      },
      onMouseDown: ep,
      onContextMenu: eg,
      onKeyDown: eE,
      icon: B.getIconURL(96, eo && V),
      selected: H || eo,
      ...es,
      role: "treeitem"
    }),
    eN = el ? (0, l.jsx)(A.PlaceholderDropTarget, {
      children: (0, l.jsx)(v.default, {})
    }) : (0, l.jsx)("div", {
      ref: z ? ea : void 0,
      "data-dnd-name": B.toString(),
      className: i()(y.blobContainer, {
        [y.sorting]: X,
        [y.wobble]: ec,
        [y.selected]: ec || H
      }),
      children: (0, l.jsx)(c.BlobMask, {
        selected: ec || H || eo,
        upperBadge: ee,
        lowerBadge: et,
        lowerBadgeWidth: en,
        children: eI
      })
    });
  return (0, l.jsxs)(x.ListItem, {
    ref: e_,
    children: [(0, l.jsx)(S.default, {
      hovered: !el && eo,
      selected: !el && H,
      unread: !el && k,
      className: y.pill
    }), (0, l.jsx)(L.default, {
      guild: B,
      disabled: X,
      children: eN
    }), z ? (0, l.jsx)(A.default, {
      name: B.name,
      targetNode: G,
      onDragOverChanged: eS
    }) : null]
  })
})