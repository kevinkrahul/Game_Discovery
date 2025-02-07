import useData from "./useData";
// import platform from '../Data/platform'
interface Platform{
    id:number;
    name:string;
    slug:string;
}

const useplatform=()=>useData<Platform>('/platforms/lists/parents')


// const useplatform=()=>({data:platform,isLoading:false,error:null});

export default useplatform;