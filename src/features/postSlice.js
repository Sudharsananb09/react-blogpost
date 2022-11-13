import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Curd Rice Recipe', content: "1. Take a bowl of rice, 2. Add curd, salt and 50ml of water, 3. Mix it thoroughly and add some freshly chopped parsley on top of it. 4. Enjoy your meal"},
    {id: '2', title: 'Pizza', content: "1. Make a Pizza base using all purpose flour, 2. Add required vegetable and meat toppings, 3. Bake it in oven at 450F for 10 mins. 4. Add seasonings and enjoy"}
]

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        newPost:{   
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title, content){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const {newPost} = postSlice.actions

export default postSlice.reducer