import {Expose} from "class-transformer";
import "reflect-metadata";
import {dataModal, DataModel} from "./modelData";


@dataModal
class User extends DataModel {
    @Expose() id: number;
    @Expose() firstName: string;
    @Expose() lastName: string;  
}
 
const fromPlainUser = {
  unkownProp: 'hello',
  firstName: 'Umed',
  lastName: 'Khudoiberdiev',
}
 
const user = new User();
user.update(fromPlainUser);
user.update({
    lastName: 'asdf',
});
console.log(user)