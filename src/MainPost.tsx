const MainPost = () => {
    return (
        <div className="p-2">
    {/* post container */}
        <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

            {/* ส่วนของเจ้าของ post */}
            <div className="space-y-2">

            {/* image and name */}
                <div className="flex space-x-2 items-center">
                  <img className="w-12 h-12 rounded-full" src="\profileImages\image0.jpg"></img>
                  <span className='font-semibold text-lg text-white'>Suwat Inkaew 610610521</span>
                </div>

                {/* status message */}
                <p className='text-white'>Quiz ยากจังเลยครับ ของ่ายๆ กว่านี้ได้ไหม #261207</p>

                {/* like section */}
                <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                 <p className='text-gray-300'>100 คน</p>
                </div>

            </div>
        </div>
      </div>
    )
}

export default MainPost