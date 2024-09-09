n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(470079),
    a = n(10718);
function s(e, t) {
    let n = i.useRef(null),
        s = i.useCallback((e, t) => {
            var i, a, s;
            e.preventDefault(), e.clipboardData.setData('application/x-discord-interaction-data', JSON.stringify(t)), e.clipboardData.setData('text/plain', null !== (s = null === (a = n.current) || void 0 === a ? void 0 : null === (i = a.textContent) || void 0 === i ? void 0 : i.trim()) && void 0 !== s ? s : '');
        }, []);
    return (
        a.YZ(e, t),
        {
            onCopy: s,
            copyRef: n
        }
    );
}
