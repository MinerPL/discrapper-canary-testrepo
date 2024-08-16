n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250);
n(470079);
var a = n(512722),
    s = n.n(a),
    r = n(399606),
    l = n(481060),
    o = n(671533),
    c = n(240864),
    u = n(613810),
    d = n(596211),
    _ = n(689938),
    E = n(181430);
function I(e) {
    var t, n, a, I;
    let { guildId: m, productId: T } = e,
        h = (0, r.e7)([c.Z], () => c.Z.getGuildProduct(T)),
        N = (null !== (I = null == h ? void 0 : null === (t = h.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== I ? I : 0) > 1,
        f = null == h ? void 0 : null === (a = h.attachments) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.id;
    return N
        ? (0, i.jsxs)(l.Button, {
              onClick: function () {
                  u.Z.open({
                      guildId: m,
                      productId: T
                  });
              },
              innerClassName: E.textWithIcon,
              children: [
                  (0, i.jsx)('div', { children: _.Z.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES }),
                  (0, i.jsx)(l.Spacer, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, i.jsx)(o.Z, {
                      width: 16,
                      height: 16,
                      direction: o.Z.Directions.RIGHT
                  })
              ]
          })
        : (s()(null != f, 'No attachment'),
          (0, i.jsxs)(d.Z, {
              guildId: m,
              productId: T,
              attachmentId: f,
              innerClassName: E.textWithIcon,
              children: [
                  (0, i.jsx)('div', { children: _.Z.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE }),
                  (0, i.jsx)(l.Spacer, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, i.jsx)(l.DownloadIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })
              ]
          }));
}
