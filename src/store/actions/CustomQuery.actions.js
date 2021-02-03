import axios from 'axios/index';

export const GET_KATEGORI_CUSTOM_QUERY = '[CUSTOM QUERY] GET_KATEGORI_CUSTOM_QUERY';
export const RUN_CUSTOM_QUERY = '[CUSTOM QUERY] RUN_CUSTOM_QUERY';

export function getKategoriCustomQuery(routeParams)
{
    const request = axios.post(localStorage.getItem('api_base')+'/api/CustomQuery/getKategoriCustomQuery', {
        ...routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_KATEGORI_CUSTOM_QUERY,
                payload: response.data,
                routeParams
            })
        );
}

export function runCustomQuery(routeParams)
{
    const request = axios.post(localStorage.getItem('api_base')+'/api/CustomQuery/runCustomQuery', {
        ...routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : RUN_CUSTOM_QUERY,
                payload: response.data,
                routeParams
            })
        );
}