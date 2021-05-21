# JPEG2000

```javascript
import { JPEG2000 } from "https://taisukef.github.io/JPEG2000/JPEG2000.js";

const data = await Deno.readFile("megane-kaikan.jp2");
//const data = new Uint8Array(await (await fetch(url)).arrayBuffer());
const img = JPEG2000.decode(data);
console.log(img);
```

## use
image-JPEG2000 - v0.3.1 - 2015-08-26  
https://github.com/OHIF/image-JPEG2000  
