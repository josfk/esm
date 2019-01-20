import assert from "assert"
import { log } from "console"
import { script } from "lab"
import add from "../../math/add.esm.js"

const lab = script()

lab.it("test", () => {
  assert.strictEqual(add(1, 2), 3)
})

log("lab:true")

export { lab }
