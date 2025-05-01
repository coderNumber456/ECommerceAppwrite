import conf from "../conf/conf";
import { Client, Databases, Storage,ID,Query} from "appwrite";





export class Service {
    client = new Client();
    databases;
    bucket;
    
    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    
    async createPost({ BrandName,title,price, description,slug,quantity,featuredImage, userId,Color }) {
        try {
            await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique() ,
                {
                    BrandName,
                    title,
                    price,
                    featuredImage,
                    quantity,
                    description,
                    userId,
                    slug,
                    Color
                }
            )
        } catch (error) {
            console.log("Appwite service:: createPost::error", error);
            alert(error)
        }
    }

    // addinh this function to store data for customer cart

    async createCartdata({docId,featuredImage,Color,price,quantity,size,title,userId}){
        try {
           await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCartId,
                ID.unique(),
                {
                    docId,featuredImage,Color,price,quantity,size,title,userId
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async listCart(userId){
        try { 
            return  await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCartId,[
                    Query.equal("userId", [userId])]
            )
        } catch (error) {
            console.log(error);  
        }
    }
    
    async updatePost(slug, { title, featuredImage, status, userId }) {
        try {
            this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwite service::updatePost::error", error);
        }
    }
    async updateCartPost($id, { quantity }) {
        console.log($id,quantity)
        try {
            this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCartId,
                $id,
                {
                    quantity
                }
            )
        } catch (error) {
            console.log("Appwite service::updatePost::error", error);
        }
    }

    async deleteCartPost(slug) {
        try {
            this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCartId,
                slug
            )
            return true

        } catch (error) {
            console.log("Appwite service::deletePost::error", error);
            return false
        }
    }
    async deletePost(slug) {
        try {
            this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true

        } catch (error) {
            console.log("Appwite service::deletePost::error", error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )


        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }
    }

    async getPosts() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [ Query.limit(100) ]
                
            )

        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
        }
    }

    //file upload serives

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }
    async deleteFile(fileId) {

        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);

        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service