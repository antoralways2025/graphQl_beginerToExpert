exports.Category={
    products:({id},{filter},{db})=>{ 

        const categoryProducts =  db.products.filter(product=>product.categoryId === id) ;

        let filteredCategoryProducts = categoryProducts  ; 
        
         if(filter){
            
         return   filteredCategoryProducts=filteredCategoryProducts.filter(product=> product.onSale)
         }


         return filteredCategoryProducts ;
         

    }
  }