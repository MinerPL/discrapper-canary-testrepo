"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(239091),
  u = n(688465),
  _ = n(63063),
  d = n(689079),
  c = n(981631),
  E = n(689938),
  I = n(418609);

function T(e) {
  var t;
  let {
    className: s,
    activeCommand: T
  } = e, h = r.useCallback(e => {
    var t;
    let r = null == T ? void 0 : null === (t = T.rootCommand) || void 0 === t ? void 0 : t.id;
    if (null == r) {
      e.preventDefault();
      return
    }(0, l.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => (0, i.jsx)(e, {
        ...t,
        id: r,
        label: E.Z.Messages.COPY_ID_COMMAND
      })
    })
  }, [null == T ? void 0 : null === (t = T.rootCommand) || void 0 === t ? void 0 : t.id]);
  return null == T ? null : (0, i.jsxs)("div", {
    className: o()(s, I.bar),
    onContextMenu: h,
    children: [(0, i.jsx)(u.Z, {}), (0, i.jsxs)(a.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [E.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EDUCATION.format({
        betaUserLimit: d.um
      }), E.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_LEARN_MORE.format({
        learnMoreUrl: _.Z.getArticleURL(c.BhN.USING_APPS_FAQ)
      })]
    })]
  })
}