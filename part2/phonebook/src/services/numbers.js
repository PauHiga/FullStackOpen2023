import axios from "axios"

const url = "http://localhost:3001/persons/"

const getAll = () => {
    const request = axios.get(url)
    return request.then(persons => persons.data)
}

const create = (newPerson) => {
    const request =  axios.post(url, newPerson)
    return request.then(item => item.data)
}

const deletePerson = (id) => axios.delete(`${url}/${id}`)

const update = (id, newPerson) =>{
    const request = axios.put(`${url}/${id}`, newPerson)
    return request.then(person => person.data)
}

export default {getAll, create, deletePerson, update}