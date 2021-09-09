import { comments } from "./data/comments"

 const CommentSec = () => {
     return(
        <div className="">
            {
                comments.map(
                    x => 
                    <div>
                        <div className="flex p-2 items-start space-x-2">
                        <img className="w-10 w-10 rounded-full" src={x.userImagePath}></img>
                        <div className="bg-gray-500 rounded-lg p-2">
                         <p className="font-semibold text-white">{x.username}</p>
                         <p className='text-white'>{x.commentText}</p>
                        </div>
                        </div>
                    </div>
                )
            }
     )
 }
 
export default CommentSec

