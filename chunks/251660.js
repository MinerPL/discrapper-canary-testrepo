t.d(n, {
    s: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    r = t(700582),
    s = t(51144),
    l = t(689938),
    o = t(221422);
let c = (e) => {
    let { giftRecipient: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)('div', {
              className: o.content,
              children: [
                  (0, i.jsx)(a.FormTitle, { children: l.Z.Messages.FORM_LABEL_SEND_TO }),
                  (0, i.jsxs)('div', {
                      className: o.giftRecipientInfo,
                      children: [
                          (0, i.jsx)(r.Z, {
                              user: n,
                              className: o.__invalid_giftRecipient,
                              size: a.AvatarSizes.SIZE_20
                          }),
                          (0, i.jsx)(a.Heading, {
                              className: o.giftRecipientName,
                              variant: 'text-md/normal',
                              children: s.ZP.getName(n)
                          }),
                          (0, i.jsx)(a.Heading, {
                              className: o.giftRecipientTag,
                              variant: 'text-md/normal',
                              children: s.ZP.getUserTag(n)
                          })
                      ]
                  })
              ]
          });
};
