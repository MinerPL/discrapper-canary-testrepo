n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(593473),
  o = n(442837),
  c = n(481060),
  d = n(749210),
  u = n(558381),
  _ = n(666743),
  h = n(565138),
  E = n(41776),
  I = n(703656),
  m = n(769654),
  g = n(601964),
  p = n(430824),
  T = n(378720),
  S = n(285952),
  f = n(843445),
  C = n(981631),
  N = n(689938),
  A = n(81772);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class Z extends a.PureComponent {
  renderMemberInfo() {
let {
  approximateMemberCount: e,
  approximatePresenceCount: t
} = this.props.guild;
return null == e || null == t ? null : (0, i.jsxs)(S.Z, {
  className: A.memberInfo,
  align: S.Z.Align.CENTER,
  children: [
    (0, i.jsx)('div', {
      className: A.dotOnline
    }),
    (0, i.jsx)('span', {
      className: A.memberText,
      children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
        membersOnline: t
      })
    }),
    (0, i.jsx)('div', {
      className: A.dotOffline
    }),
    (0, i.jsx)('span', {
      className: A.memberText,
      children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
        count: e
      })
    })
  ]
});
  }
  render() {
let {
  guild: e,
  inChannel: t,
  isInGuild: n,
  isLurking: a,
  isAuthenticated: s,
  className: l,
  pageSize: o
} = this.props;
if (t && n)
  return null;
let d = new g.ZP(e),
  u = N.Z.Messages.LURKER_MODE_VIEW_GUILD,
  _ = this.handleJoinOrView,
  E = c.Button.Looks.FILLED,
  I = c.Button.Colors.PRIMARY;
return s ? n ? (E = c.Button.Looks.OUTLINED, I = A.buttonColorInGuild, u = (0, i.jsxs)(S.Z, {
  align: S.Z.Align.CENTER,
  children: [
    (0, i.jsx)('div', {
      children: N.Z.Messages.JOINED_GUILD
    }),
    (0, i.jsx)(c.CheckmarkLargeIcon, {
      size: 'md',
      color: 'currentColor',
      className: A.joinedCheckmark
    })
  ]
})) : a && t && (u = N.Z.Messages.JOIN_GUILD) : (u = N.Z.Messages._LOGIN, _ = this.handleLogin), (0, i.jsxs)('div', {
  className: r()(l, o === f.b.SMALL ? A.inviteSmall : A.inviteLarge),
  children: [
    (0, i.jsx)(T.Z, {
      children: N.Z.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD
    }),
    (0, i.jsxs)('div', {
      className: A.content,
      children: [
        (0, i.jsxs)('div', {
          className: A.info,
          children: [
            (0, i.jsx)(h.Z, {
              guild: d,
              active: !0,
              size: h.Z.Sizes.LARGE,
              className: A.guildIcon
            }),
            (0, i.jsxs)('div', {
              className: A.infoText,
              children: [
                (0, i.jsx)('div', {
                  className: A.name,
                  children: e.name
                }),
                this.renderMemberInfo()
              ]
            })
          ]
        }),
        (0, i.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          className: A.actionButton,
          fullWidth: !0,
          color: I,
          look: E,
          onClick: _,
          children: u
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), v(this, 'handleJoinOrView', async () => {
  let {
    guild: e,
    skuId: t,
    isInGuild: n,
    isLurking: i
  } = this.props, a = () => (0, m.X)(e.id);
  if (i)
    (0, u.Oj)(t).then(a);
  else if (n)
    a();
  else
    try {
      await d.Z.joinGuild(e.id, {
        lurker: !0,
        source: C.vtS.APPLICATION_STORE
      }), a();
    } catch {}
}), v(this, 'handleLogin', () => {
  let e = {
    redirect_to: C.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
  };
  (0, I.uL)(C.Z5c.LOGIN, {
    search: (0, l.stringify)(e)
  });
});
  }
}
t.Z = (0, _.Z)(o.ZP.connectStores([
  p.Z,
  E.Z
], e => {
  let {
guild: t
  } = e, n = E.Z.isLurking(t.id);
  return {
isInGuild: null != p.Z.getGuild(t.id) && !n,
isLurking: n
  };
})(Z));