all:
		cargo build --target wasm32-unknown-unknown;
		wasm-gc target/wasm32-unknown-unknown/debug/deno_wasm_demo.wasm;
