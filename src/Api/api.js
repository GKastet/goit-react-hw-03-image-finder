import axios from "axios";


const urlStart=`https://pixabay.com/api/`
const instance = axios.create({
    baseURL: urlStart    
})

export const requestImages = async(pictureName, page = 1)=>{   
    const urlKey = 'key=37603815-98520903b63fc1ffa2ecf35bf';
    const endUrl = 'image_type=photo&orientation=horizontal&per_page=12'
    const finalUrl = `?q=${pictureName}&page=${page}&${urlKey}&${endUrl}`

    const {data} = await instance.get(finalUrl);    
    return data;
}


