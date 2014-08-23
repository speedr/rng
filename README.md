# rng

> Seeded random number generator

## Install

```sh
$ npm install --save speedr/rng
```

## Usage

```js
var rng = require('rng');
var rand = rng(1337);

rand.int(100);                    // 57
rand.float();                     // 0.48787342294965175
rand.bool();                      // false
rand.range(4, 12);                // 10
rand.pick(['foo', 'bar', 'baz']); // 'baz'
```

## API

### rng(seed)

Returns a RNG using the specified `seed`.

#### rand.int(max)

Returns an integer within [0, max).

#### rand.float()

Returns a float within [0.0, 1.0).

#### rand.bool()

Returns a boolean.

#### rand.range(min, max)

Returns an integer within [min, max).

#### rand.pick(source)

Returns an element from the source.

## License

MIT © Florent Cailhol
