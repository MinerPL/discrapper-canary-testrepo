E.d(_, {
    Z: function () {
        return A;
    }
});
var s = E(735250),
    T = E(470079),
    I = E(481060),
    n = E(412899),
    t = E(231338);
function A(e) {
    var _;
    let { guildId: E, role: A, className: r, canRemove: a = !1, onRemove: N = t.dG } = e,
        l = (0, I.useToken)(I.tokens.unsafe_rawColors.PRIMARY_300).hex(),
        L = null !== (_ = null == A ? void 0 : A.colorString) && void 0 !== _ ? _ : l,
        S = T.useMemo(() => ({ backgroundColor: ''.concat(L, '27') }), [L]);
    return null == A
        ? null
        : (0, s.jsx)(I.Clickable, {
              children: (0, s.jsx)(n.UB, {
                  className: r,
                  style: S,
                  role: A,
                  guildId: E,
                  canRemove: a,
                  onRemove: N
              })
          });
}
