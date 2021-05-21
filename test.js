import { JPEG2000 } from "./JPEG2000.js";

const data = await Deno.readFile("megane-kaikan.jp2");
//const data = new Uint8Array(await (await fetch(img)).arrayBuffer());

let t0 = performance.now();
const jpximg = JPEG2000.decode(data);
let t1 = performance.now();
console.log((t1 - t0) + " msec");
console.log(jpximg);
