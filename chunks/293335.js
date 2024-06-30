n(47120), n(724458), n(653041);
var r = n(470079);
t.Z = (e, t) => {
    let [n, i] = r.useState(-1), a = r.useRef(-1);
    return r.useEffect(() => {
        let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
        i(t.length), a.current = t.length;
    }, [
        e,
        a,
        i
    ]), r.useEffect(() => {
        0 === n && t();
    }, [
        n,
        t
    ]), {
        pending: n,
        pendingRef: a,
        setPending: i
    };
};
