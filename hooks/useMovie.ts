import fetcher from "@/libs/fetcher";
import useSWR from "swr"

const useMovie = (id?: string) => {


    const url = id ? `/api/movies/${id}`: null;
    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false
    });

    return { 
        data,
        error,
        isLoading
    }
}

export default useMovie;

