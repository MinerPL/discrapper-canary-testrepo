var e = r(325008),
    o = r(936940),
    i = r(722063);
t.exports =
    !e &&
    !o(function () {
        return (
            7 !==
            Object.defineProperty(i('div'), 'a', {
                get: function () {
                    return 7;
                }
            }).a
        );
    });
