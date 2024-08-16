var r = t(442837),
    i = t(339085);
n.Z = function (e, n) {
    return (0, r.e7)(
        [i.ZP],
        () => {
            var t;
            if (null == n) return null;
            let r = i.ZP.getDisambiguatedEmojiContext(e);
            return null !== (t = r.getById(n)) && void 0 !== t ? t : r.getByName(n);
        },
        [e, n]
    );
};
