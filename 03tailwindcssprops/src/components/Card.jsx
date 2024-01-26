

function Card({person}){
    //console.log(props);
   
    return(
        <>
             <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-58630,resizemode-75,msid-98184834/news/new-updates/anushka-shetty-makes-public-appearance-at-temple-after-long-hiatus.jpg" alt="" width="384" height="512"/>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                 {person.username}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                 {person.post}
                </div>
              </figcaption>
            </div>
          </figure>
        </>
    )
}

export default Card;