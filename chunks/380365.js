"use strict";
l.r(a);
var t = l("735250"),
  s = l("470079"),
  n = l("442837"),
  o = l("481060"),
  i = l("271383"),
  d = l("430824"),
  r = l("594174"),
  u = l("5192"),
  c = l("645896"),
  m = l("353093"),
  C = l("979264"),
  _ = l("308083"),
  g = l("689938"),
  A = l("182976");
a.default = s.memo(function(e) {
  var a, l, s, S, v, x;
  let {
    guildId: N,
    isTagAdopted: T,
    onChangeUseTag: f
  } = e, h = (0, c.useClanInfo)(N), D = (0, n.useStateFromStores)([d.default], () => d.default.getGuild(N)), E = null !== (S = null == h ? void 0 : null === (a = h.badge) || void 0 === a ? void 0 : a.imageHash) && void 0 !== S ? S : null == D ? void 0 : null === (l = D.clan) || void 0 === l ? void 0 : l.badge, I = null !== (v = null == h ? void 0 : h.tag) && void 0 !== v ? v : null == D ? void 0 : null === (s = D.clan) || void 0 === s ? void 0 : s.tag, L = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()), M = (0, n.useStateFromStores)([i.default], () => null != L ? i.default.getMember(N, L.id) : null);
  if (null == D || null == L || null == M || null == E) return null;
  let j = (0, m.getClanBadgeUrl)(D.id, E, _.ClanTagBadgeSize.SIZE_36);
  return (0, t.jsxs)("div", {
    className: A.previewSection,
    children: [(0, t.jsxs)("div", {
      className: A.chatPreview,
      children: [(0, t.jsx)(o.Avatar, {
        src: L.getAvatarURL(N, 40),
        size: o.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }), (0, t.jsxs)("div", {
        className: A.previewText,
        children: [(0, t.jsxs)("div", {
          className: A.userName,
          children: [(0, t.jsx)(o.NameWithRole, {
            className: A.userName,
            name: u.default.getName(N, null, L),
            color: null !== (x = M.colorString) && void 0 !== x ? x : void 0
          }), T && (0, t.jsx)(C.BaseClanTagChiplet, {
            clanBadge: j,
            clanTag: I,
            badgeSize: _.ClanTagBadgeSize.SIZE_12,
            textVariant: "text-xs/normal"
          })]
        }), (0, t.jsx)("div", {
          className: A.fakeMessage,
          style: {
            width: "80%"
          }
        }), (0, t.jsx)("div", {
          className: A.fakeMessage,
          style: {
            width: "50%"
          }
        })]
      })]
    }), (0, t.jsx)("div", {
      className: A.divider
    }), (0, t.jsxs)("div", {
      className: A.settingSection,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: g.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
        }), (0, t.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
        })]
      }), (0, t.jsx)(o.Switch, {
        onChange: f,
        checked: T
      })]
    })]
  })
})