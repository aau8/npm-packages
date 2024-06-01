import { nanoid, urlAlphabet, customAlphabet } from 'nanoid'

console.log(nanoid())
console.log(urlAlphabet) // useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict
console.log(customAlphabet('12345', 10)(5))