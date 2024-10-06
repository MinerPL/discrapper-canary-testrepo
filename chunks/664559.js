n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var i = n(470079),
    a = n(768943),
    s = n(818260);
function l() {
    return a.Z.getSavedMessages().map((e) => e.saveData);
}
function r() {
    let [e, t] = i.useState(l),
        n = i.useRef(a.Z.getIsStale());
    return (
        i.useEffect(() => {
            let e = a.Z.getLastChanged();
            function i() {
                let i = a.Z.getLastChanged();
                if (e !== i) {
                    if (((e = i), n.current && !a.Z.getIsStale())) {
                        (n.current = !1), t(l());
                        return;
                    }
                    t((e) => {
                        let t = [...e],
                            n = new Map(a.Z.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                        for (let i of e) n.has(i.messageId) ? n.delete(i.messageId) : t.splice(t.indexOf(i), 1);
                        for (let e of n.values()) t.push(e.saveData);
                        return t;
                    });
                }
            }
            return (
                a.Z.addChangeListener(i),
                () => {
                    a.Z.removeChangeListener(i);
                }
            );
        }, []),
        (0, s.Z)(),
        e
    );
}
