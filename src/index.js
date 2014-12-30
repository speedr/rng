import {whrandom} from './whrandom'

export class Rng {
  constructor(seed) {
    this.rand = whrandom(seed)
  }

  int(max = 0xfffffff) {
    return this.rand() * max | 0
  }

  float() {
    this.rand()
  }

  bool() {
    return this.rand() >= 0.5
  }

  range(min, max) {
    return this.int(max - min) + min
  }

  pick(array) {
    return array[this.range(0, array.length)]
  }
}
