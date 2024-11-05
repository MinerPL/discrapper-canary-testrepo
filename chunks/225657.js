var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(700582),
    o = n(987209),
    s = n(699516),
    c = n(594174),
    d = n(51144),
    u = n(388032);
t.Z = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: m } = e,
        h = (0, r.Wu)([s.Z], () => s.Z.getFriendIDs()),
        f = (0, r.Wu)([c.default], () => c.default.filter((e) => h.includes(e.id) && !e.bot), [h]),
        { giftRecipient: p, setGiftRecipient: g } = (0, o.wD)();
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: m,
              children: [
                  (0, i.jsx)(l.FormTitle, { children: u.intl.string(u.t.xFn72t) }),
                  (0, i.jsx)(l.SearchableSelect, {
                      placeholder: u.intl.string(u.t.R0vK0N),
                      renderOptionPrefix: (e) =>
                          (null == e ? void 0 : e.value) == null
                              ? null
                              : (0, i.jsx)(a.Z, {
                                    user: e.value,
                                    size: l.AvatarSizes.SIZE_20
                                }),
                      value: p,
                      onChange: (e) => {
                          n(e, t), g(e);
                      },
                      options: f.map((e) => ({
                          value: e,
                          label: ''.concat(d.ZP.getUserTag(e))
                      }))
                  })
              ]
          });
};
