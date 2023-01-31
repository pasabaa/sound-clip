import React from 'react';

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

return (
<section className='my-6'>
    <section>
        <h1 className='text-3xl font-bold mb-4'>Vídeo</h1>
        <div className='grid grid-cols-2 gap-2'>
        {
        linksVideo.map((link, i)=> {
            return(
                <div key={i} className='text-sm p-4 rounded-xl bg-black/40'>
                    {apiArr?.[link.number]?.length &&
                    <a target={'_blank'} rel={'noopener noreferrer'}
                        download={'Video'} href={apiArr[link.number]?.['0']}>
                        <p className='text-sm px-2 py-1 bg-red-600 rounded-xl max-w-max'>{apiArr[link.number]?.['3']}</p>
                        <h1 className='text-xl font-bold my-2'>{apiArr[link.number]?.['1']}</h1>
                        <p className='uppercase font-semibold text-lg'>{apiArr[link.number]?.['4'].split(';')[0]}</p>
                    </a>
                    }
                </div>
            )
        })
    }


        </div>
    </section>

    <section className='mt-6'>
        <h1 className='text-3xl font-bold mb-4'>Audio</h1>
        <div className='grid grid-cols-2 gap-2'>
            
        {
        linksAudio.map((link, i)=> {
            return(
                <div key={i} className='text-sm p-4 rounded-xl bg-black/40 last:col-span-2'>
                    {apiArr?.[link.number]?.length &&
                    <a target={'_blank'} rel={'noopener noreferrer'}
                        download={'Video'} href={apiArr[link.number]?.['0']}>
                        <p className='text-sm px-2 py-1 bg-emerald-500 rounded-xl max-w-max'>{apiArr[link.number]?.['3']}</p>
                        <h1 className='text-xl font-bold my-2'>{apiArr[link.number]?.['1']}</h1>
                        <p className='uppercase font-semibold text-lg'>{apiArr[link.number]?.['4'].split(';')[0]}</p>
                    </a>
                    }
                </div>
            )
        })
    }

        </div>
    </section>

  

</section>

);
}

export default LinkList;