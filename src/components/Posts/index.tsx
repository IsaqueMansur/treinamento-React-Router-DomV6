import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const Post = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams();

    return (
        <div>
            {/* http://IP/posts/1000?page=10&segunda=segundo  */}
            <h1>Post {`Param.: ${id}`} {`QS: ${qs.get('segunda')}`}</h1>
            <Outlet />
        </div>
    );
};