import { getSingleNews } from "@/utils/getSingleNews";

const NewsDetailsPage = async ({params}) => {
    const {data} = await getSingleNews(params.newsId);
    console.log(data);
    return(
        <div>
             <p> {params.newsId} </p>
        </div>
    )
}
export default NewsDetailsPage;