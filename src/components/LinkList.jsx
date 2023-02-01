import React, { useState } from 'react';

function LinkList({ apiArr }) {

    const linksVideo = [
        {
            number: 17
        },
        {
            number: 18
        },
        {
            number: 22
        },
        {
            number: 133
        },
        {
            number: 134
        },
        {
            number: 135
        },
        {
            number: 136
        },
        {
            number: 160
        },
        {
            number: 242
        },
        {
            number: 243
        },
        {
            number: 244
        },
        {
            number: 247
        },
        {
            number: 248
        },
        {
            number: 271
        },
        {
            number: 278
        },
        {
            number: 313
        },
        {
            number: 394
        },
        {
            number: 395
        },
        {
            number: 396
        },
        {
            number: 397
        },
        {
            number: 398
        }

    ]

    const linksAudio = [
        {
            number: 139
        },
        {
            number: 140
        },
        {
            number: 249
        },
        ,
        {
            number: 250
        },
        {
            number: 251
        }
    ]

    const [showVideo, setShowVideo] = useState(true);
    const [showAudio, setShowAudio] = useState(false);

return (
<section className='my-6'>
    <section>
        <button onClick={()=>setShowVideo(!showVideo)} className='text-3xl font-bold mb-4 w-full flex justify-between items-center pb-2 border-b'>
            <h1>Video</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-chevron-down ${showVideo ? 'up' : 'down'}`} viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
        {showVideo && 
            <div className='grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-2'>
            {
            linksVideo.map((link, i)=> {
                
                return(
    
                    !apiArr?.[link.number]?.['3'] || !apiArr?.[link.number]?.['1'] ?
                    null
                    :
                    <div key={i} className='text-sm p-4 rounded-xl bg-gray-100 xl:last:col-span-3'>
                        {apiArr?.[link.number]?.length &&
                            <a target={'_blank'} rel={'noopener noreferrer'}
                                download={'Video'} href={apiArr[link.number]?.['0']}>
                                <p className='text-sm px-2 py-1 text-gray-100 bg-red-600 rounded-xl max-w-max'>{apiArr[link.number]?.['3']}</p>
                                <h1 className='text-base font-bold my-2'>{apiArr[link.number]?.['1']}</h1>
                                <p className='uppercase font-semibold text-sm'>{apiArr[link.number]?.['4'].split(';')[0]}</p>
                            </a>
                            
                        }
                    </div>
                    )
                })
            }
            </div>
        }
        
    </section>

    <section className='mt-6'>
        <button onClick={()=>setShowAudio(!showAudio)} className='text-3xl font-bold mb-4 w-full flex justify-between items-center pb-2 border-b'>
            <h1>Audio</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-chevron-down ${showAudio ? 'up' : 'down'}`} viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
        {showAudio && 
             <div className='grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-2'>
             {
             linksAudio.map((link, i)=> {
                 return(
                     <div key={i} className='text-sm p-4 rounded-xl bg-gray-100 last:col-span-2 xl:last:col-span-4'>
                         {apiArr?.[link.number]?.length &&
                         <a target={'_blank'} rel={'noopener noreferrer'}
                             download={'Video'} href={apiArr[link.number]?.['0']}>
                             <p className='text-sm px-2 py-1 text-gray-100 bg-emerald-600 rounded-xl max-w-max'>{apiArr[link.number]?.['3']}</p>
                             <h1 className='text-base font-bold my-2'>{apiArr[link.number]?.['1']}</h1>
                             <p className='uppercase font-semibold text-sm'>{apiArr[link.number]?.['4'].split(';')[0]}</p>
                         </a>
                         }
                     </div>
                         )
                     })
                 }
             </div>
        }
       

    </section>

  

</section>

);
}

export default LinkList;