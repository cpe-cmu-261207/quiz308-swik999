import { comments, CommentType } from "./data/comments";

const Replies = ( replies: CommentType[]) => {

    return (
        replies.map(
            x =>
            <div className="flex p-2 items-start space-x-2 pl-14">
                <img className="w-10 rounded-full" src = {x.userImagePath} ></img>
                    <div className="bg-gray-500 rounded-lg p-2">
                        <p className="font-semibold text-white">{x.username}</p>
                        <p className='text-white'>{x.commentText}</p>
                        {x.likeNum > 0 ?
                        <div className='flex items-center'>
                        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                        <p className='text-gray-300'>{x.likeNum}</p>
                        </div> : null
                        }
                    </div>
          </div>
        )
    )
}
export default Replies