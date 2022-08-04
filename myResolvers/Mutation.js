const {v4:uuid} = require('uuid')

exports.Mutation={
    addCategory:(parent,{input},{db})=>{ 
         const {name}=input ;  

            const checkCategroy= db.categories.find(categroy=>categroy.name===name) ; 

              if(checkCategroy) return{name:"This name is already in Categories ",id:"It'sDamoID241"}

           
                const newCategroy={
                    id:uuid(),
                    name
                   }
               db.categories.push(newCategroy)
    
            return newCategroy ;
            


             
          

           
    } , 
  
    addProduct:(parent,{input},{db})=>{ 

      

              const newProduct={
                id:uuid(),
                ...input
              } 

             db.products.push(newProduct) ; 

             return newProduct ;



    } ,
    addReview:(parent,{input},{db})=>{ 

         const newReview= {
          id:uuid(),
          ...input
         } ;
        
        db.reviews.push(newReview) ;

        return newReview ;

    }  ,
    deleteCategory:(parent,{id},{db})=>{  
       
      db.categories =  db.categories.filter(category=> category.id !== id) ; 

        db.products = db.products.map(product=>{

          if(product.categoryId === id){

            return { ...product,categoryId:null}
          }else{
            return product
          }
        })

      return true

   },
   deleteProduct:(parent,{id},{db})=>{

      db.products=db.products.filter(product=>product.id !==id) ; 

      db.reviews = db.reviews.filter(review=>review.prodcutId !== id)  ;

      return true

   },
   deleteReview:(parent,{id},{db})=>{
     
      db.reviews = db.reviews.filter(review=> review.id!== id )  ;

      return true ;
   } ,

   updateCategory:(parent,{id,input},{db})=>{
      
    const index = db.categories.findIndex(category=> category.id === id ) ;  
          if(index === -1) return null ;

     db.categories[index]={
      ...db.categories[index],
      ...input
     }

   return  db.categories[index]
  
   } ,
      updateProduct:(parent,{id,input},{db})=>{
      
    const index = db.products.findIndex(product=> product.id === id ) ;  

    if(index === -1) return null ;

     db.products[index]={
      ...db.products[index],
      ...input
     } 

   return  db.products[index]
  
   } ,
   updateReview:(parent,{id,input},{db})=>{
      
    const index = db.reviews.findIndex(review=> review.id === id ) ; 

     db.reviews[index]={
      ...db.reviews[index],
      ...input
     }

   return  db.reviews[index]
  
   } , 


  }