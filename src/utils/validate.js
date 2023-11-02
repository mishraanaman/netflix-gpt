export const checkValidData=(email, password) =>{
   const isEmailValid =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
   const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/.test(password);

   if(!isEmailValid) return 'Please Enter Valid Email Id'
   if(!isPasswordValid) return 'Please Enter Valid Password'

   return null;

}