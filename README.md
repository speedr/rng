# rng

> Seeded random number generator

## Install

```sh
$ npm install --save speedr-rng
```

## Usage

```js
import {Rng} from 'speedr-rng'

let rng = new Rng(1337)

rng.int(100)                    // 57
rng.float()                     // 0.48787342294965175
rng.bool()                      // false
rng.range(4, 12)                // 10
rng.pick(['foo', 'bar', 'baz']) // 'baz'
```

## API

### new Rng(seed)

Returns a RNG using the specified `seed`.

#### rng.int(max)

Returns an integer within [0, max).

#### rng.float()

Returns a float within [0.0, 1.0).

#### rng.bool()

Returns a boolean.

#### rng.range(min, max)

Returns an integer within [min, max).

#### rng.pick(source)

Returns an element from the source.

## License

MIT © Florent Cailhol
