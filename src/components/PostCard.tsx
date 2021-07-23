import React,{useState} from "react";

export default function PostCard() {

    const [likes,setLikes] = useState(0);
    const [dislikes,setDislikes] = useState(0);


    const handleLikes = () => {
            setLikes(likes+1);
    }

    const handleDislikes = () => {
        setDislikes(dislikes+1);
}
    
    
    return(

        <div className="m-4">
            <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
                </div>

            <div className="mt-2">
                <a href="#" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Accessibility tools for designers and developers</a>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
            </div>
            
            <div className="flex items-center justify-evenly mt-4">
                    <a onClick={handleLikes} className="text-blue-600  cursor-pointer dark:text-blue-400">👍</a>
                    <p>{likes}</p>
                    <a onClick={handleDislikes} className="text-blue-600  cursor-pointer dark:text-blue-400">👎</a>
                    <p>{dislikes}</p>

                <div className="flex items-center">
                    <a className="font-bold text-gray-700 dark:text-gray-200">Khatab wedaa</a>
                    </div>
                </div>
            </div>
        </div>
    );

}