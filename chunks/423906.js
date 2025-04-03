e.exports = (e, n) => (
    (n = n || (() => {})),
    e.then(
        (e) =>
            new Promise((e) => {
                e(n());
            }).then(() => e),
        (e) =>
            new Promise((e) => {
                e(n());
            }).then(() => {
                throw e;
            })
    )
);
