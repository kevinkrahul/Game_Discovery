import useData from "./useData";

interface Platform{
    id:number;
    name:string;
    slug:string;
}

const useplatform=()=>useData<Platform>('/platforms/lists/parents')

export default useplatform;