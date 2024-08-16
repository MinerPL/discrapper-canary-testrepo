n.d(t, {
    ZP: function () {
        return s;
    }
});
let r = Object.freeze({
        overflowY: 'scroll',
        overflowX: 'hidden'
    }),
    i = Object.freeze({
        overflowX: 'scroll',
        overflowY: 'hidden'
    }),
    a = Object.freeze({ overflow: 'auto' });
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
        n = 'vertical' === t ? r : 'horizontal' === t ? i : a;
    return null != e
        ? {
              ...n,
              ...e
          }
        : n;
}
