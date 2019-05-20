import { plainToClass } from "class-transformer";
import "reflect-metadata";


const pack = (Clss, plain)  => {
  const data = plainToClass(Clss, plain, { excludeExtraneousValues: true });
  // const keys = Object.keys(plain)
  // console.warn(`update:${keys.toString()}`)
  return Object.keys(data).reduce((acc, cur) => {
    if (data[cur]) {
      acc[cur] = data[cur];
    }
    return acc;
  }, {});
}

export function dataModal<T extends {new(...args:any[]):{}}>(constructor:T) {
     class Model extends constructor {
        update(plain) {        
          Object.assign(this, pack(constructor, plain));
        }      
        destory() {
          Object.assign(this, {});
        }          
    }
    return Object.defineProperty (Model, 'name', {value: constructor.name});
}

export class DataModel {
  update(plain) {}
  destory() {}    
}
