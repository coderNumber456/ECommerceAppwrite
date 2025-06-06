import conf from "../conf/conf";
import { Client, Account , ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            .setSession()

        this.account = new Account(this.client)
    }

    async  createAccount({email,password,name}) {
        try {
            const userAccount= await this.account.create(ID.unique(),email,password,name)
             if (userAccount){
                return this.login({email,password})
             }
        } catch (error) {
            console.log(error) ;
            alert(error) 
        }
    }

    async login({email,password}){
        try {
            await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
           console.log(error) ;
           alert(error) 
          
        }
    }

    async CustomerLogin({userId,phone}){
        try {
             const customerData = await this.account.createPhoneToken(userId,phone)
             console.log(customerData)
             if(customerData){
                await this.account.createPhoneVerification();
             }
        } catch (error) {
            console.log(error)
           
        }
    }

    async OtpVerification(userId,secret){
        try {
            
            await this.account.createSession(userId,secret)
        } catch (error) {
           alert(error)     
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }
      

    async logout(){
        try {
            await this.account.deleteSessions()

        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }

}
      const authService = new AuthService()

      export default authService
                                                                       