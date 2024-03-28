"use strict";
l.r(t);
var i = l("735250");
l("470079");
var a = l("302454"),
  n = l.n(a),
  s = l("481060"),
  r = l("447543"),
  c = l("15470"),
  o = l("960904"),
  d = l("830121"),
  u = l("746878"),
  p = l("729035");
let _ = /^discord.gg\/[a-zA-Z0-9-]+/,
  m = {
    ...p.default.rules,
    heading: {
      ...c.Rules.heading
    },
    image: {
      ...n().defaultRules.image
    },
    inviteLink: {
      order: p.default.rules.link.order + 1,
      match: (e, t) => t.inline ? _.exec(e) : null,
      parse: (e, t, l) => {
        let i = (0, d.findCodedLink)(e[0]);
        return null == i || i.type !== o.CodedLinkType.INVITE ? {
          type: "text",
          content: e[0]
        } : {
          type: "inviteLink",
          content: [{
            type: "text",
            content: e[0]
          }],
          onClick: () => {
            var e;
            r.default.acceptInviteAndTransitionToInviteChannel({
              inviteKey: i.code,
              context: {
                location: "Application Directory"
              }
            }), null === (e = l.closeModal) || void 0 === e || e.call(l)
          }
        }
      },
      react: (e, t, l) => (0, i.jsx)(s.Anchor, {
        onClick: t => {
          t.preventDefault(), e.onClick()
        },
        children: (0, u.smartOutput)(e, t, l)
      }, l.key)
    }
  };
t.default = m