const wasmCode = await Deno.readFile(
  "./target/wasm32-unknown-unknown/debug/deno_wasm_demo.wasm",
);
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const { add } = wasmInstance.exports;

console.log(add(1, 2));
console.log(add(0, 2));
console.log(add(3, 1));
console.log(add(4, 4));
