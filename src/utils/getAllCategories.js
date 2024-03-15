export const getAllCategories = async () => {
    const res = await fetch("http://localhost:5000/categories")
     const data = res.json()
        return data
}