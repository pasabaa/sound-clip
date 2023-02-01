import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LinkList from '../components/LinkList';

export const HomePage = () => {

    const [urlVideo, setUrlVideo] = useState('');
    const [errorUrl, setErrorUrl] = useState(false);
    const [loading, setLoading] = useState(false);
    const API_KEY = import.meta.env.VITE_API_KEY;
    
    const [links, setLinks]= useState([null]);


    const [info, setInfo] = useState([null]);

    const handleOnChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setUrlVideo(value);
    }

    function validateYouTubeUrl() {    
        setErrorUrl(false);
        var url = urlVideo;
        if (url != undefined || url != '') {        
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                getData();
            } else {
                setErrorUrl(true);
            }
        }
    }

    const getData = () => {

        setLoading(true);
       
        let idVideo = '';

        idVideo = urlVideo.includes('www') ? urlVideo.split('=').pop() : urlVideo.split('/')[3];

        const options = {
            method: 'GET',
            url: 'https://youtube-video-download-info.p.rapidapi.com/dl',
            params: { id: idVideo },
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then(res => setInfo(res.data))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false));

            axios.request(options)
            .then(res => setLinks(res.data.link))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false));

    }

    useEffect(() => {
        getData();
    }, [])

return (
<div className='gap-12 grid grid-cols-1 xl:grid-cols-2'>
    <section className='mt-24'>
        <div className='backdrop-blur-3xl'>
            <div>
                <h1 className='text-6xl font-black'>Sound<span className='text-red-600'>Clip</span></h1>
                <p className='mt-3 leading-relaxed text-lg'>Descarga y convierte videos de YouTube a audio de alta calidad con SoundClip. Convierta sus videos favoritos a archivos de audio fácilmente y disfrútelos en cualquier lugar, además de poder descargar videos de YouTube de manera rápida y sencilla ¡Prueba ahora!</p>
            </div>
            <div className='flex flex-col gap-2 mt-6'>
                <label className='font-semibold' htmlFor="urlVideo">Pega la URL del video</label>
                <input 
                    title='URL del video'
                    placeholder='https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
                    onChange={handleOnChange} 
                    className='border px-3 py-4 rounded-lg text-black' 
                    type="text" 
                    name="urlVideo" 
                    id="urlVideo" />
                {errorUrl && <span className='text-sm text-red-500'>Debe ser una URL válida. Verifique que la URL esté escrita correctamente o el campo no se encuentre vacío.</span>}
                
                <button onClick={validateYouTubeUrl} className='px-2 py-3 border font-bold text-gray-100 bg-red-600 rounded-lg'>Descargar</button>

            </div>
            {loading && <span className="loader mt-2"></span>}
        </div>
    </section>


    {info.length != null &&
    <section className='mt-8 relative'>
        <div className='border p-8 rounded-xl'>
            <div className='flex flex-col'>
                <div className='relative'>
                    {/* <img className='relative w-full object-cover rounded-xl' src={info.thumb} alt="" /> */}
                    <iframe className='relative rounded-xl w-full aspect-video' src={`https://www.youtube.com/embed/${urlVideo.includes('www') ? urlVideo.split('=').pop() : urlVideo.split('/')[3]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    
                    <div
                        className='absolute inset-4 ml-auto text-sm font-bold flex gap-2 max-w-max max-h-min bg-black/20 backdrop-blur-xl text-white rounded-full px-2 py-1'>
                        <p className='flex items-center justify-center gap-1'><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" className="bi bi-stopwatch" viewBox="0 0 16 16">
                                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                                <path
                                    d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                            </svg></p>
                        <span>{info.lengthsec > 59 ? (Math.floor((info.lengthsec)/60) + ' minutos aprox.') : info.lengthsec + ' segundos'}</span>
                    </div>
                <div className='mt-6'>
                    <p className='font-semibold text-lg text-white bg-red-600 rounded-full max-w-max px-3 py-1'>{info.author}</p>
                    <h1 className='text-xl font-bold mt-2'>{info.title}</h1>
                </div>
                </div>
                <div className='h-40'>
                    <h2 className='font-semibold my-2'>Descripción</h2>
                    <div className='my- overflow-x-hidden overflow-y-scroll h-full'>
                            <div className='text-sm whitespace-pre-wrap mt-3 min-h-max relative block'>{info.description}</div>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <LinkList apiArr={links} />
            </div>
        </div>


        {/* <img className='absolute inset-0 w-full h-full object-cover rounded-2xl p-4' src={info.thumb} alt="" /> */}
        
                {/* <iframe className='relative rounded-xl w-full aspect-video' src={`https://www.youtube.com/embed/${urlVideo.includes('www') ? urlVideo.split('=').pop() : urlVideo.split('/')[3]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                
    </section>
    }
</div>
)
}