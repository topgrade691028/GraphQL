const Query = {
   greeting:() => "Hello"
}

const Mutation ={
   signUp:(root,args,context,info) => {

      const {email,firstName,password} = args.input;

      //email check
      const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      const isValidEmail =  emailExpression.test(String(email).toLowerCase())
      if(!isValidEmail)
      throw new Error("email not in proper format")

      if(firstName.length > 15)
      throw new Error("firstName should be less than 15 characters")

      if(password.length < 8 )
      throw new Error("password should be minimum 8 characters")
      
      return "success";
   }
}
module.exports = {Query,Mutation}