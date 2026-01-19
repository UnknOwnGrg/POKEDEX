type CacheEntry<T> = {
    createdAt : number ;
    val : T;
}

export class Cache {
    // # indicates the private 
    #cache = new Map<string , CacheEntry<any>>();
    #reapIntervalid : NodeJS.Timeout | undefined = undefined;
    #interval: number; 

    constructor(interval: number){
        this.#interval = interval;

    }

    add<T>(key : string , value: T){
        const entry: CacheEntry<T> = {
            createdAt : Date.now(), 
            val : value,
        };

        this.#cache.set(key , entry);
        
    }

    get<T>(key : string){
        const entry = this.#cache.get(key); 
        if( entry !== undefined){
            return entry.val as T;
        }
        return undefined;
    }
    
    #reap(){
        const now = Date.now(); 
        for (const[key ,entry] of this.#cache ){
            if(now - entry.createdAt > this.#interval){
                this.#cache.delete(key);
            }
        }
    }

    #startReapLoop(){
        this.#reapIntervalid = setInterval(()=> {
            this.#reap()
        }, this.#interval);
    }

    stopReapLoop(){
       if(this.#reapIntervalid){
        clearInterval(this.#reapIntervalid);
        this.#reapIntervalid = undefined;
       }
    }

}