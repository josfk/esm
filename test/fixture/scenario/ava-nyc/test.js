import test from "ava"
import add from "../../math/add.esm.js"

test("test", (t) => {
  t.is(add(1, 2), 3)
})
