export const filterReducer = (state,action)=>{
    const {type,payload} = action

    switch(type){
        case "SORT_BY":
            return{...state,sortBy:payload.sortBy}

        case "RATINGS":
            return{...state,rating:payload.rating}

        case "CATEGORY":
            return{...state,category:payload.category}

         default:
                throw new Error("Something went wrong")

    }

}