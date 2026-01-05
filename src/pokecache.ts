type CacheEntry<T> = {
  val: T;
  cteatedAt: number;
};
export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined;
  #interval: number;
  constructor(starte: number) {
    this.#interval = starte;
    this.#startReapLoop();
  }
  add<T>(s: string, t: T) {
    let dateNow = Date.now();
    this.#cache.set(s, {
      val: t,
      cteatedAt: dateNow,
    });
  }
  get(s: string) {
    let res = this.#cache.get(s);
    return res?.val;
  }
  #reap() {
    if (this.#cache.size === 0) return;
    let AcceptedWindow = Date.now() - this.#interval;
    for (let [key, val] of this.#cache.entries()) {
      if (val.cteatedAt < AcceptedWindow) {
        this.#cache.delete(key);
      }
    }
  }
  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }
  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}
