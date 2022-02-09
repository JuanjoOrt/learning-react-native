import React, {useEffect, useState} from "react";
import yelp from "../api/yelp";


export default function useGetProducts({searchText}){
    const [result, setResult] = useState([])
    const [data, setData] = useState([])

    useEffect(async () => {
        const response = await yelp.get('/products')
        setData(response.data)
        setResult(response.data)
    }, [])

    const searchEngine = () => {
        const saveData = (searchText !== '')
            ? data.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
            : data
        setResult(saveData)
    }

    useEffect(() => {
        if (data && searchText === '') setResult(data)
        if (data && searchText !== '') searchEngine()
    }, [searchText])

    return {result}
}
