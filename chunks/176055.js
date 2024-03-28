"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("593473"),
  o = s("442837"),
  u = s("481060"),
  d = s("749210"),
  c = s("558381"),
  _ = s("666743"),
  E = s("41776"),
  T = s("703656"),
  I = s("920440"),
  R = s("601964"),
  S = s("430824"),
  f = s("378720"),
  m = s("285952"),
  N = s("346656"),
  A = s("263704"),
  p = s("843445"),
  C = s("981631"),
  g = s("689938"),
  O = s("526549");

function P(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class M extends i.PureComponent {
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
      isLurking: i,
      isAuthenticated: r,
      className: l,
      pageSize: o
    } = this.props;
    if (t && s) return null;
    let d = new R.default(e),
      c = g.default.Messages.LURKER_MODE_VIEW_GUILD,
      _ = this.handleJoinOrView,
      E = u.Button.Looks.FILLED,
      T = u.Button.Colors.PRIMARY;
    return r ? s ? (E = u.Button.Looks.OUTLINED, T = O.buttonColorInGuild, c = (0, a.jsxs)(m.default, {
      align: m.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        children: g.default.Messages.JOINED_GUILD
      }), (0, a.jsx)(A.default, {
        className: O.joinedCheckmark
      })]
    })) : i && t && (c = g.default.Messages.JOIN_GUILD) : (c = g.default.Messages._LOGIN, _ = this.handleLogin), (0, a.jsxs)("div", {
      className: n()(l, o === p.PageSizes.SMALL ? O.inviteSmall : O.inviteLarge),
      children: [(0, a.jsx)(f.default, {
        children: g.default.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD
      }), (0, a.jsxs)("div", {
        className: O.content,
        children: [(0, a.jsxs)("div", {
          className: O.info,
          children: [(0, a.jsx)(N.default, {
            guild: d,
            active: !0,
            size: N.default.Sizes.LARGE,
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
    super(...e), P(this, "handleJoinOrView", async () => {
      let {
        guild: e,
        skuId: t,
        isInGuild: s,
        isLurking: a
      } = this.props, i = () => (0, I.transitionToGuild)(e.id);
      if (a)(0, c.joinPublishedStoreListingSkuGuild)(t).then(i);
      else if (s) i();
      else try {
        await d.default.joinGuild(e.id, {
          lurker: !0,
          source: C.JoinGuildSources.APPLICATION_STORE
        }), i()
      } catch {}
    }), P(this, "handleLogin", () => {
      let e = {
        redirect_to: C.Routes.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, T.transitionTo)(C.Routes.LOGIN, {
        search: (0, l.stringify)(e)
      })
    })
  }
}
t.default = (0, _.default)(o.default.connectStores([S.default, E.default], e => {
  let {
    guild: t
  } = e, s = E.default.isLurking(t.id);
  return {
    isInGuild: null != S.default.getGuild(t.id) && !s,
    isLurking: s
  }
})(M))