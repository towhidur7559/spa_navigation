import { useLoaderData } from "react-router-dom";
import supportImage from '../assets/404.jpg';
import Markdown from "react-markdown"; //npm i react-markdown
import rehypeRaw from "rehype-raw";//npm i rehype-raw

const Content = () => {
    const blog = useLoaderData();
    const { title, cover_image, tags, body_html, url } = blog;
    return (
        <div className="border-2 p-2 border-primary border-opacity-100 mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || supportImage} />
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
                    {
                        tags.map((tag) => <a key={tag}  className="px-3 py-1 rounded-sm dark:text-gray-50">#{tag}</a>)
                    }

                </div>
            </div>
            <div className="">
                <a href={url}
                target="_blank"
                className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown> 
            </div>
        </div>
    );
};

export default Content;