import { Link } from "react-router-dom";
import supportImage from '../assets/404.jpg';
import { RiDeleteBin2Fill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const BlogsCard = ({ blog, deletable, handleDelete }) => {
    // eslint-disable-next-line react/prop-types
    const { id, title, cover_image, published_at, description } = blog;

    // const handleDelete = (id) =>{
    //     deleteBlog(id)
    // }
    return (
        <div className="flex relative">
            <Link to={`/blog/${id}`} className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-100 max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || supportImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deletable && (
                <div onClick={() => handleDelete(id)} className="absolute bg-primary ml-5 p-3 rounded-full hover:bg-secondary group cursor-pointer hover:scale-105 -top-5 -right-5">
                    <RiDeleteBin2Fill
                        size={20}
                        className="text-secondary group-hover:text-primary"
                    ></RiDeleteBin2Fill>

                </div>)}
        </div>

    );
};

export default BlogsCard;