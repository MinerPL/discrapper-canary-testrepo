"use strict";
n.r(t), n("411104"), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("493683"),
  u = n("239091"),
  d = n("146773"),
  c = n("201895"),
  f = n("703656"),
  h = n("592125"),
  C = n("430824"),
  p = n("496675"),
  m = n("98597"),
  g = n("473403"),
  E = n("981631"),
  S = n("490897"),
  _ = n("294639");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function N(e, t) {
  let n = t.getGuildId();
  if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
  o.default.preload(n, t.id)
}
class T extends m.default {
  render() {
    let {
      channel: e,
      selected: t,
      connectChannelDropTarget: n,
      connectChannelDragSource: a,
      connectDragPreview: s,
      canReorderChannel: r
    } = this.props, o = (0, l.jsx)("li", {
      className: i()(this.getClassName(), {
        [_.disabled]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: (0, l.jsxs)(g.default, {
        className: _.iconVisibility,
        channel: e,
        selected: t,
        onClick: this.handleClick,
        onMouseDown: N,
        onContextMenu: this.handleContextMenu,
        connectDragPreview: r ? s : null,
        "aria-label": (0, c.default)({
          channel: e
        }),
        resolvedUnreadSetting: S.UnreadSetting.ONLY_MENTIONS,
        children: [this.renderInviteButton(), this.renderEditButton()]
      })
    });
    return r ? n(a(o)) : o
  }
  constructor(...e) {
    super(...e), I(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, a = C.default.getGuild(t.getGuildId());
      null != a && (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("99905").then(n.bind(n, "649400"));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: a
        })
      })
    }), I(this, "handleClick", e => {
      ! function(e) {
        let t = e.getGuildId();
        if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
        (0, f.transitionTo)(E.Routes.CHANNEL(t, e.id), {
          state: {
            analyticsSource: {
              page: E.AnalyticsPages.GUILD_CHANNEL,
              section: E.AnalyticsSections.CHANNEL_LIST,
              object: E.AnalyticsObjects.CHANNEL
            }
          }
        })
      }(e)
    })
  }
}
let A = (0, d.makeChannelSortable)(T);
t.default = a.memo(function(e) {
  let {
    channel: t,
    guild: n,
    disableSorting: a
  } = e, s = (0, r.useStateFromStoresObject)([h.default, p.default], () => {
    let e = h.default.getChannel(t.parent_id);
    return {
      canManageChannel: p.default.can(E.Permissions.MANAGE_CHANNELS, t),
      canReorderChannel: !0 !== a && null != e ? p.default.can(E.Permissions.MANAGE_CHANNELS, e) : p.default.can(E.Permissions.MANAGE_CHANNELS, n)
    }
  });
  return (0, l.jsx)(A, {
    ...s,
    ...e
  })
})