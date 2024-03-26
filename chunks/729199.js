"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("414456"),
  n = s.n(i),
  l = s("730290"),
  o = s("446674"),
  u = s("77078"),
  d = s("851387"),
  c = s("55620"),
  _ = s("984376"),
  E = s("267567"),
  T = s("393414"),
  I = s("239380"),
  f = s("813006"),
  S = s("305961"),
  R = s("895530"),
  m = s("145131"),
  A = s("476263"),
  N = s("36694"),
  p = s("75576"),
  C = s("49111"),
  g = s("782340"),
  O = s("742675");
class P extends r.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: t
    } = this.props.guild;
    return null == e || null == t ? null : (0, a.jsxs)(m.default, {
      className: O.memberInfo,
      align: m.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        className: O.dotOnline
      }), (0, a.jsx)("span", {
        className: O.memberText,
        children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: t
        })
      }), (0, a.jsx)("div", {
        className: O.dotOffline
      }), (0, a.jsx)("span", {
        className: O.memberText,
        children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: e
        })
      })]
    })
  }
  render() {
    let {
      guild: e,
      inChannel: t,
      isInGuild: s,
      isLurking: r,
      isAuthenticated: i,
      className: l,
      pageSize: o
    } = this.props;
    if (t && s) return null;
    let d = new f.default(e),
      c = g.default.Messages.LURKER_MODE_VIEW_GUILD,
      _ = this.handleJoinOrView,
      E = u.Button.Looks.FILLED,
      T = u.Button.Colors.PRIMARY;
    return i ? s ? (E = u.Button.Looks.OUTLINED, T = O.buttonColorInGuild, c = (0, a.jsxs)(m.default, {
      align: m.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        children: g.default.Messages.JOINED_GUILD
      }), (0, a.jsx)(N.default, {
        className: O.joinedCheckmark
      })]
    })) : r && t && (c = g.default.Messages.JOIN_GUILD) : (c = g.default.Messages._LOGIN, _ = this.handleLogin), (0, a.jsxs)("div", {
      className: n(l, o === p.PageSizes.SMALL ? O.inviteSmall : O.inviteLarge),
      children: [(0, a.jsx)(R.default, {
        children: g.default.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD
      }), (0, a.jsxs)("div", {
        className: O.content,
        children: [(0, a.jsxs)("div", {
          className: O.info,
          children: [(0, a.jsx)(A.default, {
            guild: d,
            active: !0,
            size: A.default.Sizes.LARGE,
            className: O.guildIcon
          }), (0, a.jsxs)("div", {
            className: O.infoText,
            children: [(0, a.jsx)("div", {
              className: O.name,
              children: e.name
            }), this.renderMemberInfo()]
          })]
        }), (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          className: O.actionButton,
          fullWidth: !0,
          color: T,
          look: E,
          onClick: _,
          children: c
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleJoinOrView = async () => {
      let {
        guild: e,
        skuId: t,
        isInGuild: s,
        isLurking: a
      } = this.props, r = () => (0, I.transitionToGuild)(e.id);
      if (a)(0, c.joinPublishedStoreListingSkuGuild)(t).then(r);
      else if (s) r();
      else try {
        await d.default.joinGuild(e.id, {
          lurker: !0,
          source: C.JoinGuildSources.APPLICATION_STORE
        }), r()
      } catch {}
    }, this.handleLogin = () => {
      let e = {
        redirect_to: C.Routes.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, T.transitionTo)(C.Routes.LOGIN, {
        search: (0, l.stringify)(e)
      })
    }
  }
}
var M = (0, _.default)(o.default.connectStores([S.default, E.default], e => {
  let {
    guild: t
  } = e, s = E.default.isLurking(t.id);
  return {
    isInGuild: null != S.default.getGuild(t.id) && !s,
    isLurking: s
  }
})(P))