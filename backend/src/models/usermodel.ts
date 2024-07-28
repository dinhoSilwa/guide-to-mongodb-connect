import {Schema , model} from 'mongoose';
// importação do mongoose

interface Iuser {
  name : string;
  email : string;
  phone : string;
}

// crição da interface typescript que representa os dados do usuário

const userSchema = new Schema<Iuser>({
  name : {type : String, required : true},
  email : {type : String, required : true},
  phone : {type : String, required : true},
});

// schema que representa os tipos de dados

const User = model<Iuser>('User', userSchema);

//definição do Usuário para cadastrar

export default User ;