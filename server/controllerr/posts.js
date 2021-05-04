import PostMessage from '../models/postMessage.js';
export const getPosts =  (req,res)=>{
    // res.send('Workkks!');
    //! to retrieve all the posts from DB
    try {
        const postMessages = await.PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const createPost =  (req,res)=>{
    res.send('post creation .');
}