stream = (xs) => Stream(xs,
    ([x, ...xs]) => Yield(x, xs)
)
