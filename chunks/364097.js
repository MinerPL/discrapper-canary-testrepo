"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  i = n("197409"),
  r = n("846587"),
  o = n("409059"),
  u = n("58346"),
  d = n("689938"),
  c = n("155724"),
  f = n("558338");

function E(e) {
  var t;
  let {
    code: E
  } = e, _ = (0, a.useStateFromStores)([o.default], () => o.default.getGuildTemplate(E));
  if (null == _ || _.state === u.GuildTemplateStates.RESOLVING) return (0, s.jsxs)(i.default, {
    children: [(0, s.jsx)(i.default.Header, {
      text: d.default.Messages.GUILD_TEMPLATE_RESOLVING_TITLE
    }), (0, s.jsx)(i.default.Body, {
      resolving: !0
    })]
  });
  if (_.state === u.GuildTemplateStates.EXPIRED) return (0, s.jsxs)(i.default, {
    children: [(0, s.jsx)(i.default.Header, {
      text: d.default.Messages.GUILD_TEMPLATE_INVALID_TITLE
    }), (0, s.jsxs)(i.default.Body, {
      children: [(0, s.jsx)(i.default.Icon, {
        expired: !0
      }), (0, s.jsx)(i.default.Info, {
        expired: !0,
        title: d.default.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
      })]
    })]
  });
  let T = __OVERLAY__ ? (0, s.jsx)(i.default.Button, {
    isDisabled: !0,
    color: i.default.Button.Colors.PRIMARY,
    children: d.default.Messages.GUILD_TEMPLATE_EMBED_VIEW_IN_APP
  }) : (0, s.jsx)(i.default.Button, {
    onClick: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("10778"), n.e("95962")]).then(n.bind(n, "766775"));
        return t => (0, s.jsx)(e, {
          ...t,
          guildTemplate: _
        })
      })
    },
    submitting: _.state === u.GuildTemplateStates.ACCEPTING,
    color: i.default.Button.Colors.GREEN,
    children: d.default.Messages.GUILD_TEMPLATE_OPEN
  });
  return (0, s.jsxs)(i.default, {
    children: [(0, s.jsx)(i.default.Header, {
      text: d.default.Messages.GUILD_TEMPLATE_RESOLVED_EMBED_TITLE
    }), (0, s.jsxs)(i.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: f.headerLine,
        children: [(0, s.jsx)(r.default, {
          className: c.icon
        }), (0, s.jsx)(i.default.Info, {
          title: _.name,
          children: d.default.Messages.GUILD_TEMPLATE_USAGES.format({
            usageCount: String(null !== (t = _.usageCount) && void 0 !== t ? t : 0)
          })
        })]
      }), T]
    })]
  })
}